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
  price: string;
  imageSrc: string;
  imageAlt: string;
};

export const heroContent = {
  eyebrow: "Attila Catering",
  titleFirstLine: "Exceptional",
  titleSecondLine: "Catering Services",
  description:
    "Elegant catering for receptions, private gatherings, and business events with menus built around premium bites, fresh ingredients, and polished presentation.",
  primaryCta: {
    href: "/#contact",
    label: "Get a Quote",
  },
  secondaryCta: {
    href: "/menu",
    label: "Explore Menu",
  },
  imageSrc: "/circle-food.png",
  imageAlt: "Gourmet catering dish",
} as const;

export const heroStats: readonly HomeStat[] = [
  {
    value: "30+",
    label: "Party platters and bite selections",
  },
  {
    value: "Private",
    label: "Weddings, birthdays, and family events",
  },
  {
    value: "Business",
    label: "Corporate meetings and receptions",
  },
] as const;

export const aboutContent = {
  eyebrow: "About Us",
  title: "Welcome to Attila Catering",
  description:
    "We create warm, elegant catering experiences designed around your guests. From compact cocktail menus to generous event platters, we focus on presentation, flavor, and dependable service.",
} as const;

export const qualityPoints: readonly QualityPoint[] = [
  "Fresh ingredients and balanced presentation",
  "Menus adapted to event size and style",
  "Reliable setup for private and corporate occasions",
] as const;

export const aboutFeatureTiles = [
  {
    title: "Event Catering",
    imageSrc: "/food.png",
    imageAlt: "Event Catering",
  },
  {
    title: "Custom Menus",
    imageSrc: "/menu.png",
    imageAlt: "Custom Menus",
  },
  {
    title: "Professional Staff",
    imageSrc: "/staff.png",
    imageAlt: "Professional Staff",
  },
] as const;

export const servicesContent = {
  eyebrow: "Services",
  title: "Catering Designed Around the Occasion",
  description:
    "Flexible service for business and private events, with menus that feel polished, warm, and easy for guests to enjoy.",
} as const;

export const serviceCards: readonly ServiceCard[] = [
  {
    title: "Corporate Catering",
    description:
      "Reliable catering for office events, business receptions, launches, and team celebrations.",
    imageSrc: "/corporatecatering.png",
    imageAlt: "Corporate catering presentation",
  },
  {
    title: "Private Events",
    description:
      "Thoughtful menus and polished service for birthdays, family gatherings, and intimate occasions.",
    imageSrc: "/privateevents.png",
    imageAlt: "Private event catering staff",
  },
  {
    title: "Cocktail Receptions",
    description:
      "Elegant finger food, premium bites, and refined setups designed for stylish social events.",
    imageSrc: "/cocktail.png",
    imageAlt: "Cocktail reception desserts",
  },
  {
    title: "Custom Menus",
    description:
      "Selections tailored to your event format, guest count, and preferred presentation style.",
    imageSrc: "/custommenu.png",
    imageAlt: "Custom menu planning",
  },
] as const;

export const featuredMenuContent = {
  eyebrow: "Featured Menu",
  title: "A Taste of the Menu",
  description:
    "A preview of the dishes guests ask for most, from refined canapes to mini sandwiches and dessert bites.",
  cta: {
    href: "/menu",
    label: "View Full Menu",
  },
} as const;

export const featuredMenuItems: readonly FeaturedMenuItem[] = [
  {
    title: "Salmon Canapes",
    subtitle: "Premium savory bites",
    price: "EUR 39",
    imageSrc: "/menu/hapkisiomga.png",
    imageAlt: "Salmon canapes",
  },
  {
    title: "Mini Burgers",
    subtitle: "Reception favorites",
    price: "EUR 26",
    imageSrc: "/menu/burgeri.png",
    imageAlt: "Mini burgers",
  },
  {
    title: "Prosciutto Ciabatta",
    subtitle: "Mini sandwiches",
    price: "EUR 26",
    imageSrc: "/menu/Mini%20chabata%20s%20proshuto.PNG",
    imageAlt: "Prosciutto ciabatta",
  },
  {
    title: "Chocolate Mini Muffins",
    subtitle: "Sweet finish",
    price: "EUR 24",
    imageSrc: "/menu/minimufinshokolad.jpg",
    imageAlt: "Chocolate mini muffins",
  },
] as const;

export const contactContent = {
  eyebrow: "Contact",
  title: "Planning an Event?",
  description:
    "Tell us your guest count, event type, and preferred menu style. We'll help shape a catering selection that feels right for the occasion.",
} as const;

export const contactCards = [
  {
    title: "Phone",
    value: "088 224 5771",
    href: "tel:0882245771",
  },
  {
    title: "Website",
    value: "attilacatering.bg",
    href: "https://attilacatering.bg",
    external: true,
  },
  {
    title: "Location",
    value: "Sofia, Bulgaria",
  },
] as const;
