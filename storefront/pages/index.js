import dynamic from "next/dynamic";
import { PRODUCTS_QUERY } from "@/graphQLqueries/PRODUCTS";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import SideBar from "@/components/SideBar";
import React from "react";

const Slider = dynamic(() => import("../components/Slider"), {
  loading: <p>Loading...</p>,
});

const Products = dynamic(() => import("@/components/Products"));

export const getClient = new ApolloClient({
  uri: "http://localhost:3000/shop-api",
  cache: new InMemoryCache(),
});

export default function Home({ response }) {
  return (
    <div className="mainApp">
      {/* <Slider response={response} /> */}
      <div className="flex flex-row justify-around w-screen">
        <SideBar />
        <Products response={response} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: "http://localhost:3000/shop-api",
    cache: new InMemoryCache(),
  });

  const response = await client.query({
    query: PRODUCTS_QUERY,
  });
  return {
    props: { response },
  };
}
