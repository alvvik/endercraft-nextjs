"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";
import { products, ProductProps } from "@/data/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia" as any,
});

export async function createCheckoutSession(
  productId: string,
  minecraftNick: string,
) {
  const product = products.find((p) => p.id === productId);

  if (!product) {
    throw new Error("Produkt nie istnieje");
  }
  const priceInCents = Math.round(product.price * 100); // Konwersja ceny na grosze
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card", "blik"],
    line_items: [
      {
        price_data: {
          currency: "pln",
          product_data: {
            name: product.name,
            //description: product.description,
            //  images: [product.image],
          },
          unit_amount: priceInCents, // Cena wybranego produktu w groszach
        },
        quantity: 1, // Zawsze dokładnie 1 sztuka wybranego produktu
      },
    ],
    mode: "payment",
    metadata: {
      minecraftNick: minecraftNick,
      productId: product.id,
    },
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/sukces?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/anulowano`,
  });

  if (session.url) {
    redirect(session.url);
  }
}
