"use client"

import { ChevronDown, Mail, Rss, X } from "lucide-react"
import Image from "next/image"

interface Article {
    id: number
    category: string
    title: string
    excerpt: string
    image: string
}

const articles: Article[] = [
    {
        id: 16,
        category: "Entertainment",
        title: "Blockbuster movie breaks opening weekend records, redefining box office expectations",
        excerpt: "The latest summer blockbuster shattered box office records worldwide, drawing massive crowds and receiving critical acclaim for its storytelling, visual effects, and star-studded cast.",
        image: "https://picsum.photos/400/250?random=16",
    },
    {
        id: 3,
        category: "Politics",
        title: "Trump testifies to personally lobby for realignment of campaign funds amid political scrutiny",
        excerpt: "In a high-profile hearing, former President Trump detailed efforts to redirect campaign resources, revealing strategic maneuvers aimed at strengthening his political influence after the 2024 election.",
        image: "https://picsum.photos/400/250?random=3",
    },
    {
        id: 12,
        category: "Health",
        title: "Study links diet and longevity, highlighting key nutritional habits for a longer life",
        excerpt: "New research indicates that consistent intake of whole foods, lean proteins, and antioxidants is strongly associated with increased lifespan and reduced risk of chronic diseases across diverse populations.",
        image: "https://picsum.photos/400/250?random=12",
    },
    {
        id: 7,
        category: "Technology",
        title: "AI breakthroughs reshape software development, accelerating innovation across industries",
        excerpt: "Artificial intelligence is now powering code generation, debugging, and testing, enabling developers to produce complex applications faster, while raising questions about the future of human-driven programming.",
        image: "https://picsum.photos/400/250?random=7",
    },
    {
        id: 14,
        category: "Sports",
        title: "Soccer legend announces retirement after 20-year career, leaving a lasting legacy",
        excerpt: "Fans around the world celebrate the career of one of soccer’s greatest players, whose skill, leadership, and sportsmanship have inspired countless aspiring athletes over two decades.",
        image: "https://picsum.photos/400/250?random=14",
    },
    {
        id: 19,
        category: "Science",
        title: "Space telescope captures stunning new images of distant galaxies, revealing cosmic secrets",
        excerpt: "Astronomers have unveiled breathtaking high-resolution images of far-off galaxies, providing insights into star formation, black holes, and the early universe that could transform our understanding of cosmic evolution.",
        image: "https://picsum.photos/400/250?random=19",
    },
    {
        id: 1,
        category: "Politics",
        title: "Kamala Harris grapples with her future in a fractured Democratic Party",
        excerpt: "As the Democratic coalition faces internal disputes, Vice President Harris is weighing her options for the upcoming election cycle, seeking to unite party factions while addressing policy disagreements.",
        image: "https://picsum.photos/400/250?random=1",
    },
    {
        id: 11,
        category: "Health",
        title: "Mental health awareness rises in workplaces, prompting new corporate wellness initiatives",
        excerpt: "Companies are launching programs to support employee mental well-being, including stress reduction workshops, counseling services, and flexible work arrangements, in response to growing concerns about workplace burnout.",
        image: "https://picsum.photos/400/250?random=11",
    },
    {
        id: 20,
        category: "Science",
        title: "Breakthrough in renewable energy technology promises a cleaner, more sustainable future",
        excerpt: "Innovations in solar panels and wind turbines are increasing efficiency and affordability, making renewable energy a viable alternative to fossil fuels and marking a major step toward global sustainability goals.",
        image: "https://picsum.photos/400/250?random=20",
    },
    {
        id: 5,
        category: "Politics",
        title: "Trump plans to fire Jack Smith's team, signaling sweeping DOJ investigations into 2020 election matters",
        excerpt: "The move has triggered intense debate among political analysts, raising concerns over the independence of the Justice Department and potential implications for ongoing federal investigations.",
        image: "https://picsum.photos/400/250?random=5",
    },
    {
        id: 9,
        category: "Technology",
        title: "Cybersecurity threats escalate as remote work becomes the norm",
        excerpt: "Organizations face growing risks from phishing attacks, ransomware, and data breaches, prompting an urgent focus on robust digital security measures and employee training programs.",
        image: "https://picsum.photos/400/250?random=9",
    },
    {
        id: 18,
        category: "Entertainment",
        title: "Award-winning musician announces global world tour, thrilling fans across continents",
        excerpt: "Following the success of a critically acclaimed album, the artist’s upcoming tour promises elaborate stage designs, surprise collaborations, and a celebration of musical milestones.",
        image: "https://picsum.photos/400/250?random=18",
    },
    {
        id: 4,
        category: "Politics",
        title: "Sharp elbows and raised voices: Inside Trump’s turbulent transition period",
        excerpt: "Behind closed doors, aides and advisors navigate a tense environment marked by internal power struggles, policy disagreements, and strategic maneuvering for influence in the incoming administration.",
        image: "https://picsum.photos/400/250?random=4",
    },
    {
        id: 13,
        category: "Sports",
        title: "NBA playoffs intensify as top teams battle for the championship title",
        excerpt: "With record-breaking performances and dramatic last-minute victories, fans are witnessing an exhilarating playoff season filled with unforgettable moments on the court.",
        image: "https://picsum.photos/400/250?random=13",
    },
    {
        id: 8,
        category: "Technology",
        title: "Quantum computing edges closer to mainstream adoption with practical applications",
        excerpt: "Recent breakthroughs in hardware and algorithms are enabling companies to experiment with quantum solutions for optimization, cryptography, and complex simulations.",
        image: "https://picsum.photos/400/250?random=8",
    },
    {
        id: 2,
        category: "Politics",
        title: "RFK Jr.'s daughter-in-law meets with Trump’s chosen CIA director, sparking speculation",
        excerpt: "The high-profile meeting hints at potential political collaboration within the administration, raising questions about influence, strategy, and policy alignment.",
        image: "https://picsum.photos/400/250?random=2",
    },
    {
        id: 10,
        category: "Health",
        title: "New vaccine demonstrates strong efficacy in clinical trials, offering hope for global health",
        excerpt: "Early results show promising protection against infection, highlighting advancements in vaccine development and public health preparedness.",
        image: "https://picsum.photos/400/250?random=10",
    },
    {
        id: 6,
        category: "Politics",
        title: "Trump wins. The celebration started. Then the post-election challenges emerged",
        excerpt: "Following a controversial victory, the political landscape shifted rapidly, with campaigns, legal disputes, and strategic realignments taking center stage.",
        image: "https://picsum.photos/400/250?random=6",
    },
    {
        id: 17,
        category: "Entertainment",
        title: "Streaming platforms invest heavily in original series, reshaping the entertainment industry",
        excerpt: "Competition among major streaming services drives innovation in storytelling, production quality, and global content distribution.",
        image: "https://picsum.photos/400/250?random=17",
    },
    {
        id: 15,
        category: "Sports",
        title: "Olympic committee approves new sports for upcoming games, exciting athletes worldwide",
        excerpt: "The addition of new disciplines reflects evolving trends and encourages global participation, promising thrilling competitions and record-breaking performances.",
        image: "https://picsum.photos/400/250?random=15",
    },
];



