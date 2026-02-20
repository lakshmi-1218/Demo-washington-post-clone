import { BreakingBanner } from "@/components/wp/breaking-banner"
import { Header } from "@/components/wp/header"
import { Navigation } from "@/components/wp/navigation"
import { HeroSection } from "@/components/wp/hero-section"
import { AdBanner } from "@/components/wp/ad-banner"
import { Footer } from "@/components/wp/footer"
import { Latest} from "@/components/wp/latest"
import { YourWeekendSection } from "@/components/wp/your-weekend"
import { PoliticsGovernmentSection } from "@/components/wp/politics-gov-section"
import { MoreTopStoriesSection } from "@/components/wp/MoreTopStoriesSection"
import NewsSectionGrid from "@/components/wp/news-section-grid"
import SportAndOtherSection from "@/components/wp/sports-and-other-section"
import FeaturedVideos from "@/components/wp/FeaturedVideos"
import MultiSectionGrid from "@/components/wp/MultiSectionGrid"
import RecipesSection from "@/components/wp/recipes-section"
import DiversionsSection from "@/components/wp/diversions-section"
import { MostRead } from "@/components/wp/most-read"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Navigation />
      <main className="max-w-[1024px] mx-auto px-2 sm:px-4">
        <HeroSection />
        <AdBanner variant="dark" />
        <MoreTopStoriesSection/>
        <MostRead/>
        <Latest/>
        <YourWeekendSection/>
        <PoliticsGovernmentSection/>
        <AdBanner variant="inline" />
        <NewsSectionGrid/>
        <AdBanner variant="leaderboard" />
        <SportAndOtherSection/>
        <FeaturedVideos/>
        <AdBanner variant="leaderboard" />
        <MultiSectionGrid/>
        <RecipesSection/>
        <DiversionsSection/>
      <Footer />

      </main>

    </div>
  )
}
