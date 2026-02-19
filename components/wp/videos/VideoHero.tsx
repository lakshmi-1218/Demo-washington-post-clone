"use client"

import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

export default function VideoHero() {
  const heroContent = {
    headline: "Who will lead in an AI world? An economist weighs in.",
    slug: "ai-world-economist",
    description:
      "Tyler Cowen joins host Megan McArdle to discuss how AI may transform talent, human capital, and competition, and how to not get left behind.",
    date: "February 12, 2026",
    duration: "57:21",
    heroImage: "https://picsum.photos/800/450?random=1",
    sideVideos: [
      {
        title: "Border czar declares Minnesota immigration surge over",
        slug: "capitol-attack-explained",
        date: "February 12, 2026",
        duration: "0:46",
        thumbnail: "https://picsum.photos/400/225?random=2",
      },
      {
        title: "Teen rescues neighbor's dog from icy pond",
        slug: "media-viral-videos",
        date: "February 11, 2026",
        duration: "0:52",
        thumbnail: "https://picsum.photos/400/225?random=3",
      },
    ],
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 border-b pb-6 sm:pb-8 mt-0 px-1 lg:p-0">

      {/* LEFT TEXT COLUMN */}
      <div className="md:col-span-3">
        <h2 className="font-serif text-lg sm:text-xl md:text-2xl leading-snug mb-3 sm:mb-4">
          {heroContent.headline}
        </h2>

        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
          {heroContent.description}
        </p>

        <p className="text-[10px] sm:text-xs text-muted-foreground">
          {heroContent.date}
        </p>
      </div>

      {/* CENTER HERO VIDEO */}
      <div className="md:col-span-6">
        <Link href={`/videos/${heroContent.slug}`}>
          <div className="relative aspect-video overflow-hidden rounded-sm cursor-pointer">
            <Image
              src={heroContent.heroImage}
              alt="Featured video"
              fill
              priority
              className="object-cover"
            />

            {/* PLAY OVERLAY */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-black ml-0.5" />
              </div>
              <div className="text-white">
                <p className="text-[10px] sm:text-xs opacity-90">
                  {heroContent.duration}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* RIGHT STACKED VIDEOS */}
      <div className="md:col-span-3 space-y-4 sm:space-y-6">
        {heroContent.sideVideos.map((video, index) => (
          <Link key={index} href={`/videos/${video.slug}`}>
            <div className="relative aspect-video mb-2 overflow-hidden rounded-sm cursor-pointer">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover"
              />

              {/* PLAY OVERLAY for side videos */}
              <div className="absolute bottom-1.5 sm:bottom-2 right-1.5 sm:right-2 flex items-center gap-1.5 sm:gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center">
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 text-black ml-0.5" />
                </div>
                <p className="text-[10px] sm:text-xs text-white font-semibold">{video.duration}</p>
              </div>
            </div>

            <h3 className="font-serif text-sm sm:text-base leading-snug mb-1 hover:underline">
              {video.title}
            </h3>

            <p className="text-[10px] sm:text-xs text-muted-foreground">
              {video.date}
            </p>
          </Link>
        ))}
      </div>

    </section>
  )
}
