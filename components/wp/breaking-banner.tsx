import { X } from "lucide-react"

export function BreakingBanner() {
  return (
    <div className="bg-[#fef3cd] border-b border-[#e0c97b]">
      <div className="mx-auto max-w-[1280px] flex items-center px-2 sm:px-4 py-2">
        <span className="bg-wp-red text-[#ffffff] text-[9px] sm:text-[11px] font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 mr-2 sm:mr-3 shrink-0">
          Live Updates
        </span>
        <a
          href="#"
          className="text-[11px] sm:text-[13px] font-body text-wp-dark hover:underline line-clamp-1 flex-1"
        >
          Senate leaders plot course amid side with Limitless federal spending negotiations
        </a>
        <button
          className="ml-2 sm:ml-auto shrink-0 text-wp-gray hover:text-wp-dark"
          aria-label="Dismiss banner"
        >
          <X className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
      </div>
    </div>
  )
}
