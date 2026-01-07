import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael S.",
      location: "Upper back pain & posture",
      rating: 5,
      heading: "Upper back pain resolved & posture improved",
      text: "I have had a great experience with Robbie at Fingal Amatsu Clinic. Robbie helped me resolve ongoing upper back pain and improved my posture. He was professional, knowledgeable, and took the time to explain what was going on and how to address it. I noticed real improvements quickly and would highly recommend him.",
      condition: "Google Review",
      isGoogleReview: true
    },
    {
      name: "Ilario D.",
      location: "Postural alignment (hips & shoulders)",
      rating: 5,
      heading: "Lasting posture correction from desk & driving",
      text: "I want to highly recommend Robbie's work. I had been misaligned from my day-to-day job, driving and a slouched posture. Robbie was able to get to the bottom of the problem and made me consciously aware of my posture post-treatment. My body responded very well, and even after longer pauses between sessions, I retained the corrections.",
      condition: "Google Review",
      isGoogleReview: true
    },
    {
      name: "Niamh H.",
      location: "Chronic back & neck pain, stress-related tension",
      rating: 5,
      heading: "Life-changing support for chronic back & neck pain",
      text: "As someone who has struggled with severe back and neck issues, Amatsu has truly changed my life for the better. These sessions helped me become more aware of when my body is out of balance. Regular sessions improved my posture, and I haven't experienced a return of severe pain episodes since.\n\nI also sleep better after treatments because I find them deeply relaxing, and my stress-related aches have eased significantly. Overall, the therapy has greatly improved my ability to manage pain and boosted my overall health and wellbeing.",
      condition: "Google Review",
      isGoogleReview: true
    },
    {
      name: "Conor M.",
      location: "Achilles injury & mobility",
      rating: 5,
      heading: "Achilles injury recovery & full-body improvement",
      text: "I highly recommend Robbie. I had been struggling with a persistent Achilles injury and decided to give Amatsu a try since other treatments weren't delivering results. Robbie's approach made a massive difference — not just to my Achilles, but to my overall mobility and posture. I felt a huge improvement in how my body moved in general.",
      condition: "Google Review",
      isGoogleReview: true
    },
    {
      name: "Gavin B.",
      location: "Mobility & alignment",
      rating: 5,
      heading: "Improved mobility and body awareness",
      text: "Visited Robbie for a number of sessions over the last year. Very professional in his approach. He was able to pinpoint specific alignment issues and rectify them for me. I would highly recommend a session to anyone looking to improve their overall mobility and connection to their body.",
      condition: "Google Review",
      isGoogleReview: true
    },
    {
      name: "Earth K.",
      location: "Postural imbalance",
      rating: 5,
      heading: "Posture awareness & long-term improvement",
      text: "Could not recommend Robbie's work enough. I was misaligned from my day-to-day job and slouched posture. Robbie was able to identify the root cause and made me more consciously aware of my posture after treatment.",
      condition: "Google Review",
      isGoogleReview: true
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Genuine reviews from clients who have experienced Amatsu therapy at Fingal Amatsu Alignment Clinic
              </p>
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-semibold">Rated 5.0 on Google</p>
                <p className="text-sm text-muted-foreground">Based on verified client reviews</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    {testimonial.heading && (
                      <h3 className="font-semibold text-lg mb-3">{testimonial.heading}</h3>
                    )}
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      <p className="text-sm text-primary mt-1 flex items-center gap-1">
                        {testimonial.isGoogleReview && <CheckCircle className="h-4 w-4" />}
                        {testimonial.condition}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Own Amatsu Journey?</h2>
              <p className="text-lg opacity-90 mb-8">
                Book your appointment online at a time that suits you, or get in touch if you'd like to ask a question before booking.
              </p>
              <Button size="lg" variant="secondary" asChild>
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

export default Testimonials;
