"use client";
import { motion } from "framer-motion";
import { MdFeedback } from "react-icons/md";
import BrandsCarousel from "./brands/brandsCarousel";

export default function Brands({ locale, langName = "en" }) {
  return (
    <section id="brands" className="relative py-10 md:py-20 bg-base-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <div className="relative z-10 flex flex-col gap-5 items-start md:items-center mb-10 mx-auto px-4">
          <div className="relative inline-flex font-bricolage items-center justify-center gap-2 border-2 border-base-content px-5 md:px-10 py-1 md:py-3 rounded-full text-lg md:text-2xl font-semibold overflow-hidden group">
            <div className="inline-flex items-center justify-center gap-2 z-10">
              <MdFeedback /> <h2>Brands</h2>
            </div>
            <div className="absolute w-0 h-full bg-base-content z-[0]"></div>
          </div>

          <h3 className="font-bold font-bricolage text-3xl md:text-5xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] md:text-center bg-clip-text text-transparent !leading-[1.25em]">
            Our Partners
          </h3>

          <h4 className="w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 md:text-center">
             We are proud to work with these amazing brands
            <a title="feedback" className="text-primary" href="#">
              If you want to join them,
            </a>
            please get in touch!
          </h4>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        {/* Theme-aware carousel section */}
        <div className="py-12 sm:py-16 bg-base-200/30 rounded-2xl">
          <div className="container mx-auto px-4">
            <BrandsCarousel />
          </div>
        </div>
      </motion.div>

      <div className="hidden md:block absolute left-[20%] top-[70%] z-0">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
    </section>
  );
}