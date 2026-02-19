// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const VIDEOS_PER_PAGE = 15;

// const allVideos = Array.from({ length: 30 }).map((_, i) => ({
//   id: i + 1,
//   date: `February ${10 - (i % 7)}, 2026`,
//   title: `Video story headline ${i + 1}`,
//   desc: "This is a short description explaining what the video is about.",
//   img: `https://picsum.photos/seed/video${i}/320/180`,
// }));

// export default function MoreVideosSection() {
//   const [page, setPage] = useState(1);

//   const totalPages = Math.ceil(allVideos.length / VIDEOS_PER_PAGE);
//   const start = (page - 1) * VIDEOS_PER_PAGE;
//   const currentVideos = allVideos.slice(start, start + VIDEOS_PER_PAGE);

//   return (
//     <section className="max-w-[1200px] mx-auto sm:px-4 lg:px-0">
//       <h2 className="text-lg sm:text-xl font-bold border-t pt-3 mb-4">
//         More videos
//       </h2>

//       <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_300px] gap-6 sm:gap-8">
//         {/* LEFT CONTENT */}
//         <div className="space-y-4 sm:space-y-6">
//           {currentVideos.map((video, index) => (
//             <div key={video.id}>
//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//                 <div className="flex-1 order-2 sm:order-1">
//                   <p className="text-[10px] sm:text-xs text-gray-500 mb-1">
//                     {video.date}
//                   </p>
//                   <h3 className="text-sm sm:text-base font-semibold cursor-pointer">
//                     {video.title}
//                   </h3>
//                   <p className="text-xs sm:text-sm text-gray-600 mt-1">
//                     {video.desc}
//                   </p>
//                 </div>

//                 <div className="w-full sm:w-[160px] md:w-[180px] shrink-0 order-1 sm:order-2">
//                   <Image
//                     src={video.img}
//                     alt={video.title}
//                     width={180}
//                     height={100}
//                     className="object-cover rounded-md w-full"
//                   />
//                 </div>
//               </div>

//               <div className="border-b mt-4 sm:mt-6" />

//               {/* INLINE AD */}
//               {index === 2 && (
//                 <div className="my-4 sm:my-6">
//                   <div className="h-[180px] sm:h-[220px] md:h-[250px] bg-gray-100 flex items-center justify-center text-xs sm:text-sm text-gray-500">
//                     ADVERTISEMENT
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}

//           {/* PAGINATION */}
//           <div className="flex items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-10">
//             <button
//               disabled={page === 1}
//               onClick={() => setPage((p) => Math.max(1, p - 1))}
//               className="disabled:opacity-40"
//             >
//               <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
//             </button>

//             <span className="text-xs sm:text-sm">Page {page}</span>

//             <button
//               disabled={page === totalPages}
//               onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//               className="disabled:opacity-40"
//             >
//               <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDEBAR */}
//         <aside className="space-y-4 sm:space-y-6">
//           {/* Ad 1 - Newsletter */}
//           <div className="border p-3 sm:p-4 text-center">
//             <p className="text-[10px] sm:text-xs font-semibold mb-2">
//               NEWSLETTER · DAILY
//             </p>
//             <div className="bg-blue-600 text-white py-4 sm:py-6 mb-2 sm:mb-3 font-semibold text-sm sm:text-base">
//               Today's Headlines
//             </div>
//             <p className="text-xs sm:text-sm mb-2 sm:mb-3">
//               The most important news stories of the day.
//             </p>
//             <button className="bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
//               Sign up
//             </button>
//           </div>

//           {/* Ad 2 - Promo */}
//           <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-4 sm:p-6 text-center rounded-md text-sm sm:text-base">
//             Every story starts with world leaders
//           </div>

//           {/* Ad 3 - Display Ad */}
//           <div className="h-[200px] sm:h-[250px] bg-gray-100 flex items-center justify-center text-xs sm:text-sm text-gray-500">
//             DISPLAY AD
//           </div>

