"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { useParams } from "next/navigation";
import { ChevronLeft, Info } from "lucide-react";
import { useTransition } from "react";
import { createCheckoutSession } from "@/app/actions/stripe";

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const [mcNickname, setMcNickname] = useState<string>("");

  // Find selected product
  const selectedProduct = useMemo(() => {
    return products.find((p) => p.id === productId);
  }, [productId]);
  const [isPending, startTransition] = useTransition();

  if (!selectedProduct) {
    return (
      <main className="min-h-screen flex flex-col justify-center items-center">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h1 className="text-fluid-h1 font-bold text-main mb-4">
            Produkt nie znaleziony
          </h1>
          <p className="text-text-muted mb-8">
            Produkt o ID{" "}
            <span className="font-mono font-semibold bg-main text-text-secondary p-2 rounded-2xl">
              {productId}
            </span>{" "}
            nie istnieje
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-main text-text-secondary font-bold rounded-2xl hover:bg-main-hover transition-colors"
          >
            Wróć do sklepu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-main hover:text-main-hover transition-colors mb-8 font-semibold"
        >
          <ChevronLeft className="h-5 w-5" />
          Wróć do strony głównej
        </Link>

        <div className="rounded-4xl ring ring-border bg-surface/90 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col gap-4">
              <div className="relative w-full aspect-square bg-main rounded-2xl overflow-hidden ring ring-border">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <h1 className="text-fluid-h1 font-bold  mb-2">
                  {selectedProduct.name}
                </h1>
                <p>
                  Cena:{" "}
                  <span className="font-bold font-mono">
                    {selectedProduct.price.toFixed(2)} zł
                  </span>
                </p>
                <p className="text-text-muted text-fluid-subtle">
                  ID produktu:{" "}
                  <span className=" font-mono bg-main text-text-secondary ring ring-border px-2 py-1 rounded">
                    {selectedProduct.id}
                  </span>
                </p>
              </div>

              <div>
                <label htmlFor="mcNickname" className="block  font-semibold ">
                  Wpisz swój nick w Minecraft
                </label>
                <input
                  id="mcNickname"
                  type="text"
                  value={mcNickname}
                  onChange={(e) => setMcNickname(e.target.value.trim())}
                  placeholder="Twój nick"
                  maxLength={16}
                  minLength={3}
                  pattern="[a-zA-Z0-9_]{3,16}"
                  className="w-full px-4 py-3  ring ring-border rounded-xl text-text placeholder-text-muted focus:ring-main focus:outline-none transition-colors "
                />
                <p className="text-text-muted text-fluid-subtle">
                  Produkt zostanie przydzielony na tego nicku
                </p>
              </div>

              <button
                onClick={() =>
                  startTransition(() =>
                    createCheckoutSession(selectedProduct.id, mcNickname),
                  )
                }
                disabled={!mcNickname}
                className="w-full rounded-xl bg-main px-4 py-3 font-semibold text-text-secondary transition hover:bg-main-hover disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {mcNickname
                  ? "Przejdź do płatności"
                  : "Uzupełnij nick aby kontynuować"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
