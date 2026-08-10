import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/data/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia" as any,
});

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string,
    );
  } catch (err: any) {
    console.error(`Błąd weryfikacji webhooka: ${err.message}`);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 },
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status === "paid") {
      const minecraftNick = session.metadata?.minecraftNick ?? "Nieznany";
      const productId = session.metadata?.productId ?? "";
      const product = products.find((item) => item.id === productId);
      const rankName = product?.name ?? productId ?? "Nieznany produkt";

      const amountInPln = (
        (session.amount_total ?? Math.round((product?.price ?? 0) * 100)) / 100
      ).toFixed(2);

      const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

      if (discordWebhookUrl) {
        try {
          await fetch(discordWebhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              content: [
                " **Nowa opłacona płatność**",
                `**Nick:** ${minecraftNick}`,
                `**Kwota:** ${amountInPln} PLN`,
                `**Ranga:** ${rankName}`,
              ].join("\n"),
            }),
          });
        } catch (error) {
          console.error(
            "Błąd podczas wysyłania powiadomienia do Discorda:",
            error,
          );
        }
      }
    }

    return NextResponse.json({ received: true }, { status: 200 });
  }
}
