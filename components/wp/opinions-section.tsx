import Image from "next/image"

const opinionArticles = [
  {
    author: "George F. Will",
    headline: "The conservative case against unchecked executive authority",
    image: "/images/opinion.jpg",
    imageAlt: "Political commentator portrait",
  },
  {
    author: "Jennifer Rubin",
    headline: "Democrats need a new strategy. Here is what they should do.",
  },
  {
    author: "Editorial Board",
    headline: "Congress must act to preserve the independence of the judiciary",
  },
  {
    author: "Dana Milbank",
    headline: "The absurdity of Washington this week, in one hearing",
  },
  {
    author: "Catherine Rampell",
    headline: "Why the economy is better than people think it is",
  },
]

export function OpinionsSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-6">
      <div className="border-t-2 border-wp-dark pt-4">
        <h2 className="font-heading text-[18px] text-wp-dark mb-4">Opinions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {opinionArticles.map((article, index) => (
            <article key={index} className={index < opinionArticles.length - 1 ? "lg:border-r lg:border-wp-border lg:pr-5" : ""}>
              {article.image && (
                <div className="relative w-full aspect-[4/3] overflow-hidden mb-2">
                  <Image
                    src={article.image}
                    alt={article.imageAlt!}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </div>
              )}
              <p className="text-[11px] font-body font-bold text-wp-dark uppercase tracking-wider mb-1">
                {article.author}
              </p>
              <h3 className="font-subheading text-[15px] leading-snug text-wp-dark hover:text-wp-gray transition-colors italic">
                <a href="#">{article.headline}</a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
