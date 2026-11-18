'use client'

import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, CheckCircle2, RefreshCw, ChevronRight } from 'lucide-react'
import LogoAnimated from './LogoAnimated'
import ParallaxTiltCard from './ParallaxTiltCard'

export default function HeroSection({ onOpenDemoModal }) {
  const [formationKey, setFormationKey] = useState(0)
  const heroRef = useRef(null)

  // Scroll parallax driven values
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 25 })
  const textY = useTransform(smoothProgress, [0, 1], [0, 70])
  const cardY = useTransform(smoothProgress, [0, 1], [0, -50])
  const opacity = useTransform(smoothProgress, [0, 0.85], [1, 0.2])

  return (
    <section 
      ref={heroRef}
      className="relative pt-4 pb-14 sm:py-16 md:py-24 overflow-hidden circuit-grid z-10"
    >
      {/* Background ambient lighting blobs */}
      <div className="absolute top-10 left-1/4 w-60 sm:w-96 h-60 sm:h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-36 bg-gradient-to-r from-brand-blue/10 via-brand-orange/15 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Core Messaging with Parallax Shift */}
          <motion.div 
            style={{ y: textY, opacity }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start will-change-transform"
          >
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-brand-navy-surface border border-brand-blue/30 text-brand-blue text-[11px] sm:text-xs font-semibold shadow-inner mb-4 sm:mb-6 max-w-full">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping shrink-0" />
              <span className="truncate">Bangalore's Premier STEM & Robotics Partner</span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-slate-300 hidden sm:inline">NEP 2020 Ready</span>
            </div>

            {/* Core Poster Motto */}
            <div className="mb-2">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-brand-orange font-bold text-xs sm:text-sm md:text-base tracking-widest uppercase mb-1 font-display"
              >
                Planting Tech Seeds in Every Classroom
              </motion.div>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.25] sm:leading-[1.15] mb-4 sm:mb-6 font-display">
              Hands-On <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-300 to-white">Robotics</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-400 to-yellow-200">AI</span> & <span className="text-white underline decoration-brand-blue/40 decoration-wavy">STEM Labs</span> for Schools
            </h1>

            <p className="text-xs sm:text-base md:text-lg text-slate-300 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
              We partner with forward-thinking schools and colleges to establish turnkey innovation labs, deliver experiential grade-wise curriculum, and empower students to build real-world autonomous robots, IoT devices, and AI models.
            </p>

            {/* The 3 Signature Pillars matching the Flyer Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 w-full">
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full border-2 border-brand-blue bg-brand-navy-surface/90 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-blue animate-pulse" />
                <span>Robotics</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full border-2 border-brand-orange bg-brand-navy-surface/90 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-orange animate-pulse" />
                <span>AI & Coding</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full border-2 border-brand-blue bg-brand-navy-surface/90 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>STEM Labs</span>
              </motion.div>
            </div>

            {/* CTAs with micro magnetic physics */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenDemoModal}
                className="px-5 py-3 sm:px-7 sm:py-4 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white font-bold text-xs sm:text-sm md:text-base shadow-xl shadow-brand-orange/30 flex items-center justify-center gap-2.5 group relative overflow-hidden"
              >
                <span className="relative z-10">Book a Free School Lab Demo</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="#estimator"
                className="px-5 py-3 sm:px-6 sm:py-4 rounded-xl bg-brand-navy-surface hover:bg-brand-navy-light text-slate-200 hover:text-white font-semibold text-xs sm:text-sm md:text-base border border-brand-navy-border hover:border-brand-blue/50 transition-all flex items-center justify-center gap-2"
              >
                <span>Calculate Lab Cost</span>
                <ChevronRight className="w-4 h-4 text-brand-blue" />
              </motion.a>
            </div>

            {/* Key trust bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-5 border-t border-brand-navy-border/60 text-xs sm:text-sm text-slate-300 w-full">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="text-xs sm:text-sm">Turnkey ATL Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                <span className="text-xs sm:text-sm">Teacher Training</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm">Zero Hardware Downtime</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Showcase wrapped in 3D Parallax Tilt (Fragment.im / Sobra.be style) */}
          <motion.div 
            style={{ y: cardY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative mt-4 lg:mt-0 will-change-transform"
          >
            <ParallaxTiltCard 
              maxTilt={10} 
              className="rounded-2xl sm:rounded-3xl glass-card p-4 sm:p-6 md:p-8 border border-brand-navy-border/80 shadow-2xl overflow-hidden"
            >
              {/* Glow accents */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-brand-orange/20 rounded-bl-full blur-xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-brand-blue/20 rounded-tr-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-brand-navy-border/60">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[10px] sm:text-xs font-mono text-slate-400 ml-1.5">infonex-circuit.sys</span>
                </div>

                <button
                  onClick={() => setFormationKey(prev => prev + 1)}
                  className="flex items-center gap-1 px-2 py-1 rounded-lg bg-brand-navy-surface hover:bg-brand-navy-light text-slate-300 hover:text-white text-[11px] sm:text-xs border border-brand-navy-border transition-colors cursor-pointer"
                  title="Re-run Formation Animation"
                >
                  <RefreshCw className="w-3 h-3 text-brand-orange shrink-0" />
                  <span>Replay</span>
                </button>
              </div>

              {/* Central Logo Animated Canvas */}
              <div key={formationKey} className="py-4 sm:py-6 flex flex-col items-center justify-center">
                <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-brand-navy-darkest/80 border border-brand-navy-border/50 shadow-inner flex flex-col items-center w-full">
                  <LogoAnimated size="hero" showText={true} showTagline={true} interactive={true} />

                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className="text-[11px] sm:text-xs text-slate-400 text-center mt-2.5 sm:mt-3 max-w-xs leading-relaxed"
                  >
                    Tap or hover on the circuit tracks to trigger electron pulse waves culminating in the <span className="text-brand-orange font-semibold">Tech Seed</span> sprout.
                  </motion.p>
                </div>
              </div>

              {/* Quick specs card below logo */}
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 sm:p-2.5 rounded-xl bg-brand-navy-surface/70 border border-brand-navy-border">
                  <div className="font-bold text-white text-sm sm:text-base font-display">120+</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400">Partner Schools</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-brand-navy-surface/70 border border-brand-navy-border">
                  <div className="font-bold text-brand-blue text-sm sm:text-base font-display">50k+</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400">Students Active</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-brand-navy-surface/70 border border-brand-navy-border">
                  <div className="font-bold text-brand-orange text-sm sm:text-base font-display">100%</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-400">Practical Labs</div>
                </div>
              </div>
            </ParallaxTiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
