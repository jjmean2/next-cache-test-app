"use server";

import { redirect } from "next/navigation";

export async function navigateToPage(page: number, ...args: unknown[]) {
  console.log("🎨 action with page", page, args);
  redirect("/search/result?page=" + page);
}
