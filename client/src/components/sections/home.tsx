import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Offer from "@/components/sections/offer";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Offer />
        <Contact />
      </main>
      <footer className="py-4 text-center text-sm text-muted-foreground border-t">
        <p>
          © Superfoods Limited • Website built by{" "}
          <a 
            href="https://www.barton.gi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Barton Solutions
          </a>
        </p>
      </footer>
    </div>
  );
}
