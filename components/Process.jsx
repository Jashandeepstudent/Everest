const steps = [
  {
    step: "1",
    title: "Bring it in or call ahead",
    detail:
      "Describe the problem or the job on the phone, or bring the pump straight to the counter.",
  },
  {
    step: "2",
    title: "We look at it with you there",
    detail:
      "No drop-off-and-wait. You'll hear what's wrong and what it costs before anything's opened up.",
  },
  {
    step: "3",
    title: "Repair, replace, or install",
    detail:
      "Parts in stock get fitted same-day where possible. New installs are scheduled around your site.",
  },
  {
    step: "4",
    title: "It's covered after the sale",
    detail:
      "Come back if something's off. The relationship doesn't end at the till.",
  },
];

export default function Process() {
  return (
    <section className="bg-charcoal py-20 md:py-28">
      <div className="container-shop">
        <p className="plate-number mb-3">04 — How a visit goes</p>
        <h2 className="text-3xl md:text-4xl font-medium text-paper leading-tight mb-12 md:mb-16 max-w-lg">
          From a call to a working pump.
        </h2>

        <div className="grid md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-display text-4xl text-brass leading-none">
                  {s.step}
                </span>
                {i < steps.length - 1 && (
                  <span className="hidden md:block flex-1 h-px bg-paper/15 ml-2" />
                )}
              </div>
              <h3 className="text-lg font-display text-paper mb-2">
                {s.title}
              </h3>
              <p className="text-paper/60 leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
