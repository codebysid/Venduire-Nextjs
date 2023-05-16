import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiShoppingBag } from "react-icons/hi";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center gap-36 mb-10">
      <div className="flex flex-row px-28 justify-center items-end rounded-3xl banner1">
        <div className="flex flex-col flex-wrap items-center justify-center gap-14 ">
          <span className="font-extrabold text-8xl flex flex-col flex-wrap items-center justify-center">
            <span>Every Product</span>
            <span className="text-green-700">is Special</span>
          </span>

          <div className="flex flex-col flex-wrap justify-center items-center gap-4">
            <h2 className=" text-3xl text-gray-500 w-2/3 text-center">
              Shop Laptops, Furniture, Plants and everything at one place
            </h2>
            <Link
              className=" primaryBtn flex flex-row justify-center gap-4 items-center font-bold"
              href="/"
            >
              <HiShoppingBag className="text-5xl bg-white text-green-700 rounded-2xl p-2 hover:text-green-500" />{" "}
              Explore Our Products
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap justify-center items-center gap-4">
        <p className="text-4xl font-bold">Our Best Selling Products</p>
        <BsFillArrowDownCircleFill className="text-5xl" />
      </div>
    </div>
  );
};

export default Banner;
