import Image from "next/image"
import { Play } from "lucide-react"

interface Props {
  title: string
}

export default function CategoryVideoSection({ title }: Props) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-sm text-muted-foreground cursor-pointer">
          More
        </span>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div key={i} className="cursor-pointer">
            <div className="relative aspect-video bg-black rounded overflow-hidden">
              <Image
                src="/videos/thumb.jpg"
                alt="Category video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/60 p-2 rounded-full">
                  <Play className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            <p className="mt-2 text-sm font-medium leading-snug">
              Category-based video headline matching videos page style
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
