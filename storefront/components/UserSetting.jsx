import Link from "next/link";
import React from "react";

function UserSetting({ setUserSettingStatus }) {
  const closeUserSettingOptions = () => {
    setUserSettingStatus((prev) => !prev);
  };
  return (
    <div className="">
      <div className="flex flex-col flex-wrap justify-center bg-gray-300 text-black absolute right-0 top-14 rounded-2xl w-max z-10">
        <Link
          href="/changeEmail"
          onClick={() => closeUserSettingOptions()}
          className="userSettingOption"
        >
          Change Email
        </Link>
        <hr className="border w-full border-black" />
        <Link
          href="/changePassword"
          onClick={() => closeUserSettingOptions()}
          className="userSettingOption"
        >
          Change Password
        </Link>
      </div>
    </div>
  );
}

export default UserSetting;
