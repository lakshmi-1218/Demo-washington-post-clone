import Image from "next/image"

/* ================= DATA OBJECT ================= */

const newsletterData = {
  label: "NEWSLETTER",
  frequency: "DAILY",
  title: "Today’s Headlines",
  description:
    "The most important news stories of the day, curated by Post editors, delivered every morning.",
  buttonText: "Sign up",
  image: "https://picsum.photos/300/200?random=50",
}

/* ================= COMPONENT ================= */

export function NewsletterSection() {
  return (
    <div className="py-4">
      <div className="max-w-[1024px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

        {/* LEFT IMAGE */}
        <div className="w-full md:w-[280px] relative">
          <Image
            src={newsletterData.image}
            alt={newsletterData.title}
            width={280}
            height={180}
            className="w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">

          {/* LABELS */}
          <div className="flex items-center gap-3 mb-4">
            <span className="border px-3 py-1 text-xs font-semibold tracking-wide">
              {newsletterData.label}
            </span>
            <span className="border px-3 py-1 text-xs tracking-wide">
              {newsletterData.frequency}
            </span>
          </div>

          {/* TITLE */}
          <h3 className="text-3xl font-bold mb-4">
            {newsletterData.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-700 text-lg leading-relaxed max-w-[600px]">
            {newsletterData.description}
          </p>

          {/* BUTTON */}
          <button className="mt-6 bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition">
            {newsletterData.buttonText}
          </button>

        </div>
      </div>
    </div>
  )
}
