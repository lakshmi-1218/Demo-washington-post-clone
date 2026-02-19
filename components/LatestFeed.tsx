"use client"

import { Footer } from "./wp/footer"
import { Header } from "./wp/header"
import { Navigation } from "./wp/navigation"

const mainData = {
  items: [
    {
      type: "article",
      category: "Column",
      author: "Erin Haines",
      title:
        "Asking Price: We rescued my mom from financial ruin. Why is she resentful?",
      time: "1 hour ago",
      image: "https://picsum.photos/seed/erin/200/200",
    },
    {
      type: "article",
      category: "Column",
      author: "Nicholas Martin and Jaclyn Martin",
      title:
        "Miss Manners: If someone is mean to me, why can't I be mean back?",
      time: "1 hour ago",
      image: "https://picsum.photos/seed/manners/200/200",
    },
    {
      type: "article",
      category: "Column",
      author: "George Horne",
      title:
        "Carving Hays: Does moving into boyfriend's house mean following his rules?",
      time: "1 hour ago",
      image: "https://picsum.photos/seed/hays/200/200",
    },
    {
      type: "analysis",
      category: "Analysis",
      author: "Robert Samuels",
      title:
        "In push short program defined by misses, two U.S. teens land in top 10",
      time: "5 hours ago",
      image: "https://picsum.photos/seed/analysis1/200/200",
    },

    { type: "ad", label: "Advertisement" },

    {
      type: "promo",
      title: "Every story starts with a conversation.",
      subtitle: "With @washingtonpost LIVE",
    },

    {
      type: "article",
      title:
        "This Dutch pair wasn’t going to the Olympics. Then came the petition.",
      time: "7 hours ago",
      image: "https://picsum.photos/seed/dutch/200/200",
    },
    {
      type: "article",
      title:
        "Border czar Homan says small security force to remain in Minnesota",
      time: "7 hours ago",
      image: "https://picsum.photos/seed/border/200/200",
    },
    {
      type: "article",
      title:
        "With a broken heart, Frederic Brinson’s Olympic message just shows up.",
      time: "13 hours ago",
      image: "https://picsum.photos/seed/olympic/200/200",
    },
    {
      type: "article",
      title:
        "‘What are you reading?’ I asked. Here’s what six strangers told me.",
      time: "17 hours ago",
      image: "https://picsum.photos/seed/books/200/200",
    },

    { type: "ad", label: "Advertisement" },

    {
      type: "article",
      title:
        "‘Uno Reverse Card’ this policy y’all: Southwest changes are infuriating fliers",
      time: "18 hours ago",
      image: "https://picsum.photos/seed/airline/200/200",
    },
    {
      type: "article",
      title:
        "Prison ministry baptizes over 300 inmates amid ‘paradigm shift’ in evangelization",
      time: "19 hours ago",
      image: "https://picsum.photos/seed/prison/200/200",
    },
    {
      type: "article",
      title:
        "Md. district criticized for using Muslim holiday as school makeup day",
      time: "19 hours ago",
      image: "https://picsum.photos/seed/school/200/200",
    },
    {
      type: "article",
      title:
        "These years ruled the Y2K era. They’re back on Gen Z’s buckslips.",
      time: "20 hours ago",
      image: "https://picsum.photos/seed/y2k/200/200",
    },

    { type: "ad", label: "Advertisement" },
  ],
}


export default function LatestMain() {
  return (
    <>
      <Header />
      <Navigation />
      <main className="max-w-md mx-auto px-4 py-4 text-black font-serif sm:block md:hidden">

        <div className="divide-y divide-gray-200">
          {mainData.items.map((item, index) => {

            /* ===== AD BLOCK ===== */
            if (item.type === "ad") {
              return (
                <div
                  key={index}
                  className="py-6 text-center text-xs text-gray-500"
                >
                  {item.label}
                </div>
              )
            }

            /* ===== PROMO BLOCK ===== */
            if (item.type === "promo") {
              return (
                <div
                  key={index}
                  className="px-4 py-10 bg-blue-50 text-center"
                >
                  <h3 className="font-serif text-lg font-bold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {item.subtitle}
                  </p>
                </div>
              )
            }

            /* ===== ARTICLE BLOCK ===== */
            return (
              <article
                key={index}
                className="px-0 py-2"
              >
                <div className="flex gap-3">

                  {/* TEXT SIDE */}
                  <div className="flex-1">

                    {item.category && (
                      <div className="text-xs font-semibold text-gray-600 mb-1">
                        {item.category}
                        {item.author && `  |  ${item.author}`}
                      </div>
                    )}

                    <h2 className="font-serif text-[15px] leading-[1.25]">
                      {item.title}
                    </h2>

                    {item.time && (
                      <div className="text-xs text-gray-500 mt-2">
                        {item.time}
                      </div>
                    )}
                  </div>

                  {/* IMAGE SIDE */}
                  {item.image && (
                    <div className="w-24 h-24 flex-shrink-0">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      <Footer />

      </main>
    </>
  )
}
