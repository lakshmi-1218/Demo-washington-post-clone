import Image from "next/image"

interface AdBannerProps {
  variant?: "leaderboard" | "dark" | "inline"
}

export function AdBanner({ variant = "leaderboard" }: AdBannerProps) {
  if (variant === "dark") {
    return (
      <div className="bg-[#1a1a2e] text-[#ffffff] py-6 sm:py-8 md:py-10 w-full mt-2">
        <div className="mx-auto w-full px-2 sm:px-4 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6">
          <div className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] shrink-0">
            <Image
              src="/images/watch-ad.jpg"
              alt="Luxury watch advertisement"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 200px"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#888888] mb-1">Advertisement</p>
            <h3 className="font-heading text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-tight tracking-tight text-[#ffffff]">
              KING SEIKO
            </h3>
            <p className="text-[12px] sm:text-[14px] text-[#cccccc] mt-2 font-body">
              Crafted for those who appreciate the art of timekeeping.
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <div className="bg-[#f8f4ef] border border-[#e8e0d6] py-6 sm:py-8 mt-2">
        <div className="mx-auto max-w-[700px] px-2 sm:px-4 text-center">
          <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-wp-gray mb-2 sm:mb-3">Advertisement</p>
          <h3 className="font-heading text-[20px] sm:text-[24px] md:text-[30px] leading-tight text-wp-dark">
            Preschool in Beverly Hills
          </h3>
          <p className="text-[12px] sm:text-[14px] text-wp-gray mt-2 font-body">
            Discover an exceptional early learning experience. Enroll today for the 2026-2027 school year.
          </p>
          <button className="mt-3 sm:mt-4 bg-wp-dark text-[#ffffff] text-[11px] sm:text-[12px] font-bold uppercase tracking-wider px-4 sm:px-6 py-1.5 sm:py-2 hover:bg-[#333333] transition-colors">
            Learn More
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-muted py-2 sm:py-3 mt-2">
      <div className="mx-auto max-w-[1280px] px-2 sm:px-4 text-center">
        <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-wp-gray mb-2">Advertisement</p>
        <div className="bg-[#e8e8e8] h-[60px] sm:h-[75px] md:h-[90px] flex items-center justify-center text-[10px] sm:text-[12px] text-wp-gray font-body">
          AD PLACEHOLDER - 728x90
        </div>
      </div>
    </div>
  )
}
