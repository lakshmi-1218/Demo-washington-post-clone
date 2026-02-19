import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/wp/header"
import { Navigation } from "@/components/wp/navigation"
import { Footer } from "@/components/wp/footer"

type Video = {
  id: string
  slug: string
  title: string
  section: string
  thumbnail: string
  videoUrl: string
  date: string
  description: string
  duration: string
}

const videos: Video[] = [
    {
      id: "1",
      slug: "ai-world-economist",
      title: "Who will lead in an AI world? An economist weighs in.",
      section: "Opinions",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1600",
      videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4",
      date: "February 12, 2026 | 9:56 PM IST",
      description: "An in-depth conversation about global AI leadership, economic power shifts and how nations are preparing for the next technological revolution.",
      duration: "9:26",
    },
    {
      id: "2",
      slug: "capitol-attack-explained",
      title: "How the Capitol attack unfolded",
      section: "Opinions",
      thumbnail: "https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1600",
      videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4",
      date: "January 12, 2021",
      description: "A detailed breakdown of the timeline and key moments from the Capitol attack.",
      duration: "6:03",
    },
    {
      id: "3",
      slug: "media-viral-videos",
      title: "Why media should not replay viral videos",
      section: "Opinions",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600",
      videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4",
      date: "June 10, 2020",
      description: "A discussion about media responsibility and ethical coverage standards.",
      duration: "4:23",
    },
  ]
  

