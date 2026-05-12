import { cookies } from "next/headers";
import React from "react";

export default async function page() {
  const cookieStore = await cookies();

  const token = cookieStore;
  console.log(token);
  return <div className="pt-50 bg-[#171717] text-white">page with token?</div>;
}
