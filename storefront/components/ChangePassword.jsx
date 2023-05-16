import { CHANGE_PASSWORD } from "@/graphQLqueries/CHANGE_PASSWORD";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import SnackBar from "./SnackBar";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [msg, setMsg] = useState("");

  const [changePass, { error }] = useMutation(CHANGE_PASSWORD, {
    variables: {
      currentPassword,
      newPassword,
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await changePass();
    if (response.data.updateCustomerPassword.success) {
      console.log(response);
      setMsg("Password Updated ✅");
      setCurrentPassword("");
    } else {
      console.log(response);
      setMsg("Password Incorrect ❌");
      setNewPassword("");
    }
  };
  return (
    <div className="flex justify-start">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-2"
      >
        <input
          type="password"
          className="inputField"
          placeholder="Enter Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <input
          type="password"
          className="inputField"
          placeholder="Enter New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button className="primaryBtn">Change Password</button>
        {msg && <SnackBar msg={msg} setMsg={setMsg} error={false} />}
      </form>
    </div>
  );
};

export default ChangePassword;
