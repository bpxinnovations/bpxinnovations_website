"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurApproach() {
  return (
    <section className=" overflow-hidden w-full min-h-screen relative">
      <div className="w-full px-4 sm:px-6 lg:px-8 pb-12 md:py-12 lg:py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 "
        >
          <h2 className="text-5xl font-bold mb-6 font-bricolage">Our Approach</h2>
          <p className=" text-xl max-w-3xl xl:max-w-4xl leading-relaxed">
            Services are professional offerings provided by businesses to meet
            specific needs or solve problems for their customers. Services can
            range from your budget.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-16 lg:mb-20">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/Top-8-Software-Development-Models.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8 xl:space-y-10"
          >
            <h3 className="text-4xl font-bricolage font-bold leading-tight">
              Unlock The Potential
              <br className="hidden sm:block" />
              Of Your Business.
            </h3>
            <p className="text-gray-400 text-xl leading-relaxed">
              We believe in delivering tailored solutions that are designed to
              address your unique requirements. We take the time to understand
              your business and provide personalized services that align with
              your goals.
            </p>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Timeline Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-12 lg:space-y-16"
          >
            {/* Timeline connector */}
            <div className="relative">
              {/* Vertical line for mobile */}

              {/* Feature 1: Customized Solutions */}
              <div className="relative flex items-start lg:items-center gap-6 lg:gap-8 mb-12 lg:mb-0">
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-[#00ff9f] ring-4 ring-[#00ff9f]/20"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bricolage sm:text-2xl lg:text-3xl font-bold mb-3">
                    Customized Solutions
                  </h4>
                  <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                    Services are professional offerings provided by businesses
                    to meet specific needs or solve problems for their
                    customers.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image and Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Top Right Image */}
            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/Top-8-Software-Development-Models.jpg"
                alt="Business consultation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
            </div>

            {/* Years Badge - Positioned absolute on desktop */}
            <div className="hidden lg:block absolute -bottom-12 -left-12 xl:-bottom-16 xl:-left-16">
              <div className="relative w-48 h-48 xl:w-56 xl:h-56">
                {/* Rotating border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00ff9f] to-[#00cc7f] animate-spin-slow opacity-20"></div>

                {/* Main circle */}
                <div className="absolute inset-2 rounded-full bg-[#00ff9f] flex flex-col items-center justify-center shadow-2xl shadow-[#00ff9f]/50">
                  {/* Circular text */}
                  <div className="absolute inset-0">
                    <svg
                      className="w-full h-full animate-spin-slow"
                      viewBox="0 0 200 200"
                    >
                      <defs>
                        <path
                          id="circlePath"
                          d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                        />
                      </defs>
                      <text className="text-[10px] fill-black/40 font-bold tracking-wider">
                        <textPath href="#circlePath" startOffset="0%">
                          CERTIFIED EXPERIENCE • CERTIFIED EXPERIENCE •
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  {/* Center content */}
                  <div className="relative z-10 text-center">
                    <div className="text-5xl xl:text-6xl font-black text-black">
                      10
                    </div>
                    <div className="text-lg xl:text-xl font-bold text-black/80">
                      Years
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Years Badge - Mobile version */}
            <div className="lg:hidden mt-8 flex justify-center">
              <div className="relative w-40 h-40 sm:w-44 sm:h-44">
                <div className="absolute inset-0 rounded-full bg-[#00ff9f] flex flex-col items-center justify-center shadow-2xl shadow-[#00ff9f]/50">
                  <div className="text-4xl sm:text-5xl font-black text-black">
                    10
                  </div>
                  <div className="text-base sm:text-lg font-bold text-black/80">
                    Years
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-black/60 mt-1">
                    Experience
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration - full screen */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00ff9f]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
