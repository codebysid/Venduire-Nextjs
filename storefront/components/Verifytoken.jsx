import React, { useState } from "react";
import { VERIFY_TOKEN_QUERY } from "@/graphQLqueries/VERIFY_MUTATION";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const Verifytoken = () => {
  const [token, setToken] = useState("");
  const router = useRouter();

  const [verifyToken, { error, loading }] = useMutation(VERIFY_TOKEN_QUERY);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      data: {
        verifyCustomerAccount: { id },
      },
    } = await verifyToken({
      variables: {
        token,
      },
    });

    id && router.push("/");
  };

  return (
    <div>
      {loading && <p className="loading">Verifying</p>}
      {error && <p className="error">{error.message}</p>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-wrap justify-left items-center gap-4"
      >
        <label htmlFor="token">You will receive token in your Mail Box</label>
        <input
          className="inputField"
          id="token"
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button className="btn" type="submit">
          Verify Token
        </button>
      </form>
    </div>
  );
};

export default Verifytoken;
