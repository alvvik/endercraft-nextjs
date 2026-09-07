import { products } from "@/data/products";
import { Metadata } from "next";
import ProductContent from "./ProductContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return {
      title: `EnderCraft.pl - Itemshop`,
      description: "Szukany produkt nie istnieje w naszym itemshopie.",
    };
  }

  return {
    title: `${product.name} - EnderCraft.pl Itemshop`,
    description: `Kup ${product.name} za ${product.price.toFixed(2)} zł. Rangi i tokeny na serwer Minecraft.`,
    openGraph: {
      title: `${product.name} - EnderCraft.pl Itemshop`,
      description: `Kup ${product.name} za ${product.price.toFixed(2)} zł. Rangi i tokeny na serwer Minecraft.`,
      images: [product.image],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProductContent productId={id} />;
}
