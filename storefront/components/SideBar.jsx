import useFacet from "@/customHooks/useFacet";
import React, { useEffect, useState } from "react";
import FilterCheckBox from "./FilterCheckBox";

const SideBar = () => {
  const { filterFacet } = useFacet();
  const [productFilterList, setProductFilterList] = useState([]);

  useEffect(() => {
    const tmpArr = [];
    if (filterFacet && filterFacet.length > 0) {
      filterFacet?.map((ele) => {
        tmpArr.push({
          facetName: ele.name,
          facetValues: ele.values,
        });
      });
    }

    setProductFilterList(tmpArr);
  }, [filterFacet]);

  return <FilterCheckBox productFilterList={productFilterList} />;
};

export default SideBar;
