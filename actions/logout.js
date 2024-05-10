"use server";

import { signOut } from "@/auth";
// import { redirect } from "next/navigation";

export const logout = async () => {
  //some server magic
  await signOut();
  // await redirect("/auth/login");
};
