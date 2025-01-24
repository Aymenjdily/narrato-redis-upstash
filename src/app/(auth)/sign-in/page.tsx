"use client";

import { signInAction } from "@/lib/actions/auth";

import AuthForm from "../_components/auth-form";

const SignInPage = () => {
  return (
    <AuthForm
      type="sign-in"
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={signInAction}
    />
  );
};

export default SignInPage;
