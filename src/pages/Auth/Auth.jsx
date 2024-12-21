import React from "react";
import { useLocation } from "react-router-dom";
import { SignIn, SignUp } from "@clerk/clerk-react";

function Auth() {
  const location = useLocation();

  return (
    <section className="py-10 bg-dark-08 flex justify-center items-center">
      {location.pathname === "/login" ? <SignIn /> : <SignUp />}
    </section>
  );
}

export default Auth;
