import { ThemeContext } from "@/Context/CurrentUser";
import { LOGOUT_MUTATION_QUERY } from "@/graphQLqueries/LOGOUT_MUTATION";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const Logout = () => {
  const { setCurrentUser, currentUser } = useContext(ThemeContext);
  const router = useRouter();
  const [logout] = useMutation(LOGOUT_MUTATION_QUERY);

  const sideEffect = async () => {
    const response = await logout();
    if (response) {
      localStorage.removeItem("auth_token");
      setCurrentUser("");
      router.push("/");
    }
  };
  useEffect(() => {
    sideEffect();
  }, []);
  return;
};

export default Logout;
