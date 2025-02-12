import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { SiWhatsapp } from "react-icons/si";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Benefits", href: "#benefits" },
    { label: "Our Models", href: "#offer" },
    { label: "Locations", href: "#locations" },
    { label: "Contact", href: "#contact" },
  ];

  const whatsappLink = "https://wa.me/35054004002";

  return (
    <nav className="fixed w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center">
            <img 
              src="https://www.barton.gi/wp-content/uploads/2025/02/Asset-2@3xPink.png" 
              alt="SnackStation" 
              className="h-8 w-auto"
            />
          </a>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="hidden md:flex"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="h-5 w-5 text-green-600" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 text-green-600 hover:text-green-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <SiWhatsapp className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}