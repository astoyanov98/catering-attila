import type { Metadata } from "next";
import {
  MenuCategoryTabs,
  type MenuSection,
} from "@/components/MenuCategoryTabs";

const menuSections: MenuSection[] = [
  {
    title: "Премиум солени хапки",
    shortTitle: "Солени хапки",
    subtitle: "Фини коктейлни предложения за приеми, събития и елегантни плата.",
    items: [
      {
        name: "Премиум хапки с пушена сьомга",
        description:
          "Пушена сьомга с Филаделфия върху канапе от многозърнесто хлебче",
        quantity: "30 бр.",
        priceEur: "39",
        priceBgn: "76.28",
        imageSrc: "/menu/hapkisiomga.png",
        imageAlt: "Премиум хапки с пушена сьомга",
      },
      {
        name: "Премиум хапки с аншоа",
        description:
          "Аншоа с Филаделфия върху канапе от многозърнесто хлебче",
        quantity: "30 бр.",
        priceEur: "39",
        priceBgn: "76.28",
        imageSrc: "/menu/hapkianshoa.png",
        imageAlt: "Премиум хапки с аншоа",
      },
      {
        name: "Премиум хапки с прошуто крудо",
        description:
          "Прошуто крудо върху хлебче с мус от сирена и ароматни билки",
        quantity: "30 бр.",
        priceEur: "37.5",
        priceBgn: "73.34",
        imageSrc: "/menu/Mini%20chabata%20s%20proshuto.PNG",
        imageAlt: "Премиум хапки с прошуто крудо",
      },
      {
        name: 'Премиум хапки с филе "Елена"',
        description:
          'Филе "Елена" върху хлебче с крема сирене и маково семе',
        quantity: "30 бр.",
        priceEur: "37.5",
        priceBgn: "73.34",
        imageSrc: "/menu/hapkifile.png",
        imageAlt: 'Премиум хапки с филе "Елена"',
      },
      {
        name: "Премиум хапки с луканка и мус от сирена",
        description: "Пълнена луканка с мус от сирена върху пълнозърнесто хлебче",
        quantity: "30 бр.",
        priceEur: "36",
        priceBgn: "70.41",
        imageSrc: "/menu/hapkilukanka.png",
        imageAlt: "Премиум хапки с луканка и мус от сирена",
      },
    ],
  },
  {
    title: "Коктейлни шишчета",
    shortTitle: "Шишчета",
    subtitle: "Свежи и цветни комбинации, удобни за сервиране и дегустация на крак.",
    items: [
      {
        name: "Чери доматче с бейби моцарела и спанак",
        description: "",
        quantity: "30 бр.",
        priceEur: "36",
        priceBgn: "70.41",
        imageSrc: "/menu/domati.png",
        imageAlt: "Чери доматче с бейби моцарела и спанак",
      },
      {
        name: "Чедър с грозде",
        description: "",
        quantity: "30 бр.",
        priceEur: "36",
        priceBgn: "70.41",
        imageSrc: "/circle-food.png",
        imageAlt: "Чедър с грозде",
      },
      {
        name: "Ементал с ягода",
        description: "",
        quantity: "30 бр.",
        priceEur: "36",
        priceBgn: "70.41",
        imageSrc: "/circle-food.png",
        imageAlt: "Ементал с ягода",
      },
      {
        name: "Шишчета с коктейлни кюфтенца и чери домат",
        description: "",
        quantity: "30 бр.",
        priceEur: "36",
        priceBgn: "70.41",
        imageSrc: "/circle-food.png",
        imageAlt: "Шишчета с коктейлни кюфтенца и чери домат",
      },
      {
        name: "Парти чаша микс с краставици и моркови",
        description: "",
        quantity: "1 бр.",
        priceEur: "1.5",
        priceBgn: "2.93",
        imageSrc: "/circle-food.png",
        imageAlt: "Парти чаша микс с краставици и моркови",
      },
    ],
  },
  {
    title: "Бургери, кроасани, тортиля, чабати и баница",
    shortTitle: "Мини сандвичи",
    subtitle: "По-засищащи мини предложения за брънч, офис събития и смесени плата.",
    items: [
      {
        name: "Мини бургер",
        description:
          "Телешко кюфте, чедър, кисели краставички, карамелизиран лук, питка",
        quantity: "10 бр.",
        priceEur: "26",
        priceBgn: "50.85",
        imageSrc: "/menu/burgeri.png",
        imageAlt: "Мини бургер",
      },
      {
        name: "Мини кроасан",
        description: "Шунка, моцарела, айсберг, кроасан",
        quantity: "10 бр.",
        priceEur: "23",
        priceBgn: "44.98",
        imageSrc: "/menu/kroasani.png",
        imageAlt: "Мини кроасан",
      },
      {
        name: "Мини тортиля",
        description: "Пилешко филе, крема сирене, айсберг, домат, тортиля",
        quantity: "10 бр.",
        priceEur: "23",
        priceBgn: "44.98",
        imageSrc: "/menu/tortilla.png",
        imageAlt: "Мини тортиля",
      },
      {
        name: "Мини чабата с италиански салам",
        description: "Италиански салам, Филаделфия, айсберг, краставица, чабата",
        quantity: "10 бр.",
        priceEur: "26",
        priceBgn: "50.85",
        imageSrc: "/menu/Mini%20chabata%20s%20proshuto.PNG",
        imageAlt: "Мини чабата с италиански салам",
      },
      {
        name: "Мини чабата с прошуто крудо",
        description: "Прошуто крудо, моцарела, айсберг, домат, чабата",
        quantity: "10 бр.",
        priceEur: "26",
        priceBgn: "50.85",
        imageSrc: "/menu/Mini%20chabata%20s%20proshuto.PNG",
        imageAlt: "Мини чабата с прошуто крудо",
      },
      {
        name: "Мини домашна баница с масло и сирене",
        description: "",
        quantity: "20 бр.",
        priceEur: "20",
        priceBgn: "39.12",
        imageSrc: "/menu/kroasani.png",
        imageAlt: "Мини домашна баница с масло и сирене",
      },
    ],
  },
  {
    title: "Вегетариански и вегански предложения",
    shortTitle: "Веган и вегетариански",
    subtitle: "Леки, свежи и пълноценни варианти без компромис с презентацията.",
    items: [
      {
        name: "Мини вегетариански бургер",
        description: "Гриловано халуми, домат, рукола, песто",
        quantity: "10 бр.",
        priceEur: "25",
        priceBgn: "48.90",
        imageSrc: "/menu/burgeri.png",
        imageAlt: "Мини вегетариански бургер",
      },
      {
        name: "Мини вегетариански кроасан",
        description: "Домашен кашкавал, домат, айсберг",
        quantity: "10 бр.",
        priceEur: "22",
        priceBgn: "43.03",
        imageSrc: "/menu/kroasani.png",
        imageAlt: "Мини вегетариански кроасан",
      },
      {
        name: "Мини веганска чабата",
        description: "Хумус, краставица, домат, айсберг",
        quantity: "10 бр.",
        priceEur: "23",
        priceBgn: "44.98",
        imageSrc: "/menu/Mini%20vegan%20chabata.PNG",
        imageAlt: "Мини веганска чабата",
      },
    ],
  },
  {
    title: "Семейни пици /50см/",
    shortTitle: "Пици",
    subtitle: "Голям формат за споделяне, подходящ за семейни събирания и неформални събития.",
    items: [
      {
        name: "Пица Маргарита",
        description: "Кашкавал, доматен сос, пресен домат",
        quantity: "1 бр.",
        priceEur: "16",
        priceBgn: "31.29",
        imageSrc: "/menu/margarita.jpg",
        imageAlt: "Пица Маргарита",
      },
      {
        name: "Пица Капричоза",
        description: "Шунка, кашкавал, гъби, чушки, доматен сос",
        quantity: "1 бр.",
        priceEur: "17",
        priceBgn: "33.25",
        imageSrc: "/menu/kaprichoza.jpg",
        imageAlt: "Пица Капричоза",
      },
      {
        name: "Пица Пеперони",
        description: "Чоризо, кашкавал, пресни чушки, доматен сос, лют пипер",
        quantity: "1 бр.",
        priceEur: "17",
        priceBgn: "33.25",
        imageSrc: "/menu/peperoni.jpg",
        imageAlt: "Пица Пеперони",
      },
    ],
  },
  {
    title: "Премиум сладки хапки",
    shortTitle: "Сладки хапки",
    subtitle: "Мини десерти за кафе паузи, сладки маси и финален акцент на събитието.",
    items: [
      {
        name: "Мини тарталети с крем брюле и боровинки",
        description: "",
        quantity: "20 бр.",
        priceEur: "22",
        priceBgn: "43.03",
        imageSrc: "/menu/tartaleti.jpg",
        imageAlt: "Мини тарталети с крем брюле и боровинки",
      },
      {
        name: 'Петифури с маскарпоне и шоколад "Нутела"',
        description: "",
        quantity: "20 бр.",
        priceEur: "26",
        priceBgn: "50.85",
        imageSrc: "/sladki.png",
        imageAlt: 'Петифури с маскарпоне и шоколад "Нутела"',
      },
      {
        name: "Чийзкейк с боровинки на петифури",
        description: "",
        quantity: "20 бр.",
        priceEur: "26",
        priceBgn: "50.85",
        imageSrc: "/sladki.png",
        imageAlt: "Чийзкейк с боровинки на петифури",
      },
      {
        name: 'Мини мъфин с шоколад "Нутела"',
        description: "",
        quantity: "20 бр.",
        priceEur: "24",
        priceBgn: "46.94",
        imageSrc: "/menu/minimufinshokolad.jpg",
        imageAlt: 'Мини мъфин с шоколад "Нутела"',
      },
      {
        name: "Мини шоколадово брауни с лешници",
        description: "",
        quantity: "20 бр.",
        priceEur: "32",
        priceBgn: "62.59",
        imageSrc: "/menu/brauni.png",
        imageAlt: "Мини шоколадово брауни с лешници",
      },
    ],
  },
  {
    title: "Кетъринг на плата",
    shortTitle: "Плата",
    subtitle: "Готови сетове за лесно сервиране при офис, частни и празнични поводи.",
    items: [
      {
        name: "Плато Сирена /350гр/",
        description: "Чедър, Гауда, Бри, Ементал, синьо сирене, плодове",
        quantity: "1 бр.",
        priceEur: "16",
        priceBgn: "31.29",
        imageSrc: "/circle-food.png",
        imageAlt: "Плато Сирена 350гр",
      },
      {
        name: "Плато Сирена /800гр/",
        description: "Чедър, Гауда, Бри, Ементал, синьо сирене, плодове",
        quantity: "1 бр.",
        priceEur: "36",
        priceBgn: "70.41",
        imageSrc: "/circle-food.png",
        imageAlt: "Плато Сирена 800гр",
      },
      {
        name: "Плато Меса /350гр/",
        description:
          'Чоризо, Прошуто Крудо, Мортадела, филе "Елена", телешки суджук',
        quantity: "1 бр.",
        priceEur: "22",
        priceBgn: "43.03",
        imageSrc: "/circle-food.png",
        imageAlt: "Плато Меса 350гр",
      },
      {
        name: "Плато Меса /800гр/",
        description:
          'Чоризо, Прошуто Крудо, Мортадела, филе "Елена", телешки суджук',
        quantity: "1 бр.",
        priceEur: "49",
        priceBgn: "95.84",
        imageSrc: "/circle-food.png",
        imageAlt: "Плато Меса 800гр",
      },
      {
        name: "Плато Микс Сирена и Меса /350гр/",
        description:
          "Чоризо, Прошуто Крудо, Мортадела, Чедър, Бри, Ементал, плодове",
        quantity: "1 бр.",
        priceEur: "22",
        priceBgn: "43.03",
        imageSrc: "/circle-food.png",
        imageAlt: "Плато Микс Сирена и Меса 350гр",
      },
      {
        name: "Плато Микс Сирена и Меса /800гр/",
        description:
          "Чоризо, Прошуто Крудо, Мортадела, Чедър, Бри, Ементал, плодове",
        quantity: "1 бр.",
        priceEur: "49",
        priceBgn: "95.84",
        imageSrc: "/circle-food.png",
        imageAlt: "Плато Микс Сирена и Меса 800гр",
      },
      {
        name: "Плато Топли предястия /1200гр/",
        description:
          "Пилешки хапки с корнфлейкс, топени сиренца, кашкавалени хапки",
        quantity: "1 бр.",
        priceEur: "32",
        priceBgn: "62.59",
        imageSrc: "/menu/pileshkipruchici.jpg",
        imageAlt: "Плато Топли предястия 1200гр",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Меню | Attila Catering",
  description: "Разгледайте кетъринг менюто на Attila Catering.",
};

export default function MenuPage() {
  return (
    <main className="flex-grow bg-white">
      <section className="relative overflow-hidden bg-white pb-20 pt-6 sm:pb-24 sm:pt-10">
        <svg
          className="absolute bottom-0 left-0 h-[200px] w-full"
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
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8d6c57]">
              Attila Catering
            </p>
            <div className="mt-5 flex items-center gap-4 sm:gap-6">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#a9856f]" />
              <h1 className="shrink-0 font-serif text-5xl text-[#3f241b] sm:text-6xl">
                Меню
              </h1>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#a9856f]" />
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#715f54]">
              Изберете категория отгоре и разгледайте предложенията за събития,
              коктейли, семейни поводи и готови кетъринг плата.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fcf8f3] pb-20 pt-2 sm:pb-24">
        <div className="site-shell">
          <MenuCategoryTabs sections={menuSections} />
        </div>
      </section>
    </main>
  );
}
