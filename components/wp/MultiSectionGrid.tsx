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
    id: "advice",
    title: "Advice",
    featured: {
      id: "a1",
      image: "https://images.pexels.com/photos/3183187/pexels-photo-3183187.jpeg",
      title:
        "Carolyn Hax: Parent fears daughter's pet 'obsession' has gone too far",
      author: "Carolyn Hax",
    },
    articles: [
      { id: "a2", title: "Asking Eric: Husband's childhood friends pull him away from family", author: "R. Eric Thomas" },
      { id: "a3", title: "Miss Manners: He made a rude comment about my alma mater", author: "Judith Martin, Nicholas Martin and Jacobina Martin" },
      { id: "a4", title: "Ask Sahaj: My son's 5-month relationship ended 3 years ago. He's still reeling.", author: "Sahaj Kaur Kohli" },
      { id: "a5", title: "Parenting advice: How to handle sibling rivalry at home", author: "Carolyn Hax" },
    ],
  },
  {
    id: "live-chats",
    title: "Live Chats",
    featured: {
      id: "lc1",
      image: "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg",
      title:
        "Need advice? Join columnist Carolyn Hax's weekly chat (Feb. 13 | 12 p.m. ET)",
    },
    articles: [
      { id: "lc2", title: "Do political scandals have the same impact these days? Answers to your questions." },
      { id: "lc3", title: "Cooking chat: Do I need to sift flour for baking?" },
      { id: "lc4", title: "Dining chat: QR code menus at restaurants make me want to stay home" },
      { id: "lc5", title: "Is Europe ready to send troops to Ukraine? I answered your questions.", tag: "Opinion", author: "David Ignatius" },
    ],
  },
  {
    id: "style",
    title: "Style",
    featured: {
      id: "st1",
      image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
      title: "How to nail this season's top fashion trends without breaking the bank",
      author: "Fashion Daily",
    },
    articles: [
      { id: "st2", title: "I bought a celebrity-inspired outfit and it changed how I dress", author: "Jane Smith" },
      { id: "st3", title: "Sustainable fashion: How I cut my wardrobe waste in half", author: "Alex Johnson" },
      { id: "st4", title: "Accessorizing tips I wish I knew in college", author: "Lila Brown" },
      { id: "st5", title: "Why I stopped following fast fashion and started making my own style rules", author: "Michael Kim" },
    ],
  },
  {
    id: "arts-entertainment",
    title: "Arts & Entertainment",
    featured: {
      id: "ae1",
      image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
      title: "The films everyone will be talking about this year—and why they matter",
      author: "Film Weekly",
    },
    articles: [
      { id: "ae2", title: "I visited the newest art exhibition and it completely surprised me", author: "Lara Green" },
      { id: "ae3", title: "Award-winning director opens up about the film that changed his life", author: "Michael Brown" },
      { id: "ae4", title: "Top music festivals that feel more like life-changing experiences", author: "Sophie Lee" },
      { id: "ae5", title: "Theater show that made me rethink everything I knew about acting", author: "Rachel Adams" },
    ],
  },
  {
    id: "travel",
    title: "Travel",
    featured: {
      id: "tr1",
      image: "https://images.pexels.com/photos/21014/pexels-photo.jpg",
      title: "I explored exotic destinations this year and here's what I learned",
      author: "Wanderlust Magazine",
    },
    articles: [
      { id: "tr2", title: "The hidden food markets in Europe that changed how I travel", author: "Emma Wilson" },
      { id: "tr3", title: "How I managed a budget-friendly trip without missing the best spots", author: "James Taylor" },
      { id: "tr4", title: "Weekend getaway gone wrong—and how I turned it into an adventure", author: "Olivia Martinez" },
      { id: "tr5", title: "Solo travel fears I overcame (and the moments I'll never forget)", author: "Daniel Rivera" },
    ],
  },
  {
    id: "food",
    title: "Food",
    featured: {
      id: "f1",
      image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
      title: "I went on a culinary tour around the world—here's what surprised me",
      author: "Gourmet Traveler",
    },
    articles: [
      { id: "f2", title: "The street foods in Asia that made me fall in love with travel", author: "Chen Li" },
      { id: "f3", title: "Healthy recipes that actually feel indulgent", author: "Maria Gonzalez" },
      { id: "f4", title: "Why plant-based diets transformed my cooking habits", author: "Liam Anderson" },
      { id: "f5", title: "Seasonal ingredients I can't live without this month", author: "Nina Patel" },
    ],
  },
];

export default function MultiSectionGrid() {
  return (
    <main className="bg-white text-neutral-900 mt-2 border-b-2 border-black px-2 sm:px-4 lg:p-0">
      <div className="max-w-[1200px] mx-auto">
        {/* Single Row - 2 Sections per row */}
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
                  <h2 className="mt-3 sm:mt-4 text-xs sm:text-sm font-semibold">{section.featured.title}</h2>
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
