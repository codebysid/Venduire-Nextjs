import { ADD_TO_CART_MUTATION } from "@/graphQLqueries/ADD_TO_CART";
import { useMutation } from "@apollo/client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import SnackBar from "./SnackBar";
import { ThemeContext } from "@/Context/CurrentUser";
import { useRouter } from "next/router";
import { numberT0Currency } from "@/utils/utils";
import Link from "next/link";

const ProductDetails = ({ response }) => {
  const { currentUser } = useContext(ThemeContext);
  const [currentVariant, setCurrentVariant] = useState();
  let {
    description,
    featuredAsset: { preview },
  } = response.data.product;
  const variantList = response.data.product.variants;
  const facetValues = response.data.product.facetValues;
  const [res, setRes] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const changeCurrentVariant = (key) => {
    setCurrentVariant([
      { preview, description, ...response.data.product.variants[key] },
    ]);
  };

  const [addOrder] = useMutation(ADD_TO_CART_MUTATION);
  const addToCart = async (id) => {
    if (!currentUser) {
      router.push("/login");
      return null;
    }
    const response = await addOrder({
      variables: {
        productVariantId: id,
        quantity: 1,
      },
    });
    setRes(response);
    setMsg("Added To Cart ✅");
  };

  useEffect(() => {
    setCurrentVariant([
      { preview, description, ...response.data.product.variants[0] },
    ]);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center">
      {res.data?.addItemToOrder?.customer && (
        <SnackBar msg={msg} setMsg={setMsg} />
      )}
      {currentVariant &&
        currentVariant.map((ele, key) => {
          return (
            <div
              key={ele.id}
              className="flex flex-wrap flex-row gap-6 justify-center items-center mt-20 bg-green-200 w-1/2 py-10 rounded-2xl text-black shadow-2xl shadow-green-200/50"
            >
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={ele.preview}
                  alt="Product"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="rounded-2xl imageZoom"
                />
              </div>

              <div className="flex flex-col flex-wrap w-4/12 items-start gap-8">
                <div className="flex flex-row flex-wrap gap-2">
                  {facetValues.map((ele, key) => {
                    return (
                      <span key={key} className="badge">
                        {ele.name}
                      </span>
                    );
                  })}
                </div>

                <h1 className=" font-extrabold text-4xl">{ele.name}</h1>
                <span className="text-2xl font-semibold">
                  {numberT0Currency(ele.price)}
                </span>

                <p>{ele.description}</p>
                <span className="flex flex-col flex-wrap">
                  Select Your Product:
                  {variantList.length > 1 &&
                    variantList.map((ele, key) => {
                      return (
                        <span
                          key={key}
                          className="hover:cursor-pointer externalLink"
                          onClick={() => changeCurrentVariant(key)}
                        >
                          {ele.name}
                        </span>
                      );
                    })}
                </span>
                {currentUser ? (
                  <button
                    type="button"
                    className="primaryBtn"
                    onClick={() => addToCart(ele.id)}
                  >
                    Add To Cart
                  </button>
                ) : (
                  <Link href="/login" className="primaryBtn">
                    Click to Login
                  </Link>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductDetails;
