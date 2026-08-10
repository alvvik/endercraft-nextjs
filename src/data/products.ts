export interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
}
export const products: ProductProps[] = [
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
