"use client";

import { createCheckoutSession } from "@/app/actions/stripe";
import { products, ProductProps } from "@/data/products";
import { useTransition } from "react";

interface BuyButtonProps {
  product: ProductProps;
}

export default function BuyButton({ product }: BuyButtonProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => createCheckoutSession(product.id))}
      disabled={isPending}
      className="w-full rounded-xl bg-main px-4 py-3 font-semibold text-text-secondary transition hover:bg-main-hover "
    >
      {isPending
        ? "Przekierowywanie..."
        : `Kup za ${product.price.toFixed(2)} zł`}
    </button>
  );
}
