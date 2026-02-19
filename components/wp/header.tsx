"use client"
import { useRef, useState,useEffect } from "react"
import SidePanel from "../SidePanel"
import NotificationPanel from "../NotificationPanel"
import { Bell } from "lucide-react"
import Link from "next/link"
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [notificationOpen, setNotificationOpen] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const [headerHeight, setHeaderHeight] = useState(60) // default

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll)

    // Get header height dynamically
    if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        ref={headerRef}
        className="py-2 lg:py-0 lg:px-5 sticky top-0 z-50 bg-white border-b border-gray-200 transition-all duration-300"
      >
        <div className="mx-auto max-w-[1280px] px-3 sm:px-4">
          <div className="flex items-center justify-between">
            {/* LEFT */}
            <div className="flex items-center gap-4 text-[#4a4a4a]">
            <button
  aria-label="Menu and Search"
  onClick={() => setMenuOpen(true)}
  className="hover:text-black transition-colors"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    {/* First and second lines (same length) */}
    <line x1="3" y1="6" x2="14" y2="6" />
    <line x1="3" y1="12" x2="14" y2="12" />

    {/* Third line (full length) */}
    <line x1="3" y1="18" x2="20" y2="18" />

    {/* Magnifying glass circle (larger, aligned with second line vertically) */}
    <circle cx="18" cy="10" r="4.7" />

    {/* Handle of magnifying glass */}
    <line x1="18.5" y1="13.5" x2="24" y2="22" />
  </svg>
</button>




              <button
                aria-label="Notifications"
                onClick={() => setNotificationOpen(true)}
                className="relative hover:text-black transition-colors"
              >
                <Bell className="h-5 w-5" strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full" />
              </button>
            </div>

            {/* CENTER */}
            <div className="flex-1 text-center">
              <Link href="/">
                <h2 className="sm:hidden font-heading text-lg font-bold tracking-tight">
                  TWP
                </h2>

                <h1 className="hidden sm:block font-heading text-[32px] lg:text-[40px] leading-tight tracking-tight text-black">
                  The Washington Post
                </h1>
              </Link>
              <p className="hidden sm:block"> Democracy Dies in Darkness</p>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
              <button className="md:hidden bg-blue-600 text-white font-bold px-4 py-1 text-xs rounded-full">
                Subscribe
              </button>
              <button className="hidden md:inline-block bg-blue-600 text-white font-bold px-4 py-1.5 text-sm rounded-full">
                Subscribe
              </button>
              <button className="text-black font-semibold text-xs md:text-sm px-3 py-1 hover:bg-gray-100 hover:rounded-xl transition">
                Sign in
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* SidePanel */}
      <SidePanel open={menuOpen} onClose={() => setMenuOpen(false)} headerHeight={headerHeight} />
      
      {/* NotificationPanel */}
      <NotificationPanel open={notificationOpen} onClose={() => setNotificationOpen(false)} />
    </>
  )
}