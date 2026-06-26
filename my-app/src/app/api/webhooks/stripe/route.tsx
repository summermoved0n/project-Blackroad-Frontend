import { NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { dbUpdateBooking } from "@/lib/repositories/booking.repo";
import {
  BookingStatus,
  PaymentStatus,
} from "../../../../../generated/prisma/enums";
import { dbUpdatePaymentById } from "@/lib/repositories/payment.repo";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ message: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid webhook signature" },
      { status: 400 },
    );
  }

  console.log(event.type);

  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;

    const { bookingId, paymentId } = paymentIntent.metadata;

    await dbUpdateBooking(
      { id: Number(bookingId) },
      { status: BookingStatus.confirmed },
    );

    await dbUpdatePaymentById(Number(paymentId), {
      status: PaymentStatus.paid,
    });
  } else if (event.type === "payment_intent.payment_failed") {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;

    const { bookingId, paymentId } = paymentIntent.metadata;

    await dbUpdateBooking(
      { id: Number(bookingId) },
      { status: BookingStatus.pending },
    );

    await dbUpdatePaymentById(Number(paymentId), {
      status: PaymentStatus.failed,
    });
  }

  return NextResponse.json({ received: true });
}
