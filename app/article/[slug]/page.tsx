"use client"

import MoreMostFromPost from "@/components/more-most-read"
import { NewsletterSection } from "@/components/NewsletterSection"
import { PaidPromotedStories } from "@/components/PaidPromotedStories"
import Image from "next/image"

const articleData = {
  category: "Politics",
  headline:
    "Hegseth fires senior Army general in latest internal clash",
  subhead:
    "Defense secretary removes high-ranking officer amid growing tensions within the Pentagon.",
  meta: {
    readingTime: "12 min",
    commentsCount: "2,352",
    date: "December 12, 2025 at 8:30 a.m. EST",
  },
  featureImage: {
    src: "https://picsum.photos/900/500",
    caption:
      "Defense Secretary Pete Hegseth speaks during a press briefing.",
  },
  authorRow: {
    name: "Ashley Parker",
    image: "https://picsum.photos/100",
  },

  contentTop: [
    "Defense Secretary Pete Hegseth removed a senior Army general on Thursday, marking the latest internal clash inside the Pentagon as leadership tensions continue to simmer.",
    "The abrupt dismissal stunned officials who described the move as part of a broader shake-up inside the department, one that has unsettled both civilian and uniformed leadership.",
    "The general, who had served in multiple high-profile assignments, was widely respected across party lines and had overseen several key military initiatives.",
    "According to two defense officials familiar with the decision, the removal followed weeks of private disagreements over operational priorities and strategic messaging.",
  ],

  tryThis: {
    title: "Try This",
    subtitle: "A new way to read the news.",
  },

  contentMiddle: [
    "Officials familiar with the matter said the removal followed weeks of disagreements over strategy and personnel decisions.",
    "Some inside the department described the conflict as rooted in competing visions for how the military should posture itself in an increasingly unstable global environment.",
    "Others characterized it as a personality clash that escalated after a series of tense internal meetings.",
    "The decision is expected to ripple across the defense community, raising questions about continuity and command structure.",
  ],

  contentExtended: [
    "Lawmakers on Capitol Hill reacted swiftly, with members of both parties requesting briefings on the circumstances surrounding the dismissal.",
    "Several senior aides said they were concerned about the optics of removing a highly decorated officer without a detailed public explanation.",
    "In recent weeks, tensions within the Pentagon have intensified as leaders grapple with budget constraints, overseas commitments and internal reforms.",
    "The general’s departure is the latest in a string of personnel changes that have reshaped the upper ranks of the department.",
    "Former defense officials warned that instability at senior levels can complicate long-term strategic planning, particularly during periods of global uncertainty.",
  ],

  subscriptionCTA: {
    title: "Every story starts with you.",
    subtitle: "Subscribe to support journalism that matters.",
    buttonText: "Subscribe",
  },

  inlineImage: "https://picsum.photos/900/600",

  contentBottom: [
    "Analysts note that such removals are rare and often signal deeper strategic differences within the leadership team.",
    "Historically, disputes between civilian leaders and uniformed officers have surfaced during moments of transition or crisis.",
    "Supporters of the defense secretary argue that leadership changes are necessary to ensure alignment with the administration’s priorities.",
    "Critics, however, say abrupt decisions risk undermining morale among career military professionals.",
  ],

  contentAnalysis: [
    "Military scholars say the episode highlights longstanding tensions inherent in civilian oversight of the armed forces.",
    "While civilian control is a foundational principle of American democracy, the balance between political leadership and professional military judgment can be delicate.",
    "In this case, the lack of detailed explanation has fueled speculation about whether the decision was driven by policy disagreements or personal friction.",
    "Several retired officers interviewed said transparency would help calm concerns within the ranks.",
  ],

  contentClosing: [
    "The Pentagon has not yet announced a permanent replacement, though officials indicated that an interim leader will assume responsibilities immediately.",
    "As the department navigates this latest upheaval, attention now turns to how the change may affect ongoing operations and strategic planning.",
    "For now, the removal underscores the growing strains inside one of the nation’s most consequential institutions.",
  ],

  commentsSummary: {
    title: "What readers are saying",
    text:
      "The comments overwhelmingly criticize Pete Hegseth's role in the ouster of Col. David Butler, portraying Hegseth as unqualified and insecure. Many commenters suggest that Hegseth's actions are part of a broader pattern of removing competent military leaders to appease President...",
    disclaimer:
      "This summary is AI-generated. AI can make mistakes and this summary is not a replacement for reading the comments.",
  },

  mostRead: {
    title: "Most read National Security",
    stories: [
      {
        image: "https://picsum.photos/400/250?random=21",
        title:
          "U.S. offers more details on claim China conducted secret nuclear weapons test",
      },
      {
        image: "https://picsum.photos/400/250?random=22",
        title:
          "Researcher skeptical of ‘Havana syndrome’ tested secret weapon on himself",
      },
      {
        image: "https://picsum.photos/400/250?random=23",
        title:
          "Ocasio-Cortez, Rubio to offer dueling visions of world order in Munich",
      },
    ],
  },

  authorBio: {
    name: "Dan Lamothe",
    image: "https://picsum.photos/100",
    bio:
      "Dan Lamothe joined The Washington Post in 2014 to cover the U.S. military. He has written about the Armed Forces since 2008, traveling extensively, embedding with five branches of service and covering combat in Afghanistan.",
    handle: "@danlamothe",
  },
}

