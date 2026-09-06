import { Phone } from "lucide-react";
import { business } from "@/lib/business";

export default function CTABanner() {
  return (
    <section className="bg-rust py-16 md:py-20">
      <div className="container-shop flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="text-2xl md:text-3xl font-medium text-paper text-center md:text-left max-w-md leading-snug">
          Have a pump acting up, or need one installed this week?
        </h2>
        <a
          href={business.phoneHref}
          className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-light text-paper font-medium px-7 py-4 rounded-sm transition-all hover:scale-[1.03] shrink-0"
        >
          <Phone className="w-4 h-4" strokeWidth={2} />
          Call {business.phone}
        </a>
      </div>
    </section>
  );
}
