"use client"

import { useState, useEffect, useRef } from "react"
import { Bell, ChevronRight, Search, X } from "lucide-react"
import { useRouter } from "next/navigation"

const menuItems = [
    { title: "Home Page", href:"/" },
    { title: "Latest", href: "/latest" },
    { title: "Politics",  href: "/politics",children: ["Courts & Law", "Democracy in America", "Fact Checker", "The Fix", "Policy", "Polling", "White House"] },
    { title: "Opinions", href: "/opinions", children: ["The Post's View", "Columns", "Guest Opinions", "Editorial Cartoons", "Letters to the Editor"] },
    { title: "Style", href: "/style" ,children: ["Fashion", "Power", "Trends"] },
    { title: "Photography",href: "/photography" },
    { title: "Investigations" },
    { title: "Climate", children: ["Climate Lab", "Climate Solutions", "Environment", "Green Living"] },
    { title: "Recipes" },
    { title: "Well+Being", children: ["Food", "Fitness", "Mind", "Body", "Life"] },
    { title: "Business", children: ["Cryptocurrency", "Economy", "Economic Policy", "Media", "Personal Finance", "Future of Work"] },
    { title: "Tech", children: ["Help Desk", "Artificial Intelligence", "Internet Culture", "Space", "Tech Policy"] },
    { title: "World", children: ["Africa", "America", "Asia", "Europe", "Middle East"] },
    { title: "DC, MD, VA", children: ["The District", "Maryland", "Virginia", "Crime & Public Safety", "Education", "Going Out Guide"] },
    { title: "Sports", children: ["NFL", "MLB", "NBA", "WNBA", "NHL", "Auto Racing"] },
    { title: "Crosswords & Games", children: ["Daily Crossword", "Daily Mini", "Classic Crossword", "Sunday Crossword", "Sudoku", "Keyword"] },
    { title: "Abortion" },
    { title: "Advice" },
    { title: "Arts & Entertainment", children: ["Art", "Movies", "Music", "Theater", "TV", "Video Games"] },
    { title: "Books" },
    { title: "Carolyn Hax" },
    { title: "Chats & Community" },
    { title: "Classifieds" },
    { title: "Comics" },
    { title: "Education", children: ["Higher Education"] },
    { title: "Food", children: ["Recipes"] },
    { title: "Gender & Identity", children: ["Race & Reckoning"] },
    { title: "Health", children: ["Medical Mysteries"] },
    { title: "History", children: ["Retropolls"] },
    { title: "Home & Design" },
    { title: "Horoscopes" },
    { title: "Immigration" },
    { title: "Jobs" },
    { title: "National" },
    { title: "National Security", children: ["Foreign Policy", "Intelligence", "Justice", "Military"] },
    { title: "Newsletters & Alerts" },
    { title: "Obituaries" },
    { title: "Parenting" },
    { title: "Podcasts" },
    { title: "Politics", children: ["Court & Law", "Democracy in America", "Fact Checker", "The Fix", "The Briefs", "Polling", "White House"] },
    { title: "Religion" },
    { title: "Science", children: ["Animals"] },
    { title: "Sports", children: ["Nlf", "Mlb", "Nba", "Wnba", "Nhl", "Auto Racing", "Golf", "College Sports", "Tennis"]},
    { title: "Transportation" },
    { title: "Travel", children: ["Destinations", "News", "Tips"] },
    { title: "Video" },
    { title: "Washington Post Live" },
    { title: "Weather", children: ["Capital Weather Gang", "Extreme Weather"] },
]
function SidePanel({ open, onClose, headerHeight }: any) {
    const router = useRouter()
    const [hovered, setHovered] = useState<any>(null)
    const [submenuCenterY, setSubmenuCenterY] = useState(0)
    const itemRefs = useRef<any>({})

    // Lock body scroll when open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto"
    }, [open])

    if (!open) return null

    const handleHover = (item: any, index: number) => {
        if (!item.children) {
            setHovered(null)
            return
        }

        const el = itemRefs.current[index]
        if (!el) return

        const rect = el.getBoundingClientRect()

        // Get vertical center of hovered item
        const centerY = rect.top + rect.height / 2

        setSubmenuCenterY(centerY)
        setHovered(item)
    }

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/40 z-40"
                style={{ top: `${headerHeight}px` }}
                onClick={onClose}
            />

            <div
                className="fixed left-0 flex z-50"
                style={{
                    top: `${headerHeight}px`,
                    height: `calc(100vh - ${headerHeight}px)`
                }}
            >
                {/* LEFT PANEL - Entire panel scrolls */}
                <div className="w-[300px] bg-white h-full overflow-y-auto">
                    {/* Header */}
                    <div className="border-b p-3">
                        <button className="w-full bg-blue-600 text-white py-1 rounded-full font-semibold mb-4">
                            Subscribe
                        </button>
                        <div className="flex justify-center">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Ask a question or search"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 text-sm"
                                />

                                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 cursor-pointer" />
                            </div>
                        </div>

                    </div>

                    {/* MENU LIST */}
                    <div className="px-3 py-3 space-y-5">
                        {menuItems.map((item, index) => (
                            <div
                                key={`${item.title}-${index}`}
                                ref={(el) => (itemRefs.current[index] = el)}
                                onMouseEnter={() => handleHover(item, index)}
                                onMouseLeave={() => setHovered(null)}
                                onClick={() => item.href && router.push(item.href)}
                                className="flex justify-between items-center text-sm cursor-pointer"
                            >
                                {item.title}
                                {item.children && <ChevronRight size={18} className="hidden lg:inline" />}
                            </div>
                        ))}
                    </div>
                    {/* EXPLORE OUR PRODUCTS */}
                    <div className="border-t px-3 py-5 space-y-4">
                        <div className="text-xs font-semibold uppercase text-gray-500 tracking-wide">
                            Explore Our Products
                        </div>

                        {[
                            "WP Intelligence",
                            "Ask The Post AI",
                            "Ripple",
                            "WP Creative Group",
                        ].map((item) => (
                            <div
                                key={item}
                                className="text-sm cursor-pointer hover:text-blue-600"
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                </div>

                {/* SUBMENU - Desktop only */}
                {hovered?.children && (
                    <div
                        className="hidden lg:block fixed z-50"
                        style={{
                            left: 310,
                            top: submenuCenterY,
                            transform: "translateY(-50%)"
                        }}
                    >
                        <div className="relative">
                            {/* Diamond Arrow */}
                            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 shadow-sm" />

                            {/* Submenu Box */}
                            <div className="bg-white px-4 py-4 space-y-4 min-w-[200px] rounded-md shadow-md">
                                {hovered.children.map((child: string) => (
                                    <div
                                        key={child}
                                        className="text-sm cursor-pointer hover:text-blue-600"
                                    >
                                        {child}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default SidePanel





