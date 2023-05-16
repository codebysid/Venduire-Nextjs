// import { ThemeContext } from "@/Context/CurrentUser";
import Login from "@/components/Login";
import Link from "next/link";
import React, { useContext } from "react";

const success = () => {
  return (
    <>
      <p className="m-4">Order Accepted </p>
      <Link className="primaryBtn" href="/">
        Go To Products
      </Link>
    </>
  );
};

export default success;
