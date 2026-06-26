import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Heart, Shield, Award, BookOpen, ShieldCheck } from "lucide-react";

import aboutHeroAsset from "@/assets/about-hero-clinic.jpg.asset.json";
import practitionerHeadshot from "@/assets/practitioner-headshot.png";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Fingal Amatsu Alignment Clinic</title>
        <meta name="description" content="Learn about Robbie and Fingal Amatsu Alignment Clinic. Discover our approach to Amatsu therapy, natural alignment, and holistic healing in Dublin." />
        <meta property="og:title" content="About Us - Fingal Amatsu Alignment Clinic" />
        <meta property="og:description" content="Learn about Robbie and Fingal Amatsu Alignment Clinic. Our approach to Amatsu therapy and holistic healing in Dublin." />
        <meta property="og:url" content="/about" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about" />
      </Helmet>
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">THE FOUNDER'S JOURNEY</h1>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
                <img
                  src={aboutHeroAsset.url}
                  alt="Fingal Amatsu Alignment Clinic treatment room with standing desk and warm lighting"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl text-muted-foreground">
                Founded by a patient who exhausted every traditional treatment, Fingal Amatsu Alignment Clinic exists to provide a definitive, structural solution to chronic pain and physical restriction.
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">From Chronic Pain to Lasting Alignment</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In 2009, a serious car accident completely disrupted my life, leaving me with severe, ongoing back issues and a heavy reliance on daily painkillers. Several times a year, my lower back would lock into blinding spasms, leaving me immobilised on the living room floor for weeks at a time. For six years, I cycled through traditional therapies and rehabilitation programmes, but any relief was short-lived. The physical stress heavily impacted my career, my family life, and my ability to stay active.
                </p>
                <p>
                  In 2015, a friend recommended Amatsu. Though deeply sceptical after years of failed treatments, I was willing to try anything. From my very first sessions, I felt a profound mechanical shift. My body was finally dropping its defensive guard and stabilising. Gradually, I was able to space out my appointments, stop the painkillers, and return to a highly active life in the gym and on the golf course.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Man Behind the Method */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
                <div className="flex justify-center md:justify-start">
                  <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                    <img
                      src={practitionerHeadshot}
                      alt="Amatsu practitioner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6">The Man Behind the Method</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Experiencing that total physical recovery transformed my path. I chose to formally retrain and qualify as a Seitai-level Amatsu practitioner through the Institute of Amatsu (IOA), becoming a registered member of Amatsu Therapy International (ATI).
                    </p>
                    <p>
                      Before launching the clinic, I spent years building a corporate career as an IT Portfolio Manager. This background is my secret weapon as a practitioner: I spent decades sitting at desks, managing high-stress portfolios, and experiencing the exact physical compression, postural collapse, and repetitive strain that my clients face every day. I built this clinic right here in the corporate park to deliver real-world, long-term physical resilience to anyone trapped in a loop of failed short-term relief.
                    </p>
                    <p>
                      Outside the clinic, I'm based in Dublin 15, married with three children, and share my home with two adopted German Shepherds. I am a keen golfer, a Formula 1 fan, and always open to a chat during our sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-sage-mist">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="h-full">
                <CardContent className="p-6">
                  <Layers className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-3">Global Framework Focus</h3>
                  <p className="text-muted-foreground">
                    We treat the body as a single, interconnected mechanical system, identifying hidden imbalances rather than just managing localised symptoms.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="p-6">
                  <Heart className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-3">Personalised Care</h3>
                  <p className="text-muted-foreground">
                    Every structural assessment is tailored precisely to your history, your daily physical habits, and your unique nervous system response.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="p-6">
                  <Shield className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-3">Neural Safety</h3>
                  <p className="text-muted-foreground">
                    We use gentle, intentional alignment rather than violent force to signal safety to your brain, allowing deep-seated tension to unlock naturally.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Qualifications & Training</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Certified Amatsu Practitioner</h3>
                    <p className="text-muted-foreground">
                      Fully qualified Seitai-level Amatsu therapist (IOA) and registered member of Amatsu Therapy International (ATI), committed to the highest professional standards.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Continuing Professional Development</h3>
                    <p className="text-muted-foreground">
                      We regularly attend advanced training courses and workshops to stay current with the latest techniques and research in holistic therapy.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Professional Insurance</h3>
                    <p className="text-muted-foreground">
                      Fully insured and registered practitioner ensuring your safety and peace of mind during treatment.
                    </p>
                  </CardContent>
                </Card>
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

export default About;
