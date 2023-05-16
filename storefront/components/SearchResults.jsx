import { PRODUCTS_QUERY } from "@/graphQLqueries/PRODUCTS";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function SearchResults({ searchInput, setSearchInput }) {
  const [searchResult, setSearchResult] = useState([]);
  const { data } = useQuery(PRODUCTS_QUERY);

  useEffect(() => {
    if (data?.products?.items)
      setSearchResult(
        data.products.items.filter((ele) =>
          ele.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
  }, [searchInput]);

  return (
    <div className="bg-gray-300 w-max absolute right-42 top-24 p-4 rounded-2xl z-10 h-fit max-h-96 overflow-y-scroll">
      {searchResult.length > 0 ? (
        searchResult.map((ele) => {
          return (
            <div
              key={ele.id}
              className="flex flex-row flex-wrap justify-between items-center gap-4"
            >
              <div className="w-18 h-18 flex flex-row flex-wrap justify-center items-center gap-4">
                <div className="w-24 h-24">
                  <Image
                    alt="product preview"
                    src={ele.assets[0].source}
                    width={100}
                    height={100}
                    sizes="100vw"
                  />
                </div>
                <p className="text-2xl">{ele.name}</p>
              </div>
              <Link
                href={`/${ele.slug}`}
                onClick={() => setSearchInput("")}
                className="primaryBtn"
              >
                View Details
              </Link>
            </div>
          );
        })
      ) : (
        <p>No Product Found</p>
      )}
    </div>
  );
}

export default SearchResults;
