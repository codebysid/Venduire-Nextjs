import { UPDATE_EMAIL } from "@/graphQLqueries/UPDATE_EMAIL";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import SnackBar from "../components/SnackBar";

const ChangeEmail = () => {
  const [newEmail, setNewEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const router = useRouter();
  const [msg, setMsg] = useState("");

  const [changeEmailAddress] = useMutation(UPDATE_EMAIL, {
    variables: {
      password: oldPassword,
      email: newEmail,
    },
  });

  const changeEmail = async (e) => {
    e.preventDefault();
    const response = await changeEmailAddress();

    if (response?.data?.requestUpdateCustomerEmailAddress?.success)
      router.push("/verifyNewEmailToken");
    else setMsg("Internal Error Occured, try again");
  };

  return (
    <div>
      <form
        onSubmit={changeEmail}
        className="flex flex-col flex-wrap gap-2 w-max"
      >
        <input
          type="email"
          className="inputField"
          placeholder="Enter New Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />

        <input
          type="password"
          className="inputField"
          placeholder="Enter Password to Confirm"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <button className="primaryBtn" type="submit">
          Update
        </button>
        {msg && <SnackBar msg={msg} setMsg={setMsg} error />}
      </form>
    </div>
  );
};

export default ChangeEmail;
