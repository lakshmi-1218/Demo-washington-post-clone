import { ArticleCard } from "./article-card"
import { ChevronRight } from "lucide-react"
const newsData = [
  {
    image: "/images/politics2.jpg",
    imageAlt: "Political figure walking through halls",
    headline:
      "Justice Department launches probe into leaks from the intelligence community",
    category: "National Security",
    author: "Devlin Barrett",
    timestamp: "2 hours ago",
  },
  {
    image: "/images/health.jpg",
    imageAlt: "Medical professional in hospital corridor",
    headline:
      "A promising new treatment for long COVID shows real results in clinical trials",
    category: "Health",
    author: "Carolyn Y. Johnson",
    timestamp: "4 hours ago",
  },
  {
    image: "/images/military.jpg",
    imageAlt: "Military service member",
    headline:
      "The Pentagon is rethinking its approach to recruit Generation Z",
    category: "Military",
    author: "Alex Horton",
    timestamp: "5 hours ago",
  },
  {
    image: "/images/world.jpg",
    imageAlt: "Night scene with fire",
    headline:
      "European leaders scramble to present a united front on energy policy",
    category: "World",
    author: "Michael Birnbaum",
    timestamp: "7 hours ago",
  },
  {
    image: "/images/company.jpg",
    imageAlt: "Corporate building",
    headline:
      "The IRS is cracking down on wealthy tax evaders. Here is what to know.",
    category: "Business",
    author: "Jeff Stein",
    timestamp: "6 hours ago",
  },
  {
    image: "/images/food.jpg",
    imageAlt: "Food and drink",
    headline:
      "Researchers discover high levels of microplastics in bottled water brands",
    category: "Climate & Environment",
    author: "Dino Grandoni",
    timestamp: "8 hours ago",
  },
  {
    image: "/images/lifestyle1.jpg",
    imageAlt: "Education feature",
    headline:
      "How one Virginia school district is rethinking standardized testing",
    category: "Education",
    author: "Laura Meckler",
    timestamp: "9 hours ago",
  },
  {
    image: "https://picsum.photos/seed/news3/400/250",
    imageAlt: "Additional news",
    headline:
      "Federal Reserve signals possible interest rate adjustments later this year",
    category: "Economy",
    author: "Rachel Siegel",
    timestamp: "10 hours ago",
  },
]

export function Latest() {
  return (
    <section className="mx-auto max-w-[1280px] mt-5 border-b-2 border-black px-2 sm:px-4 lg:p-0">
      <div className="flex items-center">
        <h2 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Latest From the Post</h2>
        <ChevronRight size={16} className="text-neutral-500" />
      </div>

      {/* SINGLE GRID FOR ENTIRE SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {newsData.map((article, index) => (
          <ArticleCard
            key={index}
            layout="horizontal"
            size="small"
            {...article}
          />
        ))}
      </div>
    </section>
  )
}
