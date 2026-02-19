"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

type Video = {
  id: string;
  thumbnail: string;
  title: string;
  duration: string;
};

const videos: Video[] = [
    {
      id: "v1",
      thumbnail: "https://picsum.photos/300/533?random=1", // Legal-themed image
      title: "Vermont lawmaker slams Pam Bondi over Epstein files",
      duration: "0:46",
    },
    {
      id: "v2",
      thumbnail: "https://picsum.photos/300/533?random=2", // Monk/Peace Walk image
      title: "The monks' peace walk is ending. Here's their advice.",
      duration: "1:06",
    },
    {
      id: "v3",
      thumbnail: "https://picsum.photos/300/533?random=3", // Dog Rescue image
      title: "Teen rescues neighbor's dog from icy pond",
      duration: "0:52",
    },
    {
      id: "v4",
      thumbnail: "https://picsum.photos/300/533?random=4", // Skater tribute image
      title: "Olympic skater honors parents who died in D.C. plane crash",
      duration: "1:20",
    },
    {
      id: "v5",
      thumbnail: "https://picsum.photos/300/533?random=5", // Train image
      title: "Here's a look at Amtrak's new train",
      duration: "1:05",
    },
  ];
  

export default function VideosSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Scroll functionality
  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const cardWidth = containerRef.current.firstChild
      ? (containerRef.current.firstChild as HTMLElement).clientWidth + 16
      : 0;

    const scrollAmount = cardWidth * 2; // Adjust to scroll by 2 cards at a time

    containerRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  // Update the visibility of arrows based on scroll position
  const updateArrows = () => {
    const container = containerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth
    );
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", updateArrows);
      updateArrows(); // Check initial visibility on load

      // Prevent horizontal scrolling with mouse wheel
      container.addEventListener("wheel", (e) => {
        if (e.deltaX !== 0) {
          e.preventDefault(); // Prevent the default horizontal scrolling
        }
      });
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", updateArrows);
      }
    };
  }, []);

  return (
    <section className="max-w-[1200px] mx-auto relative mt-2 border-b-2 border-black px-2 sm:px-4 lg:p-0">
      {/* Header */}
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <div className="flex items-center">
          <h2 className="font-bold text-lg sm:text-xl text-gray-900">Featured Videos</h2>
          <ChevronRight size={16} className="text-neutral-500" />
        </div>

        <button className="flex items-center text-xs sm:text-sm font-semibold">
          <span className="ml-1 text-lg sm:text-xl">▶</span>
          <span className="hidden sm:inline ml-1">Watch All</span>
        </button>
      </div>

      <div className="relative mb-10">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className={`${
            canScrollLeft ? "block" : "hidden"
          } absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow`}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Videos Row */}
        <div
          ref={containerRef}
          className="flex space-x-3 sm:space-x-4 overflow-x-auto scrollbar-hide mb-2"
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative flex-shrink-0 w-[70%] sm:w-[45%] md:w-[30%] lg:w-[22%] min-w-[180px] sm:min-w-[220px] rounded-lg overflow-hidden cursor-pointer group"
            >
              {/* Video Thumbnail */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-[280px] sm:h-[320px] md:h-[350px] object-cover"
              />

              {/* Default Title */}
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 text-white">
                <p className="text-xs sm:text-sm font-semibold leading-snug drop-shadow-lg">
                  {video.title}
                </p>
                <div className="mt-1 flex items-center gap-1 text-[10px] sm:text-xs font-medium drop-shadow-lg">
                  <Play size={10} className="sm:w-3 sm:h-3" />
                  <span>{video.duration}</span>
                </div>
              </div>

              {/* Title Highlight on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                <p className="text-white text-lg sm:text-xl font-semibold">{video.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className={`${
            canScrollRight ? "block" : "hidden"
          } absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
