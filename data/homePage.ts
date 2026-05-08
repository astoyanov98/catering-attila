export type HomeStat = {
  value: string;
  label: string;
};

export type QualityPoint = string;

export type ServiceCard = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type FeaturedMenuItem = {
  title: string;
  subtitle: string;
  description: string;
  quantity: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
};

export const heroContent = {
  eyebrow: "Attila Catering",
  titleFirstLine: "Премиум",
  titleSecondLine: "Кетъринг услуги",
  description:
    "Елегантен кетъринг за приеми, частни събития и бизнес поводи с менюта от премиум хапки, свежи продукти и прецизна презентация.",
  primaryCta: {
    href: "/contact",
    label: "Направете запитване",
  },
  secondaryCta: {
    href: "/menu",
    label: "Вижте менюто",
  },
  imageSrc: "/circle-food.svg",
  imageAlt: "Гурме кетъринг плато",
} as const;

export const heroStats: readonly HomeStat[] = [
  {
    value: "30+",
    label: "Плата и селекции от хапки",
  },
  {
    value: "Частни",
    label: "Сватби, рождени дни и семейни събития",
  },
  {
    value: "Бизнес",
    label: "Корпоративни срещи и приеми",
  },
] as const;

export const aboutContent = {
  eyebrow: "За нас",
  title: "Добре дошли в Attila Catering",
  description:
    "Създаваме топли и елегантни кетъринг преживявания според вашите гости и повод. От компактни коктейлни менюта до богати плата за събития, фокусът ни е върху презентация, вкус и надеждно обслужване.",
} as const;

export const qualityPoints: readonly QualityPoint[] = [
  "Свежи продукти и балансирана презентация",
  "Менюта според размера и стила на събитието",
  "Надеждна организация за частни и корпоративни поводи",
] as const;

export const aboutFeatureTiles = [
  {
    title: "Кетъринг за събития",
    imageSrc: "/food.png",
    imageAlt: "Кетъринг за събития",
  },
  {
    title: "Персонални менюта",
    imageSrc: "/menu.png",
    imageAlt: "Персонални менюта",
  },
  {
    title: "Професионален екип",
    imageSrc: "/staff.png",
    imageAlt: "Професионален екип",
  },
] as const;

export const servicesContent = {
  eyebrow: "Услуги",
  title: "Кетъринг, съобразен с повода",
  description:
    "Гъвкаво обслужване за бизнес и частни събития с менюта, които са стилни, балансирани и удобни за гостите.",
} as const;

export const serviceCards: readonly ServiceCard[] = [
  {
    title: "Корпоративен кетъринг",
    description:
      "Надежден кетъринг за офис събития, бизнес приеми, представяния и екипни празници.",
    imageSrc: "/corporatecatering.png",
    imageAlt: "Корпоративна кетъринг презентация",
  },
  {
    title: "Частни събития",
    description:
      "Подбрани менюта и стилно обслужване за рождени дни, семейни събирания и лични поводи.",
    imageSrc: "/privateevents.png",
    imageAlt: "Кетъринг екип за частно събитие",
  },
  {
    title: "Коктейлни приеми",
    description:
      "Елегантни хапки, премиум селекции и прецизна подредба за стилни социални събития.",
    imageSrc: "/cocktail.png",
    imageAlt: "Десерти за коктейлен прием",
  },
  {
    title: "Персонални менюта",
    description:
      "Селекции според формата на събитието, броя гости и предпочитания стил на сервиране.",
    imageSrc: "/custommenu.png",
    imageAlt: "Планиране на персонално меню",
  },
] as const;

export const featuredMenuContent = {
  eyebrow: "Избрано меню",
  title: "Акценти от менюто",
  description:
    "Кратка селекция от най-търсените предложения, от премиум хапки до мини сандвичи и сладки десерти.",
  cta: {
    href: "/menu",
    label: "Вижте цялото меню",
  },
} as const;

export const featuredMenuItems: readonly FeaturedMenuItem[] = [
  {
    title: "Хапки със сьомга",
    subtitle: "Премиум солени хапки",
    description:
      "Пушена сьомга с Филаделфия върху канапе от многозърнесто хлебче. Подходящо за коктейлни приеми, бизнес събития и елегантни плата.",
    quantity: "30 бр.",
    price: "€39",
    imageSrc: "/menu/hapkisiomga.png",
    imageAlt: "Хапки със сьомга",
  },
  {
    title: "Мини бургери",
    subtitle: "Любими за събития",
    description:
      "Мини бургери с телешко кюфте, чедър, кисели краставички и карамелизиран лук. Компактна и засищаща селекция за гости.",
    quantity: "10 бр.",
    price: "€26",
    imageSrc: "/menu/burgeri.png",
    imageAlt: "Мини бургери",
  },
  {
    title: "Чабата с прошуто",
    subtitle: "Мини сандвичи",
    description:
      "Мини чабата с прошуто крудо, моцарела, айсберг и домат. Балансиран избор за смесени плата и офис събития.",
    quantity: "10 бр.",
    price: "€26",
    imageSrc: "/menu/Mini%20chabata%20s%20proshuto.PNG",
    imageAlt: "Чабата с прошуто",
  },
  {
    title: "Шоколадови мини мъфини",
    subtitle: "Сладък финал",
    description:
      "Мини мъфин с шоколад Нутела. Подходящ за сладка маса, кафе пауза и финален акцент след солените предложения.",
    quantity: "20 бр.",
    price: "€24",
    imageSrc: "/menu/minimufinshokolad.jpg",
    imageAlt: "Шоколадови мини мъфини",
  },
] as const;

export const contactContent = {
  eyebrow: "Контакт",
  title: "Планирате събитие?",
  description:
    "Споделете броя гости, вида на събитието и предпочитания стил на менюто. Ще ви помогнем да подберете кетъринг селекция, подходяща за повода.",
} as const;

export const contactCards = [
  {
    title: "Телефон",
    value: "088 224 5771",
    href: "tel:0882245771",
  },
  {
    title: "Уебсайт",
    value: "attilacatering.bg",
    href: "https://attilacatering.bg",
    external: true,
  },
  {
    title: "Локация",
    value: "София, България",
  },
] as const;
