import { cancelBooking } from "@/lib/services/profile.services";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    await cancelBooking(body);

    return NextResponse.json(
      { message: "Booking canceled successfully." },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
