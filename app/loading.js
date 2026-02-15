'use client';
import { useRef, useEffect, useState } from 'react';


export default function Loading() {


  // Animated loading text dots
  const [dots, setDots] = useState('');
  useEffect(() => {
    const t = setInterval(() => {
      setDots(d => d.length >= 3 ? '' : d + '.');
    }, 420);
    return () => clearInterval(t);
  }, []);

  // Progress bar simulation
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setProgress(p => {
        if (p >= 95) return p; // stall near end until page resolves
        return p + (Math.random() * 4);
      });
    }, 120);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-base-100 flex flex-col items-center justify-center overflow-hidden transition-colors duration-300">

   

      {/* ── Vignette ── */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, var(--fallback-b1,oklch(var(--b1))) 100%)'
        }}
      />

      {/* ── Center content ── */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6">

        {/* Logo mark */}
        <div className="relative flex items-center justify-center">
          {/* Pulsing rings */}
          <div className="absolute w-24 h-24 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: '2s' }} />
          <div className="absolute w-16 h-16 rounded-full border border-primary/30 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.4s' }} />
          {/* Logo circle */}
          <div className="w-20 h-20 rounded-2xl bg-primary/10 border-2 border-primary/40 flex items-center justify-center backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.1)]">
            <span className="font-bricolage font-black text-2xl text-primary tracking-tight">BPX</span>
          </div>
        </div>

        {/* Company name */}
        <div className="text-center">
          <h1 className="font-bricolage font-bold text-2xl md:text-3xl tracking-tight mb-1">
            BPX Innovations
          </h1>
      
        </div>

        {/* Progress bar */}
        <div className="w-64 md:w-80">
          <div className="flex justify-between text-xs text-base-content/40 font-mono mb-2">
            <span>Loading</span>
            <span>{Math.min(Math.round(progress), 99)}%</span>
          </div>
          <div className="h-1 w-full bg-base-content/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary/70 via-primary to-primary/70 rounded-full transition-all duration-150 ease-out shadow-[0_0_8px_rgba(0,0,0,0.1)]"
              style={{ width: `${Math.min(progress, 99)}%` }}
            />
          </div>
        </div>

      

      </div>

  


    </div>
  );
}


