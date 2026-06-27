import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import layaLogo from "@/assets/laya-healthcare-logo.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const section1Faqs: FaqItem[] = [
  {
    question: "How many sessions will I typically need?",
    answer: (
      <div className="space-y-3">
        <p>
          This varies depending on your individual needs. While many clients notice improvements after just one session, a series of sessions is often needed to support longer-lasting benefits, which for many people develops over approximately 4–6 sessions.
        </p>
        <p>
          After this initial phase, some clients choose to return periodically for ongoing support or preventative care. This varies greatly from person to person and can depend on factors such as activity levels, high-intensity exercise, work demands, or environments that contribute to habitual or dysfunctional postures.
        </p>
      </div>
    ),
  },
  {
    question: "Is Amatsu therapy forceful or painful?",
    answer: (
      <div className="space-y-3">
        <p>
          Amatsu is a gentle, light-touch therapy that most clients find comfortable and deeply relaxing.
        </p>
        <p>
          While everyone's experience is different, treatment is not intended to be painful. Some people may notice mild tenderness or heightened awareness in certain areas, particularly where the body is holding tension or imbalance, but this is typically brief and well within comfort levels.
        </p>
        <p>
          Treatment is always adapted to the individual, and feedback during the session is encouraged.
        </p>
      </div>
    ),
  },
  {
    question: "Can Amatsu support pregnancy and postpartum recovery?",
    answer: (
      <div className="space-y-4">
        <div>
          <p className="font-medium mb-2">Pregnancy</p>
          <p>
            Amatsu is a gentle, light-touch therapy and can be very effective during the 2nd and 3rd trimesters. It may help with common pregnancy-related issues such as sciatica, hip or back pain, ligament tension (including the uterus and symphysis pubis), and other discomforts. Treatment is not recommended during the 1st trimester.
          </p>
        </div>
        <div>
          <p className="font-medium mb-2">Postpartum – Natural Childbirth</p>
          <p>
            Amatsu therapy is generally not recommended during the first six weeks postpartum, as the body is undergoing significant changes. After this period, therapy can support recovery and help restore balance. If you have any doubts, please consult your GP or midwife before beginning any physical therapy.
          </p>
        </div>
        <div>
          <p className="font-medium mb-2">Postpartum – Caesarean Section</p>
          <p>
            Please follow your consultant's guidance before engaging in any physical therapy. Once cleared (typically between 6–10 weeks), Amatsu can be effective in supporting natural healing and recovery.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: "Are there any health conditions that cannot be addressed?",
    answer: (
      <div className="space-y-3">
        <p>
          Amatsu is a gentle, non-invasive therapy and may not be suitable for everyone or every condition. It does not replace medical diagnosis or treatment.
        </p>
        <p>
          Certain acute, severe, or medically complex conditions may require assessment or care from a GP, consultant, or other healthcare professional before considering Amatsu therapy.
        </p>
        <p>
          If you have a diagnosed medical condition, are under active medical care, or are unsure whether Amatsu is appropriate for you, please feel free to get in touch before booking. Your safety and wellbeing always come first.
        </p>
      </div>
    ),
  },
  {
    question: "Can resolving structural tension help with systemic stress or anxiety?",
    answer: (
      <p>
        Amatsu does not treat or diagnose mental health conditions. However, it may support the body during periods of emotional stress by helping regulate physical tension and the nervous system. Many clients find this supportive alongside appropriate medical or psychological care.
      </p>
    ),
  },
  {
    question: "Can I engage in other physical therapies during my treatment programme?",
    answer: (
      <div className="space-y-3">
        <p>
          Amatsu is generally complementary to many western and holistic therapies. However, during the initial phase of treatment, which typically involves weekly sessions, it is not usually advisable to introduce additional manual therapies at the same time. Doing so can potentially overwhelm the nervous system and may impact your body's ability to respond and recover effectively.
        </p>
        <p>
          After the initial phase of treatment, clients may choose to engage in other forms of care alongside their Amatsu treatment, depending on individual needs.
        </p>
        <p>
          Amatsu should not be used as a replacement for ongoing medical treatment. If you are currently under the care of a GP or consultant, or receiving treatment for a diagnosed medical condition, it's important to consult with them before making any changes to your care plan.
        </p>
        <p>
          Your safety and wellbeing are always the priority.
        </p>
      </div>
    ),
  },
];

