"use client"

import { ChevronRight } from "lucide-react"
import Image from "next/image"

/* ================= DATA OBJECT ================= */

interface PostItem {
  id: number
  category?: string
  author?: string
  title: string
  date?: string
  image: string
}

interface RankedItem {
  id: number
  title: string
}

const pageData = {
  moreFromPost: [
    {
      id: 1,
      category: "Opinion",
      author: "Leana S. Wen",
      title: "Drink coffee to prevent dementia? New research suggests your daily cup might help protect long-term brain health.",
      date: "Feb. 16, 2026",
      image: "https://picsum.photos/500/300?random=31",
    },
    {
      id: 2,
      category: "Opinion",
      author: "Jim Stergios and Christopher R. Anderson",
      title: "Everyone is leaving Massachusetts how higher taxes and rising costs are reshaping the state’s economic future.",
      date: "Feb. 15, 2026",
      image: "https://picsum.photos/500/300?random=32",
    },
    {
      id: 3,
      category: "Travel",
      author: "Emily Hart",
      title: "A dinosaur road trip through the American West: Fossil sites, scenic highways, and prehistoric adventures for families.",
      date: "Feb. 16, 2026",
      image: "https://picsum.photos/500/300?random=33",
    },
    {
      id: 4,
      category: "Sports",
      author: "Michael Torres",
      title: "The world finally saw a Russian female skater again — and her emotional comeback performance did not disappoint.",
      date: "Feb. 14, 2026",
      image: "https://picsum.photos/500/300?random=34",
    },
    {
      id: 5,
      category: "Technology",
      author: "Samantha Lee",
      title: "AI is transforming the modern workplace: What employees and employers need to know in 2026.",
      date: "Feb. 13, 2026",
      image: "https://picsum.photos/500/300?random=35",
    },
    {
      id: 6,
      category: "Health",
      author: "Dr. Aaron Patel",
      title: "Why sleep may be the most overlooked pillar of good health — and how to improve it starting tonight.",
      date: "Feb. 12, 2026",
      image: "https://picsum.photos/500/300?random=36",
    },
    {
      id: 7,
      category: "Politics",
      author: "Rachel Monroe",
      title: "Inside the heated debate over federal spending and what it means for middle-class Americans.",
      date: "Feb. 11, 2026",
      image: "https://picsum.photos/500/300?random=37",
    },
    {
      id: 8,
      category: "Culture",
      author: "Daniel Kim",
      title: "Streaming wars intensify as major platforms battle for subscribers with bold new original series.",
      date: "Feb. 10, 2026",
      image: "https://picsum.photos/500/300?random=38",
    },
  ], 
  mostReadImage: {
    title:
      "The Epstein files have brought a wave of resignations and investigations",
    image: "https://picsum.photos/600/400?random=35",
  },

  mostReadList: [
    {
      id: 1,
      title:
        "DHS spokeswoman who became a face of Trump deportation campaign steps down",
    },
    {
      id: 2,
      title:
        "She was denied a legal abortion and sent to prison over an illegal one. Now she tells her story",
    },
    {
      id: 3,
      title:
        "Trump picks his White House assistant for panel reviewing ballroom",
    },
    {
      id: 4,
      title:
        "The world finally saw a Russian female skater again. She didn’t disappoint.",
    },
  ],
}

/* ================= PAGE ================= */

export default function MoreMostFromPost() {
  return (
    <section className="bg-white text-black font-serif mt-5">
      <div className="max-w-[1024px] mx-auto py-2 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* ================= LEFT SIDE ================= */}
        <div className="lg:col-span-2">

          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold">
              More from The Post
            </h2>
            <ChevronRight/>
          </div>

          <div className="space-y-6">

            {pageData.moreFromPost.map((item) => (
              <div
                key={item.id}
                className="grid md:grid-cols-2 gap-6 border-b pb-2"
              >
                {/* TEXT */}
                <div>
                  {item.category && (
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">
                        {item.category}
                      </span>{" "}
                      {item.author && (
                        <span className="ml-2 text-gray-500">
                          {item.author}
                        </span>
                      )}
                    </p>
                  )}

                  <h3 className="text-xl font-semibold leading-snug mt-3 cursor-pointer">
                    {item.title}
                  </h3>

                  {item.date && (
                    <p className="text-sm text-gray-500 mt-3">
                      {item.date}
                    </p>
                  )}
                </div>

                {/* IMAGE */}
                <div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div>

          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold">
              Most read
            </h2>
            <ChevronRight/>
          </div>

          {/* Top Image Story */}
          <div className="mb-8">
            <Image
              src={pageData.mostReadImage.image}
              alt={pageData.mostReadImage.title}
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold leading-snug hover:underline cursor-pointer">
              1&nbsp;&nbsp;{pageData.mostReadImage.title}
            </h3>
          </div>

          {/* Ranked List */}
          <div className="space-y-6">
            {pageData.mostReadList.map((item, index) => (
              <div
                key={item.id}
                className="flex gap-4 border-t pt-6"
              >
                <span className="text-2xl font-light text-gray-500">
                  {index + 2}
                </span>

                <p className="text-base leading-snug hover:underline cursor-pointer">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
