"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

type LatestItem = {
  id: number;
  title: string;
  image: string;
  time: string;
};

export default function Latest() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const latestItems: LatestItem[] = [
    { id: 1, title: "Breaking News: New Animated Series Announced by Top Studio", image: "https://picsum.photos/600/400?random=11", time: "10 minutes ago" },
    { id: 2, title: "Top 10 Cartoons to Watch This Week for Kids and Adults", image: "https://picsum.photos/600/400?random=12", time: "1 hour ago" },
    { id: 3, title: "Exclusive: Behind the Scenes of Popular Shows You Love", image: "https://picsum.photos/600/400?random=13", time: "3 hours ago" },
    { id: 4, title: "Fan-Favorite Characters Ranked from Best to Worst in 2026", image: "https://picsum.photos/600/400?random=14", time: "6 hours ago" },
    { id: 5, title: "Upcoming Cartoon Movie Releases You Should Mark on Your Calendar", image: "https://picsum.photos/600/400?random=15", time: "12 hours ago" },
    { id: 6, title: "Classic Cartoons Making a Comeback on Streaming Platforms", image: "https://picsum.photos/600/400?random=16", time: "1 day ago" },
    { id: 7, title: "Top Voice Actors Share Fun and Unexpected Behind-the-Scenes Stories", image: "https://picsum.photos/600/400?random=17", time: "2 days ago" },
    { id: 8, title: "Animated Short Films That Are Winning Awards Around the World", image: "https://picsum.photos/600/400?random=18", time: "3 days ago" },
    { id: 9, title: "Top Animation Studios to Follow in 2026 for Upcoming Releases", image: "https://picsum.photos/600/400?random=19", time: "4 days ago" },
    { id: 10, title: "Fan Art Spotlight: Incredible Creations by Animation Enthusiasts", image: "https://picsum.photos/600/400?random=20", time: "5 days ago" },
    { id: 11, title: "Upcoming Streaming Releases for Animation Lovers You Can't Miss", image: "https://picsum.photos/600/400?random=21", time: "6 days ago" },
    { id: 12, title: "Animated Documentaries That Inspire, Educate, and Entertain", image: "https://picsum.photos/600/400?random=22", time: "1 week ago" },
  ];
  

  // Scroll function
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const firstChild = scrollRef.current.children[0] as HTMLElement;
    const cardWidth = firstChild.offsetWidth + 16; // includes gap
    scrollRef.current.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  // Update arrow visibility
  const updateArrows = () => {
    const container = scrollRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth - 1);
  };

  // Add scroll listener
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaX !== 0) e.preventDefault();
    };

    container.addEventListener("scroll", updateArrows);
    container.addEventListener("wheel", handleWheel);
    
    // Call once after render
    requestAnimationFrame(updateArrows);

    return () => {
      container.removeEventListener("scroll", updateArrows);
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="w-full bg-white mt-6 border-b-2 border-black px-2 sm:px-4 lg:p-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-2">
        <div className="flex items-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">Latest</h2>
          <ChevronRight size={16} className="text-neutral-500" />
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="latest-scroll-container flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth mb-2"
        >
          <style jsx>{`
            .latest-scroll-container::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {latestItems.map((item) => (
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
        <button
          onClick={() => scroll("left")}
          className={`${
            canScrollLeft ? "block" : "hidden"
          } absolute left-0 top-[75px] sm:top-[90px] md:top-[100px] -translate-y-1/2 -translate-x-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-100 z-20`}
        >
          <ArrowLeft size={18} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className={`${
            canScrollRight ? "block" : "hidden"
          } absolute right-0 top-[75px] sm:top-[90px] md:top-[100px] -translate-y-1/2 translate-x-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-100 z-20`}
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
