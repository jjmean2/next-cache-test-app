"use server";

import { redirect } from "next/navigation";

export async function navigateToPage(page: number) {
  console.log("🎨 action");
  redirect("/search/result?page=" + page);
}
