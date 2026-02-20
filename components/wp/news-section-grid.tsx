import Image from "next/image";
import { ChevronRight } from "lucide-react";

type Article = {
  id: string;
  title: string;
  image?: string;
  tag?: string;
  author?: string;
};

type Section = {
  id: string;
  title: string;
  featured: Article;
  articles: Article[];
};

const sections: Section[] = [
  {
    id: "business",
    title: "Business & Technology",
    featured: {
      id: "b1",
      image: "https://picsum.photos/seed/business/600/400",
      title:
        "Trump's campaign against 'left-wing' media finds a new target: Apple News",
    },
    articles: [
      { id: "b2", title: "Trump orders Pentagon to buy coal power as the polluting fuel struggles to survive" },
      { id: "b3", title: "GOP tax law fuels steeper deficits, partly buffered by Trump's tariff revenue" },
      {
        id: "b4",
        title: "IRS improperly disclosed confidential immigrant tax data to DHS",
        tag: "Exclusive",
      },
      { id: "b5", title: "U.S. employers added 130,000 jobs in January, the strongest gain in months" },
    ],
  },
  {
    id: "national",
    title: "National",
    featured: {
      id: "n1",
      image: "https://picsum.photos/seed/national/600/400",
      title:
        "Confusion over laser system led to El Paso airspace closure, officials say",
    },
    articles: [
      { id: "n2", title: "For these clergy, Trump's immigration blitz became a call to action" },
      { id: "n3", title: "Police release man detained for questioning in Guthrie disappearance" },
      { id: "n4", title: "Home renovation reveals surprising photo under the floor: 'Hey, that's my mom'" },
      { id: "n5", title: "She bounced a $25 check in 2014. ICE tried to deport her." },
    ],
  },
  {
    id: "world",
    title: "World",
    featured: {
      id: "w1",
      image: "https://picsum.photos/seed/world/600/400",
      title:
        "Ocasio-Cortez, Rubio to offer dueling visions of world order in Munich",
    },
    articles: [
      { id: "w2", title: "Mapping U.S. strikes in the Caribbean and eastern Pacific" },
      { id: "w3", title: "At least 9 killed, many injured in shootings at Canada school and home" },
      { id: "w4", title: "Vance visits Armenia, Azerbaijan as Trump eyes deals in Russia's sphere" },
      { id: "w5", title: "Trump mulls second aircraft carrier off Iran, as Netanyahu flies to D.C. for talks" },
    ],
  },
  {
    id: "climate",
    title: "Climate, Health & Science",
    featured: {
      id: "c1",
      image: "https://picsum.photos/seed/climate/600/400",
      title:
        "Scientists have discovered one of elephants' most sensitive secrets",
    },
    articles: [
      { id: "c2", title: "FDA won't review Moderna application for first mRNA-based flu vaccine" },
      { id: "c3", title: "Scientists thought they understood global warming. Then the past three years happened." },
      { id: "c4", title: "'Restless and cranky': A balmy Western winter leaves many at a loss" },
      {
        id: "c5",
        title: "Buy-it-for-life coffee makers can save money, reduce waste, brew better",
        tag: "Column",
        author: "Michael J. Coren",
      },
    ],
  },
];

export default function NewsSectionGrid() {
  return (
    <section className="max-w-[1280px] mx-auto mt-2 border-b-2 border-black sm:px-4 lg:p-0">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-8 sm:gap-y-12 lg:gap-y-16 mb-2 py-5">
          {sections.map((section) => (
            <div key={section.id} className="space-y-1">
              {/* Section Header (Using ID + ChevronRight) */}
              <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                <span>{section.id}</span>
                <ChevronRight size={16} className="text-neutral-500" />
              </div>

              {/* Equal 50/50 Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-0">
                {/* Featured */}
                <div>
                  {section.featured.image && (
                    <Image
                      src={section.featured.image}
                      alt={section.featured.title}
                      width={600}
                      height={200}
                      className="w-full object-cover"
                    />
                  )}

                  <h2 className="mt-3 sm:mt-4 text-xs sm:text-sm font-semibold">
                    {section.featured.title}
                  </h2>
                </div>

                {/* Articles List */}
                <div className="space-y-4 sm:space-y-6 text-[11px] sm:text-xs">
                  {section.articles.map((article) => (
                    <div key={article.id}>
                      {article.tag && (
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide bg-black text-white px-2 py-1 mr-2">
                          {article.tag}
                        </span>
                      )}

                      <span>{article.title}</span>

                      {article.author && (
                        <p className="mt-1 text-xs sm:text-sm font-medium text-neutral-700">
                          {article.author}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
