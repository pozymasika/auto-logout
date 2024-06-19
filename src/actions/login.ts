"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  console.log(`Logging in with email: ${email} and password: ${password}`);
  // set login cookie and redirect
  cookies().set("email", email);
  redirect("/dashboard");
}
