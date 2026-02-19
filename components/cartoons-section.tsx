"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

type Cartoon = {
  id: number;
  title: string;
  image: string;
  time: string;
};

export default function CartoonsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const cartoons: Cartoon[] = [
    {
      id: 1,
      title: "The Adventures of Tom and Jerry",
      image: "https://picsum.photos/600/400?random=1", // Cartoon-related image
      time: "3 hours ago",
    },
    {
      id: 2,
      title: "Mickey Mouse and Friends",
      image: "https://picsum.photos/600/400?random=2", // Cartoon-related image
      time: "1 day ago",
    },
    {
      id: 3,
      title: "SpongeBob SquarePants",
      image: "https://picsum.photos/600/400?random=3", // Cartoon-related image
      time: "2 days ago",
    },
    {
      id: 4,
      title: "The Simpsons",
      image: "https://picsum.photos/600/400?random=4", // Cartoon-related image
      time: "5 days ago",
    },
    {
      id: 5,
      title: "Looney Tunes",
      image: "https://picsum.photos/600/400?random=5", // Cartoon-related image
      time: "1 week ago",
    },
    {
      id: 6,
      title: "Adventure Time",
      image: "https://picsum.photos/600/400?random=6", // Cartoon-related image
      time: "2 weeks ago",
    },
    {
      id: 7,
      title: "The Flintstones",
      image: "https://picsum.photos/600/400?random=7", // Cartoon-related image
      time: "3 weeks ago",
    },
    {
      id: 8,
      title: "Scooby-Doo",
      image: "https://picsum.photos/600/400?random=8", // Cartoon-related image
      time: "4 weeks ago",
    },
    {
      id: 9,
      title: "Family Guy",
      image: "https://picsum.photos/600/400?random=9", // Cartoon-related image
      time: "5 weeks ago",
    },
    {
      id: 10,
      title: "Popeye the Sailor",
      image: "https://picsum.photos/600/400?random=10", // Cartoon-related image
      time: "6 weeks ago",
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
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">Cartoons</h2>
          <ChevronRight size={16} className="text-neutral-500" />
        </div>
      </div>

      <div className="mb-2">
        <p className="text-gray-500 text-xs sm:text-sm mt-1">
          Enjoy your favorite cartoon shows.
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

          {cartoons.map((cartoon, index) => (
            <div
              key={cartoon.id}
              className={`min-w-[220px] sm:min-w-[260px] md:min-w-[300px] max-w-[220px] sm:max-w-[260px] md:max-w-[300px] flex-shrink-0 ${index === 0 ? "ml-0" : ""}`}
            >
              {/* Image */}
              <div className="relative w-full h-[150px] sm:h-[180px] md:h-[200px]">
                <Image
                  src={cartoon.image}
                  alt={cartoon.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              {/* Content Below the Image */}
              <div className="mt-3 sm:mt-4 px-2">
                <h3 className="text-base sm:text-lg font-medium text-gray-900">
                  {cartoon.title}
                </h3>

                {/* Meta Info */}
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500 mt-2">
                  <span>{cartoon.time}</span>
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
