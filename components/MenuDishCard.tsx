import Image from "next/image";

type MenuDishCardProps = {
  name: string;
  description: string;
  priceEur: string;
  priceBgn: string;
  imageSrc: string;
  imageAlt: string;
};

export function MenuDishCard({
  name,
  description,
  priceEur,
  priceBgn,
  imageSrc,
  imageAlt,
}: MenuDishCardProps) {
  return (
    <article className="group grid grid-cols-1 gap-5 border-t border-accent/35 py-6 transition-transform duration-300 ease-out first:border-t-0 first:pt-0 hover:-translate-y-1 sm:grid-cols-[168px_minmax(0,1fr)] sm:items-center">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-accent/35 bg-white shadow-[0_18px_50px_rgba(107,46,15,0.08)] transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_26px_60px_rgba(107,46,15,0.16)]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 168px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
        />
      </div>

      <div className="min-w-0">
        <div className="flex items-start justify-between gap-4 border-b border-accent/25 pb-3 transition-colors duration-300 group-hover:border-accent">
          <h2 className="font-serif text-[1.75rem] leading-none text-primary transition-colors duration-300 group-hover:text-primary">
            {name}
          </h2>
          <div className="shrink-0 text-right">
            <p className="text-xl font-medium tracking-[0.08em] text-primary transition-colors duration-300">
              €{priceEur}
            </p>
            <p className="mt-1 text-sm text-site-text/65 transition-colors duration-300">
              {priceBgn} lv
            </p>
          </div>
        </div>

        <p className="pt-4 text-[1.02rem] leading-7 text-site-text/75 transition-colors duration-300">
          {description}
        </p>
      </div>
    </article>
  );
}
