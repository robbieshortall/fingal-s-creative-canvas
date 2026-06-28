import { useState, FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

// Replace this with your real Formspree form ID once provisioned at https://formspree.io/
// Submissions will be forwarded to info@fingalamatsu.ie
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please email us directly at info@fingalamatsu.ie.");
      }
    } catch {
      setError("Network error. Please email us directly at info@fingalamatsu.ie.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Fingal Amatsu Alignment Clinic</title>
        <meta name="description" content="Get in touch with Fingal Amatsu Alignment Clinic. Call, email, or visit us at Blanchardstown Corporate Park 2, Dublin D15 Y0YW. Book your Amatsu therapy session." />
        <meta property="og:title" content="Contact Us - Fingal Amatsu Alignment Clinic" />
        <meta property="og:description" content="Contact Fingal Amatsu Alignment Clinic in Blanchardstown, Dublin D15 Y0YW. Phone, email, opening hours and directions." />
        <meta property="og:url" content="/contact" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Fingal Amatsu Alignment Clinic",
          "telephone": "+353838105250",
          "email": "info@fingalamatsu.ie",
          "url": "/contact",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "232 Blanchardstown Corporate Park 2",
            "addressLocality": "Ballycoolen, Dublin",
            "postalCode": "D15 Y0YW",
            "addressCountry": "IE"
          },
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Wednesday","Thursday"], "opens": "17:00", "closes": "22:00" }
          ],
          "priceRange": "€70"
        })}</script>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-sage-mist">
        <Navigation />

        <main className="flex-1">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
                <p className="text-xl text-muted-foreground">
                  Get in touch to discuss your structural presentation, query scheduling availability, or plan your visit to our Dublin 15 clinic.
                </p>
              </div>
            </div>
          </section>

          <section className="pb-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
                {/* LEFT COLUMN — Clinical Logistics */}
                <div className="space-y-6">
                  <Card className="shadow-sm">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold text-lg mb-1">Direct Access</h3>
                            <p className="text-sm text-muted-foreground">Tap to call, text, or WhatsApp — messages are welcome.</p>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Phone / Text / WhatsApp</p>
                              <a href="tel:+353838105250" className="text-base font-medium hover:text-primary transition-colors">
                                +353 83 810 5250
                              </a>
                            </div>
                            <div>
                              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Email</p>
                              <a href="mailto:info@fingalamatsu.ie" className="text-base font-medium hover:text-primary transition-colors">
                                info@fingalamatsu.ie
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-sm">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-3">Opening Hours</h3>
                          <p className="text-sm text-muted-foreground mb-3">Specialised evening clinical slots:</p>
                          <div className="space-y-1.5">
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">Monday</span>
                              <span className="text-primary font-semibold">17:00 – 22:00</span>
                            </div>
                            <div className="flex justify-between text-sm text-muted-foreground">
                              <span>Tuesday</span>
                              <span>Closed</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">Wednesday</span>
                              <span className="text-primary font-semibold">17:00 – 22:00</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">Thursday</span>
                              <span className="text-primary font-semibold">17:00 – 22:00</span>
                            </div>
                            <div className="flex justify-between text-sm text-muted-foreground">
                              <span>Friday – Sunday</span>
                              <span>Closed</span>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground/80 italic mt-4 leading-relaxed">
                            Bespoke Scheduling: While our standard clinical hours focus on specialised evening sessions, exceptional early morning or lunchtime appointments can occasionally be accommodated by direct request for complex cases or specific scheduling conflicts. Please contact me directly to discuss framework availability.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-sm">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Clinic Location</h3>
                          <a
                            href="https://maps.app.goo.gl/LJ6ryDMHG8knn7N27"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-base hover:text-primary transition-colors mb-3"
                          >
                            <p>232 Blanchardstown Corporate Park 2</p>
                            <p>Ballycoolen, Dublin, D15 Y0YW</p>
                          </a>
                          <p className="text-sm text-muted-foreground">
                            <strong className="text-foreground">Complimentary, dedicated parking is available directly outside the clinic.</strong>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* RIGHT COLUMN — Inquiry Form */}
                <div>
                  <Card className="shadow-sm h-full">
                    <CardContent className="p-8 md:p-10">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-semibold text-2xl mb-1">Send an Enquiry</h2>
                          <p className="text-sm text-muted-foreground">Your message will be routed directly to our clinical team.</p>
                        </div>
                      </div>

                      {submitted ? (
                        <div className="flex flex-col items-center text-center py-12">
                          <CheckCircle2 className="h-14 w-14 text-primary mb-4" />
                          <p className="text-lg font-medium">
                            Thank you. Your message has been sent to our clinical team, and we will get back to you shortly.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                          <input type="hidden" name="_subject" value="New enquiry from Fingal Amatsu website" />

                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" name="name" type="text" required maxLength={100} placeholder="Your full name" />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" name="email" type="email" required maxLength={255} placeholder="you@example.com" />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" name="phone" type="tel" maxLength={30} placeholder="+353 ..." />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message">Message / Enquiry</Label>
                            <Textarea
                              id="message"
                              name="message"
                              required
                              maxLength={2000}
                              rows={6}
                              placeholder="Briefly describe your structural presentation or scheduling enquiry..."
                            />
                          </div>

                          {error && <p className="text-sm text-destructive">{error}</p>}

                          <Button
                            type="submit"
                            disabled={submitting}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 text-base font-medium"
                          >
                            {submitting ? "Sending..." : "Send Message"}
                          </Button>
                        </form>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Google Map */}
              <div className="max-w-6xl mx-auto mt-10">
                <h3 className="font-semibold mb-3 text-center">Find Us</h3>
                <div className="rounded-lg overflow-hidden border shadow-sm">
                  <iframe
                    src="https://www.google.com/maps?q=Fingal+Amatsu+Alignment+Clinic,+232+Blanchardstown+Corporate+Park+2,+Ballycoolen,+Dublin,+D15+Y0YW&output=embed"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Fingal Amatsu Alignment Clinic, 232 Blanchardstown Corporate Park 2, Ballycoolen, Dublin, D15 Y0YW"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;