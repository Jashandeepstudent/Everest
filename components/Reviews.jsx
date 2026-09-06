import { Star } from "lucide-react";
import { business, reviews } from "@/lib/business";

function StarRow({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-brass text-brass" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-paper py-20 md:py-28">
      <div className="container-shop">
        <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-10 md:gap-16 mb-12 md:mb-16">
          <div>
            <p className="plate-number mb-3">05 — Word of mouth</p>
            <h2 className="text-3xl md:text-4xl font-medium text-charcoal leading-tight">
              What customers say after.
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <p className="font-display text-6xl md:text-7xl text-charcoal leading-none">
              {business.rating}
            </p>
            <div>
              <StarRow count={5} />
              <p className="text-charcoal/60 text-sm mt-2">
                From {business.reviewCount} Google reviews
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-charcoal p-6 md:p-7 rounded-sm flex flex-col"
            >
              <StarRow count={review.rating} />
              <p className="text-paper/80 leading-relaxed mt-4 flex-1">
                "{review.text}"
              </p>
              <p className="text-brass font-display mt-6">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
