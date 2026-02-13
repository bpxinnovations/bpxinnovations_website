"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ lang = "en", item = {}, index = 0 }) {
console.log(item)


  const getCardSize = (idx) => {
    const position = idx % 7;
    const uniformHeight = "h-96 md:h-[28rem]";

    switch (position) {
      case 0:
        return { span: "md:col-span-1", height: uniformHeight };
      case 1:
        return { span: "md:col-span-2", height: uniformHeight };
      case 2:
        return { span: "md:col-span-2", height: uniformHeight };
      case 3:
        return { span: "md:col-span-1", height: uniformHeight };
      case 4:
      case 5:
      case 6:
        return { span: "md:col-span-1", height: uniformHeight };
      default:
        return { span: "md:col-span-1", height: uniformHeight };
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
        href={`/${lang || "en"}/projects/${item.url_name}`}
        className="block h-full"
      >
        <div
          className={`group relative rounded-2xl overflow-hidden ${cardSize.height} shadow-lg hover:shadow-2xl transition-all duration-500`}
        >
          {/* Image Container */}
          <div className="absolute inset-0">
            <Image
              src={item.image || "/projects/default.jpg"}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              alt={item.name}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          </div>

        

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
              {item.category}
            </span>
          </div>

          {/* Text Content - Slides up from bottom on hover */}
          <div className="absolute inset-x-0 bottom-0 translate-y-[calc(100%-5rem)] group-hover:translate-y-0 transition-transform duration-500 ease-out">
            {/* Visible Title Area (always shown) */}
            <div className="px-6 py-4 bg-gradient-to-t from-black/90 to-transparent">
              <h2 className="text-white font-bricolage text-lg md:text-xl font-semibold line-clamp-2 mb-2">
                {item.name}
              </h2>
              <div className="text-white/60 text-sm">
                {item.client && <span>{item.client} • </span>}
                <span>{item.status}</span>
              </div>
            </div>

            {/* Hidden Content (revealed on hover) */}
            <div className="px-6 pb-6 bg-black/95 backdrop-blur-sm">
              {/* Description */}
              <p className="text-white/80 text-sm leading-relaxed line-clamp-2 mb-4">
                {item.description}
              </p>

              {/* Technologies */}
              {/* {item.technologies && item.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )} */}

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm group/link flex-1">
                  <span>View Project</span>
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

                {/* External Links */}
                <div className="flex items-center gap-2">
               
                  {item.live_url && (
                    <a
                      href={item.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                      title="View Live Site"
                    >
                      <FaExternalLinkAlt className="w-4 h-4 text-white" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}