interface ArticleCardProps {
  image: string
  imageAlt: string
  headline: string
  category: string
  author: string
  timestamp: string
  layout?: "horizontal" | "vertical"
  size?: "small" | "large"
}

export function ArticleCard({
  image,
  imageAlt,
  headline,
  category,
  author,
  timestamp,
  layout = "horizontal",
}: ArticleCardProps) {
  if (layout === "horizontal") {
    return (
      <div className="flex gap-3 sm:gap-4 items-start border-b border-wp-border pb-2 sm:pb-3">
        {/* LEFT SIDE - CONTENT */}
        <div className="flex-1">
          <p className="text-[10px] sm:text-xs font-semibold text-wp-red mb-1">{category}</p>
          <h3 className="font-heading text-xs sm:text-sm md:text-base leading-snug mb-1 line-clamp-2 font-bold">
            {headline}
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-500 font-bold">
            {author} · {timestamp}
          </p>
        </div>

        {/* RIGHT SIDE - SMALL IMAGE */}
        <div className="w-[70px] h-[55px] sm:w-[85px] sm:h-[65px] flex-shrink-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
      </div>
    )
  }

  // fallback for vertical layout (optional)
  return (
    <div className="flex flex-col">
      <img src={image} alt={imageAlt} className="w-full h-32 sm:h-40 object-cover" />
      <p className="text-[10px] sm:text-xs font-semibold text-wp-red mt-2">{category}</p>
      <h3 className="font-heading text-xs sm:text-sm leading-snug mt-1">{headline}</h3>
      <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
        {author} · {timestamp}
      </p>
    </div>
  )
}
