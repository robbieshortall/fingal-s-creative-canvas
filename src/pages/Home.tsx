import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Shield, Scale, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-clinic-room.jpg";
import clinicTableAsset from "@/assets/clinic-treatment-table.png.asset.json";
import recoveryRoadmapAsset from "@/assets/recovery-roadmap.png.asset.json";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Fingal Amatsu Alignment Clinic - Natural Therapy Dublin</title>
        <meta name="description" content="Professional Amatsu therapy in Fingal, Dublin. Natural alignment and holistic healing for pain relief, stress, injuries, and wellness. Book your session today." />
        <meta property="og:title" content="Fingal Amatsu Alignment Clinic - Natural Therapy Dublin" />
        <meta property="og:description" content="Professional Amatsu therapy in Fingal, Dublin. Natural alignment and holistic healing for pain relief, stress, injuries, and wellness." />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Fingal Amatsu Alignment Clinic",
          "description": "Professional Amatsu therapy clinic in Fingal, Dublin offering natural alignment and holistic healing.",
          "telephone": "+353838105250",
          "email": "info@fingalamatsu.ie",
          "url": "/",
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
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[700px] flex flex-col">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Fingal Amatsu Alignment Clinic treatment room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center justify-center py-20">
          <div className="w-full max-w-5xl text-center">
            <h1 className="text-[2.15rem] sm:text-[2.6rem] md:text-[2.85rem] lg:text-[3.2rem] font-bold mb-6 leading-[1.05] tracking-tight text-background">
              <span className="block">STOP CHASING SYMPTOMS.</span>
              <span className="block md:whitespace-nowrap">FIX THE POSTURAL FRAMEWORK.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-background/90 leading-relaxed">
              Specialised structural alignment in Dublin 15 for anyone trapped in a loop of chronic stiffness, recurring spasms, alignment issues, and failed short-term relief.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://calendar.app.google/vvzdvmDFk5EYb5JK9" target="_blank" rel="noopener noreferrer">
                  Book Structural Assessment <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/the-method">Explore The Method</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">THE CORE DIFFERENCE: WHY AMATSU WORKS.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Instead of just managing the localised site of pain, Amatsu focuses on your global alignment. By addressing the true root cause, we help your body drop its defensive guard and return to natural, effortless movement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Catching the Culprit</h3>
                <p className="text-muted-foreground">
                  Pain is rarely located where the actual problem lies. We look past the localised symptoms to identify hidden structural blindspots—like a rotated pelvis or old scar tissue—that are forcing your entire framework to collapse.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Signalling Neural Safety</h3>
                <p className="text-muted-foreground">
                  Chronic tension is actually your nervous system frantically bracing in a defensive survival loop. Gentle, precise alignment tells your brain it is safe to drop its guard, allowing deep muscular restrictions to unlock naturally.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Restoring Lasting Balance</h3>
                <p className="text-muted-foreground">
                  Instead of violently forcing joints or aggressively rubbing muscles, we systematically realign your body’s global biomechanics. This resets your passive posture so your body stays balanced long after you leave the clinic.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center text-muted-foreground mt-10 max-w-2xl mx-auto">
            These principles guide every Amatsu session at Fingal Amatsu Alignment Clinic.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-sage-mist">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-1">
                WHAT WE ADDRESS
                <span className="block text-lg md:text-xl font-medium tracking-[0.15em] uppercase text-muted-foreground mt-1 whitespace-nowrap">
                  CLINICAL PRESENTATIONS
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 mt-6">
                Amatsu addresses a wide spectrum of physical restrictions, structural imbalances, and chronic compensation patterns. We regularly work with individuals suffering from:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span><strong>Spinal &amp; Postural Stress:</strong> Lower back spasms, persistent neck tension, and shoulder compression from prolonged sitting or heavy lifting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span><strong>Biomechanical Imbalances:</strong> Pelvic rotations, hip restrictions, and functional leg-length discrepancies affecting alignment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span><strong>Repetitive Strain &amp; Injuries:</strong> Screen-fatigue headaches, joint mobility restrictions, and old injuries that never fully resolved.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span><strong>Nervous System Fatigue:</strong> Chronic full-body stiffness, muscular bracing, and stress-induced physical guarding.</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <a href="https://calendar.app.google/vvzdvmDFk5EYb5JK9" target="_blank" rel="noopener noreferrer">
                  Book Structural Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src={clinicTableAsset.url}
                alt="Fingal Amatsu clinic treatment table with fresh towels"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Roadmap Section */}
      <section className="py-20 bg-roadmap-blend">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">YOUR RECOVERY ROADMAP</h2>
            <p className="text-lg text-muted-foreground">
              We do not believe in open-ended treatment cycles. Your recovery follows a definitive, structured 6-session journey designed to break old compensation patterns and solidify lasting alignment.
            </p>
          </div>
          <div className="max-w-[850px] mx-auto">
            <img
              src={recoveryRoadmapAsset.url}
              alt="Your 6-Session Amatsu Journey: Root cause assessment, neural response check, neuro-integration, pattern holding, fine-tuning, pattern solidification"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            READY TO FIX YOUR FRAMEWORK?
          </h2>
          <p className="text-xl mb-4 max-w-2xl mx-auto opacity-90">
            Book your initial structural assessment and consultation today to uncover the true root cause of your restriction.
          </p>
          <p className="text-lg mb-2 font-medium">
            Session fee: €70 · 30–45 minutes
          </p>
          <p className="text-base mb-8 opacity-80">
            Booking is simple, with no referral required.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://calendar.app.google/vvzdvmDFk5EYb5JK9" target="_blank" rel="noopener noreferrer">
              Book Structural Assessment <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Home;
