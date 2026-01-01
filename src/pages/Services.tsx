import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Initial Consultation & Assessment",
      duration: "60 minutes",
      description: "Comprehensive evaluation of your health history, current concerns, and treatment goals. Includes first treatment session.",
      benefits: [
        "Detailed health history review",
        "Postural and movement assessment",
        "Personalised treatment plan",
        "First Amatsu treatment session"
      ]
    },
    {
      title: "Amatsu Alignment Therapy",
      duration: "45 minutes",
      description: "Gentle, hands-on treatment working with your body's natural patterns to restore balance and promote healing.",
      benefits: [
        "Soft tissue release techniques",
        "Joint mobilization",
        "Energy balancing",
        "Postural realignment"
      ]
    },
    {
      title: "Sports Injury Treatment",
      duration: "45-60 minutes",
      description: "Specialized care for athletic injuries, helping you recover faster and prevent future issues.",
      benefits: [
        "Injury assessment and treatment",
        "Performance optimization",
        "Injury prevention strategies",
        "Rehabilitation support"
      ]
    },
    {
      title: "Stress & Tension Relief",
      duration: "45 minutes",
      description: "Targeted treatment to release physical and emotional tension stored in the body.",
      benefits: [
        "Deep relaxation techniques",
        "Muscle tension release",
        "Stress pattern identification",
        "Mind-body balance restoration"
      ]
    },
    {
      title: "Pregnancy & Postnatal Care",
      duration: "45 minutes",
      description: "Gentle, safe treatment for expecting mothers and new parents to support body changes and recovery.",
      benefits: [
        "Safe pregnancy support",
        "Pelvic alignment",
        "Postnatal recovery",
        "Pain relief during pregnancy"
      ]
    },
    {
      title: "Pediatric Amatsu",
      duration: "30-45 minutes",
      description: "Specialized treatment for babies and children, addressing developmental and growth-related issues.",
      benefits: [
        "Gentle treatment for all ages",
        "Developmental support",
        "Colic and feeding issues",
        "Growing pains relief"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive Amatsu therapy treatments tailored to your unique needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-semibold">{service.title}</h3>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {service.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What to Expect</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Before Your Session</h3>
                    <p className="text-muted-foreground">
                      Please wear comfortable, loose-fitting clothing. Arrive a few minutes early to complete any necessary paperwork and discuss your health history with your therapist.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">During Treatment</h3>
                    <p className="text-muted-foreground">
                      Amatsu is a gentle, non-invasive therapy. You'll remain clothed throughout the session. Your therapist will use light touch and gentle movements to work with your body's natural patterns.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">After Your Session</h3>
                    <p className="text-muted-foreground">
                      You may feel deeply relaxed or energized. Your therapist will provide aftercare advice and recommend follow-up treatments if needed. Most people notice improvements within 24-48 hours.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Book Your Appointment?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us today to schedule your appointment and begin your journey to natural wellness.
              </p>
              <Button size="lg" asChild>
                <a href="https://calendar.app.google/vvzdvmDFk5EYb5JK9" target="_blank" rel="noopener noreferrer">Book Your Appointment</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