const upNextVideos = [
    { id: "4", slug: "cuba-artists", title: "How Cuba's investment in artists came back to haunt it", date: "July 11, 2022", duration: "17:44", thumbnail: "https://picsum.photos/seed/v1/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
    { id: "5", slug: "bring-them-home", title: "Bring them home | A short doc from Post Opinions", date: "March 7, 2022", duration: "5:33", thumbnail: "https://picsum.photos/seed/v2/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
    { id: "6", slug: "911-conspiracy", title: "How 9/11 conspiracy theories fueled the war on reality | Opinion", date: "September 8, 2021", duration: "9:26", thumbnail: "https://picsum.photos/seed/v3/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
    { id: "7", slug: "viral-videos-media-ethics", title: "Opinion | This is why the media should not replay viral videos of black men being killed", date: "June 10, 2020", duration: "4:53", thumbnail: "https://picsum.photos/seed/v4/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
    { id: "8", slug: "hong-kong-protest", title: "Anatomy of a protest: Inside Hong Kong's fight for freedom | Opinion", date: "November 1, 2019", duration: "14:15", thumbnail: "https://picsum.photos/seed/v5/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
    { id: "9", slug: "capitol-inside", title: "How the Capitol attack unfolded, from inside Trump's rally to the riot | Opinion", date: "January 12, 2021", duration: "8:02", thumbnail: "https://picsum.photos/seed/v6/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
    { id: "10", slug: "political-sectarianism", title: "Opinion | What caused the Capitol attack? Learn about political sectarianism. | Opinion", date: "December 25, 2020", duration: "7:57", thumbnail: "https://picsum.photos/seed/v7/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
    { id: "11", slug: "maga-march", title: "Opinion | 'Million MAGA March': Hate groups, families and false claims of election fraud", date: "November 18, 2020", duration: "6:52", thumbnail: "https://picsum.photos/seed/v8/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
    { id: "12", slug: "black-101", title: "'Black 101': Lessons from Ahmaud Arbery's killing that you already knew | Opinion", date: "May 12, 2020", duration: "1:40", thumbnail: "https://picsum.photos/seed/v9/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
    { id: "13", slug: "healthcare-racism", title: "What experts say about racism in the world's best health-care system | Opinion", date: "June 18, 2021", duration: "9:15", thumbnail: "https://picsum.photos/seed/v10/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
    { id: "14", slug: "nfl-patriotism", title: "'Please Rise': Bob Costas, Kenny Stills on the NFL's cynical patriotism | Opinion", date: "September 10, 2020", duration: "7:13", thumbnail: "https://picsum.photos/seed/v11/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
    { id: "15", slug: "charleston-shooting", title: "'Part of me died that night': Life after surviving the Charleston church shooting", date: "July 11, 2019", duration: "12:28", thumbnail: "https://picsum.photos/seed/v12/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
    { id: "16", slug: "climate-change", title: "Climate change and its impact on global economies | Opinion", date: "August 15, 2022", duration: "10:22", thumbnail: "https://picsum.photos/seed/v13/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
    { id: "17", slug: "space-exploration", title: "The next decade in space exploration | Opinion", date: "September 5, 2022", duration: "11:45", thumbnail: "https://picsum.photos/seed/v14/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
    { id: "18", slug: "artificial-intelligence", title: "AI in our daily lives: Boon or bane? | Opinion", date: "October 12, 2022", duration: "8:50", thumbnail: "https://picsum.photos/seed/v15/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
    { id: "19", slug: "future-of-education", title: "How education will evolve with technology | Opinion", date: "November 22, 2022", duration: "9:35", thumbnail: "https://picsum.photos/seed/v16/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
    { id: "20", slug: "mental-health-awareness", title: "Raising awareness about mental health issues | Opinion", date: "December 10, 2022", duration: "6:55", thumbnail: "https://picsum.photos/seed/v17/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
    { id: "21", slug: "renewable-energy", title: "The future of renewable energy sources | Opinion", date: "January 18, 2023", duration: "10:30", thumbnail: "https://picsum.photos/seed/v18/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
    { id: "22", slug: "global-politics", title: "Global politics 2023: Key developments | Opinion", date: "February 25, 2023", duration: "12:05", thumbnail: "https://picsum.photos/seed/v19/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
    { id: "23", slug: "tech-innovations", title: "Top tech innovations to watch | Opinion", date: "March 10, 2023", duration: "8:40", thumbnail: "https://picsum.photos/seed/v20/400/225", videoUrl: "https://sample-videos.com/video123/mp4/480/big_buck_bunny_480p_1mb.mp4" },
]

export async function generateStaticParams() {
  return videos.map((video) => ({
    slug: video.slug,
  }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function VideoSlugPage({ params }: Props) {
  const { slug } = await params
  const video = videos.find((v) => v.slug === slug)
  
  if (!video) return notFound()

  const relatedVideos = upNextVideos.filter((v) => v.slug !== slug)

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <Navigation />

      <main className="max-w-[1024px] mx-auto px-2 sm:px-4 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px] gap-6 lg:gap-8 xl:gap-10">
          
          {/* LEFT COLUMN */}
          <div>
            {/* VIDEO PLAYER */}
            <div className="w-full mb-4 sm:mb-6 lg:mb-8">
              <video
                controls
                poster={video.thumbnail}
                className="w-full aspect-video bg-black rounded-sm"
              >
                <source src={video.videoUrl} type="video/mp4" />
              </video>
            </div>

            {/* MOBILE/TABLET METADATA (shown below video on small screens) */}
            <div className="lg:hidden mb-6 sm:mb-8">
              <p className="text-xs sm:text-sm text-gray-600 mb-2">{video.section}</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif leading-tight mb-3 sm:mb-4">{video.title}</h2>
              <p className="text-xs sm:text-sm text-gray-500 mb-4">{video.date}</p>
              {video.description && (
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{video.description}</p>
              )}
            </div>

            {/* UP NEXT SECTION */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5">
                Up next in {video.section}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {relatedVideos.map((item) => (
                  <Link
                    key={item.id}
                    href={`/videos/${item.slug}`}
                    className="group"
                  >
                    <div className="relative w-full aspect-video bg-gray-200 overflow-hidden rounded mb-2">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                      />
                      <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 bg-black text-white text-[10px] sm:text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded">
                        {item.duration}
                      </div>
                    </div>

                    <h3 className="text-m sm:text-sm line-clamp-2 mb-1">
                      {item.title}
                    </h3>

                    <p className="text-[10px] sm:text-xs text-gray-500">{item.date}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR (desktop only) */}
          <aside className="hidden lg:block lg:sticky lg:top-24">
            <p className="text-sm text-gray-600 mb-2">{video.section}</p>
            <h1 className="text-2xl xl:text-3xl font-serif leading-tight mb-4">{video.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{video.date}</p>
            {video.description && (
              <p className="text-base text-gray-700 leading-relaxed">{video.description}</p>
            )}
          </aside>
        </div>
      <Footer />

      </main>

    </div>
  )
}
