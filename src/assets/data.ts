import keyboard1 from './k1.jpg';
import keyboard2 from './k2.jpg';
import keyboard3 from './k3.jpg';
import keyboard4 from './k4.jpg';
import keyboard5 from './k5.jpg';
import keyboard6 from './k6.jpg';

export interface IProduct {
  [key: string]: string | number;
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export const products: IProduct[] = [
  {
    id: 1,
    title: 'MelGeek’s Mojo68',
    price: 549,
    thumbnail: keyboard1,
  },
  {
    id: 2,
    title: 'SAMURAI RONIN Dye-Sub',
    price: 899,
    thumbnail: keyboard5,
  },
  {
    id: 3,
    title: '124pcs Lotus Flower',
    price: 1249,
    thumbnail: keyboard4,
  },
  {
    id: 4,
    title: 'Minimalist Cyan Gradient OEM',
    price: 280,
    thumbnail: keyboard2,
  },
  {
    id: 5,
    title: 'PBT Pudding Keycaps Dual-layer',
    price: 499,
    thumbnail: keyboard3,
  },
  {
    id: 6,
    title: 'AUTUMN SAKURA Dye-Sub',
    price: 1749,
    thumbnail: keyboard6,
  },
];
