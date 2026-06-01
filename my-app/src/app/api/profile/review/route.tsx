import { leaveReview } from "@/lib/services/profile.services";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log(body);

    await leaveReview(body);

    return NextResponse.json(
      {
        message: "Review submitted successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 404 });
    }
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
