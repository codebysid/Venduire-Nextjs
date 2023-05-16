import { VERIFY_NEW_EMAIL_TOKEN } from "@/graphQLqueries/VERIFY_NEW_EMAIL_TOKEN";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import SnackBar from "./SnackBar";
import Link from "next/link";

let verified = false;
const VeryNewEmailToken = () => {
  const [msg, setMsg] = useState("");
  const [verifyToken, setVerifyToken] = useState("");
  const [verifyTokenMutation] = useMutation(VERIFY_NEW_EMAIL_TOKEN, {
    variables: {
      token: verifyToken,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await verifyTokenMutation();
    if (response?.data?.updateCustomerEmailAddress.success) {
      setMsg("Email Changed Successfully");
      verified = true;
    } else {
      setMsg("Invalid Token, try again");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-wrap gap-2 w-max"
      >
        <input
          className="inputField"
          type="text"
          placeholder="Enter Token"
          value={verifyToken}
          onChange={(e) => setVerifyToken(e.target.value)}
        />
        <button className="primaryBtn" type="submit">
          Verify
        </button>
        {msg && (
          <SnackBar
            msg={msg}
            setMsg={setMsg}
            error={msg === "Invalid Token, try again" ? true : false}
          />
        )}
        {verified && (
          <Link href="/login" className="primaryBtn">
            Login
          </Link>
        )}
      </form>
    </div>
  );
};

export default VeryNewEmailToken;
