"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsPatchQuestionFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import Brands from "@/components/home/brands";

import TestimonialCard from "@/components/home/testimonial/card";
import { TestimonialsList } from "@/lib/testimonialsList";
import { usePathname } from "next/navigation";
import { defaultLocale, getDictionary } from "@/lib/i18n";

import Cta from "@/components/home/cta";
import { Testimonials } from "@/components/home/testimonial";
import OurApproach from "@/components/home/ourApproach";
import WhyChooseUs from "@/components/home/whyChooseUs";
import OurTeam from "@/components/home/ourTeam";

export default function Page({ params }) {
  const [dict, setDict] = useState({
    About: {},
    Testimonial: {},
    CTA: {},
    CTAButton: {},
  });

  useEffect(() => {
    const fetchDictionary = async () => {
      const d = await getDictionary(langName);
      setDict(d);
    };
    fetchDictionary();
  }, []);

  const pathname = usePathname();
  const [langName, setLangName] = useState(params.lang || defaultLocale);
  useEffect(() => {
    if (pathname === "/") {
      setLangName(defaultLocale);
    } else {
      setLangName(pathname.split("/")[1]);
    }
  }, [pathname, langName]);

  const list = TestimonialsList[`TESTIMONIAL_${langName.toUpperCase()}`] || [];

  return (
    <main className="container mx-auto">
      <section>
        <div className="relative z-10 flex flex-col items-start md:items-center pt-10  overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            <h1 className="font-bold font-bricolage text-5xl md:text-7xl bg-gradient-to-r from-base-content from-50% to-primary text-center bg-clip-text text-transparent !leading-[1.25em]">
              {dict.About.h1}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
          >
            <h2 className="w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 md:text-center mb-5">
              {dict.About.h2}
            </h2>
          </motion.div>
        </div>
        <div className="absolute w-[100%] left-[0] top-[10%] md:top-[20%] h-[200px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="patternId"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="a"
                patternUnits="userSpaceOnUse"
                width="20"
                height="20"
                patternTransform="scale(3) rotate(0)"
              >
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="hsla(0, 0%, 100%, 0)"
                ></rect>
                <path
                  d="M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z"
                  strokeWidth="0.5"
                  className="stroke-base-content/50"
                  fill="none"
                ></path>
              </pattern>
            </defs>
            <rect
              width="800%"
              height="800%"
              transform="translate(0,0)"
              fill="url(#a)"
            ></rect>
          </svg>
          <div className="bg-gradient-to-b from-base-100  from-20% to-transparent absolute inset-0 "></div>
          <div className="bg-gradient-to-l from-base-100  from-1% to-transparent to-30% absolute inset-0"></div>
          <div className="bg-gradient-to-r from-base-100  from-1% to-transparent to-30% absolute inset-0"></div>
          <div className="bg-gradient-to-t from-base-100  from-1% to-transparent to-30% absolute inset-0"></div>
        </div>
      </section>
      <section className="flex flex-col gap-y-10 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          <OurApproach />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          <WhyChooseUs />
        </motion.div>
      </section>
      <section className="relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <Brands locale={dict.Brands} />
        </motion.div>
      </section>
      <section className="relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <OurTeam />
        </motion.div>
      </section>

      <Cta />
      <section className="relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <Testimonials />
        </motion.div>

        <div className="hidden md:block absolute right-[70%] top-[40%] z-0">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,theme(colors.primary/15%),rgba(255,255,255,0))]"></div>
        </div>
      </section>
    </main>
  );
}
