import { REGISTER_MUTATION_QUERY } from "@/graphQLqueries/REGISTER_MUTATIONS";
import { useMutation } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import SnackBar from "./SnackBar";

const Index = () => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();
  const [register, { data, loading, error }] = useMutation(
    REGISTER_MUTATION_QUERY
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      data: {
        registerCustomerAccount: { success },
      },
    } = await register({
      variables: { title, firstName, lastName, password, phoneNumber, email },
    });

    if (!success) {
      setMsg("Password is too Short");
      return null;
    }

    success && router.push("/verifyToken");
  };

  return (
    <div className="flex h-screen justify-center items-start flex-row">
      {loading && <p className="loading">Registring</p>}

      {error && !loading && <p className="error">{error.message}</p>}

      <Image
        className="flex-1 h-full w-full"
        alt="register "
        src="/illustrations/registerFilling.svg"
        width={0}
        height={0}
        sizes="100vw"
      />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-4 text-xl mr-96 mt-28"
      >
        <div className="pb-10">
          <h2 className="illustrationSubHead">START FOR FREE</h2>
          <h2 className="illustrationHead">Create New Accont</h2>
        </div>

        <input
          className="inputField"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title (Mr/Mrs)"
        />

        <input
          type="text"
          id="firstName"
          className="inputField"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />

        <input
          type="text"
          id="lastName"
          className="inputField"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />

        <input
          type="number"
          name=""
          id="phoneNumber"
          className="inputField"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Contact Number"
        />

        <input
          type="email"
          name=""
          id="email"
          className="inputField"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />

        <input
          type="password"
          name=""
          id="password"
          className="inputField"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create Password"
        />

        <button className="btn" type="submit">
          Register
        </button>

        {msg && <SnackBar msg={msg} setMsg={setMsg} error />}

        <p className="externalLinkLabel">
          Already a memeber ?
          <Link className="externalLink" href="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Index;
