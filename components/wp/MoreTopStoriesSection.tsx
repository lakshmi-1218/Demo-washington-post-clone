import Image from "next/image"
import {ChevronRight} from "lucide-react";
const middleStories = [
  {
    title:
      "D.C. mom of three killed in front of children by ex-boyfriend, police and family say",
  },
  {
    title:
      "Judge says U.S. must allow deported Venezuelans to return for hearings",
  },
  {
    title:
      "Using a law deployed against mob bosses, D.C. files suit against a landlord",
  },
  {
    title:
      "Window shade up or down on a plane? You'll make enemies either way.",
  },
  {
    analysis: "Analysis  Amber Phillips",
    title:
      "What's happening with the FBI seizure of ballots in Georgia",
  },
  {
    title:
      "How this 75-year-old Tony-winning clown stays in shape for the stage",
  },
]

const mostRead = [
  {
    number: 1,
    category: "Column",
    author: "Geoffrey A. Fowler and Kevin Schaul",
    title:
      "These states have the smartest, friendliest people, according to ChatGPT",
  },
  {
    number: 2,
    title:
      "Trump repeals U.S. government's power to regulate climate",
  },
  {
    number: 3,
    title:
      "FBI gives new details on suspect in Nancy Guthrie case, doubles reward to $100K",
  },
]

export function MoreTopStoriesSection() {
  return (
    <section className="max-w-[1280px] mx-auto mt-2 border-b-2 border-black sm:px-4 lg:p-0">
        <div className="flex items-center">
        <h2 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">More Top Stories</h2>
        <ChevronRight size={16} className="text-neutral-500" />
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 mb-2">

        {/* Left column: Image + caption + headline */}
        <div className="lg:col-span-5">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="https://picsum.photos/800/600?random=11"
              alt="Mayor Muriel Bowser speaking"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <p className="text-[10px] sm:text-xs text-neutral-600 mt-2">
            Mayor Muriel Bowser (D) speaks at Children's National Hospital in Washington on May 2. (Tom Brenner for The Post)
          </p>
          <h3 className="font-serif text-sm sm:text-base mt-3 sm:mt-4 leading-tight cursor-pointer">
            In rare move, Congress exerts power over D.C. and blocks tax policy
          </h3>
        </div>

        {/* Middle column: Story list with dividers */}
        <div className="lg:col-span-4 lg:border-l border-neutral-300 lg:pl-4 xl:pl-6">
          <div className="divide-y divide-neutral-200">
            {middleStories.map(({ title, analysis }, idx) => (
              <div key={idx} className="py-2 sm:py-3">
                {analysis && (
                  <p className="text-xs sm:text-sm font-semibold mb-1">{analysis}</p>
                )}
                <h4 className="font-serif text-xs sm:text-sm">
                  {title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Most read list */}
        <aside className="lg:col-span-3 lg:border-l border-neutral-300 lg:pl-4 xl:pl-6">
          {/* <h3 className="font-semibold text-base sm:text-lg mb-2">Most Read</h3> */}

          <div className="divide-y divide-neutral-200">
            {mostRead.map(({ number, category, author, title }) => (
              <div key={number} className="py-2 sm:py-3 flex gap-3 sm:gap-4">
                <span className="font-serif text-xs sm:text-sm text-neutral-700">{number}</span>
                <div>
                  {category && (
                    <p className="text-xs sm:text-sm font-semibold">{category}</p>
                  )}
                  {author && (
                    <p className="text-xs sm:text-sm text-neutral-600 mb-1">{author}</p>
                  )}
                  <h4 className="font-serif text-xs sm:text-sm leading-snug cursor-pointer">
                    {title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
