"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

type Editorial = {
  id: number;
  title: string;
  image: string;
  time: string;
  category: string;
};

export default function LettersToTheEditor() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const editorials: Editorial[] = [
    {
      id: 1,
      title: "Exploring the Impact of 5G on Modern Communication: Opportunities and Challenges Ahead",
      image: "https://picsum.photos/600/400?random=11", // 5G technology-related image
      time: "2 hours ago",
      category: "Technology",
    },
    {
      id: 2,
      title: "The Role of AI in Healthcare: Revolutionizing Diagnosis, Treatment, and Patient Care",
      image: "https://picsum.photos/600/400?random=12", // AI in healthcare-related image
      time: "1 day ago",
      category: "Health",
    },
    {
      id: 3,
      title: "The Future of Urban Mobility: How Electric Vehicles and Smart Cities are Changing Transportation",
      image: "https://picsum.photos/600/400?random=13", // Urban mobility and electric vehicles-related image
      time: "3 days ago",
      category: "Environment",
    },
    {
      id: 4,
      title: "Understanding Blockchain Beyond Bitcoin: The Future of Decentralized Applications and Finance",
      image: "https://picsum.photos/600/400?random=14", // Blockchain and technology-related image
      time: "5 days ago",
      category: "AI",
    },
    {
      id: 5,
      title: "The Intersection of Technology and Privacy: The Future of Data Protection in a Connected World",
      image: "https://picsum.photos/600/400?random=15", // Privacy and technology-related image
      time: "7 days ago",
      category: "Politics",
    },
    {
      id: 6,
      title: "The Quantum Leap: How Quantum Computing Will Revolutionize Industries and Solve Complex Problems",
      image: "https://picsum.photos/600/400?random=16", // Quantum computing-related image
      time: "1 week ago",
      category: "Technology",
    },
    {
      id: 7,
      title: "Mental Health Awareness in the Digital Era: Breaking the Stigma Around Online Therapy",
      image: "https://picsum.photos/600/400?random=17", // Mental health and therapy-related image
      time: "2 weeks ago",
      category: "Health",
    },
    {
      id: 8,
      title: "Exploring the Mysteries of Deep Space: The Latest Discoveries and Missions to Mars and Beyond",
      image: "https://picsum.photos/600/400?random=18", // Space exploration and Mars-related image
      time: "3 weeks ago",
      category: "Science",
    },
    {
      id: 9,
      title: "Tackling Global Water Scarcity: Innovative Solutions for a Sustainable Future",
      image: "https://picsum.photos/600/400?random=20", // Water sustainability and environmental-related image
      time: "1 month ago",
      category: "Environment",
    },
  ];
  

  // Handle Scroll Action
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const firstChild = scrollRef.current.children[0] as HTMLElement;
    const cardWidth = firstChild.offsetWidth + 16; // width of the first card + margin
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  // Update left and right arrow visibility based on scroll position
  const updateArrows = () => {
    const container = scrollRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft + container.clientWidth < container.scrollWidth
    );
  };

  useEffect(() => {
    const container = scrollRef.current;
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
    <section className="w-full bg-white mt-2 border-b-2 border-black px-2 sm:px-4 lg:p-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div className="flex items-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">Letters To The Editor</h2>
          <ChevronRight size={16} className="text-neutral-500" />
        </div>
      </div>

      <div className="mb-2">
        <p className="text-gray-500 text-xs sm:text-sm mt-1">
          Explore the latest insights and analysis.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth mb-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Hide Scrollbar for Chrome */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {editorials.map((editorial, index) => (
            <div
              key={editorial.id}
              className={`min-w-[220px] sm:min-w-[260px] md:min-w-[300px] max-w-[220px] sm:max-w-[260px] md:max-w-[300px] flex-shrink-0 ${index === 0 ? "ml-0" : ""}`}
            >
              {/* Image */}
              <div className="relative w-full h-[150px] sm:h-[180px] md:h-[200px]">
                <Image
                  src={editorial.image}
                  alt={editorial.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              {/* Content Below the Image */}
              <div className="mt-3 sm:mt-4 px-2">
                <h3 className="text-base sm:text-lg font-medium text-gray-900">
                  {editorial.title}
                </h3>

                {/* Meta Info */}
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500 mt-2">
                  <span>{editorial.time}</span>
                </div>
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
          <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className={`${
            canScrollRight ? "block" : "hidden"
          } absolute right-0 top-[75px] sm:top-[90px] md:top-[100px] -translate-y-1/2 translate-x-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-100 z-20`}
        >
          <ArrowRight size={18} className="sm:w-5 sm:h-5" />
        </button>
      </div>
    </section>
  );
}