const section2Faqs: FaqItem[] = [
  {
    question: "What are the session fees and accepted payment methods?",
    answer: (
      <div className="space-y-2">
        <p>Treatment fee: €70 per session.</p>
        <p>Payment can be made by cash or Revolut transfer.</p>
        <p>At this time, credit cards are not accepted.</p>
      </div>
    ),
  },
  {
    question: "Is Amatsu covered by Irish health insurance providers?",
    answer: (
      <div className="space-y-3">
        <div className="flex items-center gap-4 flex-wrap">
          <p className="flex-1 min-w-[220px]">
            Yes, treatments are covered by Laya Healthcare under Physical Therapy when receipts are submitted. Please refer to your policy for your level of coverage.
          </p>
          <img
            src={layaLogo}
            alt="Laya Healthcare logo"
            width={192}
            height={192}
            loading="lazy"
            className="h-24 w-auto shrink-0"
          />
        </div>
        <p>Amatsu Therapy is not currently covered by other Health Insurance providers.</p>
      </div>
    ),
  },
  {
    question: "How do I easily book or reschedule an appointment?",
    answer: (
      <p>
        You can <a href="https://calendar.app.google/vvzdvmDFk5EYb5JK9" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">book online here</a>, or contact us by phone, email, or by filling out the contact form on our Contact page. We'll confirm your appointment within 24 hours.
      </p>
    ),
  },
  {
    question: "What is the clinic's standard cancellation policy?",
    answer: (
      <div className="space-y-3">
        <p>
          We understand that plans can change. To help manage appointments fairly for all clients, please give as much notice as possible if you need to cancel or reschedule:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li><strong>More than 24 hours' notice:</strong> No charge</li>
          <li><strong>12–24 hours' notice:</strong> 50% of the session fee</li>
          <li><strong>Less than 12 hours' notice:</strong> Full session fee</li>
        </ul>
      </div>
    ),
  },
];

const section3Faqs: FaqItem[] = [
  {
    question: "What type of clothing should I wear to my session?",
    answer: (
      <div className="space-y-3">
        <p>
          Please wear comfortable clothing that allows ease of movement. You will remain fully clothed throughout your session, and will only be required to remove shoes, belts, and any smart wearables.
        </p>
        <p>
          For comfort and modesty, trousers or leggings are recommended rather than skirts or loose-fitting shorts, as Amatsu involves gentle muscle testing and a full-body assessment. If needed, a towel will be provided for comfort and modesty.
        </p>
        <p>
          On rare occasions, you may be asked to remove a heavier or textured jumper to allow for better assessment. This would only be suggested if you are comfortable doing so and are wearing a suitable layer underneath.
        </p>
      </div>
    ),
  },
  {
    question: "How long does a typical appointment last?",
    answer: (
      <div className="space-y-2">
        <p>Sessions typically last 30–45 minutes.</p>
        <p>
          For your first appointment, please arrive 10 minutes early to allow time to complete a brief medical history form before your session.
        </p>
      </div>
    ),
  },
  {
    question: "Is there dedicated customer parking at Corporate Park 2?",
    answer: (
      <p>
        Yes, free parking is available directly outside the clinic or neighbouring buildings.
      </p>
    ),
  },
  {
    question: "Patient Privacy: Will my treatment details or history ever be shared online?",
    answer: (
      <div className="space-y-3">
        <p>
          Client privacy is very important to us. We do not take photographs or videos of clients, and we never share client details, images, or treatment content on social media or any public platforms.
        </p>
        <p>
          If a client wishes to take before- or after-treatment photos for their own personal use, this can be done using the client's own device only and entirely at their discretion. Any such images remain the client's property, and it is their choice whether to store or share them.
        </p>
        <p>
          Your comfort, dignity, and privacy are always respected.
        </p>
      </div>
    ),
  },
];

