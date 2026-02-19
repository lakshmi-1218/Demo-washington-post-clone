import {ChevronRight} from "lucide-react";
export function PoliticsGovernmentSection() {
    const mainStory = {
      headline:
        "Justice Dept.'s head of antitrust resigns amid tensions on enforcement",
      paragraph:
        "Gail Slater — an antitrust attorney who vowed to resist political interference at her confirmation hearing — announced her departure on social media.",
      byline: "By Perry Stein and Cat Zakrzewski",
    }
  
    const featuredImage = {
      src: "https://picsum.photos/400/300?random=15",
      alt: "Justice Dept. head portrait",
    }
  
    const rightColumn1 = [
      "Trump allows Democratic governors at White House meeting after initial snub",
      "Column Paul Kane: A little Republican rebellion against Trump only goes so far",
      "In rebuke, House votes to roll back Trump's tariffs on Canada",
    ]
  
    const rightColumn2 = [
      "Pam Bondi lashes out as lawmakers press her on Epstein, cases against Trump foes",
      "National Guard troops were quietly withdrawn from some U.S. cities",
      "Democrats seek to counter Trump, boost 2028 profiles on European tour",
    ]
  
    return (
      <section className="max-w-[1280px] mx-auto mt-2 border-b-2 border-black px-2 sm:px-4 lg:p-0">
        {/* Section title */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2 mb-2 text-gray-900 cursor-pointer">
          Politics & Government{" "}
          <ChevronRight size={16} className="text-neutral-500" />
        </h2>
  
        {/* Main grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 mb-2">
          {/* Left content: headline + paragraph + byline */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <h3 className="font-serif text-lg sm:text-xl leading-snug mb-2 sm:mb-3">
              {mainStory.headline}
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-5">{mainStory.paragraph}</p>
            <p className="text-[10px] sm:text-xs text-gray-500">{mainStory.byline}</p>
          </div>
  
          {/* Featured image */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <img
              src={featuredImage.src}
              alt={featuredImage.alt}
              className="w-full max-w-md object-cover rounded-sm shadow-sm"
            />
          </div>
  
          {/* Right side two columns */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:border-l border-gray-300 lg:pl-4 xl:pl-8 gap-4 sm:gap-6">
            {/* First right column */}
            <div className="flex flex-col divide-y divide-gray-300">
              {rightColumn1.map((headline, idx) => (
                <p
                  key={idx}
                  className="text-[11px] sm:text-xs text-gray-800 py-2 sm:py-3 cursor-pointer hover:underline"
                >
                  {headline}
                </p>
              ))}
            </div>
  
            {/* Second right column */}
            <div className="flex flex-col divide-y divide-gray-300">
              {rightColumn2.map((headline, idx) => (
                <p
                  key={idx}
                  className="text-[11px] sm:text-xs text-gray-800 py-2 sm:py-3 cursor-pointer hover:underline"
                >
                  {headline}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  