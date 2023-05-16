import { ThemeContext } from "@/Context/CurrentUser";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FcShop } from "react-icons/fc";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import SearchResults from "./SearchResults";
import { FiSettings } from "react-icons/fi";
import UserSetting from "./UserSetting";

const Navbar = () => {
  const [activeElement, setActiveElement] = useState("/");
  const { currentUser } = useContext(ThemeContext);
  const [searchInput, setSearchInput] = useState("");
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const activeStyle =
    "border-b-4 border-green-500 rounded-2xl shadow-md shadow-green-500";

  const [userSettingIconStatus, setuserSettingIconStatus] = useState(false);
  const [userSettingStatus, setUserSettingStatus] = useState(false);

  const userSetting = () => {
    setUserSettingStatus((prev) => !prev);
    setuserSettingIconStatus((prev) => !prev);
  };

  useEffect(() => {
    setActiveElement(router.pathname);
  }, [router.pathname, searchInput]);

  return (
    <main className="p-6 flex flex-row flex-wrap gap-40 text-white justify-around mx-10 items-start">
      <p
        onClick={() => router.push("/")}
        className="text-6xl font-bold flex flex-row text-green-700 hover:cursor-pointer"
      >
        <FcShop /> ShopCart
      </p>

      <nav className="flex flex-row items-start gap-4 text-green-700">
        <input
          className="rounded-xl p-4 outline-none border-b-2 border-green-700 "
          type="text"
          placeholder="Seacrh Products"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          name=""
          id=""
        />
        {searchInput.length > 0 && (
          <SearchResults
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        )}
        <Link
          className={`navItems ${activeElement === "/" && activeStyle}`}
          href="/"
        >
          Products
        </Link>
        <Link
          className={`navItems ${activeElement === "/welcome" && activeStyle}`}
          href="/welcome"
        >
          Home
        </Link>
        {currentUser ? (
          <Link
            className={`navItems ${activeElement === "/logout" && activeStyle}`}
            href="/logout"
          >
            Logout
          </Link>
        ) : (
          <Link
            className={`navItems ${activeElement === "/login" && activeStyle}`}
            href="/login"
          >
            Login
          </Link>
        )}
        {currentUser && (
          <Link
            className={`navItems ${activeElement === "/myCart" && activeStyle}`}
            href="/myCart"
          >
            Cart
          </Link>
        )}
      </nav>
      <div className="flex flex-row flex-wrap gap-4 items-start justify-center">
        {currentUser && (
          <p
            className=" h-fit text-black p-2 rounded-2xl cursor-pointer hover:bg-green-500 transition-all hover:text-black"
            onClick={() => userSetting()}
          >
            {userSettingIconStatus ? (
              <FiSettings color="green" className="text-4xl" />
            ) : (
              <FiSettings color="gray" className="text-4xl" />
            )}
          </p>
        )}
        <div className="relative">
          {userSettingStatus && (
            <UserSetting setUserSettingStatus={setUserSettingStatus} />
          )}
        </div>

        {!currentUser && (
          <Link className={`primaryBtn`} href="/home">
            Register
          </Link>
        )}

        <div className="relative">
          <input
            type="checkbox"
            name=""
            id="toggle"
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          />
          <BsFillSunFill id="sunIcon" />
          <BsFillMoonFill id="moonIcon" />
        </div>
      </div>
    </main>
  );
};

export default Navbar;
