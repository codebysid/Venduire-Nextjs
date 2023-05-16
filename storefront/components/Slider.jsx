import { getRandomData } from "@/utils/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Slider = ({ response }) => {
  const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    setRandomData(getRandomData(response));
  }, [response]);

  return (
    <div className="relative h-1/2">
      <div className="flex aspect-video overflow-x-auto snap-mandatory scroll-smooth rounded-2xl sliderHeight w-screen">
        {randomData.length > 0 &&
          randomData.map((ele, key) => {
            let { source } = ele.assets[0];
            return (
              <Image
                id={key}
                src={source}
                alt="Product"
                key={ele.id}
                sizes="100vw"
                width="0"
                height="0"
                loading="lazy"
                className="w-full h-6/12 basis-full shrink-0 grow-1 snap-start object-fit"
              />
            );
          })}
      </div>

      <div className="flex flex-row justify-center items-center mb-10 h-4 text-green-700 ">
        <a className="text-8xl" href={`#0`}>
          .
        </a>
        <a className="text-8xl" href={`#1`}>
          .
        </a>
        <a className="text-8xl" href={`#2`}>
          .
        </a>
        <a className="text-8xl" href={`#3`}>
          .
        </a>
        <a className="text-8xl" href={`#4`}>
          .
        </a>
      </div>
    </div>
  );
};

export default Slider;
