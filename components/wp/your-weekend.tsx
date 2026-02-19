import {ChevronRight} from "lucide-react";
export function YourWeekendSection() {
    const weekendData = [
      {
        image: "https://picsum.photos/300/180?random=1",
        headline: "Local music festival lights up the city",
        category: "Music & Arts",
        author: "Jane Doe",
        timestamp: "Fri, Feb 14",
      },
      {
        image: "https://picsum.photos/300/180?random=2",
        headline: "Explore the weekend farmers market downtown",
        category: "Food & Drink",
        author: "John Smith",
        timestamp: "Sat, Feb 15",
      },
      {
        image: "https://picsum.photos/300/180?random=3",
        headline: "Top hiking trails to enjoy this weekend",
        category: "Outdoors",
        author: "Alice Johnson",
        timestamp: "Sun, Feb 16",
      },
      {
        image: "https://picsum.photos/300/180?random=4",
        headline: "New art exhibit opening at the city gallery",
        category: "Culture",
        author: "Robert Lee",
        timestamp: "Fri, Feb 14",
      },
    ]
  
    return (
      <section className="mx-auto max-w-[1280px] border-b-2 border-black mt-2 px-2 sm:px-4 lg:p-0">
       <div className="flex items-center">
        <h2 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">Your Weekend</h2>
        <ChevronRight size={16} className="text-neutral-500" />
        </div>
  
        {/* GRID: 4 columns, responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-2">
          {weekendData.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* IMAGE ON TOP */}
              <img
                src={item.image}
                alt={item.headline}
                className="w-full object-cover mb-2 rounded-sm"
              />
  
              {/* CONTENT BELOW */}
              <div className="flex flex-col gap-1">
                <p className="text-xs sm:text-sm font-semibold text-wp-red">{item.category}</p>
                <h3 className="font-heading text-sm sm:text-base line-clamp-2 font-bold">{item.headline}</h3>
                <p className="text-xs sm:text-sm text-gray-500 font-bold">
                  {item.author} · {item.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  