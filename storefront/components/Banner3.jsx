import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner3 = () => {
  return (
    <div className="flex flex-row justify-center items-center h-screen w-screen px-28 rounded-3xl">
      <div className="flex flex-col flex-wrap justify-center items-start gap-6">
        <span className="text-white font-extrabold text-8xl flex flex-col flex-wrap justify-center items-start gap-5">
          <span className="highlight">Connect</span>
          <span>
            <span className="highlight">With</span>
            <span className="highlight">Us</span>
          </span>
        </span>
        <div className="flex flex-col flex-wrap justify-center items-start gap-20">
          <h2 className=" text-3xl font-bold">
            Join our community on
            <span className="highlightForGradient block">Instagram</span>
            <span className="highlightForGradient block">Twitter </span>
            <span className="highlightForGradient block">Facebook </span>
            <span className="highlightForGradient block ">LinkedIN </span>
          </h2>

          <Link className="primaryBtn" href="/home">
            Our Social Media Handles
          </Link>
        </div>
      </div>

      <Image
        className=" h-full w-full"
        src="/illustrations/socialMedia-bro.svg"
        alt="banner"
        width={0}
        height={0}
        sizes="100vw"
      />
    </div>
  );
};

export default Banner3;
