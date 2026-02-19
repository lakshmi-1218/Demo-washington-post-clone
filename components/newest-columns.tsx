"use client";

import { useEffect, useRef, useState } from "react";

export default function NewestColumns() {
  // ✅ DATA INCLUDED HERE
  const items = [
    {
      author: "Jim Geraghty",
      title: "AOC tries strategic incomprehensibility",
      date: "February 16, 2026",
      authorInitials: "JG",
    },
    {
      author: "Max Boot",
      title:
        "Even far-right foreign leaders are getting sick of Trump's meddling",
      date: "February 16, 2026",
      authorInitials: "MB",
    },
    {
      author: "Jason Willick",
      title: "Trump’s death-row revenge gambit hits a judicial snag",
      date: "February 15, 2026",
      authorInitials: "JW",
    },
    {
      author: "Kathleen Parker",
      title:
        "Alex Murdaugh’s murder appeal could hang on a silenced juror",
      date: "February 14, 2026",
      authorInitials: "KP",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = 420;

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setTimeout(updateArrows, 300);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  return (
    <section className="pt-8 border-b-2 border-t-2 border-black pb-6 relative max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-2">
        Newest Columns
        <span className="text-xl font-bold">›</span>
      </h2>

      <div className="relative">
        {/* Scroll Container */}
        <div
          ref={scrollRef}
          onScroll={updateArrows}
          className="flex gap-10 overflow-hidden"
          style={{
            scrollBehavior: "smooth",
            pointerEvents: "none", // disables manual scroll
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[420px] pr-10 border-r last:border-r-0 flex items-center justify-between"
            >
              {/* Left Content */}
              <div className="max-w-[300px]">
                <p className="text-sm text-gray-700 mb-1">
                  {item.author}
                </p>

                <h3 className="font-serif font-bold text-xl leading-snug mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500">
                  {item.date}
                </p>
              </div>

              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-orange-300 flex items-center justify-center">
                <span className="text-white font-semibold text-xl select-none">
                  {item.authorInitials}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-9 h-9 flex items-center justify-center shadow-md hover:bg-gray-100 z-10"
          >
            &larr;
          </button>
        )}

        {/* Right Arrow */}
        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-9 h-9 flex items-center justify-center shadow-md hover:bg-gray-100 z-10"
          >
            &rarr;
          </button>
        )}
      </div>
    </section>
  );
}

