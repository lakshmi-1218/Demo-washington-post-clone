"use client";

import Pagination from "@/components/ui/pagination";
import Image from "next/image";
import { useState } from "react";
import { Header } from "@/components/wp/header";
import { Footer } from "@/components/wp/footer";
import { PlusCircle } from "lucide-react"; // Lucid React icon

/* ===============================
   SAMPLE DATA FOR POLITICS PAGE
=================================*/

const pageData = {
    featured: {
        title: "New policies shake up Washington’s corridors of power",
        description:
            "Lawmakers are navigating a shifting political landscape, with major policy initiatives affecting millions across the nation.",
        date: "February 16, 2026",
        image: "https://picsum.photos/1200/800?random=41",
        caption: "(Getty Images)",
    },
    secondary: [
        {
            title: "White House unveils new climate strategy",
            date: "February 14, 2026",
            image: "https://picsum.photos/400/300?random=42",
        },
        {
            title: "Supreme Court hearings spark debate on civil liberties",
            date: "February 12, 2026",
            image: "https://picsum.photos/400/300?random=43",
        },
    ],
    moreStories: [
        {
            title: "Trump rallies support across multiple swing states",
            description:
                "Campaign efforts intensify as the election season heats up in key battlegrounds, drawing large crowds and media attention. The strategy focuses on voter engagement and messaging.",
            date: "February 10, 2026",
            image: "https://picsum.photos/500/350?random=201",
        },
        {
            title: "White House unveils ambitious new climate policy",
            description:
                "Officials announce a comprehensive plan to reduce carbon emissions nationwide. The initiative includes renewable energy investments and incentives for sustainable practices.",
            date: "February 11, 2026",
            image: "https://picsum.photos/500/350?random=202",
        },
        {
            title: "Supreme Court prepares to hear landmark voting rights case",
            description:
                "The court will examine a contentious state law affecting elections. Advocates argue it could influence access to the ballot for millions of voters.",
            date: "February 12, 2026",
            image: "https://picsum.photos/500/350?random=203",
        },
        {
            title: "Congress debates allocation for national security budget",
            description:
                "Lawmakers clash over proposed increases in defense spending. Intelligence operations and military preparedness remain hot topics in the discussions.",
            date: "February 13, 2026",
            image: "https://picsum.photos/500/350?random=204",
        },
        {
            title: "Senate confirms new ambassador to the United Nations",
            description:
                "The appointment is expected to impact upcoming international negotiations. Diplomats emphasize the importance of continuity and global relations.",
            date: "February 14, 2026",
            image: "https://picsum.photos/500/350?random=205",
        },
        {
            title: "Midterm elections show record-breaking voter turnout",
            description:
                "Reports highlight unprecedented engagement among young voters. Independent and first-time voters play a key role in shaping election results.",
            date: "February 15, 2026",
            image: "https://picsum.photos/500/350?random=206",
        },
        {
            title: "Investigations continue into campaign finance violations",
            description:
                "Authorities probe irregularities in recent fundraising activities. Potential legal ramifications loom for several political committees.",
            date: "February 16, 2026",
            image: "https://picsum.photos/500/350?random=207",
        },
        {
            title: "Debate over healthcare reform intensifies in Congress",
            description:
                "Lawmakers discuss changes to public programs and insurance coverage. Advocates urge faster implementation to address gaps in the system.",
            date: "February 17, 2026",
            image: "https://picsum.photos/500/350?random=208",
        },
        {
            title: "Immigration policies face renewed scrutiny from lawmakers",
            description:
                "Proposals for border security and asylum regulations spark nationwide debate. Activists call for balanced and humane policy reforms.",
            date: "February 18, 2026",
            image: "https://picsum.photos/500/350?random=209",
        },
        {
            title: "State governors push for sweeping education reforms",
            description:
                "New initiatives aim to improve public schooling outcomes. Programs include teacher training, curriculum updates, and student support services.",
            date: "February 19, 2026",
            image: "https://picsum.photos/500/350?random=210",
        },
        {
            title: "Key legislation stalls in House committee after debate",
            description:
                "Negotiations continue over budget allocations, regulatory changes, and public projects. Lawmakers remain divided on priorities and timelines.",
            date: "February 20, 2026",
            image: "https://picsum.photos/500/350?random=211",
        },
        {
            title: "National security experts warn of increasing cyber threats",
            description:
                "Agencies highlight growing risks to infrastructure and election systems. Recommendations include stronger cybersecurity measures and public awareness campaigns.",
            date: "February 21, 2026",
            image: "https://picsum.photos/500/350?random=212",
        },
        {
            title: "Supreme Court rulings impact campaign strategies nationwide",
            description:
                "Recent decisions could reshape political fundraising and election laws. Candidates are adapting quickly to new legal interpretations.",
            date: "February 22, 2026",
            image: "https://picsum.photos/500/350?random=213",
        },
        {
            title: "Debates over tax reform spark bipartisan negotiations",
            description:
                "Lawmakers discuss cuts, credits, and incentives for individuals and businesses. Economic projections influence key policy decisions across both parties.",
            date: "February 23, 2026",
            image: "https://picsum.photos/500/350?random=214",
        },
        {
            title: "Elections watch: Key races to follow in 2026 cycle",
            description:
                "Analysts examine competitive districts and pivotal factors. Voter sentiment, local issues, and campaign funding all play major roles.",
            date: "February 24, 2026",
            image: "https://picsum.photos/500/350?random=215",
        },
    ],

    sidebar: {
        newsletter: {
            title: "Today's Politics",
            description: "Top political news and insights curated by editors.",
            buttonText: "Subscribe",
        },
    },
};

