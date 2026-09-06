export default function About() {
  return (
    <section id="about" className="bg-paper py-20 md:py-28">
      <div className="container-shop grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16">
        <div>
          <p className="plate-number mb-3">01 — About</p>
          <h2 className="text-3xl md:text-4xl font-medium text-charcoal leading-tight">
            Counter service, not call-center service.
          </h2>
        </div>
        <div className="space-y-5 text-charcoal/75 text-lg leading-relaxed max-w-prose">
          <p>
            Everest Trading Company sits on the National Highway in Gandhi
            Nagar, stocked floor to ceiling with pumps, motors, and the parts
            that keep them running. It's a small shop with a full catalog —
            diesel sets for the field, submersibles for the rooftop tank,
            induction motors for the workshop.
          </p>
          <p>
            Every pump that leaves the counter can come back for service. If
            something needs fixing, bring it in and someone who understands
            the machine will look at it — not a script.
          </p>
          <p>
            The shop is wheelchair accessible, has a hearing loop for
            customers who need one, and welcomes everyone who walks through
            the door.
          </p>
        </div>
      </div>
    </section>
  );
}
