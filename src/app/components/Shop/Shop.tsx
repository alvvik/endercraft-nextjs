import Image from "next/image";
import { Info } from "lucide-react";
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
interface ItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
}
const itemShop: ItemProps[] = [
  {
    id: "vip_30",
    name: "Ranga VIP na 30 dni",
    price: 10.0,
    image: "/itemShop/rangavip.png",
  },
  {
    id: "svip_30",
    name: "Ranga SVIP na 30 dni",
    price: 20.0,
    image: "/itemShop/rangasvip.png",
  },
  {
    id: "uvip_30",
    name: "Ranga UVIP na 30 dni",
    price: 35.0,
    image: "/itemShop/rangauvip.png",
  },
  {
    id: "evip_30",
    name: "Ranga EVIP na 30 dni",
    price: 50.0,
    image: "/itemShop/rangaevip.png",
  },
  {
    id: "nvip_30",
    name: "Ranga NVIP na 30 dni",
    price: 75.0,
    image: "/itemShop/ranganvip.png",
  },
  {
    id: "tokens_500",
    name: "500 tokenów",
    price: 5.0,
    image: "/itemShop/500token.png",
  },
  {
    id: "tokens_1000",
    name: "1000 tokenów",
    price: 10.0,
    image: "/itemShop/1000token.png",
  },
  {
    id: "tokens_2000",
    name: "2000 tokenów",
    price: 18.0,
    image: "/itemShop/2000token.png",
  },
  {
    id: "tokens_5000",
    name: "5000 tokenów",
    price: 40.0,
    image: "/itemShop/5000token.png",
  },
  {
    id: "tokens_10000",
    name: "10000 tokenów",
    price: 75.0,
    image: "/itemShop/10000token.png",
  },
  {
    id: "tokens_25000",
    name: "25000 tokenów",
    price: 170.0,
    image: "/itemShop/25000token.png",
  },
];
export default function Shop() {
  return (
    <section className="rounded-4xl m-2 bg-surface/90 p-6 ">
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
        {itemShop.map((item) => (
          <article
            key={item.id}
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
                <h3 className="text-fluid-h4 font-semibold text-text">
                  {item.name}
                </h3>
                <p className="text-fluid-subtle my-2 text-text-muted">
                  {item.price.toFixed(2)} zł
                </p>
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-main px-4 py-3 font-semibold text-text-secondary transition hover:bg-main-hover "
              >
                Kup teraz
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
