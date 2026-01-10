import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-clinic.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import practitionerHeadshot from "@/assets/practitioner-headshot.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">About Our Clinic</h1>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
                <img
                  src={clinicInterior}
                  alt="Fingal Amatsu Alignment Clinic treatment room"
                  className="w-full h-full object-cover"
                />
              </div>
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
                    Fingal Amatsu Alignment Clinic was founded with a simple yet purposeful aim: to offer Amatsu therapy to clients in Fingal, Dublin, and the surrounding areas, including nearby parts of Meath, in a calm, professional, and client-focused setting.
                  </p>
                  <p>
                    Amatsu is a gentle, non-invasive Japanese bodywork therapy that works with the body's natural patterns of movement and alignment to support balance, comfort, and overall wellbeing. Rather than focusing solely on isolated symptoms, Amatsu takes a whole-body approach, recognising the body's innate ability to rebalance when given the right conditions.
                  </p>
                  <p>
                    At Fingal Amatsu Alignment Clinic, each client is treated as an individual. Through careful assessment and personalised sessions, the focus is on addressing underlying imbalances and supporting long-term physical resilience.
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

        {/* Amatsu, the Clinic & Me Section */}
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
                  <h2 className="text-3xl font-bold mb-6">Amatsu, the Clinic & Me</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      I am a fully qualified Seitai-level Amatsu practitioner, trained through the Institute of Amatsu (IOA), and a registered member of Amatsu Therapy International (ATI). I have been treating clients for over two years while also maintaining a career as an IT Portfolio Manager. My enjoyment of practising Amatsu, and seeing the changes it can bring for people in pain, ultimately inspired me to formally launch Fingal Amatsu Alignment Clinic.
                    </p>
                    <p>
                      My own history has strongly shaped how I practise and why I place such importance on physical alignment and long-term wellbeing. My aim is to help people who have been struggling with pain or dysfunction to regain comfort, confidence, and the ability to live life more fully.
                    </p>
                    <p>
                      Outside the clinic, I'm married with three children, two boys and a girl, and share our home with two adopted German Shepherds. I'm a fair-weather golfer and a fan of Formula 1 and football — there's usually something to chat about during a session.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My History Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">My History & How I Discovered Amatsu</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In 2009, I was involved in a serious car accident that left me with ongoing back problems and reliant on strong painkillers as part of daily life. Several times a year, my back would go into severe spasm, often leaving me confined to the living room floor for one to two weeks at a time. Over the following six years, I tried multiple therapies and rehabilitation programmes, but any relief was short-lived. The impact on my family life, ability to stay active, and career was significant.
                </p>
                <p>
                  In 2015, a friend who had been suffering with sciatica told me about his experience with Amatsu. While initially sceptical, I was willing to try anything. From the first sessions, I could feel that something fundamental was changing, even if I couldn't fully explain it at the time. As my body began to stabilise, I gradually spaced out sessions and increased my activity levels.
                </p>
                <p>
                  Today, I remain active — playing golf regularly, training in the gym, and keeping busy day to day. While I still experience the occasional strain or injury like anyone else, I have not spent a single day since lying immobilised in pain. That experience is why I value Amatsu so strongly, and why I am passionate about helping others find lasting change rather than short-term relief.
                </p>
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
                  <h3 className="text-xl font-semibold mb-3">Personalised Care</h3>
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
  );
};

export default About;
