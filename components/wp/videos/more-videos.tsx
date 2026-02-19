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
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const VIDEOS_PER_PAGE = 15;

const allVideos = [
  { id: 1, date: "February 15, 2026", title: "Climate Summit: World Leaders Commit to Net Zero by 2050", desc: "Global leaders gather to discuss urgent climate action and renewable energy initiatives.", img: "https://picsum.photos/seed/climate1/320/180", duration: "4:32" },
  { id: 2, date: "February 15, 2026", title: "Breaking: Major Breakthrough in Cancer Research", desc: "Scientists announce promising new treatment that could revolutionize cancer therapy.", img: "https://picsum.photos/seed/medical2/320/180", duration: "3:45" },
  { id: 3, date: "February 14, 2026", title: "Tech Giants Face New Antitrust Regulations", desc: "Congress passes sweeping legislation to regulate big tech companies and protect consumer data.", img: "https://picsum.photos/seed/tech3/320/180", duration: "5:12" },
  { id: 4, date: "February 14, 2026", title: "Olympic Athletes Prepare for Summer Games", desc: "Behind the scenes with Team USA as they train for the upcoming international competition.", img: "https://picsum.photos/seed/sports4/320/180", duration: "6:20" },
  { id: 5, date: "February 13, 2026", title: "Housing Market Shows Signs of Recovery", desc: "Economists analyze recent trends indicating stabilization in real estate prices nationwide.", img: "https://picsum.photos/seed/housing5/320/180", duration: "4:15" },
  { id: 6, date: "February 13, 2026", title: "Space Agency Announces Mars Mission Timeline", desc: "NASA reveals detailed plans for first crewed mission to the Red Planet in 2035.", img: "https://picsum.photos/seed/space6/320/180", duration: "7:08" },
  { id: 7, date: "February 12, 2026", title: "Education Reform: New Standards Approved", desc: "School districts nationwide prepare to implement updated curriculum and teaching methods.", img: "https://picsum.photos/seed/education7/320/180", duration: "3:55" },
  { id: 8, date: "February 12, 2026", title: "Cybersecurity Threats on the Rise", desc: "Experts warn of increasing sophisticated attacks targeting critical infrastructure.", img: "https://picsum.photos/seed/cyber8/320/180", duration: "5:40" },
  { id: 9, date: "February 11, 2026", title: "Renewable Energy Surpasses Coal Production", desc: "Historic milestone as solar and wind power generation exceeds traditional fossil fuels.", img: "https://picsum.photos/seed/energy9/320/180", duration: "4:28" },
  { id: 10, date: "February 11, 2026", title: "Supreme Court Hears Landmark Privacy Case", desc: "Justices debate digital privacy rights in the age of artificial intelligence.", img: "https://picsum.photos/seed/court10/320/180", duration: "6:15" },
  { id: 11, date: "February 10, 2026", title: "Global Markets React to Economic Data", desc: "Wall Street analysts discuss implications of latest employment and inflation figures.", img: "https://picsum.photos/seed/market11/320/180", duration: "3:22" },
  { id: 12, date: "February 10, 2026", title: "Wildlife Conservation Efforts Show Success", desc: "Endangered species populations rebound thanks to international protection programs.", img: "https://picsum.photos/seed/wildlife12/320/180", duration: "5:50" },
  { id: 13, date: "February 9, 2026", title: "Artificial Intelligence in Healthcare", desc: "Hospitals adopt AI-powered diagnostic tools to improve patient outcomes and efficiency.", img: "https://picsum.photos/seed/aihealth13/320/180", duration: "4:45" },
  { id: 14, date: "February 9, 2026", title: "Infrastructure Bill: Construction Begins", desc: "Major projects kick off nationwide as federal funding reaches local communities.", img: "https://picsum.photos/seed/infra14/320/180", duration: "3:38" },
  { id: 15, date: "February 8, 2026", title: "Cultural Festival Celebrates Diversity", desc: "Annual event brings together communities to share traditions, food, and performances.", img: "https://picsum.photos/seed/culture15/320/180", duration: "6:05" },
  { id: 16, date: "February 8, 2026", title: "Autonomous Vehicles Hit City Streets", desc: "Self-driving cars begin pilot program in major metropolitan areas across the country.", img: "https://picsum.photos/seed/auto16/320/180", duration: "5:25" },
  { id: 17, date: "February 7, 2026", title: "Mental Health Awareness Campaign Launches", desc: "New initiative aims to reduce stigma and increase access to mental health services.", img: "https://picsum.photos/seed/mental17/320/180", duration: "4:10" },
  { id: 18, date: "February 7, 2026", title: "Trade Agreement Signed with Asian Nations", desc: "Historic deal promises to boost economic cooperation and reduce tariffs.", img: "https://picsum.photos/seed/trade18/320/180", duration: "3:52" },
  { id: 19, date: "February 6, 2026", title: "Ocean Cleanup Project Makes Progress", desc: "Innovative technology removes millions of pounds of plastic from Pacific waters.", img: "https://picsum.photos/seed/ocean19/320/180", duration: "5:18" },
  { id: 20, date: "February 6, 2026", title: "Quantum Computing Reaches New Milestone", desc: "Researchers achieve breakthrough that could transform cryptography and drug discovery.", img: "https://picsum.photos/seed/quantum20/320/180", duration: "6:42" },
  { id: 21, date: "February 5, 2026", title: "Food Security: Urban Farming Expands", desc: "Cities embrace vertical gardens and rooftop agriculture to combat food deserts.", img: "https://picsum.photos/seed/farming21/320/180", duration: "4:55" },
  { id: 22, date: "February 5, 2026", title: "Election Security Measures Enhanced", desc: "Officials implement new safeguards to protect voting systems from interference.", img: "https://picsum.photos/seed/election22/320/180", duration: "3:30" },
  { id: 23, date: "February 4, 2026", title: "Streaming Wars: New Players Enter Market", desc: "Entertainment industry shifts as traditional studios launch competing platforms.", img: "https://picsum.photos/seed/streaming23/320/180", duration: "5:08" },
  { id: 24, date: "February 4, 2026", title: "Vaccine Development for Emerging Diseases", desc: "Pharmaceutical companies race to develop preventive treatments for new threats.", img: "https://picsum.photos/seed/vaccine24/320/180", duration: "4:20" },
  { id: 25, date: "February 3, 2026", title: "Historic Peace Talks Resume", desc: "Diplomats from conflicting nations meet to negotiate end to decades-long dispute.", img: "https://picsum.photos/seed/peace25/320/180", duration: "6:30" },
  { id: 26, date: "February 3, 2026", title: "5G Network Expansion Accelerates", desc: "Telecommunications companies invest billions in next-generation wireless infrastructure.", img: "https://picsum.photos/seed/5g26/320/180", duration: "3:48" },
  { id: 27, date: "February 2, 2026", title: "Fashion Industry Embraces Sustainability", desc: "Major brands commit to eco-friendly materials and ethical manufacturing practices.", img: "https://picsum.photos/seed/fashion27/320/180", duration: "5:35" },
  { id: 28, date: "February 2, 2026", title: "Archaeological Discovery Rewrites History", desc: "Ancient artifacts found in remote location challenge existing theories about civilization.", img: "https://picsum.photos/seed/archaeology28/320/180", duration: "7:15" },
  { id: 29, date: "February 1, 2026", title: "Gig Economy Workers Gain New Protections", desc: "Legislation provides benefits and job security for freelance and contract workers.", img: "https://picsum.photos/seed/gig29/320/180", duration: "4:02" },
  { id: 30, date: "February 1, 2026", title: "Virtual Reality Transforms Education", desc: "Schools adopt immersive technology to enhance learning experiences for students.", img: "https://picsum.photos/seed/vr30/320/180", duration: "5:55" },
];

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

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_300px] gap-6 px-1 sm:gap-8">
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

                <div className="w-full sm:w-[160px] md:w-[180px] shrink-0 order-1 sm:order-2 relative group cursor-pointer">
                  <Image
                    src={video.img}
                    alt={video.title}
                    width={180}
                    height={100}
                    className="object-cover rounded-md w-full"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded-md flex items-center justify-center">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                    {video.duration}
                  </div>
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
