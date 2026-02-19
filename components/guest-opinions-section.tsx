"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GuestOpinion = {
  id: number;
  title: string;
  image: string;
  time: string;
  author: string;
};

export default function GuestOpinionsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const guestOpinions: GuestOpinion[] = [
    {
      id: 1,
      title: "The Importance of Empathy in Leadership: A Guest Opinion",
      image: "https://picsum.photos/600/400?random=11", // Example image
      time: "3 hours ago",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Why Innovation Drives Success in the Tech Industry",
      image: "https://picsum.photos/600/400?random=12", // Example image
      time: "1 day ago",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Reimagining Education: The Role of Technology in Learning",
      image: "https://picsum.photos/600/400?random=13", // Example image
      time: "2 days ago",
      author: "Michael Lee",
    },
    {
      id: 4,
      title: "The Future of Remote Work: Trends That Will Shape the Workplace",
      image: "https://picsum.photos/600/400?random=14", // Example image
      time: "4 days ago",
      author: "Emily Zhang",
    },
    {
      id: 5,
      title: "How Sustainable Practices Can Reshape Business Models",
      image: "https://picsum.photos/600/400?random=15", // Example image
      time: "6 days ago",
      author: "David Brown",
    },
    {
      id: 6,
      title: "The Role of Artificial Intelligence in Modern Healthcare",
      image: "https://picsum.photos/600/400?random=16", // Example image
      time: "1 week ago",
      author: "Sophia Green",
    },
    {
      id: 7,
      title: "Mental Health Awareness in the Workplace: A Crucial Conversation",
      image: "https://picsum.photos/600/400?random=17", // Example image
      time: "2 weeks ago",
      author: "Chris White",
    },
    {
      id: 8,
      title: "Breaking Barriers: Women Leading Change in Tech",
      image: "https://picsum.photos/600/400?random=18", // Example image
      time: "3 weeks ago",
      author: "Rachel Adams",
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
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">Guest Opinions</h2>
          <ChevronRight size={16} className="text-neutral-500" />
        </div>
      </div>

      <div className="mb-2">
        <p className="text-gray-500 text-xs sm:text-sm mt-1">
          Insightful opinions from industry leaders and experts.
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

          {guestOpinions.map((opinion, index) => (
            <div
              key={opinion.id}
              className={`min-w-[220px] sm:min-w-[260px] md:min-w-[300px] max-w-[220px] sm:max-w-[260px] md:max-w-[300px] flex-shrink-0 ${index === 0 ? "ml-0" : ""}`}
            >
              {/* Image */}
              <div className="relative w-full h-[150px] sm:h-[180px] md:h-[200px]">
                <Image
                  src={opinion.image}
                  alt={opinion.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              {/* Content Below the Image */}
              <div className="mt-3 sm:mt-4 px-2">
                <h3 className="text-base sm:text-lg font-medium text-gray-900">
                  {opinion.title}
                </h3>

                {/* Meta Info */}
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500 mt-2">
                  <span>{opinion.time}</span>
                  <span className="text-gray-700">by {opinion.author}</span>
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
          <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className={`${
            canScrollRight ? "block" : "hidden"
          } absolute right-0 top-[75px] sm:top-[90px] md:top-[100px] -translate-y-1/2 translate-x-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-100 z-20`}
        >
          <ChevronRight size={18} className="sm:w-5 sm:h-5" />
        </button>
      </div>
    </section>
  );
}
