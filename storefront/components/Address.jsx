import dynamic from "next/dynamic";
import { ADD_ADDRESS_MUTATION } from "@/graphQLqueries/ADD_ADDRESS";
import { GET_ADDRESS_QUERY } from "@/graphQLqueries/GET_ADDRESS_QUERY";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_ADDRESS_MUTATION } from "@/graphQLqueries/DELETE_ADDRESS";
import React, { useEffect, useState } from "react";
import { SELECT_ADDRESS_MUTATION } from "@/graphQLqueries/SELECT_ADDRESS";
import { useRouter } from "next/router";
import { BILLING_ADDRESS_MUTATION } from "@/graphQLqueries/SET_BILLING_ADDRESS";
import { AddressCard } from "./AddressCard";

const Address = () => {
  const [nameOfAddress, setNameOfAddress] = useState("");
  const [streetLine1, setStreetLine1] = useState("");
  const [streetLine2, setStreetLine2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [allAddress, setAllAddress] = useState([]);
  const router = useRouter();

  const { data, refetch } = useQuery(GET_ADDRESS_QUERY);
  const [addressMutation] = useMutation(ADD_ADDRESS_MUTATION);
  const [deleteAddress] = useMutation(DELETE_ADDRESS_MUTATION);
  const [selectAddress] = useMutation(SELECT_ADDRESS_MUTATION);
  const [billingAddress] = useMutation(BILLING_ADDRESS_MUTATION);

  const clearForm = () => {
    setNameOfAddress("");
    setStreetLine1("");
    setStreetLine2("");
    setCity("");
    setProvince("");
    setPostalCode("");
    setCountryCode("");
    setPhoneNumber("");
  };

  const removeAddress = async (addressId) => {
    try {
      const response = await deleteAddress({
        variables: {
          id: addressId,
        },
      });
      if (response.data.deleteCustomerAddress.success) refetch();
    } catch (err) {
      console.log(err);
    }
  };

  const selectAddressForOrder = async ({
    fullName,
    streetLine1,
    streetLine2,
    city,
    postalCode,
    countryCode,
    phoneNumber,
  }) => {
    const formData = {
      fullName,
      streetLine1,
      streetLine2,
      city,
      postalCode,
      countryCode,
      phoneNumber,
    };
    try {
      const response = await selectAddress({
        variables: formData,
      });

      const response2 = await billingAddress({
        variables: formData,
      });

      if (
        response.data.setOrderShippingAddress.id &&
        response2.data.setOrderBillingAddress.id
      )
        router.push("/payment");
    } catch (err) {
      console.log(err);
    }
  };

  const saveAddress = async (e) => {
    e.preventDefault();
    try {
      const response = await addressMutation({
        variables: {
          fullName: nameOfAddress,
          streetLine1,
          streetLine2,
          city,
          province,
          postalCode,
          countryCode,
          phoneNumber,
        },
      });
      refetch();
      clearForm();
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => {
    setAllAddress(data?.activeCustomer.addresses);
  }, [data]);

  return (
    <div className="w-screen flex justify-around items-start flex-row gap-10">
      {allAddress && (
        <AddressCard
          selectAddressForOrder={selectAddressForOrder}
          removeAddress={removeAddress}
          allAddress={allAddress}
        />
      )}
      <form
        className="flex flex-col flex-wrap justify-center gap-2"
        onSubmit={saveAddress}
      >
        <p className="illustrationHead">Add your address</p>
        <label htmlFor="nameOdAddress">Name Of Address</label>
        <input
          type="text"
          className="inputField"
          id="nameOfAddress"
          value={nameOfAddress}
          onChange={(e) => setNameOfAddress(e.target.value)}
        />

        <label htmlFor="streetLine1">Street Line 2</label>
        <input
          type="text"
          className="inputField"
          id="sreetLine1"
          value={streetLine1}
          onChange={(e) => setStreetLine1(e.target.value)}
        />

        <label htmlFor="streetLine2">Strret Line 2</label>
        <input
          type="text"
          className="inputField"
          id="sreetLine2"
          value={streetLine2}
          onChange={(e) => setStreetLine2(e.target.value)}
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          className="inputField"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label htmlFor="province">Province</label>
        <input
          type="text"
          className="inputField"
          id="province"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
        />

        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          className="inputField"
          name=""
          id="postalCode"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />

        <label htmlFor="countryCode">Country Code</label>
        <input
          type="text"
          className="inputField"
          name=""
          id="countryCode"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="number"
          className="inputField"
          name=""
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <button type="submit" className="primaryBtn">
          Save Address{" "}
        </button>
      </form>
    </div>
  );
};

export default Address;
