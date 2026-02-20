"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Search } from "lucide-react";

type Recipe = {
  id: number;
  title: string;
  image: string;
  time: string;
  category: string;
  rating: number;
  reviews: number;
};

export default function RecipesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const recipes: Recipe[] = [
    {
      id: 1,
      title: "Long-Life Noodles",
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1200",
      time: "40 mins",
      category: "Main",
      rating: 3.8,
      reviews: 27,
    },
    {
      id: 2,
      title: "Classic Grilled Oysters",
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1200",
      time: "35 mins",
      category: "Appetizer",
      rating: 3.7,
      reviews: 45,
    },
    {
      id: 3,
      title: "Vegan Chocolate Pudding",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200",
      time: "1 hour 10 mins",
      category: "Dessert",
      rating: 3.7,
      reviews: 43,
    },
    {
      id: 4,
      title: "Strawberry Smoothie",
      image:
        "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?q=80&w=1200",
      time: "10 mins",
      category: "Drink",
      rating: 4.5,
      reviews: 89,
    },
    {
      id: 5,
      title: "Fresh Salad Bowl",
      image:
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
      time: "20 mins",
      category: "Salad",
      rating: 4.5,
      reviews: 132,
    },
    {
      id: 6,
      title: "Grilled Chicken",
      image:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
      time: "45 mins",
      category: "Main",
      rating: 4.3,
      reviews: 88,
    },
    {
      id: 7,
      title: "Pasta Delight",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      time: "30 mins",
      category: "Main",
      rating: 4.7,
      reviews: 104,
    },
    {
      id: 8,
      title: "Tropical Smoothie",
      image:
        "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
      time: "10 mins",
      category: "Drink",
      rating: 4.8,
      reviews: 210,
    },
    {
      id: 9,
      title: "Berries & Cream",
      image:
        "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
      time: "15 mins",
      category: "Dessert",
      rating: 4.6,
      reviews: 97,
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white mt-2 border-b-2 border-black sm:px-4 lg:p-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div className="flex items-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">Recipes</h2>
          <ChevronRight size={16} className="text-neutral-500" />
        </div>

        <div className="relative w-full sm:w-64 md:w-72">
          <Search
            size={14}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Find a recipe"
            className="w-full border border-gray-300 rounded-md pl-7 sm:pl-9 pr-3 sm:pr-4 py-1.5 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>
      <div className="mb-2">
        <p className="text-gray-500 text-xs sm:text-sm mt-1">
          What do you want to cook today?
        </p>
      </div>

      {/* Carousel */}
      <div className="relative py-5">
        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth mb-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Hide Scrollbar for Chrome */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {recipes.map((recipe, index) => (
            <div
              key={recipe.id}
              className={`min-w-[220px] sm:min-w-[260px] md:min-w-[300px] max-w-[220px] sm:max-w-[260px] md:max-w-[300px] flex-shrink-0 ${index === 0 ? "ml-0" : ""
                }`}
            >
              {/* Image */}
              <div className="relative w-full h-[150px] sm:h-[180px] md:h-[200px]">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              {/* Title */}
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-medium text-gray-900">
                {recipe.title}
              </h3>

              {/* Meta Info */}
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500 mt-2">
                <span>{recipe.time}</span>
                <span>|</span>
                <span>{recipe.category}</span>
                <span>|</span>

                <div className="flex items-center gap-1">
                  <Star
                    size={12}
                    className="text-yellow-500 fill-yellow-500 sm:w-3.5 sm:h-3.5"
                  />
                  <span>
                    {recipe.rating} ({recipe.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:block absolute left-0 top-[75px] sm:top-[90px] md:top-[100px] -translate-y-1/2 -translate-x-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-100 z-20"
        >
          <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="hidden sm:block absolute right-0 top-[75px] sm:top-[90px] md:top-[100px] -translate-y-1/2 translate-x-1/2 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-100 z-20"
        >
          <ChevronRight size={18} className="sm:w-5 sm:h-5" />
        </button>
      </div>
    </section>
  );
}