//           {/* Ad 4 - Sponsored */}
//           <div className="h-[200px] sm:h-[250px] bg-gray-100 flex items-center justify-center text-xs sm:text-sm text-gray-500">
//             SPONSORED CONTENT
//           </div>
//         </aside>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VIDEOS_PER_PAGE = 15;

const allVideos = Array.from({ length: 30 }).map((_, i) => ({
  id: i + 1,
  date: `February ${10 + (i % 7)}, 2026`, // Different date each time
  title: `Exploring the Depths of Technology ${i + 1}`, // Unique titles
  desc: `Join us in this episode as we dive into the world of technology, discussing new advancements, and the future of AI and gadgets in our daily lives. Episode ${i + 1}.`, // Descriptions with different context
  img: `https://picsum.photos/seed/technology${i}/320/180`, // Different image for each video
}));

export default function MoreVideosSection() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(allVideos.length / VIDEOS_PER_PAGE);
  const start = (page - 1) * VIDEOS_PER_PAGE;
  const currentVideos = allVideos.slice(start, start + VIDEOS_PER_PAGE);

  return (
    <section className="max-w-[1200px] mx-auto sm:px-4 lg:px-0">
      <h2 className="text-lg sm:text-xl font-bold border-t pt-3 mb-4">
        More videos
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_300px] gap-6 sm:gap-8">
        {/* LEFT CONTENT */}
        <div className="space-y-4 sm:space-y-6">
          {currentVideos.map((video, index) => (
            <div key={video.id}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex-1 order-2 sm:order-1">
                  <p className="text-[10px] sm:text-xs text-gray-500 mb-1">
                    {video.date}
                  </p>
                  <h3 className="text-sm sm:text-base font-semibold cursor-pointer">
                    {video.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    {video.desc}
                  </p>
                </div>

                <div className="w-full sm:w-[160px] md:w-[180px] shrink-0 order-1 sm:order-2">
                  <Image
                    src={video.img}
                    alt={video.title}
                    width={180}
                    height={100}
                    className="object-cover rounded-md w-full"
                  />
                </div>
              </div>

              <div className="border-b mt-4 sm:mt-6" />

              {/* INLINE AD */}
              {index === 2 && (
                <div className="my-4 sm:my-6">
                  <div className="h-[180px] sm:h-[220px] md:h-[250px] bg-gray-100 flex items-center justify-center text-xs sm:text-sm text-gray-500">
                    ADVERTISEMENT
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* PAGINATION */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-10">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="disabled:opacity-40"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <span className="text-xs sm:text-sm">Page {page}</span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="disabled:opacity-40"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-4 sm:space-y-6">
          {/* Ad 1 - Newsletter */}
          <div className="border p-3 sm:p-4 text-center">
            <p className="text-[10px] sm:text-xs font-semibold mb-2">
              NEWSLETTER · DAILY
            </p>
            <div className="bg-blue-600 text-white py-4 sm:py-6 mb-2 sm:mb-3 font-semibold text-sm sm:text-base">
              Today's Headlines
            </div>
            <p className="text-xs sm:text-sm mb-2 sm:mb-3">
              The most important news stories of the day.
            </p>
            <button className="bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
              Sign up
            </button>
          </div>

          {/* Ad 2 - Promo */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-4 sm:p-6 text-center rounded-md text-sm sm:text-base">
            Every story starts with world leaders
          </div>

          {/* Ad 3 - Display Ad */}
          <div className="h-[200px] sm:h-[250px] bg-gray-100 flex items-center justify-center text-xs sm:text-sm text-gray-500">
            DISPLAY AD
          </div>

          {/* Ad 4 - Sponsored */}
          <div className="h-[200px] sm:h-[250px] bg-gray-100 flex items-center justify-center text-xs sm:text-sm text-gray-500">
            SPONSORED CONTENT
          </div>
        </aside>
      </div>
    </section>
  );
}
