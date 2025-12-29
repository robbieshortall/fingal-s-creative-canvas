import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-clinic.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Clinic</h1>
              <p className="text-xl text-muted-foreground">
                Dedicated to helping you achieve natural balance and optimal wellness through the art of Amatsu therapy
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Fingal Amatsu Alignment Clinic was founded with a simple yet powerful vision: to bring the ancient Japanese art of Amatsu therapy to the Fingal community and beyond.
                  </p>
                  <p>
                    Amatsu is a gentle, non-invasive therapy that works with the body's natural patterns of movement and energy to restore balance and promote healing. Our approach recognizes that the body has an innate ability to heal itself when given the right conditions.
                  </p>
                  <p>
                    We believe in treating the whole person, not just isolated symptoms. Through careful assessment and personalized treatment plans, we help our clients achieve lasting wellness and vitality.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src={aboutImage}
                  alt="Clinic consultation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Holistic Approach</h3>
                  <p className="text-muted-foreground">
                    We treat the whole person, considering physical, emotional, and energetic aspects of health
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Personalized Care</h3>
                  <p className="text-muted-foreground">
                    Every treatment is tailored to your unique needs, body, and healing journey
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Natural Healing</h3>
                  <p className="text-muted-foreground">
                    Supporting your body's innate wisdom and capacity for self-healing
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Qualifications & Training</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Certified Amatsu Practitioners</h3>
                    <p className="text-muted-foreground">
                      Our therapists are fully qualified and registered with the Amatsu Training School and adhere to the highest professional standards.
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
                      Fully insured and registered practitioners ensuring your safety and peace of mind during treatment.
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
  );
};

export default About;
