"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-6 py-16 text-gray-600">

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 transition"
      >
        <ChevronLeft size={22} />
      </button>

      <span className="text-lg font-medium">
        Page {currentPage}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 transition"
      >
        <ChevronRight size={22} />
      </button>

    </div>
  );
}
