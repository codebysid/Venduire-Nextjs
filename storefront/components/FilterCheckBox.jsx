import { GET_PROD_BY_IDS } from "@/graphQLqueries/GET_PRODUCT_WITH_IDS";
import { GET_IDS } from "@/graphQLqueries/GET_QUERIES";
import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

const FilterCheckBox = ({ productFilterList }) => {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState({});
  const [getId, { loading, err }] = useLazyQuery(GET_IDS);
  const [getProd] = useLazyQuery(GET_PROD_BY_IDS);

  const handleCheckBox = (target, id) => {
    if (target.checked)
      setFilteredOptions((prev) => (prev.length > 0 ? [...prev, id] : [id]));
    else setFilteredOptions((prev) => prev.filter((item) => id !== item));
  };

  const getProductIds = async () => {
    if (filteredOptions.length === 0) return;

    const response = await getId({
      variables: {
        ids: filteredOptions,
      },
    });

    const uniqueArrayOfIds = response.data?.search.items.filter(
      (ele, key, arr) => arr.indexOf(ele) === key
    );

    const finalId = uniqueArrayOfIds.map((ele) => ele.id.toString());

    const res = await getProd({
      variables: {
        ids: finalId,
      },
    });
    res.data?.products.items && setFilteredProduct(res);
    window.scrollTo(20, 0);
  };

  useEffect(() => {
    console.log(filteredProduct);
  }, [filteredProduct]);

  return (
    <div className="flex flex-row justify-around w-max">
      <div className="flex flex-col justify-start items-start w-max">
        {productFilterList &&
          productFilterList.map((ele, key) => {
            return (
              <div key={key}>
                <p className="capitalize font-bold bg-green-500 rounded p-2 w-fit my-2">
                  {ele.facetName}
                </p>
                {ele.facetValues.map((ele, key) => {
                  return (
                    <div key={ele.id} className="flex flex-row flex-wrap gap-2">
                      <input
                        className="ml-4"
                        type="checkbox"
                        value={ele.name}
                        id={ele.name}
                        onChange={(e) => handleCheckBox(e.target, ele.id)}
                      />
                      <label htmlFor={ele.name}>{ele.name}</label>
                    </div>
                  );
                })}
              </div>
            );
          })}
        <button
          className="mt-4 ml-4 primaryBtn"
          type="button"
          onClick={() => getProductIds()}
        >
          Apply Filters
        </button>
      </div>

      <div className="bg-red-500">
        {filteredProduct.data &&
          filteredProduct.data.products.items.map((ele, key) => {
            return <ProductCard ele={ele} key={key} />;
          })}
      </div>
    </div>
  );
};

export default FilterCheckBox;