const renderAccordion = (faqs: FaqItem[], sectionKey: string) => (
  <Accordion type="single" collapsible className="w-full space-y-4">
    {faqs.map((faq, index) => (
      <AccordionItem
        key={`${sectionKey}-${index}`}
        value={`${sectionKey}-item-${index}`}
        className="border rounded-lg px-6 bg-card shadow-sm"
      >
        <AccordionTrigger className="text-left hover:no-underline">
          <h3 className="font-semibold text-base">{faq.question}</h3>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          {faq.answer}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - Fingal Amatsu Alignment Clinic</title>
        <meta name="description" content="Frequently asked questions about Amatsu therapy at Fingal Amatsu Alignment Clinic. Learn about treatments, booking, pricing, and what to expect." />
        <meta property="og:title" content="FAQ - Fingal Amatsu Alignment Clinic" />
        <meta property="og:description" content="FAQs about Amatsu therapy: booking, pricing, sessions, pregnancy, safety, and what to expect." />
        <meta property="og:url" content="/faq" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/faq" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How many sessions will I typically need?", "acceptedAnswer": { "@type": "Answer", "text": "This varies depending on your individual needs. While many clients notice improvements after just one session, a series of sessions is often needed to support longer-lasting benefits, which for many people develops over approximately 4–6 sessions." } },
            { "@type": "Question", "name": "Is Amatsu therapy forceful or painful?", "acceptedAnswer": { "@type": "Answer", "text": "Amatsu is a gentle, light-touch therapy that most clients find comfortable and deeply relaxing. Treatment is not intended to be painful." } },
            { "@type": "Question", "name": "Can Amatsu support pregnancy and postpartum recovery?", "acceptedAnswer": { "@type": "Answer", "text": "Amatsu can be effective during the 2nd and 3rd trimesters. It is not recommended during the 1st trimester or the first six weeks postpartum." } },
            { "@type": "Question", "name": "Are there any health conditions that cannot be addressed?", "acceptedAnswer": { "@type": "Answer", "text": "Amatsu is a gentle, non-invasive therapy and may not be suitable for everyone. It does not replace medical diagnosis or treatment. Certain acute or complex conditions may require assessment from a GP first." } },
            { "@type": "Question", "name": "Can resolving structural tension help with systemic stress or anxiety?", "acceptedAnswer": { "@type": "Answer", "text": "Amatsu does not treat mental health conditions, but it may support the body during emotional stress by helping regulate physical tension and the nervous system." } },
            { "@type": "Question", "name": "Can I engage in other physical therapies during my treatment programme?", "acceptedAnswer": { "@type": "Answer", "text": "During the initial phase of weekly sessions, it is not usually advisable to introduce additional manual therapies at the same time, as this can overwhelm the nervous system." } },
            { "@type": "Question", "name": "What are the session fees and accepted payment methods?", "acceptedAnswer": { "@type": "Answer", "text": "Treatment fee is €70 per session. Payment can be made by cash or Revolut transfer. Credit cards are not accepted." } },
            { "@type": "Question", "name": "Is Amatsu covered by Irish health insurance providers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, treatments are covered by Laya Healthcare under Physical Therapy when receipts are submitted. Amatsu Therapy is not currently covered by other Health Insurance providers." } },
            { "@type": "Question", "name": "How do I easily book or reschedule an appointment?", "acceptedAnswer": { "@type": "Answer", "text": "You can book online, or contact us by phone, email, or contact form. We confirm appointments within 24 hours." } },
            { "@type": "Question", "name": "What is the clinic's standard cancellation policy?", "acceptedAnswer": { "@type": "Answer", "text": "More than 24 hours' notice: no charge. 12–24 hours' notice: 50% of the session fee. Less than 12 hours' notice: full session fee." } },
            { "@type": "Question", "name": "What type of clothing should I wear to my session?", "acceptedAnswer": { "@type": "Answer", "text": "Wear comfortable clothing that allows ease of movement. You remain fully clothed throughout, removing only shoes, belts, and smart wearables." } },
            { "@type": "Question", "name": "How long does a typical appointment last?", "acceptedAnswer": { "@type": "Answer", "text": "Sessions typically last 30–45 minutes. Arrive 10 minutes early to your first appointment to complete a brief medical history form." } },
            { "@type": "Question", "name": "Is there dedicated customer parking at Corporate Park 2?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, free parking is available directly outside the clinic or at neighbouring buildings." } },
            { "@type": "Question", "name": "Patient Privacy: Will my treatment details or history ever be shared online?", "acceptedAnswer": { "@type": "Answer", "text": "Client privacy is very important to us. We do not take photographs or videos of clients, and we never share client details, images, or treatment content on social media or any public platforms." } }
          ]
        })}</script>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navigation />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-12 md:py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
                <p className="text-xl text-muted-foreground">
                  Clear, transparent answers regarding our structural philosophy, clinical policies, and what to expect at our Dublin 15 clinic.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Clinical & Treatment Philosophy */}
          <section className="py-16 md:py-20 bg-sage-mist">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                  Clinical & Treatment Philosophy
                </h2>
                {renderAccordion(section1Faqs, "clinical")}
              </div>
            </div>
          </section>

          {/* Section 2: Fees, Insurance & Booking */}
          <section className="py-16 md:py-20 bg-roadmap-blend">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                  Fees, Insurance & Booking
                </h2>
                {renderAccordion(section2Faqs, "fees")}
              </div>
            </div>
          </section>

          {/* Section 3: Your Visit & Clinic Logistics */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                  Your Visit & Clinic Logistics
                </h2>
                {renderAccordion(section3Faqs, "logistics")}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FAQ;
