"use client"

import { AdBanner } from "@/components/wp/ad-banner"

import VideoHero from "@/components/wp/videos/VideoHero"
import FeaturedVideoRow from "@/components/wp/videos/FeaturedVideoRow"
import CategoryVideoSection from "@/components/wp/videos/CategoryVideoSection"
import { Header} from "@/components/wp/header"
import { Navigation } from "@/components/wp/navigation";
import ClimateViodesSection from "@/components/wp/videos/climate-videos"
import TechnologySection from "@/components/wp/videos/TechnologySection"
import NationalSection from "@/components/wp/videos/national-videos-section"
import WorldVideosSection from "@/components/wp/videos/world-viodes-section"
import PoliticsVideosSection from "@/components/wp/videos/politics-videos-section"
import ArtsEntertainmentVideosSection from "@/components/wp/videos/arts-entertainment-videos"
import DCMdVaVideosSection from "@/components/wp/videos/dc-md-va-vidoes"
import SportsVideosSection from "@/components/wp/videos/sports-videos-section"
import MoreVideosSection from "@/components/wp/videos/more-videos"
import { Footer } from "@/components/wp/footer"

export default function VideosPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <Navigation />
            <main className="max-w-[1200px] mx-auto px-2 sm:px-4 lg:px-6">

                {/* hero section */}
                <VideoHero />

                {/* FEATURED VIDEO ROW */}
                <FeaturedVideoRow />

                {/* INLINE AD */}
                <div className="my-4 sm:my-6">
                    <AdBanner variant="inline" />
                </div>

                <ClimateViodesSection/>
                <TechnologySection/>

                {/* LEADERBOARD AD */}
                <div className="my-4 sm:my-6">
                    <AdBanner variant="leaderboard" />
                </div>
                <WorldVideosSection/>
                <NationalSection/>
                <div className="my-4 sm:my-6">
                    <AdBanner variant="inline" />
                </div>
                <PoliticsVideosSection/>
                <ArtsEntertainmentVideosSection/>
                <div className="my-4 sm:my-6">
                    <AdBanner variant="dark" />
                </div>
                <DCMdVaVideosSection/>
                <SportsVideosSection/>
                <div className="my-4 sm:my-6">
                    <AdBanner variant="inline" />
                </div>
                <MoreVideosSection/>
                <Footer/>
            </main>
        </div>
    )
}
