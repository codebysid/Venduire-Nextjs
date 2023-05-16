import { numberT0Currency } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ ele }) => {
  let { price } = ele?.variants[0];
  let { source } = ele?.assets[0];

  return (
    <div key={ele.id} className="flex flex-col flex-wrap justify-center gap-4">
      <div className="overflow-hidden hover:cursor-pointer h-min rounded-2xl">
        <Link href={`/${ele.slug}`}>
          <Image
            src={source}
            alt="Product"
            sizes="100vw"
            width="0"
            height="0"
            loading="lazy"
            className="imageZoom shadow-lg shadow-green-700/50"
          />
        </Link>
      </div>
      <div className="flex flex-row flex-wrap justify-between">
        <p className="text-2xl font-bold">{ele.name}</p>
        <p>{numberT0Currency(price)}</p>
      </div>
      <Link
        href={`/${ele.slug}`}
        className="primaryBtn text-center shadow-xl shadow-green-700/50"
        type="button"
      >
        View Product
      </Link>
    </div>
  );
};

export default ProductCard;
