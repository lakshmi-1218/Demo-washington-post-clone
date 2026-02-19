import { ArticleCard } from "./article-card"

export function LifestyleSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-6">
      <div className="border-t-2 border-wp-dark pt-4">
        <h2 className="font-heading text-[18px] text-wp-dark mb-4">Well+Being</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <ArticleCard
            image="/images/lifestyle1.jpg"
            imageAlt="Lifestyle feature with table setting"
            headline="How to create the perfect dinner party atmosphere on a budget"
            size="small"
            category="Style"
            author="Jura Koncius"
            timestamp="3 hours ago"
          />
          <ArticleCard
            image="/images/tech.jpg"
            imageAlt="Person using smartphone"
            headline="The apps that therapists actually recommend for managing anxiety"
            size="small"
            category="Well+Being"
            author="Tara Parker-Pope"
            timestamp="5 hours ago"
          />
          <ArticleCard
            image="/images/food.jpg"
            imageAlt="Gourmet meal in bowl"
            headline="This one-pot weeknight dinner became our most-saved recipe ever"
            size="small"
            category="Food"
            author="Becky Krystal"
            timestamp="6 hours ago"
          />
          <ArticleCard
            image="/images/coffee.jpg"
            imageAlt="Coffee with latte art"
            headline="Why your morning caffeine routine might need a serious upgrade"
            size="small"
            category="Wellness"
            author="Allyson Chiu"
            timestamp="8 hours ago"
          />
        </div>
      </div>
    </section>
  )
}
