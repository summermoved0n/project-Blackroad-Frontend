import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  const newUser = await prisma.user.create({
    data: {
      email,
      password,
    },
  });

  return NextResponse.json(newUser);
}
