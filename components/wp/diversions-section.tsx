"use client";

import {
  BookOpen,
  Grid3X3,
  Hash,
  Puzzle,
  Quote,
  LayoutGrid,
  Table,
  Moon,
  Spade,
  ChevronRight
} from "lucide-react";

export default function DiversionsSection() {
  const items = [
    { id: 1, label: "Comics", icon: BookOpen },
    { id: 2, label: "Crosswords", icon: Grid3X3 },
    { id: 3, label: "Keyword", icon: Hash },
    { id: 4, label: "Wridges", icon: Puzzle },
    { id: 5, label: "Quiz", icon: Quote },
    { id: 6, label: "Mah Jongg", icon: LayoutGrid },
    { id: 7, label: "Sudoku", icon: Table },
    { id: 8, label: "Horoscopes", icon: Moon },
    { id: 9, label: "Solitaire", icon: Spade },
  ];

  return (
    <section className="w-full mt-5 sm:px-4 lg:p-0">
      {/* Title Row */}
      <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-900 sm:mb-4">
      <h2 className="text-lg sm:text-xl md:text-2xl text-gray-900">Diversions</h2>
        <ChevronRight size={16} className="text-neutral-500" />
      </div>

      {/* Navigation Row */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-gray-800 py-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className="flex items-center gap-1.5 sm:gap-2 hover:underline transition"
            >
              <Icon size={14} className="text-gray-700 sm:w-4 sm:h-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
