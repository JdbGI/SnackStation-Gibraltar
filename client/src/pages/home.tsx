import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Benefits from "@/components/sections/benefits";
import Offer from "@/components/sections/offer";
import Locations from "@/components/sections/locations";
import Brands from "@/components/sections/brands";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Brands />
        <Benefits />
        <Locations />
        <Offer />
        <Contact />
      </main>
    </div>
  );
}