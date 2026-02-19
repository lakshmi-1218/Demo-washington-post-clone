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
    id: "dc-md-va",
    title: "D.C., Md. & Va.",
    featured: {
      id: "d1",
      image: "https://picsum.photos/seed/dc/600/400",
      title:
        "New transportation plan aims to ease congestion across the region",
    },
    articles: [
      { id: "d2", title: "Maryland lawmakers debate education funding reforms" },
      { id: "d3", title: "Virginia county sees rapid housing development growth" },
      { id: "d4", title: "D.C. Council approves downtown revitalization bill" },
      { id: "d5", title: "Metro expansion project moves into next phase" },
    ],
  },
  {
    id: "sports",
    title: "Sports",
    featured: {
      id: "s1",
      image: "https://picsum.photos/seed/sports/600/400",
      title:
        "Washington clinches playoff berth after dramatic overtime win",
    },
    articles: [
      { id: "s2", title: "Local high school team wins state championship" },
      { id: "s3", title: "Star player signs record-breaking contract extension" },
      { id: "s4", title: "College basketball rivalry heats up this weekend" },
      { id: "s5", title: "Coach reflects on rebuilding season success" },
    ],
  },
];

export default function SportAndOtherSection() {
  return (
    <main className="bg-white text-neutral-900 mt-2 max-w-[1280px] border-b-2 border-black px-2 sm:px-4 lg:p-0">
      <div className="max-w-[1200px] mx-auto">
        {/* Single Row - 2 Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-2">
          {sections.map((section) => (
            <div key={section.id} className="space-y-1">
              {/* Section Header */}
              <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                <span>{section.title}</span>
                <ChevronRight size={16} className="text-neutral-500" />
              </div>

              {/* Equal 50/50 Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {/* Featured */}
                <div>
                  <Image
                    src={section.featured.image!}
                    alt={section.featured.title}
                    width={600}
                    height={300}
                    className="w-full object-cover"
                  />

                  <h2 className="mt-3 sm:mt-4 text-xs sm:text-sm font-semibold">
                    {section.featured.title}
                  </h2>
                </div>

                {/* Articles */}
                <div className="space-y-4 sm:space-y-6 text-[11px] sm:text-xs">
                  {section.articles.map((article) => (
                    <div key={article.id}>
                      <span>{article.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
