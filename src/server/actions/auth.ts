"use server"

import { signOut, signIn } from "@/auth"

export async function signOutAction() {
  await signOut({ redirectTo: "/" })
}

export async function signInAction() {
  await signIn("credentials", { redirectTo: "/dashboard" })
}
