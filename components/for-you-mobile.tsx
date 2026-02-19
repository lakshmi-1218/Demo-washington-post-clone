"use client";

import Image from "next/image";
import React from "react";
import { Header } from "@/components/wp/header";
import { Footer } from "@/components/wp/footer";
import { Navigation } from "./wp/navigation";

const articles = [
  {
    type: "news",
    title: "Frederick Wiseman, a master of immersive documentaries, dies at 96",
    time: "8 hours ago",
    image: "https://picsum.photos/80/60?random=101",
  },
  {
    type: "news",
    title: "Trump directs federal government to intervene in Potomac sewage spill",
    time: "4 hours ago",
    image: "https://picsum.photos/80/60?random=102",
  },
  {
    type: "opinion",
    author: "Michael Ramirez",
    title: "Shutting down Congress",
    time: "6 hours ago",
    image: "https://picsum.photos/80/60?random=103",
  },
  {
    type: "news",
    title: "Ukraine detains ex-energy minister as high-level corruption case widens",
    time: "13 hours ago",
    image: "https://picsum.photos/80/60?random=104",
  },
  {
    type: "news",
    title: "Judge orders slavery exhibit to be restored after Trump administration removal",
    time: "5 hours ago",
    image: "https://picsum.photos/80/60?random=105",
  },
  {
    type: "opinion",
    author: "Letters to the Editor",
    title: "Call the national debt what it is: Child abuse",
    time: "11 hours ago",
    image: "https://picsum.photos/80/60?random=106",
  },
  {
    type: "opinion",
    author: "Editorial Board",
    title: "Class warfare comes to Munich",
    time: "10 hours ago",
    image: "https://picsum.photos/80/60?random=107",
  },
  {
    type: "news",
    title: "Rubio lends hand to Hungary’s Orban as he faces tough election",
    time: "13 hours ago",
    image: "https://picsum.photos/80/60?random=108",
  },
  {
    type: "opinion",
    author: "Max Boot",
    title: "Even far-right foreign leaders are getting sick of Trump’s meddling",
    time: "17 hours ago",
    image: "https://picsum.photos/80/60?random=109",
  },
  {
    type: "news",
    title: "Aliens are ‘real,’ Obama says, as Washington shrugs",
    time: "12 hours ago",
    image: "https://picsum.photos/80/60?random=110",
  },
  {
    type: "news",
    title: "Mitch McConnell is taking a beating in the race to replace him",
    time: "19 hours ago",
    image: "https://picsum.photos/80/60?random=111",
  },
  {
    type: "opinion",
    author: "Letters to the Editor",
    title: "Warning: Listening to Pam Bondi is harmful to your brain",
    time: "4 days ago",
    image: "https://picsum.photos/80/60?random=112",
  },
  {
    type: "news",
    title: "These jeans ruled the Y2K era. They’re back on the backsides of Gen Z.",
    time: "2 days ago",
    image: "https://picsum.photos/80/60?random=113",
  },
  {
    type: "news",
    title: "‘Uno Reverse Card’ this policy y’all: Southwest changes are infuriating fans",
    time: "2 days ago",
    image: "https://picsum.photos/80/60?random=114",
  },
];


const adIndexes = [4, 8, 11];

export default function ForYouMobile() {
  return (
    <>
      <Header />
      <Navigation />
      <main className="max-w-md mx-auto px-4 py-4 text-black font-serif sm:block md:hidden">
        {/* Show on small only: visible on sm and below, hidden md+ */}
        <ul className="divide-y divide-gray-300">
        {articles.map((article, idx) => (
          <React.Fragment key={idx}>
            <li className="flex justify-between py-4 items-center gap-4">
              <div className="flex flex-col max-w-[70%]">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  {article.type === "opinion" && (
                    <>
                      <span className="font-semibold italic">Opinion</span>
                      {article.author && <span>{article.author}</span>}
                    </>
                  )}
                </div>
                <h2 className="text-base leading-snug font-bold hover:underline cursor-pointer">
                  {article.title}
                </h2>
                <span className="text-xs text-gray-500 mt-1">{article.time}</span>
              </div>

              <div className="flex-shrink-0 w-[80px] h-[60px] relative rounded-sm overflow-hidden bg-gray-200">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
            </li>

            {adIndexes.includes(idx) && (
              <li className="py-6 text-center text-gray-400 border-t border-gray-300">
                <div className="bg-gray-100 h-[100px] flex items-center justify-center">
                  Advertisement
                </div>
              </li>
            )}
          </React.Fragment>
        ))}
        </ul>
      <Footer />

      </main>
    </>
  );
}
