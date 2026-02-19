import Image from "next/image";

const mostReadArticles = [
  {
    number: 1,
    category: "Column",
    author: "Mikkael A. Sekeres, MD",
    headline:
      "As an oncologist, these are the foods I recommend to lower cancer risk",
    image: "/images/mostread1.jpg",
    imageAlt: "Woman at press conference",
  },
  {
    number: 2,
    headline: "‘Us versus them’: The battle that’s tearing a small Virginia town apart",
  },
  {
    number: 3,
    headline:
      "One of this century’s most important Republicans takes a beating in home state",
  },
];

export function MostRead() {
  return (
    <section className="mx-auto max-w-[1280px] mt-5 border-b-2 border-black">
      {/* <div className="pt-4"> */}
        <h2 className="font-serif font-bold text-[18px] text-wp-dark mb-6">
          Most Read
        </h2>

        {/* Grid: 1 col mobile, 3 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 mb-3">
          {/* Item 1: Large number + category + author + headline + image */}
          <article className="flex items-start gap-4">
            <span className="text-[36px] font-serif font-bold text-wp-blue shrink-0 leading-none">
              {mostReadArticles[0].number}
            </span>

            <div className="flex-1 border-l border-wp-dark pl-4">
              <div className="mb-1 text-[13px] font-semibold text-wp-dark">
                {mostReadArticles[0].category}{" "}
                <span className="font-normal"> {mostReadArticles[0].author}</span>
              </div>
              <h3 className="font-serif text-[15px] text-wp-dark leading-snug hover:text-wp-gray transition-colors">
                <a href="#" aria-label={mostReadArticles[0].headline}>
                  {mostReadArticles[0].headline}
                </a>
              </h3>
            </div>
          </article>

          {/* Item 2 */}
          <article className="flex items-start gap-4">
            <span className="text-[28px] font-serif font-bold text-wp-blue shrink-0 leading-none">
              {mostReadArticles[1].number}
            </span>
            <h3 className="font-serif text-[14px] text-wp-dark leading-snug border-l border-wp-dark pl-4 hover:text-wp-gray transition-colors">
              <a href="#" aria-label={mostReadArticles[1].headline}>
                {mostReadArticles[1].headline}
              </a>
            </h3>
          </article>

          {/* Item 3 */}
          <article className="flex items-start gap-4">
            <span className="text-[28px] font-serif font-bold text-wp-blue shrink-0 leading-none">
              {mostReadArticles[2].number}
            </span>
            <h3 className="font-serif text-[14px] text-wp-dark leading-snug border-l border-wp-dark pl-4 hover:text-wp-gray transition-colors">
              <a href="#" aria-label={mostReadArticles[2].headline}>
                {mostReadArticles[2].headline}
              </a>
            </h3>
          </article>
        </div>
      {/* </div> */}
    </section>
  );
}
