import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
              <p className="text-xl text-muted-foreground">
                Ready to start your journey to wellness? We're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone / Text / WhatsApp</h3>
                        <p className="text-muted-foreground">+353 83 810 5250</p>
                        <p className="text-sm text-muted-foreground mt-2">For inquiries or questions, please message or call us, and we'll get back to you as soon as possible.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">info@fingalamatsu.ie</p>
                        <p className="text-sm text-muted-foreground mt-2">For inquiries, please email us, and we'll respond as soon as possible.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-muted-foreground">Blanchardstown Corporate Park 1</p>
                        <p className="text-muted-foreground">Ballycoolen, Dublin, D15 Y0YW</p>
                        <p className="text-sm text-muted-foreground mt-2">Free parking available directly outside the clinic or at neighbouring buildings.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Opening Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday: 17:00 - 22:00</p>
                          <p>Tuesday: Closed</p>
                          <p>Wednesday: 17:00 - 22:00</p>
                          <p>Thursday: 17:00 - 22:00</p>
                          <p>Friday - Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media Card */}
                <Card className="md:col-span-2">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center gap-6">
                      <span className="text-muted-foreground text-sm">Follow us:</span>
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
                  </CardContent>
                </Card>
              </div>

              {/* Google Maps */}
              <div>
                <h3 className="font-semibold mb-3 text-center">Find Us</h3>
                <div className="rounded-lg overflow-hidden border">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Fingal+Amatsu+Alignment+Clinic,Dublin,Ireland"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Fingal Amatsu Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
