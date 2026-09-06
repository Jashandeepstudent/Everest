import { MapPin, Clock, Phone } from "lucide-react";
import { business } from "@/lib/business";

export default function Visit() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    business.mapsQuery
  )}&output=embed`;

  return (
    <section id="visit" className="bg-charcoal py-20 md:py-28">
      <div className="container-shop grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16">
        <div>
          <p className="plate-number mb-3">07 — Find us</p>
          <h2 className="text-3xl md:text-4xl font-medium text-paper leading-tight mb-8">
            Right on the highway.
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-brass shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <p className="text-paper/90">{business.address.line1}</p>
                <p className="text-paper/90">{business.address.line2}</p>
                <p className="text-paper/60 text-sm">{business.address.line3}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-brass shrink-0 mt-1" strokeWidth={1.5} />
              <p className="text-paper/90">{business.hours}</p>
            </div>

            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-brass shrink-0 mt-1" strokeWidth={1.5} />
              <a
                href={business.phoneHref}
                className="text-paper/90 hover:text-brass transition-colors"
              >
                {business.phone}
              </a>
            </div>
          </div>

          <a
            href={business.phoneHref}
            className="mt-10 inline-flex items-center gap-2 bg-brass hover:bg-brass-light text-charcoal font-medium px-6 py-3.5 rounded-sm transition-all hover:scale-[1.03]"
          >
            <Phone className="w-4 h-4" strokeWidth={2} />
            Call ahead
          </a>
        </div>

        <div className="aspect-[4/3] md:aspect-auto rounded-sm overflow-hidden border border-paper/10">
          <iframe
            src={mapSrc}
            title="Everest Trading Co. location map"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "360px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
