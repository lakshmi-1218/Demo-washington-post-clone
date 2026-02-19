"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Politics", path: "/politics" },
  { name: "Opinions", path: "/opinions" },
  { name: "Style", path: "/style" },
  { name: "Investigations", path: "/investigations" },
  { name: "Climate", path: "/climate" },
  { name: "Well+Being", path: "/well-being" },
  { name: "Business", path: "/business" },
  { name: "Tech", path: "/tech" },
  { name: "WP Intelligence", path: "/wp-intelligence" },
  { name: "Ask The Post AI", path: "/ask-the-post-ai" },
];


const mobileNavItems = [
  { label: "Top Stories", path: "/" },
  { label: "Latest", path: "/latest" },
  { label: "For You", path: "/for-you-mobile" },
  { label: "Ask The Post AI", path: "/ai" },
];


export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {/* MOBILE NAVIGATION - CENTERED */}
      <nav
        className="md:hidden border-b border-gray-300 overflow-x-auto scrollbar-hide"
        aria-label="Mobile navigation"
      >
        <ul className="flex justify-center items-center gap-6 px-4 py-2 text-sm font-medium whitespace-nowrap">
          {mobileNavItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`pb-2 ${pathname === item.path
                    ? "border-b-2 border-black font-semibold"
                    : "text-gray-600"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>


      {/* DESKTOP NAVIGATION (UNCHANGED) */}
      <nav
  className="hidden md:block border-b border-black overflow-x-auto max-w-[1024px] mx-auto scrollbar-hide"
  aria-label="Main navigation"
>
  <ul className="flex justify-center items-center gap-1 px-2 sm:px-4">
    {navItems.map((item) => (
      <li key={item.name}>
        <a
          href={item.path}
          className="block px-2 sm:px-3 py-1 text-xs sm:text-sm font-body font-medium text-wp-dark hover:bg-gray-100 hover:rounded-3xl transition-colors whitespace-nowrap"
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
</nav>

    </>
  );
}
