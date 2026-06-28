import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import headerLogo from "@/assets/landscape-logo.png";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "The Method", path: "/the-method" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "FAQs", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={headerLogo} alt="Fingal Amatsu Alignment Clinic" className="h-14 w-auto object-contain shrink-0" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-2 pl-1">
              <a
                href="https://www.instagram.com/fingalamatsu?igsh=MTBza3FybmZkMTNzOQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Instagram className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </a>
              <a
                href="https://www.facebook.com/share/19hdTnFDkR/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Facebook className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </a>
            </div>
            <Button asChild>
              <a href="https://calendar.app.google/vvzdvmDFk5EYb5JK9" target="_blank" rel="noopener noreferrer">Book Your Appointment</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 py-2">
              <a
                href="https://www.instagram.com/fingalamatsu?igsh=MTBza3FybmZkMTNzOQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.75} />
              </a>
              <a
                href="https://www.facebook.com/share/19hdTnFDkR/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" strokeWidth={1.75} />
              </a>
            </div>
            <Button asChild className="w-full mt-2">
              <a href="https://calendar.app.google/vvzdvmDFk5EYb5JK9" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                Book Your Appointment
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
