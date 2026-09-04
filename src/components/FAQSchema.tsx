export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to get an appointment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The waiting time depends on the province and the procedure requested. We monitor appointments continuously."
        }
      },
      {
        "@type": "Question",
        name: "Do I pay before my appointment is found?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. You only pay after we successfully secure your appointment."
        }
      },
      {
        "@type": "Question",
        name: "Which procedures do you cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We help with NIE, TIE, Fingerprints, Residence Permits, Family Reunification, Student Visas, Asylum and many other immigration procedures."
        }
      },
      {
        "@type": "Question",
        name: "Do you work throughout Spain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We cover appointments in all Spanish provinces."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}