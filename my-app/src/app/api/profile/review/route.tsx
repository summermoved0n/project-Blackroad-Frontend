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
    return NextResponse.json(
      { message: "Failed to submit review", error: String(error) },
      { status: 500 },
    );
  }
}
