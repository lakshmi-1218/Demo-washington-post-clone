"use client";

import React, { useRef, useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import VideoModal from "./VideoModal";
import Link from "next/link";

type Video = {
  id: string;
  thumbnail: string;
  title: string;
  duration: string;
  videoUrl: string;
};

const videos: Video[] = [
  {
    id: "v1",
    thumbnail: "https://picsum.photos/id/1011/300/533",
    title: "Vermont lawmaker slams Pam Bondi over Epstein files",
    duration: "0:46",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: "v2",
    thumbnail: "https://picsum.photos/id/1012/300/533",
    title: "The monks' peace walk is ending. Here's their advice.",
    duration: "1:06",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: "v3",
    thumbnail: "https://picsum.photos/id/1015/300/533",
    title: "Teen rescues neighbor's dog from icy pond",
    duration: "0:52",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "v4",
    thumbnail: "https://picsum.photos/id/1016/300/533",
    title: "Olympic skater honors parents who died in D.C. plane crash",
    duration: "1:20",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: "v5",
    thumbnail: "https://picsum.photos/id/1018/300/533",
    title: "Here's a look at Amtrak's new train",
    duration: "1:05",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
];

export default function FeaturedVideosArrow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const cardWidth = containerRef.current.firstChild
      ? (containerRef.current.firstChild as HTMLElement).clientWidth + 16
      : 0;

    const scrollAmount = cardWidth * 2;

    containerRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="max-w-[1200px] mx-auto relative mt-2 border-b-2 border-black px-4 lg:p-0">
      {/* Header */}
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <div className="flex items-center">
        <Link href="/videos">
        <h2 className="font-bold text-lg sm:text-xl text-gray-900">Featured Videos</h2></Link>
        <ChevronRight size={16} className="text-neutral-500" />
        </div>

        <button className="flex items-center text-xs sm:text-sm font-semibold">
          <span className="ml-1 text-lg sm:text-xl">▶</span>
          <span className="hidden sm:inline ml-1">Watch All</span>
        </button>
      </div>

      <div className="relative py-5">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Videos Row */}
        <div
          ref={containerRef}
          className="flex space-x-3 sm:space-x-4 overflow-x-auto scrollbar-hide mb-2"
        >
          {videos.map((video, index) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideoIndex(index)}
              className="relative flex-shrink-0 w-[70%] sm:w-[45%] md:w-[30%] lg:w-[22%] min-w-[180px] sm:min-w-[220px] rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-[280px] sm:h-[320px] md:h-[350px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 text-white">
                <p className="text-xs sm:text-sm font-semibold leading-snug drop-shadow-lg">
                  {video.title}
                </p>
                <div className="mt-1 flex items-center gap-1 text-[10px] sm:text-xs font-medium drop-shadow-lg">
                  <Play size={10} className="sm:w-3 sm:h-3" />
                  <span>{video.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <VideoModal
        isOpen={selectedVideoIndex !== null}
        onClose={() => setSelectedVideoIndex(null)}
        onNext={() => {
          if (selectedVideoIndex !== null && selectedVideoIndex < videos.length - 1) {
            setSelectedVideoIndex(selectedVideoIndex + 1);
          }
        }}
        onPrev={() => {
          if (selectedVideoIndex !== null && selectedVideoIndex > 0) {
            setSelectedVideoIndex(selectedVideoIndex - 1);
          }
        }}
        video={selectedVideoIndex !== null ? videos[selectedVideoIndex] : videos[0]}
        hasNext={selectedVideoIndex !== null && selectedVideoIndex < videos.length - 1}
        hasPrev={selectedVideoIndex !== null && selectedVideoIndex > 0}
      />
    </section>
  );
}
