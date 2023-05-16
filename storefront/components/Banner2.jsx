import { getRandomData } from "@/utils/utils";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Banner2 = ({ response }) => {
  const [bestProduct, setBestProduct] = useState([]);
  useEffect(() => {
    setBestProduct(getRandomData(response));
  }, [response]);

  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-32">
      {bestProduct &&
        bestProduct.map((ele, key) => <ProductCard ele={ele} key={key} />)}
    </div>
  );
};

export default Banner2;
