import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Foot & Ankle",
      duration: "45 minutes",
      description: "Treatment for issues affecting the foot and ankle, including plantar fasciitis, sprains, and mobility restrictions.",
      benefits: [
        "Plantar fasciitis",
        "Achilles tendon injury",
        "Foot & ankle sprains",
        "Heel pain (non-specific)",
        "Post-injury foot or ankle discomfort",
        "Overpronation",
        "Flat foot (fallen arches)",
        "Restricted ankle mobility",
        "Foot pain related to gait or posture",
        "Metatarsalgia",
        "Morton's neuroma",
        "Hallux valgus (bunions)",
        "Hallux rigidus",
        "Tendon & ligament issues",
        "Chronic ankle laxity (ankle instability)",
        "Recurrent ankle injuries",
        "Midtarsal sprain",
        "Turf toe"
      ]
    },
    {
      title: "Knee Issues",
      duration: "45 minutes",
      description: "Gentle treatment addressing knee pain, stiffness, and alignment issues to support natural movement patterns.",
      benefits: [
        "General knee pain or discomfort",
        "Patellofemoral pain syndrome",
        "Patellar tendinopathy / patellar tendinitis",
        "Iliotibial band syndrome (ITBS)",
        "Meniscal (cartilage) tear",
        "Ligament sprains",
        "Anterior cruciate ligament (ACL) injury",
        "Medial collateral ligament (MCL) injury",
        "Lateral collateral ligament (LCL) injury",
        "Posterior cruciate ligament (PCL) injury",
        "Knee instability or weakness",
        "Restricted knee movement or stiffness",
        "Patellar subluxation",
        "Quadriceps tendon injury",
        "Pes anserine bursitis",
        "Baker's cyst",
        "Plica syndrome",
        "Osgood–Schlatter disease",
        "Post-surgical knee discomfort",
        "Recurrent knee injuries",
        "Knee pain related to gait or posture",
        "Pre- or post-knee replacement support (once medically cleared)",
        "Early-stage osteoarthritic knee discomfort"
      ]
    },
    {
      title: "Hip & Leg",
      duration: "45 minutes",
      description: "Treatment focusing on hip and leg issues, including tightness, pain, and restricted movement.",
      benefits: [
        "Hip osteoarthritis",
        "Referred hip pain",
        "Clicking or snapping hip (including movement-related clicking or clunking sensations)",
        "Sacroiliac (SI) joint discomfort",
        "Pre- or post-hip replacement support (once medically cleared)",
        "Hip flexor strain or tightness",
        "Gluteal muscle strain or weakness",
        "Greater trochanteric pain syndrome (lateral hip pain / bursitis)",
        "Piriformis-related hip or leg pain",
        "Anterior compartment syndrome",
        "Lateral compartment syndrome",
        "Posterior deep compartment syndrome",
        "Medial tibial stress syndrome (shin splints)",
        "Distal tibial stress syndrome",
        "Calf strain or tightness",
        "Peroneal tendon strain",
        "Posterior tibial tendinopathy",
        "Plantaris (plantar longus) muscle injury",
        "Common peroneal nerve irritation or compression",
        "General hip or leg stiffness, imbalance, or restricted movement"
      ]
    },
    {
      title: "Pelvic & Sacral",
      duration: "45 minutes",
      description: "Treatment focusing on pelvic alignment and sacral balance, supporting core stability and lower body function.",
      benefits: [
        "Pelvic pain or pelvic discomfort",
        "Sacroiliac (SI) joint pain or dysfunction",
        "Sacral pain",
        "Pelvic alignment imbalance",
        "Postural-related pelvic imbalance",
        "Piriformis syndrome",
        "Deep gluteal pain",
        "Gluteal muscle strain or tendinopathy",
        "Iliopsoas tightness or overuse",
        "Hip flexor strain or restriction",
        "Groin pain or osteitis pubis",
        "Clicking hip syndrome",
        "Trochanteric bursitis",
        "Hamstring or posterior chain strain",
        "Core stability and load transfer support",
        "Pelvic and sacral stability support"
      ]
    },
    {
      title: "Back & Spine",
      duration: "45 minutes",
      description: "Comprehensive treatment for back pain, spinal tension, and postural imbalances throughout the spine.",
      benefits: [
        "Low back pain",
        "Mechanical back pain",
        "Lumbago",
        "Sciatica",
        "Herniated disc (disc herniation / slipped disc)",
        "Disc bulge",
        "Facet joint syndrome",
        "Spinal stenosis",
        "Sacroiliac joint dysfunction",
        "Sacral pain",
        "Mid-back and rib pain",
        "Rib joint dysfunction (costovertebral restriction)",
        "Coccydynia (tailbone pain)",
        "Tailbone injury",
        "Scoliosis",
        "Kyphosis",
        "Lordosis",
        "Spondylolysis",
        "Spondylolisthesis",
        "Weak or deconditioned back",
        "Postural-related back pain",
        "Back pain following injury or strain",
        "Pre- or post-spinal surgery support (once medically cleared)"
      ]
    },
    {
      title: "Shoulder Issues",
      duration: "45 minutes",
      description: "Treatment for shoulder pain, frozen shoulder, and restricted movement in the shoulder complex.",
      benefits: [
        "Shoulder pain and discomfort",
        "Shoulder stiffness and reduced mobility",
        "Frozen shoulder (adhesive capsulitis)",
        "Shoulder impingement syndrome",
        "Rotator cuff injury or strain",
        "Shoulder instability",
        "Biceps tendonitis",
        "Acromioclavicular (AC) joint issues",
        "Subacromial bursitis",
        "Rhomboid muscle strain or spasm",
        "Thoracic outlet syndrome (once medically cleared)"
      ]
    },
    {
      title: "Elbow & Arm",
      duration: "45 minutes",
      description: "Addressing issues in the elbow and arm, including repetitive strain injuries and joint restrictions.",
      benefits: [
        "Elbow and forearm pain",
        "Tennis elbow (lateral epicondylitis)",
        "Golfer's elbow (medial epicondylitis)",
        "Repetitive strain injury (RSI)",
        "Forearm muscle strain or overuse",
        "Wrist pain and stiffness",
        "Wrist sprain or instability",
        "Wrist tendinitis",
        "Carpal tunnel syndrome",
        "Cubital tunnel syndrome",
        "Ulnar neuropathy",
        "Trigger finger",
        "Thumb or finger joint pain",
        "Post-wrist, arm, or elbow fracture support (once medically cleared)"
      ]
    },
    {
      title: "Head & Neck",
      duration: "45 minutes",
      description: "Gentle treatment for neck pain, headaches, jaw tension, and cervical spine issues.",
      benefits: [
        "Neck pain and stiffness",
        "Neck strain or muscle spasm",
        "Reduced neck mobility",
        "Postural-related neck pain",
        "Forward head posture / tech neck",
        "Headaches",
        "Tension headaches",
        "Cervicogenic headaches",
        "Migraines",
        "Occipital pain or occipital headaches",
        "Whiplash-associated neck pain (once medically cleared)",
        "Jaw pain and TMJ dysfunction",
        "Cervical brachialgia (neck-related arm pain)",
        "Brachial plexus-related pain or nerve irritation",
        "Vertigo or dizziness with a musculoskeletal component",
        "Sinus-related head or facial pain (musculoskeletal contributors)"
      ]
    },
    {
      title: "Other Concerns",
      duration: "45 minutes",
      description: "Treatment for other conditions including stress-related tension, general discomfort, and whole-body balance.",
      benefits: [
        "Stress and tension support",
        "Nervous system regulation and calming",
        "Anxiety-related tension or overwhelm",
        "Low mood or emotional stress support",
        "Sleep-related tension or restlessness",
        "Fatigue and low energy",
        "Digestive-related tension or discomfort",
        "Whole-body alignment and balance",
        "General postural imbalance",
        "Recovery from physical or emotional stress",
        "Pregnancy and postpartum support (where appropriate)",
        "Overall wellbeing and resilience support"
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
                  Amatsu techniques are applied gently, with constant attention to comfort and individual tolerance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">What to Expect From Your Amatsu Session</h2>
              <p className="text-muted-foreground text-center mb-8">
                Every Amatsu session is tailored to the individual. Below is an overview of what you can expect before, during, and after your treatment.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="before" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="font-semibold text-base">Before Your Session</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <div className="space-y-3">
                      <p>
                        Please wear comfortable clothing that allows ease of movement. You will remain fully clothed throughout the treatment.
                      </p>
                      <p>
                        Please arrive a few minutes early for your first appointment to complete a brief health history form and discuss your goals or any concerns before treatment begins.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="during" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="font-semibold text-base">During Your Session</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <div className="space-y-3">
                      <p>
                        Amatsu is a gentle, non-invasive therapy that uses light touch and subtle movements to work with the body's natural alignment and nervous system.
                      </p>
                      <p>
                        Your session will involve a full-body assessment, including gentle muscle testing, to identify areas of imbalance. Treatment is tailored to you and is never forced or painful. Most clients find the experience deeply relaxing.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="after" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h3 className="font-semibold text-base">After Your Session</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <div className="space-y-3">
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
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Services Tabbed Section - All content in DOM for SEO */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Conditions Amatsu Therapy Can Support</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Amatsu therapy may help support the body where pain, discomfort, or restricted movement is present, by addressing underlying alignment and movement patterns.
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
                      <h3 className="text-2xl font-semibold mb-6">
                        {service.title.includes("Issues") || service.title.includes("Concerns") ? service.title : `${service.title} Issues`}
                      </h3>
                      <p className="text-muted-foreground text-lg mb-8">
                        The examples below highlight some common conditions that may benefit from Amatsu therapy, but this list is not exhaustive. Amatsu does not replace medical diagnosis or treatment and can be used alongside conventional healthcare where appropriate.
                      </p>
                      <div className="space-y-4">
                        <h4 className="font-medium text-lg">Conditions affecting this area include:</h4>
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

            <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
              If you're unsure whether Amatsu is appropriate for your situation, feel free to <Link to="/contact" className="text-primary hover:underline">get in touch</Link> to discuss your individual needs.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Book Your Appointment?</h2>
              <p className="text-lg opacity-90 mb-8">
                Book online at a time that suits you, or get in touch if you have any questions before booking.
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

export default Services;