const STORIES_PER_PAGE = 20;
const tabs = [
    "Donald Trump",
    "White House",
    "Democracy in America",
    "Court & Law",
    "National Security",
    "Elections",
];

/* ===============================
   POLITICS PAGE COMPONENT
=================================*/

export default function PoliticsPage() {
    const { featured, secondary, moreStories, sidebar } = pageData;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(moreStories.length / STORIES_PER_PAGE);
    const start = (currentPage - 1) * STORIES_PER_PAGE;
    const paginatedStories = moreStories.slice(start, start + STORIES_PER_PAGE);

    return (
        <div className="bg-white text-black">
            <Header />
            <div className="max-w-[1200px] mx-auto px-2 py-8 sm:py-12">

                {/* PAGE HEADING */}
            <div className="mb-6 border-b">
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-5xl font-serif font-bold tracking-tight">Politics</h1>
                        <PlusCircle className="w-4 h-4" />
                    </div>

                    {/* CATEGORY TABS */}
                    <div className="flex flex-wrap gap-4 mb-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                className="font-sans flex items-center gap-1 py-1 text-m hover:bg-gray-100 hover:rounded-xl transition"
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
                {/* FEATURED STORY (only on first page) */}
                {currentPage === 1 && (
                    <>
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start mb-12">
                            <div className="max-w-[520px]">
                                <h2 className="text-2xl font-serif font-bold leading-[1.1]">
                                    {featured.title}
                                </h2>
                                <p className="mt-4 sm:mt-6 text-[16px] sm:text-[18px] text-gray-700">
                                    {featured.description}
                                </p>
                                <p className="mt-4 sm:mt-6 text-sm text-gray-500">{featured.date}</p>
                            </div>

                            <div>
                                <Image
                                    src={featured.image}
                                    alt={featured.title}
                                    width={1200}
                                    height={800}
                                    className="w-full object-cover"
                                />
                                <p className="text-xs text-gray-500 mt-2">{featured.caption}</p>
                            </div>
                        </section>

                        {/* SECONDARY STORIES */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 border-t pt-8 sm:pt-10 border-b-2 border-black">
                            {secondary.map((item, index) => (
                                <div
                                    key={index}
                                    className={`mb-5 grid grid-cols-[1fr_140px] sm:grid-cols-[1fr_200px] gap-4 sm:gap-6 ${index === 1 ? "md:border-l md:pl-8" : ""}`}
                                >
                                    <div>
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                        <p className="text-sm text-gray-500 mt-2">{item.date}</p>
                                    </div>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={400}
                                        height={300}
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </section>
                    </>
                )}

                {/* MORE STORIES + SIDEBAR */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14">

                    <div className="lg:col-span-2">
                        {currentPage === 1 && (
                            <h2 className="text-2xl font-serif font-bold lg:mb-0 lg:mt-5 sm:mb-10 pb-2 pt-2">
                                More Stories
                            </h2>
                        )}

                        <div className="space-y-8 sm:space-y-10 lg:space-y-14">
                            {paginatedStories.map((story, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-[1fr_120px] sm:grid-cols-[1fr_200px] lg:grid-cols-[1fr_260px] gap-4 sm:gap-6 lg:gap-8"
                                >
                                    <div>
                                        <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-serif font-bold cursor-pointer">
                                            {story.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3">{story.description}</p>
                                        <p className="text-xs text-gray-500 mt-2 sm:mt-3">{story.date}</p>
                                    </div>
                                    <Image
                                        src={story.image}
                                        alt={story.title}
                                        width={500}
                                        height={350}
                                        className="w-[120px] sm:w-[200px] lg:w-[260px] h-[80px] sm:h-[130px] lg:h-[170px] object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <aside className="space-y-8 sm:space-y-10 mt-5">
                        <div className="border p-4 sm:p-6 text-center">
                            <h3 className="font-semibold text-base sm:text-lg">
                                {sidebar.newsletter.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600 mt-2">
                                {sidebar.newsletter.description}
                            </p>
                            <button className="mt-4 bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition">
                                {sidebar.newsletter.buttonText}
                            </button>
                        </div>

                        {/* Realistic Dummy Ad with Image */}
                        <div className="relative bg-white border shadow-sm overflow-hidden h-[300px] sm:h-[400px] lg:h-[600px] flex flex-col">

                            {/* Sponsored Label */}
                            <span className="absolute top-3 left-3 bg-white/80 backdrop-blur px-2 py-1 text-[10px] uppercase tracking-wide text-gray-500">
                                Sponsored
                            </span>

                            {/* Dummy Ad Image */}
                            <img
                                src="https://picsum.photos/600/800"
                                alt="Ad"
                                className="h-1/2 w-full object-cover"
                            />

                            {/* Ad Content */}
                            <div className="flex flex-col justify-between flex-1 p-4 sm:p-6">
                                <div>
                                    <h4 className="text-lg sm:text-xl font-semibold">
                                        Upgrade Your Workspace
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-2">
                                        Premium tools designed to improve focus, comfort, and productivity.
                                    </p>
                                </div>

                                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded transition">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </aside>


                </section>

                {/* PAGINATION */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                />

                <Footer />
            </div>
        </div>
    );
}
