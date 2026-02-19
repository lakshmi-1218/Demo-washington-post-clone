import Image from "next/image"
import Link from "next/link"

/* ================= TYPES ================= */

type BaseArticle = {
  id: number
  title: string
  description: string
  image: string
}

type SimpleArticle = BaseArticle & {
  type: "simple" | "oneSub" | "twoSub"
  sub?: string[]
}

type FeatureArticle = BaseArticle & {
  type: "feature"
  category: string
  subStories: string[]
}

type Article = SimpleArticle | FeatureArticle

type Opinion = {
  author: string
  title: string
  image?: string
}

/* ================= DATA ================= */

const leftArticles: Article[] = [
  {
    id: 1,
    type: "simple",
    title: "Trump repeals U.S. government’s power to regulate climate",
    description:
      "The Environmental Protection Agency finishes repeal of the endangerment finding.",
    image: "https://picsum.photos/800/500?random=1",
  },
  {
    id: 2,
    type: "oneSub",
    title:
      "Democrats reject White House’s latest proposal, raising odds of partial shutdown",
    description:
      "Large swaths of Homeland Security are set to shut down Saturday.",
    sub: ["Border czar says Minnesota immigration surge is ending"],
    image: "https://picsum.photos/800/500?random=2",
  },
  {
    id: 3,
    type: "twoSub",
    title:
      "Judge rejects Hegseth bid to punish Sen. Kelly for video message",
    description:
      "The Trump administration intends to appeal the ruling.",
    sub: [
      "White House fires U.S. attorney in NY hours after judges appointed him",
      "GOP opposition threatens to sink Trump nominee",
    ],
    image: "https://picsum.photos/800/500?random=3",
  },
  {
    id: 4,
    type: "simple",
    title:
      "FBI gives new details on suspect in Nancy Guthrie case",
    description:
      "The FBI described the suspect as wearing a black backpack.",
    image: "https://picsum.photos/800/500?random=4",
  },
  {
    id: 5,
    type: "simple",
    title:
      "Pride flag flies again at Stonewall Inn, challenging federal ban",
    description:
      "New York officials restored the LGBTQ+ symbol.",
    image: "https://picsum.photos/800/500?random=5",
  },
  {
    id: 6,
    type: "feature",
    category: "Olympics",
    title:
      "Chloe Kim, with perspective and perseverance, wins silver",
    description:
      "The American halfpipe legend bid for a gold medal three-peat fell short.",
    image: "https://picsum.photos/800/500?random=2",
    subStories: [
      "Sleeping on cardboard beds, NHL stars embrace being back",
      "Gold medal in the bag, Breezy Johnson gets more hardware",
      "Sarah Schleper is 46 and in her seventh Olympics",
      "How athletes prepared for extreme winter conditions",
    ],
  },
  {
    id: 7,
    type: "simple",
    title:
      "These are the states with the smartest, most beautiful people",
    description:
      "Researchers uncovered hidden biases in ChatGPT’s assessment.",
    image: "https://picsum.photos/800/500?random=7",
  },
]

