import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { Navigate } from "react-router-dom";
import { VERIFY_TOKEN } from "../GraphQL/Mutations";

const RequireAuth = () => {
  const [checkLogin] = useMutation(VERIFY_TOKEN);
  const [logged, setLogged] = useState(true);
  const authed = localStorage.getItem("authToken")
    ? localStorage.getItem("authToken")
    : "1qw3s";


  useEffect(() => {
    checkLogin({
      variables: { token: authed },
    })
      .then((res) => {
        setLogged(true);
        console.log(res);
      })
      .catch((err) => {
        setLogged(false);
        console.log(err);
        localStorage.clear();
      });
  }, [authed, checkLogin]);

  if (logged === false) {
    return <Navigate to="/login" replace />;
  }
};

export default RequireAuth;
