'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Cta({ locale }) {
  // Repeating text for carousel effect - more repetitions for seamless loop
  const carouselText = "FOCUS ON YOUR BUSINESS, WE TAKE CARE OF YOUR IT. SO YOU CAN ";
  const repeatedText = Array(15).fill(carouselText).join(' ');

  return (
    <section className="relative w-screen h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black -mx-4 sm:-mx-6">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/Workplace-Design-For-A-Software-Company-1.jpg')",
          }}
        ></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Single Line Animated Text Carousel - EXACTLY LIKE YOUR IMAGE */}
      <div className="absolute font-bricolage top-1/2 -translate-y-1/2 left-0 right-0 z-10 select-none pointer-events-none overflow-hidden">
        <motion.div
          className="whitespace-nowrap text-[12vw] md:text-[10vw] lg:text-[8vw] font-black uppercase tracking-wide"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.15)',
            color: 'transparent',
            textShadow: 'none',
          }}
        >
          {repeatedText}
        </motion.div>
      </div>

      {/* Central CTA Button */}
      <div className="relative z-20 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/contact">
            <motion.div
              className="group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Outer Circle - Border */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/20 flex items-center justify-center overflow-hidden cursor-pointer">
                
                {/* Background - Changes on Hover */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-primary transition-all duration-700 ease-out"></div>

                {/* Animated Border Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>

                {/* Ripple Effect on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ 
                    scale: [0, 1.2, 1.5],
                    opacity: [0.5, 0.2, 0] 
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                ></motion.div>

                {/* Content */}
                <div className="relative font-bricolage z-10 text-center px-8">
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary-content transition-colors duration-500">
                      Contact
                    </h3>
                    <p className="text-xl md:text-2xl font-semibold text-white group-hover:text-primary-content transition-colors duration-500">
                      With Us.
                    </p>
                  </motion.div>

                  {/* Arrow Icon */}
                  <motion.div
                    className="mt-4 flex justify-center"
                    animate={{
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <FaArrowRight className="text-white group-hover:text-primary-content text-2xl transition-colors duration-500" />
                  </motion.div>
                </div>

                {/* Shine Effect on Hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%', y: '-100%' }}
                  whileHover={{ x: '100%', y: '100%' }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="h-full w-full bg-gradient-to-br from-transparent via-white/20 to-transparent rotate-45"></div>
                </motion.div>
              </div>

              {/* Outer Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/30 blur-2xl opacity-0 group-hover:opacity-50 -z-10"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.7 }}
              ></motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </div>

    </section>
  );
}