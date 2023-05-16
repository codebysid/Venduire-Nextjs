import React from "react";
import dynamic from "next/dynamic";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PRODUCTS_QUERY } from "@/graphQLqueries/PRODUCTS";
import Banner from "@/components/Banner";
import Banner2 from "@/components/Banner2";
import Banner3 from "@/components/Banner3";
import Footer from "@/components/Footer";

function welcome({ response }) {
  return (
    <div className="mainApp">
      <Banner />
      <Banner2 response={response} />
      <Footer />
    </div>
  );
}

export default welcome;

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
