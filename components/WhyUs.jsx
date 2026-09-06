import { Wrench, Accessibility, ParkingSquare, Users } from "lucide-react";
import { amenities } from "@/lib/business";

const icons = [Wrench, Accessibility, ParkingSquare, Users];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-paper py-20 md:py-28">
      <div className="container-shop">
        <p className="plate-number mb-3">03 — On the ground</p>
        <h2 className="text-3xl md:text-4xl font-medium text-charcoal leading-tight mb-12 md:mb-16 max-w-lg">
          A shop that's easy to actually visit.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {amenities.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="border-t-2 border-charcoal pt-5">
                <Icon
                  className="w-6 h-6 text-rust mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-display text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-charcoal/65 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
