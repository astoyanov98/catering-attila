import type { Metadata } from "next";
import { MenuDishCard } from "@/components/MenuDishCard";

const menuItems = [
  {
    name: "Mini Tortilla Wraps",
    description:
      "Soft tortilla pinwheels filled with fresh vegetables, creamy spread, and a savory bite in every slice.",
    priceEur: "23",
    priceBgn: "44.98",
    imageSrc: "/menu/tortilla.png",
    imageAlt: "Mini tortilla wraps on a platter",
  },
  {
    name: "Tartalet Selection",
    description:
      "Crisp tart shells topped with colorful mousses and fresh garnishes for an elegant cocktail table.",
    priceEur: "22",
    priceBgn: "43.03",
    imageSrc: "/menu/tartaleti.jpg",
    imageAlt: "Assorted tartalets",
  },
  {
    name: "Chicken Finger Bites",
    description:
      "Golden chicken strips with a tender center, served as a warm and crowd-friendly party favorite.",
    priceEur: "32",
    priceBgn: "62.59",
    imageSrc: "/menu/pileshkipruchici.jpg",
    imageAlt: "Chicken finger bites",
  },
  {
    name: "Chocolate Mini Muffins",
    description:
      "Rich cocoa mini muffins with a soft crumb and deep chocolate flavor for a compact dessert finish.",
    priceEur: "24",
    priceBgn: "46.94",
    imageSrc: "/menu/minimufinshokolad.jpg",
    imageAlt: "Chocolate mini muffins",
  },
  {
    name: "Mini Vegan Ciabatta",
    description:
      "Rustic ciabatta sandwiches layered with grilled vegetables, greens, and a light vegan spread.",
    priceEur: "23",
    priceBgn: "44.98",
    imageSrc: "/menu/Mini%20vegan%20chabata.PNG",
    imageAlt: "Mini vegan ciabatta sandwiches",
  },
  {
    name: "Prosciutto Ciabatta",
    description:
      "Mini ciabatta rolls with prosciutto, fresh salad, and creamy accents for a refined savory option.",
    priceEur: "26",
    priceBgn: "50.85",
    imageSrc: "/menu/Mini%20chabata%20s%20proshuto.PNG",
    imageAlt: "Mini prosciutto ciabatta sandwiches",
  },
  {
    name: "Butter Croissants",
    description:
      "Flaky mini croissants prepared for brunch tables, receptions, and sweet-or-savory service combinations.",
    priceEur: "23",
    priceBgn: "44.98",
    imageSrc: "/menu/kroasani.png",
    imageAlt: "Mini butter croissants",
  },
  {
    name: "Salmon Canapes",
    description:
      "Delicate salmon bites balanced with soft cream and herbs, made for polished event presentation.",
    priceEur: "39",
    priceBgn: "76.28",
    imageSrc: "/menu/hapkisiomga.png",
    imageAlt: "Salmon canapes",
  },
  {
    name: "Lukanka Canapes",
    description:
      "Traditional lukanka on cocktail bites with a bold, savory profile and clean finishing garnish.",
    priceEur: "36",
    priceBgn: "70.41",
    imageSrc: "/menu/hapkilukanka.png",
    imageAlt: "Lukanka canapes",
  },
  {
    name: "Chicken Fillet Canapes",
    description:
      "Tender chicken fillet served on compact canapes with fresh texture and balanced seasoning.",
    priceEur: "37.5",
    priceBgn: "73.34",
    imageSrc: "/menu/hapkifile.png",
    imageAlt: "Chicken fillet canapes",
  },
  {
    name: "Anchovy Canapes",
    description:
      "Cocktail bites with anchovy, fresh herbs, and bright accents for a sharper Mediterranean note.",
    priceEur: "39",
    priceBgn: "76.28",
    imageSrc: "/menu/hapkianshoa.png",
    imageAlt: "Anchovy canapes",
  },
  {
    name: "Caprese Tomato Bites",
    description:
      "Tomato, mozzarella, and basil assembled into fresh canapes with a light and colorful finish.",
    priceEur: "36",
    priceBgn: "70.41",
    imageSrc: "/menu/domati.png",
    imageAlt: "Caprese tomato bites",
  },
  {
    name: "Mini Burgers",
    description:
      "Compact gourmet sliders built for casual events, late-night tables, and generous mixed platters.",
    priceEur: "26",
    priceBgn: "50.85",
    imageSrc: "/menu/burgeri.png",
    imageAlt: "Mini burgers",
  },
  {
    name: "Brownie Bites",
    description:
      "Dense chocolate brownie squares with a fudgy center, ideal for dessert stations and coffee breaks.",
    priceEur: "32",
    priceBgn: "62.59",
    imageSrc: "/menu/brauni.png",
    imageAlt: "Brownie bites",
  },
] as const;

export const metadata: Metadata = {
  title: "Our Menu | Attila Catering",
  description: "Browse Attila Catering's selection of handcrafted dishes.",
};

export default function MenuPage() {
  return (
    <main className="flex-grow bg-white">
      <section className="relative overflow-hidden bg-white pb-28 pt-6 sm:pb-32 sm:pt-10">
        <svg
          className="absolute bottom-0 left-0 h-[220px] w-full"
          viewBox="0 0 1600 220"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 90 C230 140 430 170 680 154 C930 138 1110 52 1330 42 C1450 36 1540 46 1600 56 L1600 220 L0 220 Z"
            fill="#fcf8f3"
          />
        </svg>

        <div className="site-shell relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mt-5 flex items-center gap-4 sm:gap-6">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#a9856f]" />
              <h1 className="shrink-0 font-serif text-5xl text-[#3f241b] sm:text-6xl">
                Our{" "}
                <span className="relative inline-block px-1">
                  <span className="relative">Menu</span>
                </span>
              </h1>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#a9856f]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf8f3] pb-20 sm:pb-24">
        <div className="site-shell">
          <div className="grid gap-x-10 lg:grid-cols-2">
            {menuItems.map((item) => (
              <MenuDishCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
