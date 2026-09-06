import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import About from "@/components/About";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Brands />
      <About />
      <Products />
      <WhyUs />
      <Process />
      <Reviews />
      <FAQ />
      <CTABanner />
      <Visit />
      <Footer />
    </main>
  );
}
