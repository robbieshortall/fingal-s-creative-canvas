import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: (
        <p>
          You can <a href="https://calendar.app.google/vvzdvmDFk5EYb5JK9" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">book online here</a>, or contact us by phone, email, or by filling out the contact form on our Contact page. We'll confirm your appointment within 24 hours.
        </p>
      ),
    },
    {
      question: "Fees & Payment Methods",
      answer: (
        <div className="space-y-2">
          <p>Treatment fee: €70 per session.</p>
          <p>Payment can be made by cash or Revolut transfer.</p>
          <p>At this time, credit cards are not accepted.</p>
        </div>
      ),
    },
    {
      question: "Cancellation Policy",
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
    {
      question: "What to Wear",
      answer: (
        <div className="space-y-3">
          <p>
            Please wear comfortable clothing that allows ease of movement. You will typically remain fully clothed throughout your session, and will only be required to remove shoes, belts, and any smart wearables.
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
      question: "How long is each session?",
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
      question: "How many sessions will I need?",
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
      question: "Do you accept health insurance?",
      answer: (
        <p>
          No, Amatsu therapy is not currently covered by health insurance providers.
        </p>
      ),
    },
    {
      question: "Pregnancy & Postpartum",
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
      question: "Client Privacy - Will my treatment be photographed or shared online?",
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
    {
      question: "Are there any conditions that cannot be treated?",
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
      question: "Is there parking at the clinic?",
      answer: (
        <p>
          Yes, free parking is available directly outside the clinic or neighbouring buildings.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-xl text-muted-foreground mb-10">
                Find answers to commonly asked questions about our services and appointments.
              </p>
              <Accordion type="single" collapsible className="w-full space-y-4 text-left">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border rounded-lg px-6 bg-card"
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;