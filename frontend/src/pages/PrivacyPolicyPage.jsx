import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PAGE_TITLE = "Privacy Policy | The Gardenia";
const PAGE_DESCRIPTION =
  "Read The Gardenia privacy policy for data collection, usage, cookies, communication, and user rights.";
const CANONICAL_URL = "https://www.gardenia.homes/privacy-policy";

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
    title: "1. Information We Collect",
    paragraphs: [
      "When you interact with The Gardenia website, we may collect certain personal and non-personal information to improve your experience and assist you better.",
      "Personal Information",
      "We may collect:",
    ],
    points: [
      "Full Name",
      "Phone Number",
      "Email Address",
      "City or Location",
      "Property Preferences",
      "Budget Preferences",
      "Information submitted through enquiry forms, brochures, or site visit requests",
    ],
    paragraphsAfter: [
      "Non-Personal Information",
      "We may automatically collect:",
    ],
    pointsAfter: [
      "IP Address",
      "Browser Type",
      "Device Information",
      "Website Usage Data",
      "Pages Visited",
      "Session Duration",
      "Cookies & Analytics Information",
    ],
    outro:
      "This information helps us improve website performance, user experience, and marketing effectiveness.",
  },
  {
    title: "2. How We Use Your Information",
    intro: "The information collected through our website may be used for:",
    points: [
      "Responding to property enquiries",
      "Scheduling site visits",
      "Sharing project details and brochures",
      "Providing pricing and availability updates",
      "Sending promotional or marketing communication",
      "Improving website functionality and user experience",
      "Understanding visitor interests and engagement",
      "Assisting customers with property-related support",
    ],
    outro:
      "We use your information only for legitimate business and customer service purposes related to The Gardenia.",
  },
  {
    title: "3. Cookies & Tracking Technologies",
    intro:
      "The Gardenia website may use cookies and similar technologies to improve user experience and analyze visitor behavior.",
    middle: "Cookies help us:",
    points: [
      "Understand website traffic",
      "Improve website functionality",
      "Personalize content and advertisements",
      "Remember visitor preferences",
      "Enhance browsing experience",
    ],
    outro:
      "Users may disable cookies through browser settings; however, some website features may not function properly after disabling cookies.",
  },
  {
    title: "4. Data Security & Protection",
    intro:
      "We take reasonable technical and administrative measures to protect your personal information from:",
    points: [
      "Unauthorized access",
      "Misuse",
      "Loss",
      "Alteration",
      "Disclosure",
    ],
    outro:
      "While we strive to maintain secure systems and practices, no digital transmission or storage platform can guarantee complete security.",
  },
  {
    title: "5. Sharing of Information",
    intro: "The Gardenia does not sell, rent, or trade your personal information to third parties.",
    middle: "Information may only be shared:",
    points: [
      "With authorized sales and marketing representatives associated with the project",
      "With trusted service providers assisting in website management or customer communication",
      "When required under applicable laws, regulations, or legal processes",
    ],
    outro:
      "All associated parties handling your information are expected to maintain confidentiality and responsible data practices.",
  },
  {
    title: "6. Third-Party Services & Links",
    intro:
      "Our website may contain links to third-party platforms, social media channels, maps, or external websites for user convenience.",
    middle: "Please note:",
    points: [
      "The Gardenia is not responsible for the privacy practices or content of third-party websites.",
      "Users are encouraged to review the privacy policies of those websites separately before sharing any information.",
    ],
  },
  {
    title: "7. Marketing Communication",
    intro: "By submitting your information on our website, you may receive:",
    points: [
      "Project updates",
      "Promotional offers",
      "Brochure downloads",
      "Site visit invitations",
      "Construction progress updates",
      "Real estate and lifestyle communication",
    ],
    outro: "You may opt out of promotional communication at any time by contacting us directly.",
  },
  {
    title: "8. User Rights",
    intro: "Users have the right to:",
    points: [
      "Access their personal information",
      "Request corrections or updates",
      "Request deletion of personal data",
      "Withdraw marketing communication consent",
    ],
    outro: "To exercise any of these rights, users may contact us using the details mentioned below.",
  },
  {
    title: "9. Data Retention",
    intro: "We retain personal information only for as long as necessary to:",
    points: [
      "Respond to enquiries",
      "Provide customer assistance",
      "Fulfill legal or business obligations",
      "Improve user experience and communication",
    ],
    outro: "Once information is no longer required, it may be securely deleted or anonymized.",
  },
  {
    title: "10. Children's Privacy",
    intro:
      "The Gardenia website is intended for individuals above 18 years of age. We do not knowingly collect personal information from children.",
    outro: "If any such information is identified, appropriate steps may be taken to remove it from our systems.",
  },
  {
    title: "11. Policy Updates",
    intro:
      "The Gardenia reserves the right to update or modify this Privacy Policy at any time without prior notice.",
    outro:
      "Any updates will be reflected on this page along with the revised effective date. Users are encouraged to review this page periodically.",
  },
  {
    title: "12. Contact Us",
    intro:
      "For any questions regarding this Privacy Policy, your personal information, or data handling practices, please contact:",
    points: [
      "The Gardenia",
      "Ghangapatna, Bhubaneswar, Odisha",
      "Website: https://www.gardenia.homes/",
      "Email: marketing@gardenia.homes",
      "Phone: +91-9124619941",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6">The Gardenia</h2>

          <p className="text-base leading-7 text-[#4b5563] mb-4">Welcome to The Gardenia Official Website.</p>
          <p className="text-base leading-7 text-[#4b5563] mb-4">
            At The Gardenia, we are committed to protecting your privacy and ensuring transparency in how your personal
            information is collected, used, stored, and safeguarded. This Privacy Policy explains how information
            shared through our website, enquiry forms, communication channels, and marketing platforms is handled.
          </p>
          <p className="text-base leading-7 text-[#4b5563] mb-10">
            By accessing or using this website, you agree to the terms outlined in this Privacy Policy.
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-7 text-[#4b5563] mb-3">
                    {paragraph}
                  </p>
                ))}

                {section.intro ? <p className="text-base leading-7 text-[#4b5563] mb-3">{section.intro}</p> : null}
                {section.middle ? <p className="text-base leading-7 text-[#4b5563] mb-3">{section.middle}</p> : null}

                {section.points?.length ? (
                  <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-[#374151] mb-3">
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}

                {section.paragraphsAfter?.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-7 text-[#4b5563] mb-3">
                    {paragraph}
                  </p>
                ))}

                {section.pointsAfter?.length ? (
                  <ul className="list-disc pl-6 space-y-2 text-base leading-7 text-[#374151] mb-3">
                    {section.pointsAfter.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}

                {section.outro ? <p className="text-base leading-7 text-[#4b5563]">{section.outro}</p> : null}
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-2xl border border-[#e5e7eb] p-6 bg-[#f9fafb]">
            <h3 className="text-2xl font-bold mb-3">Disclaimer</h3>
            <p className="text-base leading-7 text-[#4b5563]">
              All project information, images, floor plans, amenities, specifications, and visual representations
              available on this website are indicative and subject to change without prior notice. Artistic impressions
              and conceptual visuals are intended for illustrative purposes only. Users are advised to verify all
              project-related details independently before making any purchase or investment decision.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
