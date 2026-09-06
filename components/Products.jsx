import Image from "next/image";
import { products } from "@/lib/business";

export default function Products() {
  return (
    <section id="products" className="bg-charcoal py-20 md:py-28">
      <div className="container-shop">
        <div className="flex items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="plate-number mb-3">02 — Catalog</p>
            <h2 className="text-3xl md:text-4xl font-medium text-paper leading-tight max-w-lg">
              What's on the floor right now.
            </h2>
          </div>
          <p className="hidden md:block text-paper/50 text-sm max-w-[22ch]">
            A working sample — call ahead to confirm stock on a specific
            model.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-paper/10">
          {products.map((product) => (
            <div key={product.id} className="bg-charcoal p-6 md:p-8">
              <div className="relative aspect-[4/3] mb-6 rounded-sm overflow-hidden bg-charcoal-light">
                <Image
                  src={product.image}
                  alt={`${product.name} — ${product.spec}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="object-contain p-4"
                />
              </div>
              <p className="text-brass text-xs tracking-wide uppercase mb-2">
                {product.useCase}
              </p>
              <h3 className="text-xl text-paper font-display mb-1">
                {product.name}
              </h3>
              <p className="text-paper/40 text-sm mb-3">{product.spec}</p>
              <p className="text-paper/65 leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
