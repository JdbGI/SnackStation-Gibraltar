import { useEffect } from "react";
import { IntroProvider } from "@/components/effects/intro";
import SiteShell from "@/components/layout/site-shell";
import About, { Stats } from "@/components/sections/about";
import Benefits from "@/components/sections/benefits";
import Brands from "@/components/sections/brands";
import Contact from "@/components/sections/contact";
import Faq from "@/components/sections/faq";
import FreeOffer from "@/components/sections/free-offer";
import Hero from "@/components/sections/hero";
import Locations from "@/components/sections/locations";
import Offer from "@/components/sections/offer";
import Team from "@/components/sections/team";
import Ticker from "@/components/sections/ticker";
import Why from "@/components/sections/why";
import { BusinessStructuredData } from "@/lib/seo";

export default function Home() {
  // Arriving from another page via /#section: jump there once the page has laid out.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    }, 120);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <IntroProvider>
      <SiteShell>
        <BusinessStructuredData />
        <Hero />
        <Ticker />
        <About />
        <Stats />
        <Team />
        <Brands />
        <Benefits />
        <Why />
        <Offer />
        <FreeOffer />
        <Locations />
        <Faq />
        <Contact />
      </SiteShell>
    </IntroProvider>
  );
}
