import { ThemeContext } from "@/Context/CurrentUser";
import { LOGIN_MUTATION_QUERY } from "@/graphQLqueries/LOGIN_MUTATION";
import { useMutation } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import SnackBar from "./SnackBar";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();
  const { currentUser, setCurrentUser } = useContext(ThemeContext);

  const [login, { loading, error }] = useMutation(LOGIN_MUTATION_QUERY);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await login({
      variables: {
        username,
        password,
      },
    });
    if (response.data.login.message) {
      setMsg(response.data.login.message);
      return null;
    }
    setCurrentUser(response.data.login.identifier);
    router.push("/");
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen object-cover">
      {error && <p className="error">{error.message}</p>}
      {loading && <p className="loading">Logging In...</p>}

      <Image
        className="flex-1 h-full w-full"
        src="/illustrations/Login-bro.svg"
        width={0}
        height={0}
        sizes="100vw"
        alt="from Undraw"
      />

      <form
        className="flex flex-col justify-center gap-4 text-xl mr-96"
        onSubmit={handleSubmit}
      >
        <div className="pb-10">
          <h2 className="illustrationHead">Welcome Back</h2>
          <h3 className="illustrationSubHead">Enter Your details</h3>
        </div>

        <input
          className="inputField"
          type="text"
          name=""
          id="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter Email"
        />

        <input
          id="password"
          className="inputField"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />

        <button type="submit" className="btn">
          Login
        </button>

        {msg && <SnackBar msg={msg} setMsg={setMsg} error />}

        <p className="externalLinkLabel">
          Don't have an Account ?
          <Link className="externalLink" href="/home">
            Create an Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
