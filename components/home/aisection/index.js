'use client';
import { useRef } from 'react';
import { useAICanvas } from './useAICanvas';
import { motion } from 'framer-motion';
import { FaBrain, FaCode, FaRocket } from 'react-icons/fa';
import { LuSparkles } from 'react-icons/lu';

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '150+', label: 'Projects Delivered' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'AI-Powered Support' },
];

const pillars = [
  {
    icon: FaBrain,
    title: 'AI-First Thinking',
    desc: 'We embed intelligence at every layer — from architecture decisions to UX interactions.',
  },
  {
    icon: FaCode,
    title: 'Engineering Excellence',
    desc: 'Clean, scalable code built on battle-tested patterns and modern toolchains.',
  },
  {
    icon: FaRocket,
    title: 'Velocity at Scale',
    desc: 'Rapid iteration cycles without sacrificing quality, security or performance.',
  },
];

export default function AISection() {
  const canvasRef = useRef(null);
  useAICanvas(canvasRef);

  return (
    <section
      id="ai-section"
      className="relative overflow-hidden min-h-[640px] py-24 bg-base-100 transition-colors duration-300"
    >
      {/* ── Neural network canvas ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      />

      {/* ── Subtle vignette so text pops ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-base-100/60 via-transparent to-base-100/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-base-100/80 via-transparent to-base-100/80 pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-semibold font-bricolage tracking-wide">
            <LuSparkles className="w-4 h-4" />
            Intelligence Meets Execution
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center font-bricolage text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6"
        >
          Building Tomorrow&quot;s{' '}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Technology
          </span>{' '}
          Today
        </motion.h2>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg md:text-xl text-base-content/65 max-w-2xl mx-auto mb-16"
        >
          At BPX Innovations, we engineer AI-powered systems that help modern 
          businesses scale intelligently — from first commit to global deployment.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-base-200/60 backdrop-blur-sm border border-base-content/8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl font-bold font-bricolage text-primary mb-1">
                {s.value}
              </div>
              <div className="text-sm text-base-content/55 font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="group relative p-8 rounded-2xl bg-base-200/50 backdrop-blur-sm border border-base-content/8 hover:border-primary/40 hover:bg-base-200/80 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Corner glow */}
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-500 blur-xl" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bricolage text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-base-content/65 text-sm leading-relaxed">{p.desc}</p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}