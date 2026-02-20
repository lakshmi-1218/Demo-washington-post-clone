"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

type ArtsItem = {
  id: number;
  title: string;
  image: string;
  time: string;
};

export default function ArtsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const artsItems: ArtsItem[] = [
    { 
      id: 1, 
      title: "Hollywood Box Office Hits: A Deep Dive into This Month’s Blockbusters and Surprising Successes", 
      image: "https://picsum.photos/600/400?random=31", 
      time: "1 hour ago" 
    },
    { 
      id: 2, 
      title: "Award Season Highlights: Red Carpet Fashion, Unexpected Wins, and Behind-the-Scenes Moments You Need to See", 
      image: "https://picsum.photos/600/400?random=32", 
      time: "3 hours ago" 
    },
    { 
      id: 3, 
      title: "Top Music Charts This Week: Breakout Artists, Viral Hits, and the Songs Everyone’s Talking About", 
      image: "https://picsum.photos/600/400?random=33", 
      time: "6 hours ago" 
    },
    { 
      id: 4, 
      title: "Behind the Scenes of Broadway: Exclusive Stories from Cast, Crew, and Creative Teams", 
      image: "https://picsum.photos/600/400?random=34", 
      time: "12 hours ago" 
    },
    { 
      id: 5, 
      title: "Celebrity Interviews You Must Read: Candid Conversations About Life, Career, and Upcoming Projects", 
      image: "https://picsum.photos/600/400?random=35", 
      time: "1 day ago" 
    },
    { 
      id: 6, 
      title: "Upcoming Film Releases: A Preview of This Year’s Most Anticipated Movies and Hidden Gems", 
      image: "https://picsum.photos/600/400?random=36", 
      time: "2 days ago" 
    },
    { 
      id: 7, 
      title: "Art Exhibitions Around the World: Exploring Must-See Shows, Innovative Installations, and Cultural Highlights", 
      image: "https://picsum.photos/600/400?random=37", 
      time: "3 days ago" 
    },
    { 
      id: 8, 
      title: "New Music Album Reviews: In-Depth Analysis of the Latest Tracks, Lyrics, and Artistic Direction", 
      image: "https://picsum.photos/600/400?random=38", 
      time: "5 days ago" 
    },
  ];
  

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const firstChild = scrollRef.current.children[0] as HTMLElement;
    const cardWidth = firstChild.offsetWidth + 16; // include margin
    scrollRef.current.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  const updateArrows = () => {
    const container = scrollRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateArrows);
      updateArrows();
      container.addEventListener("wheel", (e) => e.deltaX !== 0 && e.preventDefault());
    }
    return () => {
      if (container) container.removeEventListener("scroll", updateArrows);
    };
  }, []);

  return (
    <section className="w-full bg-white mt-6 border-b-2 border-black lg:p-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div className="flex items-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">Arts & Entertainment</h2>
          <ChevronRight size={16} className="text-neutral-500" />
        </div>
      </div>
      {/* Carousel */}
      <div className="relative">
        <div ref={scrollRef} className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth mb-2" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
          {artsItems.map((item) => (
            <div key={item.id} className="min-w-[220px] sm:min-w-[260px] md:min-w-[300px] max-w-[220px] sm:max-w-[260px] md:max-w-[300px] flex-shrink-0">
              <div className="relative w-full h-[150px] sm:h-[180px] md:h-[200px]">
                <Image src={item.image} alt={item.title} fill className="object-cover rounded-md" />
              </div>
              <div className="mt-3 sm:mt-4 px-2">
                <h3 className="text-base sm:text-lg font-medium text-gray-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">{item.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button onClick={() => scroll("left")} className={`${canScrollLeft ? "block" : "hidden"} absolute left-0 top-[75px] sm:top-[90px] md:top-[100px] -translate-y-1/2 -translate-x-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-100 z-20`}>
          <ArrowLeft size={18} />
        </button>

        {/* Right Arrow */}
        <button onClick={() => scroll("right")} className={`${canScrollRight ? "block" : "hidden"} absolute right-0 top-[75px] sm:top-[90px] md:top-[100px] -translate-y-1/2 translate-x-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-100 z-20`}>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
