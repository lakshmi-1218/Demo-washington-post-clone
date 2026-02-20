"use client";

import { useState } from "react";

const footerSections = [
  {
    title: "Company",
    links: [
      "About The Post",
      "Newsroom Policies & Standards",
      "WP Creative Group",
      "Diversity & Inclusion",
      "Careers",
      "Media & Community Relations",
      "Accessibility Statement",
    ],
  },
  {
    title: "Sections",
    links: [
      "Trending",
      "Politics",
      "Elections",
      "Opinions",
      "National",
      "World",
      "Style",
      "Sports",
      "Business",
      "Climate",
      "Well+Being",
      "D.C., Md., & Va.",
      "Obituaries",
      "Weather",
      "Arts & Entertainment",
      "Recipes",
    ],
  },
  {
    title: "Get The Post",
    links: [
      "WP Intelligence",
      "Enterprise Subscriptions",
      "Become a Subscriber",
      "Gift Subscriptions",
      "Mobile & Apps",
      "Newsletters & Alerts",
      "Washington Post Live",
      "Reprints & Permissions",
      "Post Store",
      "Books & E-Books",
      "Print Special Editions Store",
      "Today's Paper",
      "Public Notices",
    ],
  },
  {
    title: "Contact Us",
    links: [
      "Contact the Newsroom",
      "Contact Customer Care",
      "Contact the Opinions Team",
      "Advertise",
      "Licensing & Syndication",
      "Request a Correction",
      "Send a News Tip",
      "Report a Vulnerability",
    ],
  },
  {
    title: "Terms of Use",
    links: [
      "Digital Products Terms of Sale",
      "Print Products Terms of Sale",
      "Terms of Service",
      "Privacy Policy",
      "Cookie Settings",
      "Submissions & Discussion Policy",
      "RSS Terms of Service",
      "Sitemap",
      "Ad Choices",
    ],
  },
];

const mobileLegalLinks = [
  "About The Post",
  "Policies & Standards",
  "Digital Products Terms",
  "Print Products Terms of Sale",
  "Terms of Service",
  "Privacy Policy",
  "Cookie Settings",
  "Submissions & Discussion Policy",
  "RSS Terms of Service",
  "Sitemap",
  "Ad Choices",
];

export function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="border-t mt-10 bg-white" suppressHydrationWarning>

      <div className="max-w-[1200px] mx-auto px-0" suppressHydrationWarning>

        {/* BRAND */}
        <div className="py-4 sm:py-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            The Washington Post
          </h2>
        </div>

        {/* ================= MOBILE ACCORDION ================= */}
        <div className="md:hidden">
          {footerSections.map((section, index) => (
            <div key={section.title} className="border-t py-3">

              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center text-sm font-semibold"
              >
                {section.title}

                {/* Chevron icon */}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <ul className="mt-3 space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-xs text-gray-600 hover:text-black"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* ================= MOBILE LEGAL LINKS ================= */}
          <div className="border-t py-3">
            <ul className="space-y-2">
              {mobileLegalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-gray-600 hover:text-black"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 py-6 border-t">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold uppercase tracking-wide mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-gray-600 hover:text-black"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* ================= BOTTOM STRIP (ALL DEVICES) ================= */}
      <div className="border-t">
        <div className="max-w-[1280px] mx-auto px-4 py-4 flex flex-row sm:flex-row justify-center items-center gap-2 sm:gap-3">
          <p className="text-xs text-gray-500">washingtonpost.com</p>
          <p className="text-xs text-gray-500">
            © 1996 – {new Date().getFullYear()} The Washington Post
          </p>
        </div>
      </div>

    </footer>
  );
}
