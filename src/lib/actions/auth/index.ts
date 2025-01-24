"use server";

import { hash } from "bcrypt";
import { eq } from "drizzle-orm";

import { db } from "@/database/drizzle";
import { usersTable } from "@/database/schema";

import { signIn } from "../../../../auth";
import { AuthCredentials } from "../../../../types";

export const signInAction = async (
  params: Pick<AuthCredentials, "email" | "password">
) => {
  const { email, password } = params;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, error: result.error };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.log("SIGN_IN_ACTION:", error);
    return {
      success: false,
      error: "Signin error",
    };
  }
};

export const signUpAction = async (params: AuthCredentials) => {
  const { fullName, email, universityCard, universityId, password } = params;

  const existingUser = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  if (existingUser.length > 0) {
    return {
      success: false,
      error: "User already exists",
    };
  }

  const hashedPassword = await hash(password, 10);

  try {
    await db.insert(usersTable).values({
      fullName,
      email,
      universityCard,
      universityId,
      password: hashedPassword,
    });

    await signInAction({ email, password });

    return { success: true };
  } catch (error) {
    console.log("SIGN_UP_ACTION:", error);
    return {
      success: false,
      error: "Signup error",
    };
  }
};
