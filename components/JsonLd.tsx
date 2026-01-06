export function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mkgproductlab.com';

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MKG Product Lab",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      "We partner with traction and early-growth tech startups and SMEs to build a complete GTM system grounded in deep customer insight",
    foundingDate: "2020",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: `${baseUrl}/bookings`,
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.linkedin.com/in/mkosorukov/",
      "https://x.com/mkosorukov",
      "https://t.me/mkosorukov",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MKG Product Lab",
    url: baseUrl,
    description:
      "Go-to-market and product growth consulting for tech startups and SMBs",
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "MKG Product Lab",
    url: baseUrl,
    description:
      "Go-to-market strategy and product growth consulting for tech startups and SMBs",
    priceRange: "$$",
    serviceType: [
      "Go-to-Market Strategy",
      "Product Growth Consulting",
      "Startup Consulting",
      "Customer Research",
      "Growth Strategy",
    ],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Growth Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GTM Strategy Development",
            description:
              "Build a complete go-to-market system grounded in deep customer insight",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Product Growth Consulting",
            description:
              "Strategic guidance for product-led growth and scaling",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Team Coaching",
            description:
              "Hands-on coaching and mentorship for product and growth teams",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you build the app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in building custom applications from the ground up. Our team has extensive experience in full-stack development, mobile app development, and web applications. We work closely with you to understand your requirements and deliver a product that meets your business objectives and delights your users.",
        },
      },
      {
        "@type": "Question",
        name: "Can you coach my staff?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! We offer coaching and training programs tailored to your team's needs. Whether it's product management, growth strategies, or technical skills, we provide hands-on guidance and mentorship to help your staff develop the capabilities they need to drive your business forward.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with pre-seed startups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we work with startups at all stages, including pre-seed. We understand the unique challenges early-stage companies face and offer flexible engagement models to fit your budget. Our goal is to help you validate your ideas, build an MVP, and position yourself for success in fundraising and growth.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with companies other than software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While our core expertise is in software and technology, we work with companies across various industries. Our growth strategies and product development methodologies are applicable to any business looking to scale. We've successfully partnered with e-commerce, healthcare, fintech, and service-based companies.",
        },
      },
      {
        "@type": "Question",
        name: "How can we get in touch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Getting in touch is easy! You can book a call directly through our website, send us an email, or connect with us on LinkedIn. We typically respond within 24 hours and are happy to discuss your project, answer questions, and explore how we can help you achieve your growth goals.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}

