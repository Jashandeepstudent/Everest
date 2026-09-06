import Image from "next/image";
import { Phone, MapPin, Star } from "lucide-react";
import { business } from "@/lib/business";

export default function Hero() {
  return (
    <section id="top" className="relative bg-charcoal pt-16 md:pt-20 overflow-hidden">
      <div className="container-shop grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-center py-16 md:py-24">
        <div className="rise-in">
          <p className="plate-number mb-4">
            Gandhi Nagar, Jammu — since the highway was two lanes
          </p>
          <h1 className="text-4xl md:text-6xl leading-[1.05] text-paper font-medium">
            Pumps that get
            <br />
            water where
            <br />
            you need it.
          </h1>
          <p className="mt-6 text-paper/70 text-lg max-w-md leading-relaxed">
            Diesel sets, submersibles, and induction motors from Kirloskar and
            Stihl — sold, installed, and repaired by people who know what's
            inside them.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 bg-brass hover:bg-brass-light text-charcoal font-medium px-6 py-3.5 rounded-sm transition-all hover:scale-[1.03]"
            >
              <Phone className="w-4 h-4" strokeWidth={2} />
              Call {business.phone}
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-2 border border-paper/30 hover:border-brass text-paper px-6 py-3.5 rounded-sm transition-colors"
            >
              <MapPin className="w-4 h-4" strokeWidth={2} />
              Get directions
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-paper/60 text-sm">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-brass text-brass"
                  strokeWidth={0}
                />
              ))}
            </div>
            <span>
              {business.rating} rating from {business.reviewCount} Google
              reviews
            </span>
          </div>
        </div>

        <div className="relative rise-in" style={{ animationDelay: "0.15s" }}>
          <div className="absolute -inset-4 border border-brass/30 rounded-sm pointer-events-none" />
          <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden">
            <Image
              src="/images/storefront.jpeg"
              alt="Everest Trading Co. storefront on National Highway, Jammu, with Kirloskar and Stihl signage"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-brass text-charcoal px-5 py-3 rounded-sm shadow-xl hidden sm:block">
            <p className="font-display text-2xl leading-none">
              {business.rating}
            </p>
            <p className="text-xs mt-1">
              {business.reviewCount} reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
