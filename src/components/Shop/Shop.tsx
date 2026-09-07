import { Info } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
interface PolicyProps {
  id: string;
  name: string;
  link: string;
}

const policies: PolicyProps[] = [
  {
    id: "dpay-terms",
    name: "Regulamin świadczenia usług płatniczych Serwisu dpay.pl",
    link: "https://dpay.pl/regulamin",
  },
  {
    id: "dpay-privacy",
    name: "Polityka prywatności Serwisu dpay.pl",
    link: "https://dpay.pl/polityka-prywatnosci",
  },
  {
    id: "paysafecard-terms",
    name: "Ogólne warunki handlowe PaySafeCard",
    link: "https://www.paysafecard.com/pl-pl/ogolne-warunki-handlowe/",
  },
  {
    id: "terms",
    name: "Regulamin płatności sklepu",
    link: "/regulamin",
  },
];
export default function Shop() {
  return (
    <section className="rounded-4xl m-2 bg-surface/90 p-6 " id="sklep">
      <div className="flex flex-col gap-4 mb-4">
        <div>
          <h2 className="text-fluid-h2 font-bold text-main">Sklep</h2>
          <p className=" text-text-muted">
            Wybierz rangę albo pakiet tokenów i przejdź do płatności.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-text-muted ">
          {policies.map((policy) => (
            <a
              key={policy.id}
              href={policy.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border  px-4 py-2 transition hover:border-main hover:text-main"
            >
              {policy.name}
            </a>
          ))}
        </div>

        <p className="flex items-center gap-2 text-sm text-text-muted">
          <Info className="h-5 w-5 text-main" />
          Dostępne metody płatności: BLIK, Przelewy24, PaysafeCard
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((item, index) => (
          <ProductCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
