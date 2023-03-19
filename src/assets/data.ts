import keyboard1 from "./k1.jpg";
import keyboard2 from "./k2.jpg";
import keyboard3 from "./k3.jpg";
import keyboard4 from "./k4.jpg";
import keyboard5 from "./k5.jpg";
import keyboard6 from "./k6.jpg";

export interface IProduct {
  [key: string]: string | number | string[] | undefined;
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

export const products: IProduct[] = [
  {
    id: 1,
    title: "MelGeek’s Mojo68",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: keyboard1,
  },
  {
    id: 2,
    title: "SAMURAI RONIN Dye-Sub",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: keyboard5,
  },
  {
    id: 3,
    title: "124pcs Lotus Flower",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: keyboard4,
  },
  {
    id: 4,
    title: "Minimalist Cyan Gradient OEM",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: "OPPO",
    category: "smartphones",
    thumbnail: keyboard2,
  },
  {
    id: 5,
    title: "PBT Pudding Keycaps Dual-layer",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    thumbnail: keyboard3,
  },
  {
    id: 6,
    title: "AUTUMN SAKURA Dye-Sub",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    discountPercentage: 11.02,
    rating: 4.57,
    stock: 83,
    brand: "Apple",
    category: "laptops",
    thumbnail: keyboard6,
  },
];