const author = {
    name: "Ashley Parker",
    location: "Washington, D.C.",
    role: "Senior National Political Correspondent",
    description: `Ashley Parker is Senior National Political Correspondent for The Washington Post. She covered all four years of the Trump presidency, as well as his 2016 campaign, and served as the White House Bureau Chief under President Biden. Parker is also a three-time Pulitzer Prize winner. She was part of The Post team that won a Pulitzer Prize for National Reporting in 2018, for their coverage of Russian interference in the 2016 presidential election. She was part of The Post team that won a Pulitzer Prize for Public Service in 2022, for their coverage of the causes, costs and aftermath of the Jan. 6

Education: University of Pennsylvania, BA in English (Creative Writing); Communications`,
    imageUrl: "https://picsum.photos/200",
}

import { Header } from "@/components/wp/header";
import { Footer } from "@/components/wp/footer";
import Pagination from "@/components/ui/pagination";
import { useState } from "react";

export default function AuthorPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 10;
    const totalPages = Math.ceil(articles.length / articlesPerPage);
    
    const startIndex = (currentPage - 1) * articlesPerPage;
    const currentArticles = articles.slice(startIndex, startIndex + articlesPerPage);

    return (
        <div className="bg-white text-black font-serif">
            <Header />  
          {/* ================= AUTHOR PROFILE ================= */}
          <main className="max-w-[1200px] mx-auto px-2 sm:px-4">
            <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-[100px] border-b mt-5">
                <div className="flex flex-col sm:flex-row gap-6">
                    {/* Profile Image */}
                    <div className="w-28 h-28 relative flex-shrink-0 mx-auto sm:mx-0">
                        <Image
                            src={author.imageUrl}
                            alt={author.name}
                            fill
                            className="rounded-full object-cover"
                        />
                    </div>

                    {/* Author Info */}
                    <div className="flex-1 text-center sm:text-left">
                        <h2 className="text-2xl sm:text-3xl font-bold">{author.name}</h2>
                        <p className="text-sm text-gray-600 mt-1">{author.location}</p>
                        <p className="text-sm text-gray-600">{author.role}</p>

                        <p className="mt-4 text-gray-700 leading-relaxed text-sm max-w-[700px] whitespace-pre-line">
                            {author.description}
                        </p>
                        <div className="flex gap-1 items-center mt-5 mb-2 justify-center sm:justify-start">
                            <button className="text-m font-semibold">
                                Read more
                            </button>
                            <ChevronDown />
                        </div>
                    </div>
                </div>
                <div className="max-w-full py-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t">
                        <div className="flex gap-6 text-black">
                            <button aria-label="Email" className="hover:text-gray-600">
                                <Mail size={24} />
                            </button>
                            <button aria-label="X (formerly Twitter)" className="hover:text-gray-600">
                                <X size={24} />
                            </button>
                            <button aria-label="RSS Feed" className="hover:text-gray-600">
                                <Rss size={24} />
                            </button>
                        </div>
                         {/* Share confidential news tips button on right */}
                         <button
                                className="border px-4 sm:px-6 py-2 font-semibold hover:bg-gray-100 flex items-center gap-2 text-xs sm:text-sm w-full sm:w-auto justify-center"
                                aria-label="Share confidential news tips with The Post"
                            >
                                <span className="hidden md:inline">Share confidential news tips with The Post</span>
                                <span className="md:hidden">Share news tips</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
            </div>

            {/* ================= CONTENT AREA ================= */}
            <div className="max-w-[1100px] mx-auto px-4 flex flex-col lg:flex-row gap-10 mt-5">

                {/* ================= LEFT ARTICLE LIST ================= */}
                <div className="flex-1">
                    {currentArticles.map((article) => (
                        <div
                            key={article.id}
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-6 border-b"
                        >
                            {/* Text */}
                            <div className="flex-1">
                                <p className="text-xs uppercase text-gray-500 tracking-wide">
                                    {article.category}
                                </p>

                                <h3 className="text-lg sm:text-xl font-bold mt-1 cursor-pointer">
                                    {article.title}
                                </h3>

                                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                                    {article.excerpt}
                                </p>
                            </div>

                            {/* Image */}
                            <div className="w-full sm:w-[220px] h-[200px] sm:h-[140px] relative flex-shrink-0">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ))}

                    {/* ================= PAGINATION ================= */}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>

                {/* ================= RIGHT SIDEBAR ================= */}
                <div className="w-full lg:w-[300px] hidden lg:block flex-shrink-0">
                    {/* Newsletter Box */}
                    <div className="border p-6 mb-8">
                        <h4 className="font-bold text-lg mb-3">Today's Headlines</h4>
                        <p className="text-sm text-gray-600 mb-4">
                            The most important stories delivered to your inbox.
                        </p>
                        <button className="bg-black text-white px-4 py-2 text-sm w-full">
                            Sign up
                        </button>
                    </div>

                    {/* Ad 1 */}
                    <div className="bg-gray-200 h-[250px] flex items-center justify-center mb-8 text-sm">
                        Advertisement
                    </div>

                    {/* Ad 2 */}
                    <div className="bg-gray-200 h-[600px] flex items-center justify-center text-sm">
                        Advertisement
                    </div>
                </div>
            </div>
            <Footer />
            </main>
            
        </div>
    )
}
