import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, UserRoundSearch, BadgeCheck, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-therapy.jpg";
import serviceImage from "@/assets/service-alignment.jpg";
import logo from "@/assets/homepage-logo.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[700px] flex flex-col">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Serene therapy room"
            className="w-full h-full object-cover brightness-[0.92]"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        {/* Centered Logo at Top */}
        <div className="relative z-10 flex justify-center pt-3">
          <img
            src={logo}
            alt="Fingal Amatsu Alignment Clinic"
            className="w-[23rem] md:w-[26rem] h-auto"
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center mt-8 md:mt-0">
          <div className="max-w-2xl">
            <h1 className="text-[2.565rem] md:text-[3.21rem] font-bold mb-6 leading-tight">
              <span style={{ color: '#1F2A24' }}>Postural Alignment,</span>
              <br />
              <span className="text-primary">Natural Healing</span>
            </h1>
            <p className="text-xl mb-8 text-foreground/80">
              Experience the transformative power of Amatsu therapy at Fingal Amatsu Alignment Clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="https://calendar.app.google/vvzdvmDFk5EYb5JK9" target="_blank" rel="noopener noreferrer">
                  Book Your Appointment <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Amatsu Therapy?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A gentle, whole-body approach focused on alignment, movement, and long-term relief
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Whole-Body Alignment</h3>
                <p className="text-muted-foreground">
                  We work with the body as an interconnected system, helping identify and address underlying imbalances rather than focusing on isolated symptoms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserRoundSearch className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Individualised, Person-Centred Care</h3>
                <p className="text-muted-foreground">
                  Every session is adapted to your body, your history, and how you move — with treatment guided by gentle assessment, not force.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BadgeCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Experienced, Qualified Practitioner</h3>
                <p className="text-muted-foreground">
                  Treatments are delivered by a certified Seitai Amatsu practitioner with a focus on postural alignment, movement quality, and nervous system regulation.
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Conditions Amatsu May Support
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Amatsu therapy may help support the body across a wide range of physical concerns and imbalances and is suitable for people of all ages.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Back, neck, and spinal-related discomfort</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Joint, muscle, and postural imbalances</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Sports-related injuries and mobility issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Stress-related tension and whole-body alignment</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/services">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src={serviceImage}
                alt="Amatsu alignment therapy treatment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Amatsu Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your consultation today and learn how Amatsu therapy supports balance, alignment, and overall wellbeing.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="https://calendar.app.google/vvzdvmDFk5EYb5JK9" target="_blank" rel="noopener noreferrer">
              Book Your Appointment <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
