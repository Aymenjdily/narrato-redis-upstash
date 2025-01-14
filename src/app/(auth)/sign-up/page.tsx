"use client";

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
      onSubmit={() => {}}
    />
  );
};

export default SignUpPage;
