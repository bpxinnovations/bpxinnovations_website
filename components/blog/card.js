"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import pubfn from "@/lib/function";

export default function BlogCard({ lang = "en", item = {}, index = 0 }) {
  // Exact pattern from your image - NOW WITH MUCH TALLER CARDS
  // Row 1: [Medium] [Large]
  // Row 2: [Large] [Large]
  // Row 3: [Small] [Small] [Small]

  const getCardSize = (idx) => {
    const position = idx % 7; // Pattern repeats every 7 cards

    // ALL CARDS NOW HAVE THE SAME TALL HEIGHT!
    const uniformHeight = "h-96 md:h-[28rem]"; // 384px mobile, 448px (28rem) desktop

    switch (position) {
      case 0: // First: Medium width, SAME HEIGHT
        return {
          span: "md:col-span-1",
          height: uniformHeight,
        };
      case 1: // Second: Large width, SAME HEIGHT
        return {
          span: "md:col-span-2",
          height: uniformHeight,
        };
      case 2: // Third: Large width, SAME HEIGHT
        return {
          span: "md:col-span-2",
          height: uniformHeight,
        };
      case 3: // Fourth: Medium width, SAME HEIGHT
        return {
          span: "md:col-span-1",
          height: uniformHeight,
        };
      case 4: // Fifth: Small width, SAME HEIGHT
        return {
          span: "md:col-span-1",
          height: uniformHeight,
        };
      case 5: // Sixth: Small width, SAME HEIGHT
        return {
          span: "md:col-span-1",
          height: uniformHeight,
        };
      case 6: // Seventh: Small width, SAME HEIGHT
        return {
          span: "md:col-span-1",
          height: uniformHeight,
        };
      default:
        return {
          span: "md:col-span-1",
          height: uniformHeight,
        };
    }
  };

  const cardSize = getCardSize(index);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: (index % 7) * 0.08,
      }}
      className={`${cardSize.span}`}
    >
      <a
        title={item.name}
        href={`/${lang || "en"}/blog/${item.url_name}`}
        className="block h-full"
      >
        <div
          className={`group relative rounded-2xl overflow-hidden ${cardSize.height} shadow-lg hover:shadow-2xl transition-all duration-500`}
        >
          {/* Image Container */}
          <div className="absolute inset-0">
            <Image
              src="/AdobeStock_508936825_resized-1080x675.jpg"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              alt={item.name}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          </div>

          {/* Text Content - Slides up from bottom on hover */}
          <div className="absolute inset-x-0 bottom-0 translate-y-[calc(100%-5rem)] group-hover:translate-y-0 transition-transform duration-500 ease-out">
            {/* Visible Title Area (always shown) */}
            <div className="px-6 py-4 bg-gradient-to-t from-black/90 to-transparent">
              <h2 className="text-white font-bricolage text-lg md:text-xl font-semibold line-clamp-2 mb-2">
                {item.name}
              </h2>
              <div className="text-white/60 text-sm">
                {pubfn.timeFormat(item.create_time, "yyyy-MM-dd")}
              </div>
            </div>

            {/* Hidden Content (revealed on hover) */}
            <div className="px-6 pb-6 bg-black/95 backdrop-blur-sm">
              {/* Tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Read More Link */}
              <div className="flex items-center gap-2 text-primary font-semibold text-sm group/link">
                <span>Read More</span>
                <svg
                  className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
