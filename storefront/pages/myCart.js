import { ThemeContext } from "@/Context/CurrentUser";
import MyCart from "@/components/MyCart";
import React, { useContext } from "react";

const myCart = () => {
  const { currentUser } = useContext(ThemeContext);
  if (!currentUser) return null;
  return <MyCart />;
};

export default myCart;
