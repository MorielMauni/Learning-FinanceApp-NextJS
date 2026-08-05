"use server";
import { revalidateTag } from "next/cache";
import { createClient } from "./supabase/server";

export async function purgeTransactionListCache() {
  revalidateTag("transaction-list");
}

export async function createTransaction(formData) {
  // Handle errors
  // Validate data
  const supabase = await createClient();
  console.log(formData);
  const { error } = await supabase.from("transactions").insert(formData);
}
