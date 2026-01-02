import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Amatsu Alignment Therapy</h1>
              <div className="text-xl text-muted-foreground space-y-4">
                <p>
                  Amatsu Alignment Therapy is a gentle, non-invasive Japanese therapy that focuses on restoring the body's natural alignment and movement patterns. Each session involves a full-body assessment and light-touch techniques designed to support balance, reduce strain, and help the body function more efficiently as a whole.
                </p>
                <p>
                  Amatsu is not intended to be painful, and techniques are applied gently, with constant attention to comfort and individual tolerance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What to Expect</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Before Your Session</h3>
                    <div className="text-muted-foreground space-y-3">
                      <p>
                        Please wear comfortable clothing that allows ease of movement. You will remain fully clothed throughout the treatment.
                      </p>
                      <p>
                        Please arrive a few minutes early for your first appointment to complete a brief health history form and discuss your goals or any concerns before treatment begins.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">During Your Session</h3>
                    <div className="text-muted-foreground space-y-3">
                      <p>
                        Amatsu is a gentle, non-invasive therapy that uses light touch and subtle movements to work with the body's natural alignment and nervous system.
                      </p>
                      <p>
                        Your session will involve a full-body assessment, including gentle muscle testing, to identify areas of imbalance. Treatment is tailored to you and is never forced or painful. Most clients find the experience deeply relaxing.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">After Your Session</h3>
                    <div className="text-muted-foreground space-y-3">
                      <p>
                        People respond to Amatsu in different ways. Some notice changes immediately, while others feel improvements unfold over the following 24–48 hours. It's common to feel more upright, relaxed, lighter in movement, or more aware of how your body is holding itself.
                      </p>
                      <p>
                        As the body adapts to these changes, you may occasionally experience mild achiness or fatigue. This is a normal part of the adjustment process as old patterns release.
                      </p>
                      <p>
                        Your practitioner will offer simple aftercare guidance and discuss whether follow-up sessions are recommended. Sharing how you feel after treatment helps guide your ongoing care.
                      </p>
                      <p>Aftercare recommendations typically include:</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Drinking plenty of water</li>
                        <li>Staying gently mobile (e.g. a short walk)</li>
                        <li>Avoiding strenuous exercise for 24 hours</li>
                        <li>Being mindful of postures that may have contributed to discomfort</li>
                        <li>Allowing your body time to rest and integrate the changes</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Tabbed Section - All content in DOM for SEO */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Conditions Amatsu Therapy Can Support</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Amatsu therapy may help support the body where pain, discomfort, or restricted movement is present.
            </p>
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === index
                      ? "bg-primary text-primary-foreground"
                      : "bg-background hover:bg-muted border border-border"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            {/* Tab Content - All panels remain in DOM, visibility toggled with CSS */}
            <div className="max-w-3xl mx-auto">
              {services.map((service, index) => (
                <article
                  key={index}
                  className={`transition-opacity duration-300 ${
                    activeTab === index
                      ? "block opacity-100"
                      : "hidden"
                  }`}
                  aria-hidden={activeTab !== index}
                >
                  <Card className="border-2">
                    <CardContent className="p-8">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                        <h3 className="text-2xl font-semibold">{service.title}</h3>
                        <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full whitespace-nowrap">
                          {service.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-lg mb-8">{service.description}</p>
                      <div className="space-y-4">
                        <h4 className="font-medium text-lg">What's Included:</h4>
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>

            {/* Hidden SEO content - All service details always in DOM */}
            <div className="sr-only">
              {services.map((service, index) => (
                <article key={`seo-${index}`}>
                  <h3>{service.title}</h3>
                  <p>Duration: {service.duration}</p>
                  <p>{service.description}</p>
                  <ul>
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </article>
              ))}
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
