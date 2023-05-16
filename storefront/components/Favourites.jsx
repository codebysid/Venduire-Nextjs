import { LikesContext } from "@/Context/DarkMode";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

function Favourites({ response }) {
  const { likes, setLikes } = useContext(LikesContext);

  const removeAll = () => setLikes([]);
  const removeIndividualItem = (itemId) =>
    setLikes((prev) => prev.filter((ele) => ele !== itemId));
  return (
    <div className="flex flex-col gap-4 bg-green-700 p-8 rounded-2xl h-fit w-fit">
      <div className="flex flex-row flex-wrap justify-between items-center">
        <h2 className="text-2xl font-bold text-white underline">
          Your Favourites
        </h2>
        <button
          className="ternaryBtn"
          onClick={() => removeAll()}
          type="button"
        >
          Remove All
        </button>
      </div>
      {response.data?.products?.items.map((ele) => {
        if (!likes.includes(ele.id)) return null;
        let { source } = ele.assets[0];
        return (
          <div key={ele.id} className="flex flex-row items-center gap-4">
            <Image
              src={source}
              alt="Product"
              sizes="100vw"
              width={0}
              height={0}
              loading="lazy"
              className="h-40 w-40 rounded-2xl"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold text-white">{ele.name}</h1>
              <Link
                href={`/${ele.slug}`}
                className=" bg-green-500 p-2 rounded-2xl text-black w-fit hover:bg-green-700 hover:border hover:border-green-500 hover:text-white"
              >
                View Details
              </Link>
              <button
                className="ternaryBtn"
                onClick={() => removeIndividualItem(ele.id)}
                type="button"
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Favourites;
