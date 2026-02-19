"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function ArtsEntertainmentVideosSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videos = [
    { id: 1, slug: "ai-world-economist", title: "Film Festival Opening Night Highlights", thumbnail: "https://picsum.photos/id/1041/400/225", duration: "3:14", date: "Feb 12, 2026" },
    { id: 2, slug: "capitol-attack-explained", title: "Top OTT Releases This Week", thumbnail: "https://picsum.photos/id/1042/400/225", duration: "2:47", date: "Feb 11, 2026" },
    { id: 3, slug: "media-viral-videos", title: "Music Awards Red Carpet Moments", thumbnail: "https://picsum.photos/id/1043/400/225", duration: "4:02", date: "Feb 10, 2026" },
    { id: 4, slug: "ai-world-economist", title: "Celebrity Interview Exclusive", thumbnail: "https://picsum.photos/id/1044/400/225", duration: "3:25", date: "Feb 9, 2026" },
    { id: 5, slug: "capitol-attack-explained", title: "Art Exhibition You Shouldn't Miss", thumbnail: "https://picsum.photos/id/1045/400/225", duration: "2:58", date: "Feb 8, 2026" },
    { id: 6, slug: "media-viral-videos", title: "Broadway Shows Making a Comeback", thumbnail: "https://picsum.photos/id/1046/400/225", duration: "3:36", date: "Feb 7, 2026" },
  ];

  const scroll = (d: "left" | "right") => scrollRef.current?.scrollBy({ left: d === "left" ? -scrollRef.current.offsetWidth : scrollRef.current.offsetWidth, behavior: "smooth" });

  return (
    <section className="w-full bg-white mt-4 sm:mt-6 border-b border-gray-200 px-1 sm:px-4 lg:px-0">
      <div className="flex items-center justify-between mb-3"><h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">Arts & Entertainment Videos</h2></div>
      <div className="relative">
        <div ref={scrollRef} className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth pb-3 scrollbar-hide">
          {videos.map((v) => (
            <Link key={v.id} href={`/videos/${v.slug}`} className="min-w-[70%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[20%] flex-shrink-0">
              <div className="relative aspect-video overflow-hidden rounded-md cursor-pointer">
                <Image src={v.thumbnail} alt={v.title} fill className="object-cover" />
                <div className="absolute bottom-1.5 sm:bottom-2 right-1.5 sm:right-2 flex items-center gap-1 bg-black/60 px-1.5 py-0.5 rounded">
                  <Play size={12} className="text-white sm:w-3.5 sm:h-3.5" /><span className="text-[10px] sm:text-xs text-white font-medium">{v.duration}</span>
                </div>
              </div>
              <h3 className="mt-2 text-xs sm:text-sm md:text-base font-medium text-gray-900 hover:underline">{v.title}</h3>
              <p className="text-[10px] sm:text-xs text-gray-500">{v.date}</p>
            </Link>
          ))}
        </div>
        <button onClick={() => scroll("left")} className="hidden md:flex absolute left-0 top-[calc(56.25%/2)] -translate-y-1/2 -translate-x-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 z-20"><ChevronLeft size={20} /></button>
        <button onClick={() => scroll("right")} className="hidden md:flex absolute right-0 top-[calc(56.25%/2)] -translate-y-1/2 translate-x-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 z-20"><ChevronRight size={20} /></button>
      </div>
    </section>
  );
}
