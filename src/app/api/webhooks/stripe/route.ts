import prisma from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

async function handler(request: Request) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature") || "";

  if (!sig) {
    return new Response("No signature", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    return new Response(`Webhook Error: ${(error as Error).message}`, {
      status: 400,
    });
  }

  switch (event.type) {
    case "payment_intent.created": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log("Payment Intent Created:", paymentIntent.id);
      break;
    }

    case "charge.succeeded": {
      const charge = event.data.object as Stripe.Charge;

      if (typeof charge.payment_intent === "string") {
        await prisma.order.update({
          where: { paymentIntentID: charge.payment_intent },
          data: { status: "complete" },
        });
        console.log("Order marked as complete.");
      }
      break;
    }

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({}, { status: 200 });
}

export const POST = handler;
