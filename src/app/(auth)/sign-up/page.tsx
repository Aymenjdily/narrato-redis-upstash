"use client";

import { signUpAction } from "@/lib/actions/auth";

import AuthForm from "../_components/auth-form";

const SignUpPage = () => {
  return (
    <AuthForm
      type="sign-up"
      defaultValues={{
        email: "",
        password: "",
        fullName: "",
        universityId: 0,
        universityCard: "",
      }}
      onSubmit={signUpAction}
    />
  );
};

export default SignUpPage;
