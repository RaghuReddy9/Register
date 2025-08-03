"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export type State = {
  message?: string;
};

export async function login(prevState: State | undefined, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const adminUsername = process.env.ADMIN_USERNAME || "admin";
  const adminPassword = process.env.ADMIN_PASSWORD || "password";

  if (username === adminUsername && password === adminPassword) {
    cookies().set("auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 1 day
    });
    redirect("/admin/dashboard");
  }

  return {
    message: "Invalid username or password.",
  };
}

export async function logout() {
  cookies().set("auth", "", { expires: new Date(0) });
  redirect("/admin/login");
}