const opinions: Opinion[] = [
  {
    author: "David Ignatius",
    title: "An epic feud threatens Mideast stability at a delicate moment",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    author: "Yasmin Vossoughian",
    title: "Modern dating has a new double standard",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    author: "Editorial Board",
    title: "Los Angeles keeps trying to kill the Golden Goose",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    author: "Michelle L. Hanlon",
    title: "This technology could revolutionize electricity — from space",
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    author: "Editorial Board",
    title: "Boston gets rent control fever",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    author: "Leana S. Wen",
    title: "Where to find evidence-based adult vaccine recommendations",
    image: "https://i.pravatar.cc/100?img=6",
  },
  {
    author: "Michael Ramirez",
    title: "Cartoon: A gold medal in bureaucracy",
    image: "https://i.pravatar.cc/100?img=7",
  },
  {
    author: "Mitch Daniels",
    title: "A consumption tax on Americans is brewing. Tariffs are the dry run.",
    image: "https://i.pravatar.cc/100?img=8",
  },
  {
    author: "Bernie Sanders",
    title: "Bernie Sanders’s worst idea yet",
    image: "https://i.pravatar.cc/100?img=9",
  },
  {
    author: "Letters to the Editor",
    title: "Academic independence must be protected. Here's how.",
  },
  {
    author: "Scott Lincicome and Inu Manak",
    title: "How a supplier of nuts and bolts could curb tariff overreach",
    image: "https://i.pravatar.cc/100?img=10",
  },
  {
    author: "Julia B. Cartwright",
    title: "Government fraud is everywhere. Prediction markets can root it out.",
  },
]
export function HeroSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-0 pt-2 mb-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* ================= LEFT SIDE ================= */}
        <div className="lg:col-span-8">
          {leftArticles.map((article) => (
            <article
              key={article.id}
              className="py-6 sm:py-6 border-b-2 border-black"
            >
              {article.type === "feature" ? (
                <>
                  <p className="text-[12px] sm:text-[13px] uppercase tracking-wide text-neutral-500 mb-2">
                    {article.category}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
                    <div className="lg:col-span-5">
                      <Link href="/article/article-slug">
                        <h2 className="font-serif text-[22px] sm:text-[26px] leading-tight cursor-pointer">
                          {article.title}
                        </h2>
                      </Link>
                      <p className="mt-2 text-[13px] sm:text-[14px] text-neutral-600">
                        {article.description}
                      </p>
                    </div>

                    <div className="lg:col-span-7">
                      <Link href="/article/article-slug">
                        <div className="relative w-full aspect-[16/9]">
                          <Image
                            src={article.image}
                            alt=""
                            fill
                            unoptimized
                            className="object-cover rounded-md"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 sm:mt-6">
                    {article.subStories.map((sub, i) => (
                      <Link href="/article/article-slug" key={i}>
                        <h4 className="font-serif text-[14px] sm:text-[15px] cursor-pointer">
                          {sub}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
                  <div className="lg:col-span-5">
                    <Link href="/article/article-slug">
                      <h3 className="font-serif text-[20px] sm:text-[22px] leading-snug cursor-pointer">
                        {article.title}
                      </h3>
                    </Link>

                    <p className="mt-2 text-[13px] sm:text-[14px] text-neutral-600">
                      {article.description}
                    </p>

                    {article.sub?.map((subItem, i) => (
                      <Link href="/article/article-slug" key={i}>
                        <h4 className="mt-2 sm:mt-3 font-serif text-[14px] sm:text-[15px] cursor-pointer">
                          {subItem}
                        </h4>
                      </Link>
                    ))}
                  </div>

                  <div className="lg:col-span-7">
                    <Link href="/article/article-slug">
                      <div className="relative w-full aspect-[16/9]">
                        <Image
                          src={article.image}
                          alt=""
                          fill
                          unoptimized
                          className="object-cover rounded-md"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <aside className="py-6 sm:py-6 lg:col-span-4 border-l border-neutral-300 pl-0 lg:pl-6 mt-8 lg:mt-0">
          <div className="flex items-center justify-between">
            <h4 className="text-[13px] sm:text-[14px] font-semibold uppercase tracking-wide">
              Opinions
            </h4>
            <span className="text-neutral-400 text-lg">›</span>
          </div>

          <div className="divide-y divide-neutral-200">
            {opinions.map((opinion, index) => (
              <div key={index} className="py-4 sm:py-5 flex items-start gap-3 sm:gap-4">
                <div className="flex-1">
                  <p className="text-[11px] sm:text-[12px] text-neutral-500 mb-1">
                    {opinion.author}
                  </p>
                  <h5 className="font-serif text-[14px] sm:text-[16px] leading-snug cursor-pointer">
                    {opinion.title}
                  </h5>
                </div>

                {opinion.image && (
                  <img
                    src={opinion.image}
                    alt={opinion.author}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </aside>

      </div>
    </section>
  )
}

