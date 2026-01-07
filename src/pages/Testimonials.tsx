import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
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
      name: "Michael O.",
      location: "Swords",
      rating: 5,
      text: "I was skeptical at first, but the results speak for themselves. My sports injury recovery was significantly faster than expected, and I've been able to return to training with better movement patterns than before.",
      condition: "Sports Injury"
    },
    {
      name: "Emma L.",
      location: "Malahide",
      rating: 5,
      text: "The gentle approach of Amatsu was perfect for my pregnancy. It helped with back pain, improved my sleep, and even helped with some digestive issues. I continued treatments postnatal and recovered beautifully.",
      condition: "Pregnancy Care"
    },
    {
      name: "James K.",
      location: "Howth",
      rating: 5,
      text: "I came in with severe neck tension from desk work. Not only did they address my immediate pain, but they also taught me how to maintain better posture and prevent future issues. Highly recommend!",
      condition: "Neck Tension"
    },
    {
      name: "Lisa R.",
      location: "Portmarnock",
      rating: 5,
      text: "My daughter had terrible colic as a baby. After just two sessions of pediatric Amatsu, she was like a different child - calmer, sleeping better, and feeding without issues. We're forever grateful!",
      condition: "Pediatric Care"
    },
    {
      name: "David T.",
      location: "Balbriggan",
      rating: 5,
      text: "I've tried many different therapies over the years, but Amatsu has been the most effective for my chronic stress and tension. The holistic approach really makes a difference in both body and mind.",
      condition: "Stress & Anxiety"
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

        {/* Stats Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-lg opacity-90">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <div className="text-lg opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-lg opacity-90">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto border-2 border-primary/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Experience the Difference</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Join hundreds of satisfied clients who have transformed their health through Amatsu therapy
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Book Your Appointment
                  </a>
                  <a
                    href="/services"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    View Services
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
