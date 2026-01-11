import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import headerLogo from "@/assets/header-logo.png";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={headerLogo} alt="Fingal Amatsu Alignment Clinic" className="h-12 mb-2" />
            <p className="text-sm text-muted-foreground mb-4">
              Professional alignment therapy for natural healing and wellness.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/fingalamatsu?igsh=MTBza3FybmZkMTNzOQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/19hdTnFDkR/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <a
              href="https://www.google.com/search?sca_esv=4a6faef836c9314f&sxsrf=ANbL-n4gJz44mwXXEPPUVmaImQmg2vGRdQ:1768075632083&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOd_OBosd-K-owygjTakzCHsIPYG-wfZcB_TgvIwzM5b3cCUQc-h6gc8zwVKXrtVQZjXnhZZvOyJ-Jz6mS8EM54hC3uj2CPWufPgAKE4RX0e7RgpVzQ%3D%3D&q=Fingal+Amatsu+Alignment+Clinic+Reviews&sa=X&ved=2ahUKEwjr5fH_4oGSAxW0UkEAHZzTJtkQ0bkNegQIIxAE&biw=1024&bih=468&dpr=1.88&aic=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-amber-500 hover:text-amber-600 transition-colors mt-4"
              aria-label="Google Reviews"
            >
              <span className="tracking-tight">★★★★★</span>
              <span className="text-muted-foreground hover:text-primary">Google Reviews</span>
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+353 83 810 5250</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@fingalamatsu.ie</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/LJ6ryDMHG8knn7N27" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Blanchardstown Corporate Park 1, Ballycoolen, Dublin, D15 Y0YW
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Monday: 17:00 - 22:00</li>
              <li>Tuesday: Closed</li>
              <li>Wednesday: 17:00 - 22:00</li>
              <li>Thursday: 17:00 - 22:00</li>
              <li>Friday - Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Fingal Amatsu Alignment Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
