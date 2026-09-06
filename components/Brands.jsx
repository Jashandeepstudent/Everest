import { business } from "@/lib/business";

export default function Brands() {
  return (
    <section className="bg-charcoal-light border-y border-paper/10 py-8">
      <div className="container-shop flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
        <p className="text-paper/50 text-sm shrink-0">Authorized dealer for</p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
          {business.brands.map((brand) => (
            <span
              key={brand}
              className="font-display text-xl md:text-2xl text-paper/80"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
