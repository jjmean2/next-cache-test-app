"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function navigateToPage(page: number) {
  revalidatePath("/start?page=" + page);
  redirect("/start?page=" + page);
}
