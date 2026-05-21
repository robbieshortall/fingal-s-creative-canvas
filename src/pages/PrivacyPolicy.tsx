import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy & Cookie Policy | Fingal Amatsu Alignment Clinic</title>
        <meta
          name="description"
          content="Read the Privacy & Cookie Policy of Fingal Amatsu Alignment Clinic. We keep data practices minimal, secure, and GDPR-compliant."
        />
        <link rel="canonical" href="https://www.fingalamatsu.ie/privacy-policy" />
      </Helmet>

      <Navigation />

      <main className="flex-1 bg-muted/30">
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
              <Link to="/" aria-label="Back to home">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>

            <header className="mb-10 pb-6 border-b">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                Privacy & Cookie Policy
              </h1>
              <p className="text-sm text-muted-foreground">Last Updated: May 2026</p>
            </header>

            <article className="bg-background rounded-lg border p-6 md:p-10 space-y-8 leading-relaxed text-foreground/90">
              <p>
                At Fingal Amatsu Alignment Clinic, we value your privacy and believe in absolute
                transparency. This policy outlines how we handle data on our website
                (www.fingalamatsu.ie). Because we operate a client-centered clinic, we do not engage
                in invasive tracking, and we keep our data practices as minimal and secure as
                possible.
              </p>

              <section className="space-y-3">
                <h2 className="text-xl md:text-2xl font-semibold text-primary">
                  1. Information We Collect & How We Use It
                </h2>
                <p>
                  <strong>Direct Contact:</strong> If you contact us via email, phone, or the
                  floating WhatsApp widget, we use the information you provide (such as your name,
                  phone number, or email address) strictly to respond to your inquiry and manage
                  your clinic bookings.
                </p>
                <p>
                  <strong>Clinic Bookings:</strong> Our online appointment booking process utilizes
                  a secure external form. Data collected during booking is used solely for clinical
                  scheduling, treatment history assessment, and essential communication regarding
                  your appointments.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl md:text-2xl font-semibold text-primary">
                  2. Cookie Policy (No Marketing Tracking)
                </h2>
                <p>
                  We do not use tracking, advertising, or marketing cookies (such as Google
                  Analytics or Meta Pixels) on this website. The only cookies utilized on our site
                  fall under two categories:
                </p>
                <p>
                  <strong>Essential/Functional Cookies:</strong> These are mandatory technical
                  cookies dropped by our hosting platform to ensure the website loads safely, stays
                  secure, and operates smoothly.
                </p>
                <p>
                  <strong>Third-Party Widgets:</strong> Our floating WhatsApp button connects
                  directly to Meta infrastructure to allow you to message the clinic instantly. This
                  feature may use functional local storage to perform correctly.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl md:text-2xl font-semibold text-primary">
                  3. Data Storage & Security
                </h2>
                <p>
                  We take data security seriously. Your professional interaction details and
                  clinical intake information are held confidentially and securely. We never sell,
                  rent, or distribute your personal details to third parties.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl md:text-2xl font-semibold text-primary">4. Your Rights</h2>
                <p>
                  Under GDPR regulations, you have full rights regarding your data. At any point,
                  you can request to view the contact data we hold for you, request corrections, or
                  request that your contact details be permanently deleted from our communication
                  logs.
                </p>
                <p>
                  For any privacy-related questions, please contact us directly at{" "}
                  <a
                    href="mailto:info@fingalamatsu.ie"
                    className="text-primary underline hover:text-primary/80"
                  >
                    info@fingalamatsu.ie
                  </a>
                  .
                </p>
              </section>
            </article>

            <div className="mt-10 text-center">
              <Button asChild variant="outline">
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;