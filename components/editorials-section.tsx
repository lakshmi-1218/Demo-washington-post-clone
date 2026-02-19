"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ArrowBigRight, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

type Editorial = {
  id: number;
  title: string;
  image: string;
  time: string;
  category: string;
};

export default function EditorialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const editorials: Editorial[] = [
    {
      id: 1,
      title: "What States Losing Residents Have in Common: Understanding the Trends and Causes Behind the Exodus",
      image: "https://picsum.photos/600/400?random=1", // Tech-related image
      time: "2 hours ago",
      category: "Technology",
    },
    {
      id: 2,
      title: "The Long View of Self-Driving Cars: How Autonomous Vehicles Will Transform Transportation and Society",
      image: "https://picsum.photos/600/400?random=2", // Health-related image
      time: "1 day ago",
      category: "Health",
    },
    {
      id: 3,
      title: "The Future of Renewable Energy: Innovations and Challenges in Achieving a Sustainable Power Grid",
      image: "https://picsum.photos/600/400?random=3", // Environmental-related image
      time: "3 days ago",
      category: "Environment",
    },
    {
      id: 4,
      title: "Artificial Intelligence: The Next Frontier in Human Progress and the Ethical Dilemmas It Brings",
      image: "https://picsum.photos/600/400?random=4", // AI-related image
      time: "5 days ago",
      category: "AI",
    },
    {
      id: 5,
      title: "The Politics of Climate Change: How Global Policy and National Interests Shape Our Environmental Future",
      image: "https://picsum.photos/600/400?random=5", // Politics-related image
      time: "7 days ago",
      category: "Politics",
    },
    {
      id: 6,
      title: "The Rise of Quantum Computing: What It Means for the Future of Technology and Security",
      image: "https://picsum.photos/600/400?random=6", // Quantum Computing-related image
      time: "1 week ago",
      category: "Technology",
    },
    {
      id: 7,
      title: "Mental Health in the Digital Age: The Growing Impact of Social Media on Mental Well-being",
      image: "https://picsum.photos/600/400?random=7", // Health-related image
      time: "2 weeks ago",
      category: "Health",
    },
    {
      id: 8,
      title: "The Next Era of Space Exploration: How Mars Colonization Could Change Humanity Forever",
      image: "https://picsum.photos/600/400?random=8", // Space Exploration-related image
      time: "3 weeks ago",
      category: "Science",
    },
    {
      id: 9,
      title: "Blockchain Beyond Cryptocurrency: How Decentralized Technologies are Reshaping Industries",
      image: "https://picsum.photos/600/400?random=9", // Tech-related image
      time: "4 weeks ago",
      category: "Technology",
    },
    {
      id: 10,
      title: "The Global Water Crisis: Addressing the Growing Need for Sustainable Water Solutions",
      image: "https://picsum.photos/600/400?random=10", // Environmental-related image
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
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">Editorials</h2>
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
