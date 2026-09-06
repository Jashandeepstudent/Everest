import { business } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="bg-charcoal-light border-t border-paper/10 py-10">
      <div className="container-shop flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-lg text-paper">Everest</span>
          <span className="text-xs tracking-wide text-brass uppercase">
            Trading Co.
          </span>
        </div>
        <p className="text-paper/40 text-sm text-center sm:text-right">
          © {new Date().getFullYear()} {business.legalName} · GST{" "}
          {business.gst}
        </p>
      </div>
    </footer>
  );
}
