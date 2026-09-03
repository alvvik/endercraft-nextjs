"use client";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

interface ProductCardProps {
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  index: number;
}

export default function ProductCard({ item, index }: ProductCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.02, duration: 0.1 }}
      className="group overflow-hidden rounded-2xl ring ring-border transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-square ">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
      </div>

      <div className="p-4">
        <div>
          <h3 className="text-fluid-h4 font-semibold text-text">{item.name}</h3>
          <p className="text-fluid-subtle my-2 text-text-muted">
            {item.price.toFixed(2)} zł
          </p>
        </div>

        <div className="flex justify-center ">
          <Link
            href={`/shop/${item.id}`}
            className=" rounded-xl bg-main px-4 py-3 font-semibold text-text-secondary transition hover:bg-main-hover "
          >
            Zobacz szczegóły
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
