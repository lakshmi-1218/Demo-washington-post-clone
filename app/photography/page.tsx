"use client";

import Pagination from "@/components/ui/pagination";
import Image from "next/image";
import { useState } from "react";
import { Header } from "@/components/wp/header";
import { Footer } from "@/components/wp/footer";
const pageData = {
    featured: {
        title: "The 5th Dimension co-founder was a cultural force.",
        description:
            "The singer and photographer was a founding member of the vocal group, known for No. 1 hits like “Aquarius/Let the Sunshine In.” He died last week at 90.",
        date: "February 14, 2026",
        image: "https://picsum.photos/1200/800?random=11",
        caption: "(Michael Ochs Archives/Getty Images)",
    },

    secondary: [
        {
            title: "Enduring images of 2025",
            date: "December 11, 2025",
            image: "https://picsum.photos/400/300?random=21",
        },
        {
            title:
                "In her own words: Pelosi plans to retire after decades in charge",
            date: "November 6, 2025",
            image: "https://picsum.photos/400/300?random=22",
        },
    ],

    moreStories: [
        {
            title: "A desert storm turns Phoenix skies copper",
            description:
                "A sudden wall of dust swept across the city at dusk, creating apocalyptic scenes that photographers raced to capture from rooftops and highways.",
            date: "September 10, 2025",
            image: "https://picsum.photos/500/350?random=301",
        },
        {
            title: "Inside America’s forgotten steel towns",
            description:
                "Portraits from across the Rust Belt document resilience and reinvention in communities shaped by industry.",
            date: "September 11, 2025",
            image: "https://picsum.photos/500/350?random=302",
        },
        {
            title: "Life along the Mississippi at flood stage",
            description:
                "Residents brace for rising waters as photographers document the tension between nature and infrastructure.",
            date: "September 12, 2025",
            image: "https://picsum.photos/500/350?random=303",
        },
        {
            title: "The silent rituals of a Himalayan monastery",
            description:
                "An intimate photo essay captures centuries-old spiritual traditions practiced high above the clouds.",
            date: "September 13, 2025",
            image: "https://picsum.photos/500/350?random=304",
        },
        {
            title: "Wild horses return to protected prairie land",
            description:
                "Conservation efforts show early success as herds roam freely across restored grasslands.",
            date: "September 14, 2025",
            image: "https://picsum.photos/500/350?random=305",
        },
        {
            title: "A championship moment frozen in time",
            description:
                "The split second that defined a season — and the photographer who anticipated it.",
            date: "September 15, 2025",
            image: "https://picsum.photos/500/350?random=306",
        },
        {
            title: "Rebuilding after California wildfires",
            description:
                "Before-and-after images reveal neighborhoods slowly rising from devastation.",
            date: "September 16, 2025",
            image: "https://picsum.photos/500/350?random=307",
        },
        {
            title: "The neon nights of downtown Seoul",
            description:
                "Street photographers explore color, motion and identity in South Korea’s capital after dark.",
            date: "September 17, 2025",
            image: "https://picsum.photos/500/350?random=308",
        },
        {
            title: "A year inside the nation’s busiest ER",
            description:
                "Raw, unscripted images reveal humanity in moments of urgency and care.",
            date: "September 18, 2025",
            image: "https://picsum.photos/500/350?random=309",
        },
        {
            title: "Coastal villages confronting rising seas",
            description:
                "Communities adapt to climate change as tides creep ever closer to their doorsteps.",
            date: "September 19, 2025",
            image: "https://picsum.photos/500/350?random=310",
        },
        {
            title: "Harvest season through migrant workers’ eyes",
            description:
                "A traveling photographer follows the hands that feed America during peak harvest.",
            date: "September 20, 2025",
            image: "https://picsum.photos/500/350?random=311",
        },
        {
            title: "Skate culture beneath city overpasses",
            description:
                "Young athletes transform overlooked urban spaces into vibrant creative hubs.",
            date: "September 21, 2025",
            image: "https://picsum.photos/500/350?random=312",
        },
        {
            title: "The architecture hidden beneath subway tunnels",
            description:
                "A rarely seen geometric world lies below commuters’ daily routines.",
            date: "September 22, 2025",
            image: "https://picsum.photos/500/350?random=313",
        },
        {
            title: "Inside the world’s largest refugee camp",
            description:
                "Images of resilience, struggle and hope from one of the globe’s most fragile regions.",
            date: "September 23, 2025",
            image: "https://picsum.photos/500/350?random=314",
        },
        {
            title: "Dawn breaks over America’s national parks",
            description:
                "Golden light reveals vast landscapes before the crowds arrive.",
            date: "September 24, 2025",
            image: "https://picsum.photos/500/350?random=315",
        },
        {
            title: "Portraits from Silicon Valley’s layoffs",
            description:
                "Workers reflect on uncertainty and reinvention after the tech downturn.",
            date: "September 25, 2025",
            image: "https://picsum.photos/500/350?random=316",
        },
        {
            title: "An Arctic mission documents melting ice",
            description:
                "Scientists and photographers collaborate to capture a rapidly changing polar landscape.",
            date: "September 26, 2025",
            image: "https://picsum.photos/500/350?random=317",
        },
        {
            title: "The last lighthouse keepers of Maine",
            description:
                "Remote outposts remain staffed by a shrinking group devoted to maritime history.",
            date: "September 27, 2025",
            image: "https://picsum.photos/500/350?random=318",
        },
        {
            title: "A photographer’s road trip across Appalachia",
            description:
                "Images challenge stereotypes and spotlight quiet strength in rural towns.",
            date: "September 28, 2025",
            image: "https://picsum.photos/500/350?random=319",
        },
        {
            title: "Documenting Indigenous traditions worldwide",
            description:
                "A global visual project preserves cultures passed down through generations.",
            date: "September 29, 2025",
            image: "https://picsum.photos/500/350?random=320",
        },
    ],


    sidebar: {
        newsletter: {
            title: "Today's Headlines",
            description:
                "The most important news stories of the day, curated by Post editors.",
            buttonText: "Sign up",
        },
    },
};
const STORIES_PER_PAGE = 20;
export default function PhotographyPage() {
    const { featured, secondary, moreStories, sidebar } = pageData;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(
        moreStories.length / STORIES_PER_PAGE
    );

    const start = (currentPage - 1) * STORIES_PER_PAGE;
    const paginatedStories = moreStories.slice(
        start,
        start + STORIES_PER_PAGE
    );
    return (
        <div className="bg-white text-black">
            <Header />
            <div className="max-w-[1200px] mx-auto px-2 sm:px-6 py-8 sm:py-12">
                <div className="mb-10 border-b pb-4">
                    <h1 className="text-5xl font-serif font-bold tracking-tight">
                        Photography
                    </h1>
                </div>
                {currentPage === 1 && (
                    <>
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                            <div className="max-w-[520px]">
                                <h2 className="text-2xl font-serif font-bold leading-[1.1]">
                                    {featured.title}
                                </h2>
                                <p className="mt-4 sm:mt-6 text-[16px] sm:text-[18px] text-gray-700">
                                    {featured.description}
                                </p>
                                <p className="mt-4 sm:mt-6 text-sm text-gray-500">
                                    {featured.date}
                                </p>
                            </div>

                            <div>
                                <Image
                                    src={featured.image}
                                    alt={featured.title}
                                    width={1200}
                                    height={800}
                                    className="w-full object-cover"
                                />
                                <p className="text-xs text-gray-500 mt-2">
                                    {featured.caption}
                                </p>
                            </div>
                        </section>

                        <section className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 border-t pt-8 sm:pt-10">
                            {secondary.map((item, index) => (
                                <div
                                    key={index}
                                    className={`grid grid-cols-1 sm:grid-cols-[1fr_200px] gap-4 sm:gap-6 ${index === 1 ? "md:border-l md:pl-8" : ""}`}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={400}
                                        height={300}
                                        className="object-cover w-full"
                                    />

                                    <div>
                                        <h2 className="text-xl font-bold">
                                            {item.title}
                                        </h2>
                                        <p className="text-sm text-gray-500 mt-2">
                                            {item.date}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </>
                )}

                <section className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14">

                    <div className="lg:col-span-2">

                        {currentPage === 1 && (
                            <h2 className="text-[22px] sm:text-[26px] font-serif font-bold mb-8 sm:mb-10 border-b pb-4">
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

                                        <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3">
                                            {story.description}
                                        </p>

                                        <p className="text-xs text-gray-500 mt-2 sm:mt-3">
                                            {story.date}
                                        </p>
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

                    <aside className="space-y-8 sm:space-y-10">
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

                        <div className="bg-gray-100 h-[300px] sm:h-[400px] lg:h-[600px] flex items-center justify-center text-gray-400">
                            Advertisement
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
