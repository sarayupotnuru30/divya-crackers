import aerialFancy from "@/assets/products/aerial-fancy.jpg";
import multicolor240 from "@/assets/products/240-multicolor-shots.jpeg";
import handShots from "@/assets/products/hand-shots.jpg";
import rockets from "@/assets/products/rockets-category.jpg";
import flowerPots from "@/assets/products/flower-pots.jpg";
import spinners from "@/assets/products/spinners.jpg";
import sparklers from "@/assets/products/sparklers.jpg";
import naruto30 from "@/assets/products/naruto-30-shots.jpeg";
import kidsSpecial from "@/assets/products/kids-special.jpg";
import fountains from "@/assets/products/fountains.jpg";
import soundCrackers from "@/assets/products/sound-crackers.jpg";
import pencils from "@/assets/products/pencils.jpg";
import digitalGarlands from "@/assets/products/digital-garlands.jpg";
import premiumFancy from "@/assets/products/premium-fancy.jpg";
import iplSetout from "@/assets/products/ipl-setout.jpeg";
import shots12 from "@/assets/products/12-shots.jpeg";
import maxShots60 from "@/assets/products/60-max-shots.jpeg";
import color15 from "@/assets/products/15-color-shots.jpeg";
import manPasand from "@/assets/products/man-pasand-25.jpeg";
import peacock from "@/assets/products/peacock-30.jpeg";
import showTime from "@/assets/products/show-time.jpeg";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export const categories = [
  "Aerial Fancy Shots / Pipe",
  "Multi Color Shots",
  "Special Hand Shots",
  "Rockets",
  "Flower Pots",
  "Zamin Chakkars / Spinners",
  "Sparklers",
  "Fancy Aerial Shots",
  "Kids Special",
  "Fountains Series",
  "Sound Crackers",
  "Pencils",
  "Digital Garlands",
  "Premium Fancy Items",
  "IPL Series",
];

export const products: Product[] = [
  { id: "1", name: "Aerial Fancy Shots", description: "Spectacular aerial display with colorful bursts", image: aerialFancy, category: "Aerial Fancy Shots / Pipe" },
  { id: "2", name: "240 Multi-Color Shots", description: "Massive 240-shot multicolor extravaganza", image: multicolor240, category: "Multi Color Shots" },
  { id: "3", name: "12 Shots Box", description: "Compact and fun multi-shot display", image: shots12, category: "Multi Color Shots" },
  { id: "4", name: "60 Max Amazing Shots", description: "60-shot powerhouse of colors and effects", image: maxShots60, category: "Multi Color Shots" },
  { id: "5", name: "15 Color Shots", description: "Beautiful 15-color multi-shot display", image: color15, category: "Multi Color Shots" },
  { id: "6", name: "Man Pasand 25 Shots", description: "Popular 25-shot crowd favorite", image: manPasand, category: "Fancy Aerial Shots" },
  { id: "7", name: "Naruto 30 Shots", description: "Anime-themed 30-shot multicolor display", image: naruto30, category: "Multi Color Shots" },
  { id: "8", name: "Peacock 30 Shots", description: "Elegant peacock-themed 30-shot box", image: peacock, category: "Fancy Aerial Shots" },
  { id: "9", name: "Show Time", description: "10x10 red and green balls with tails", image: showTime, category: "Special Hand Shots" },
  { id: "10", name: "Special Hand Shots", description: "Premium handheld sparkle tubes", image: handShots, category: "Special Hand Shots" },
  { id: "11", name: "Sky Rockets", description: "High-flying rockets with colorful burst", image: rockets, category: "Rockets" },
  { id: "12", name: "Flower Pots", description: "Ground-based pots with fountain effects", image: flowerPots, category: "Flower Pots" },
  { id: "13", name: "Zamin Chakkars", description: "Spinning ground fireworks with colors", image: spinners, category: "Zamin Chakkars / Spinners" },
  { id: "14", name: "Gold Sparklers", description: "Classic sparklers for all ages", image: sparklers, category: "Sparklers" },
  { id: "15", name: "Kids Fun Pack", description: "Safe and colorful crackers for children", image: kidsSpecial, category: "Kids Special" },
  { id: "16", name: "Rainbow Fountain", description: "Multi-color fountain with long duration", image: fountains, category: "Fountains Series" },
  { id: "17", name: "Thunder Crackers", description: "Loud sound crackers for celebrations", image: soundCrackers, category: "Sound Crackers" },
  { id: "18", name: "Color Pencils", description: "Multi-color pencil fireworks", image: pencils, category: "Pencils" },
  { id: "19", name: "Digital Garland", description: "Electronic garland with crackling effects", image: digitalGarlands, category: "Digital Garlands" },
  { id: "20", name: "Premium Fancy Box", description: "Premium collection of fancy fireworks", image: premiumFancy, category: "Premium Fancy Items" },
  { id: "21", name: "IPL Setout Fireworks", description: "Cricket-themed celebration fireworks", image: iplSetout, category: "IPL Series" },
];
