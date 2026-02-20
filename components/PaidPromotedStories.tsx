import Image from "next/image"

/* ================= DATA ================= */

const promotedStories = {
  label: "Paid Promoted Stories",
  items: [
    {
      title: "When the Arctic opens, what happens to...",
      source: "Business Times",
      image: "https://picsum.photos/400/300?random=11",
    },
    {
      title: "Explore Job Posting Requirements, Formats",
      source: "JobsSimply",
      image: "https://picsum.photos/400/300?random=12",
    },
    {
      title: "Transform Your Space: Tips for a Stylish and...",
      source: "techywale24.in",
      image: "https://picsum.photos/400/300?random=13",
    },
    {
      title: "Unlock the Secrets to Lasting Customer Relationships Today",
      source: "techvoxe.com",
      image: "https://picsum.photos/400/300?random=14",
    },
    {
      title: "See What Personalised Content We Have...",
      source: "DiscoveryFeed",
      image: "https://picsum.photos/400/300?random=15",
    },
    {
      title: "Home Insurance Made Simple Protect Your Property and...",
      source: "wayforjobs.online",
      image: "https://picsum.photos/400/300?random=16",
    },
  ],
}

/* ================= COMPONENT ================= */

export function PaidPromotedStories() {
  return (
    <section className="py-6">
      <div className="max-w-[1100px] mx-auto">

        {/* SECTION LABEL */}
        <div className="text-center text-gray-600 text-sm mb-10">
          {promotedStories.label}
          <span className="ml-2 text-blue-500 text-xs">▶</span>
        </div>

        {/* STORIES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {promotedStories.items.map((item, index) => (
            <div key={index} className="group cursor-pointer">

              {/* IMAGE */}
              <div className="relative w-full h-[200px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* TITLE */}
              <h3 className="mt-4 text-[20px] leading-snug font-medium">
                {item.title}
              </h3>

              {/* SOURCE */}
              <p className="mt-2 text-sm text-gray-500">
                {item.source}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