import { Header } from "@/components/wp/header";
import { Footer } from "@/components/wp/footer";

export default function ArticlePage() {
  return (
    <div className="bg-white text-black font-serif px-2 lg-px-0">
      <Header />
      <article className="max-w-[960px] md:max-w[1000px] mx-auto sm:px-6">

        <p className="text-xs uppercase tracking-wide text-gray-500 mt-10">
          {articleData.category}
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-3">
          {articleData.headline}
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mt-4 leading-relaxed">
          {articleData.subhead}
        </p>

        {/* FEATURE IMAGE */}
        <figure className="mt-8">
          <Image
            src={articleData.featureImage.src}
            alt="Main"
            width={900}
            height={500}
            className="w-full object-cover"
          />
          <figcaption className="text-xs text-gray-500 mt-2">
            {articleData.featureImage.caption}
          </figcaption>
        </figure>

        {/* AUTHOR ROW */}
        <div className="flex flex-wrap items-center gap-3 mt-6 text-sm text-gray-600">
          <div className="w-8 h-8 relative">
            <Image
              src={articleData.authorRow.image}
              alt={articleData.authorRow.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <span className="font-semibold text-black">
            {articleData.authorRow.name}
          </span>
          <span>•</span>
          <span>{articleData.meta.date}</span>
        </div>

        {/* FIRST CONTENT SECTION */}
        <section className="mt-8 space-y-6 text-base sm:text-[18px] leading-7 sm:leading-8 text-gray-800">
          {articleData.contentTop.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </section>

        {/* AD 1 */}
        <aside className="my-10 bg-gray-100 border border-gray-300 h-[250px] flex items-center justify-center">
          <span className="text-gray-500 text-sm">Advertisement</span>
        </aside>

        {/* MIDDLE CONTENT */}
        <section className="mt-8 space-y-6 text-base sm:text-[18px] leading-7 sm:leading-8 text-gray-800">
          {articleData.contentMiddle.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </section>

        <section className="mt-8 space-y-6 text-base sm:text-[18px] leading-7 sm:leading-8 text-gray-800">
          {articleData.contentExtended.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </section>

        {/* AD 2 */}
        <aside className="my-10 bg-gray-100 border border-gray-300 h-[250px] flex items-center justify-center">
          <span className="text-gray-500 text-sm">Advertisement</span>
        </aside>

        {/* BOTTOM CONTENT */}
        <section className="mt-8 space-y-6 text-base sm:text-[18px] leading-7 sm:leading-8 text-gray-800">
          {articleData.contentBottom.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </section>

        <section className="mt-8 space-y-6 text-base sm:text-[18px] leading-7 sm:leading-8 text-gray-800">
          {articleData.contentAnalysis.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </section>

        {/* AD 3 */}
        <aside className="my-10 bg-gray-100 border border-gray-300 h-[250px] flex items-center justify-center">
          <span className="text-gray-500 text-sm">Advertisement</span>
        </aside>

        {/* CLOSING CONTENT */}
        <section className="mt-8 space-y-6 text-base sm:text-[18px] leading-7 sm:leading-8 text-gray-800">
          {articleData.contentClosing.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </section>

        {/* MOST READ */}
        <section className="mt-5 border-t">
          <h3 className="text-xl sm:text-2xl font-bold mb-8">
            {articleData.mostRead.title}
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {articleData.mostRead.stories.map((story, i) => (
              <div key={i}>
                <Image
                  src={story.image}
                  alt="Story"
                  width={400}
                  height={250}
                  className="w-full object-cover"
                />
                <h4 className="mt-4 text-base sm:text-lg font-semibold leading-snug hover:underline cursor-pointer">
                  {story.title}
                </h4>
              </div>
            ))}
          </div>
        </section>

        {/* AUTHOR BIO */}
        <section className="mt-5 border-t pt-5">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-16 h-16 relative flex-shrink-0 mx-auto sm:mx-0">
              <Image
                src={articleData.authorBio.image}
                alt={articleData.authorBio.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-base sm:text-lg">
                By{" "}
                <span className="font-semibold hover:underline cursor-pointer">
                  {articleData.authorBio.name}
                </span>
              </p>
              <p className="mt-2 text-gray-700 leading-6 sm:leading-7 text-sm sm:text-[15px]">
                {articleData.authorBio.bio}
              </p>
              <p className="mt-2 text-gray-600 text-sm">
                {articleData.authorBio.handle}
              </p>
            </div>
          </div>
        </section>

      </article>

      <MoreMostFromPost />
      <NewsletterSection />
      <PaidPromotedStories />
      <Footer />
    </div>
    
  )
}
