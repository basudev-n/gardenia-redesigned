import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PAGE_TITLE = "Terms & Conditions | The Gardenia";
const PAGE_DESCRIPTION =
  "Read the Terms & Conditions of The Gardenia website covering website usage, project information, policies, disclaimers, and user responsibilities.";
const CANONICAL_URL = "https://www.gardenia.homes/terms-and-conditions";

function updateMetaTag(name, content) {
  if (typeof document === "undefined") return;
  let tag = document.querySelector(`meta[name='${name}']`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function updateCanonical(url) {
  if (typeof document === "undefined") return;
  let link = document.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

const sections = [
  {
    title: "1. Website Purpose",
    intro: "The website of The Gardenia is intended to provide general information about the residential project, including:",
    points: [
      "Project details",
      "Apartment configurations",
      "Amenities",
      "Floor plans",
      "Images & visual representations",
      "Pricing enquiries",
      "Contact information",
      "Marketing and promotional content",
    ],
    outro:
      "The content on this website is for informational purposes only and should not be treated as a legal offer, contract, or binding commitment.",
  },
  {
    title: "2. Acceptance of Terms",
    intro: "By using this website, you confirm that:",
    points: [
      "You are at least 18 years of age.",
      "You are legally capable of entering into agreements.",
      "You agree to use the website only for lawful purposes.",
      "You accept all terms, policies, and notices mentioned on this website.",
    ],
  },
  {
    title: "3. Project Information & Disclaimer",
    intro: "All information available on this website, including:",
    points: [
      "Floor plans",
      "Unit sizes",
      "Layouts",
      "Amenities",
      "Specifications",
      "Images",
      "Pricing",
      "Visuals",
      "Artistic impressions",
    ],
    outro:
      "are subject to change, revision, or modification without prior notice. The visuals and renderings used throughout the website are artistic representations intended for illustrative purposes only and may differ from the final delivered project. Users are advised to independently verify all project details, specifications, legal approvals, pricing, and availability before making any property-related decisions.",
  },
  {
    title: "4. Intellectual Property Rights",
    intro: "All website content, including:",
    points: [
      "Text",
      "Graphics",
      "Logos",
      "Images",
      "Videos",
      "Design elements",
      "Layouts",
      "Branding materials",
      "Website structure",
    ],
    outro:
      "are the intellectual property of The Gardenia or its authorized partners and are protected under applicable copyright and intellectual property laws. Users may not: Reproduce, Republish, Modify, Distribute, Copy, Transmit, Commercially exploit any content from this website without prior written permission.",
  },
  {
    title: "5. Website Usage Restrictions",
    intro: "Users agree not to:",
    points: [
      "Use the website for unlawful purposes",
      "Attempt unauthorized access to servers or databases",
      "Upload harmful software or malicious code",
      "Disrupt website functionality",
      "Misrepresent identity or information",
      "Copy website content without authorization",
    ],
    outro: "Any misuse of the website may result in legal action.",
  },
  {
    title: "6. Enquiry Forms & User Information",
    intro:
      "By submitting your information through enquiry forms, contact forms, or brochure download forms, you consent to:",
    points: [
      "Being contacted by The Gardenia sales or support representatives",
      "Receiving project-related communication",
      "Receiving marketing or promotional updates",
    ],
    outro:
      "Users are responsible for ensuring that the information submitted is accurate and valid. For more details regarding data usage, please review our Privacy Policy.",
  },
  {
    title: "7. Third-Party Links",
    intro:
      "This website may include links to third-party websites or platforms for user convenience. The Gardenia:",
    points: [
      "Does not control third-party websites",
      "Is not responsible for their content, policies, or services",
      "Does not guarantee the accuracy of third-party information",
    ],
    outro: "Users access external websites at their own discretion and risk.",
  },
  {
    title: "8. Limitation of Liability",
    intro: "The Gardenia shall not be held liable for:",
    points: [
      "Any direct or indirect loss",
      "Website interruptions",
      "Technical issues",
      "Data inaccuracies",
      "Reliance on website information",
      "Delays or errors",
      "Damages arising from use of the website",
    ],
    outro: "Users acknowledge that all website usage is at their own risk.",
  },
  {
    title: "9. Pricing & Availability",
    intro:
      "Any pricing, offers, payment plans, or unit availability displayed or communicated through the website are indicative and subject to change without prior notice.",
    outro:
      "Actual pricing and availability may vary depending on: Unit selection, Floor preference, Market conditions, Government regulations, Inventory status. Users are advised to contact the official sales team for updated project information.",
  },
  {
    title: "10. External Communication",
    intro: "The Gardenia may communicate with users through:",
    points: [
      "Phone calls",
      "SMS",
      "WhatsApp",
      "Emails",
      "Promotional campaigns",
    ],
    outro:
      "By submitting your contact information, you authorize The Gardenia representatives to communicate with you regarding project-related updates and offers. Users may request to opt out of marketing communication at any time.",
  },
  {
    title: "11. Governing Law & Jurisdiction",
    intro:
      "These Terms & Conditions shall be governed and interpreted in accordance with the laws applicable in India.",
    outro:
      "Any disputes arising from the use of this website shall be subject to the jurisdiction of courts located in Bhubaneswar, Odisha.",
  },
  {
    title: "12. Modifications to Terms",
    intro:
      "The Gardenia reserves the right to modify, update, or revise these Terms & Conditions at any time without prior notice.",
    outro:
      "Updated versions will be published on this page, and continued use of the website after modifications shall constitute acceptance of the revised terms.",
  },
  {
    title: "13. Contact Information",
    intro: "For any questions regarding these Terms & Conditions, users may contact:",
    points: [
      "The Gardenia",
      "Ghangapatna, Bhubaneswar, Odisha",
      "Website: https://www.gardenia.homes/",
      "Email: marketing@gardenia.homes",
      "Phone: +91-9124619941",
    ],
  },
];

export default function TermsAndConditionsPage() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    updateMetaTag("description", PAGE_DESCRIPTION);
    updateCanonical(CANONICAL_URL);
  }, []);

  return (
    <div className="bg-white text-[#1f2937]">
      <Header />

      <main className="px-4 sm:px-8 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6">The Gardenia</h2>

          <p className="text-base leading-7 text-[#4b5563] mb-4">Welcome to The Gardenia Official Website.</p>
          <p className="text-base leading-7 text-[#4b5563] mb-4">
            By accessing, browsing, or using this website, you agree to comply with and be bound by the following Terms
            & Conditions. Please read these terms carefully before using the website.
          </p>
          <p className="text-base leading-7 text-[#4b5563] mb-10">
            If you do not agree with any part of these Terms & Conditions, we request you not to use this website.
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                {section.intro ? <p className="text-base leading-7 text-[#4b5563] mb-3">{section.intro}</p> : null}

                {section.points?.length ? (
                  <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-[#374151] mb-3">
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}

                {section.outro ? <p className="text-base leading-7 text-[#4b5563]">{section.outro}</p> : null}
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-2xl border border-[#e5e7eb] p-6 bg-[#f9fafb]">
            <h3 className="text-2xl font-bold mb-3">Final Disclaimer</h3>
            <p className="text-base leading-7 text-[#4b5563]">
              The information contained on this website is provided for general informational purposes only. The
              Gardenia reserves the right to modify project details, specifications, layouts, pricing, amenities, and
              plans without prior notice. Prospective buyers are encouraged to verify all information independently
              before making any investment or purchase decision.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
