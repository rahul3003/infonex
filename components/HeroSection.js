'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react'
import LogoAnimated from './LogoAnimated'
import ParallaxTiltCard from './ParallaxTiltCard'
import HeroFlippingGrid from './HeroFlippingGrid'

// The Five Spark Learning Zones (Yantra, Shakti, Tarka, Chetana, Srishti)
const learningZones = [
  {
    id: 1,
    name: 'Yantra',
    meaning: 'machine',
    desc: 'Hands-on building and mechanisms',
    color: '#E5A00D', // Ochre / Yellow
    glow: 'rgba(229, 160, 13, 0.45)',
    border: 'rgba(229, 160, 13, 0.4)'
  },
  {
    id: 2,
    name: 'Shakti',
    meaning: 'power',
    desc: 'Circuits and working models',
    color: '#FF6B00', // Vibrant Orange
    glow: 'rgba(255, 107, 0, 0.45)',
    border: 'rgba(255, 107, 0, 0.4)'
  },
  {
    id: 3,
    name: 'Tarka',
    meaning: 'logic',
    desc: 'From visual to written programming',
    color: '#E11D48', // Berry Magenta / Crimson
    glow: 'rgba(225, 29, 72, 0.45)',
    border: 'rgba(225, 29, 72, 0.4)'
  },
  {
    id: 4,
    name: 'Chetana',
    meaning: 'awareness',
    desc: 'Sensing and acting together',
    color: '#0090FF', // Cyan / Electric Blue
    glow: 'rgba(0, 144, 255, 0.45)',
    border: 'rgba(0, 144, 255, 0.4)'
  },
  {
    id: 5,
    name: 'Srishti',
    meaning: 'creation',
    desc: 'Integrated projects and systems',
    color: '#10B981', // Emerald Green
    glow: 'rgba(16, 185, 129, 0.45)',
    border: 'rgba(16, 185, 129, 0.4)'
  }
]

export default function HeroSection({ onOpenDemoModal }) {
  const [formationKey, setFormationKey] = useState(0)
  const [activeZoneIndex, setActiveZoneIndex] = useState(0)
  const heroRef = useRef(null)

  // Auto-cycle through the 5 zones every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveZoneIndex(prev => (prev + 1) % learningZones.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const currentZone = learningZones[activeZoneIndex]

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
      className="relative min-h-[calc(100vh-94px)] flex items-center py-8 sm:py-12 lg:py-0 overflow-hidden z-10 bg-white"
    >
      {/* Interactive 3D Flipping AI, ML & Robotics Grid Background on White Theme */}
      <HeroFlippingGrid />

      {/* Background ambient lighting blobs */}
      <div className="absolute top-10 left-1/4 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-orange-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-36 bg-gradient-to-r from-blue-50 via-orange-50 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-6 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Messaging with Parallax Shift */}
          <motion.div 
            style={{ y: textY, opacity }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start will-change-transform"
          >
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/90 text-blue-700 text-[11px] sm:text-xs font-semibold shadow-sm mb-4 sm:mb-6 max-w-full">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping shrink-0" />
              <span className="truncate">Bangalore's Premier STEM & Robotics Partner</span>
              <span className="text-blue-300 hidden sm:inline">•</span>
              <span className="text-slate-600 hidden sm:inline">NEP 2020 Ready</span>
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6 font-display">
              Hands-On <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-500 to-indigo-600">Robotics</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-500 to-amber-600">AI</span> & <span className="text-slate-900 underline decoration-brand-blue/35 decoration-wavy">STEM Labs</span> for Schools
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl leading-relaxed font-normal">
              We partner with forward-thinking schools and colleges to establish turnkey innovation labs, deliver experiential grade-wise curriculum, and empower students to build real-world autonomous robots, IoT devices, and AI models.
            </p>

            {/* Simple Animated 5 Wordings with Clean White Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
              <div 
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border-2 shadow-md transition-colors duration-500 backdrop-blur-md bg-white"
                style={{
                  borderColor: currentZone.color,
                  boxShadow: `0 4px 20px -2px ${currentZone.glow}`
                }}
              >
                <span 
                  className="w-2 h-2 rounded-full animate-ping shrink-0" 
                  style={{ backgroundColor: currentZone.color }} 
                />
                <div className="h-6 overflow-hidden flex items-center min-w-[170px] sm:min-w-[190px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentZone.name}
                      initial={{ y: 16, opacity: 0, filter: 'blur(4px)' }}
                      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                      exit={{ y: -16, opacity: 0, filter: 'blur(4px)' }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="inline-flex items-baseline gap-2 font-display"
                    >
                      <span className="font-extrabold text-sm sm:text-base tracking-wide" style={{ color: currentZone.color }}>
                        {currentZone.id}. {currentZone.name}
                      </span>
                      <span className="text-slate-500 italic text-xs sm:text-sm font-serif font-medium">
                        ({currentZone.meaning})
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* 5 Minimalist Step Indicators */}
              <div className="flex items-center gap-1.5">
                {learningZones.map((zone, idx) => {
                  const isActive = activeZoneIndex === idx
                  return (
                    <button
                      key={zone.id}
                      onClick={() => setActiveZoneIndex(idx)}
                      className="group py-1 cursor-pointer focus:outline-none"
                      title={`${zone.name} (${zone.meaning})`}
                    >
                      <div
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          isActive ? 'w-7 sm:w-9' : 'w-2 bg-slate-200 group-hover:bg-slate-300'
                        }`}
                        style={{
                          backgroundColor: isActive ? zone.color : undefined
                        }}
                      />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* The 3 Signature Pillars Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 w-full">
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full border border-blue-300 bg-blue-50 text-blue-900 font-bold text-xs sm:text-sm shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-blue animate-pulse" />
                <span>Robotics</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full border border-orange-300 bg-orange-50 text-orange-950 font-bold text-xs sm:text-sm shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-orange animate-pulse" />
                <span>AI & Coding</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full border border-teal-300 bg-teal-50 text-teal-950 font-bold text-xs sm:text-sm shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-teal-500 animate-pulse" />
                <span>CSL - Composite Skill Lab</span>
              </motion.div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenDemoModal}
                className="px-5 py-3 sm:px-7 sm:py-4 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white font-bold text-xs sm:text-sm md:text-base shadow-xl shadow-brand-orange/30 flex items-center justify-center gap-2.5 group relative overflow-hidden cursor-pointer"
              >
                <span className="relative z-10">Book a Free School Lab Demo</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="/courses"
                className="px-5 py-3 sm:px-6 sm:py-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm md:text-base shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Explore Curriculum</span>
              </motion.a>
            </div>

            {/* Key trust bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-5 border-t border-slate-200 text-xs sm:text-sm text-slate-700 w-full">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Turnkey ATL Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Teacher Training</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">NEP 2020 Aligned</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Showcase wrapped in 3D Parallax Tilt Card (White Apple/Linear Aesthetic) */}
          <motion.div 
            style={{ y: cardY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative mt-4 lg:mt-0 will-change-transform"
          >
            <ParallaxTiltCard 
              maxTilt={10} 
              className="rounded-2xl sm:rounded-3xl bg-white/95 border border-slate-200/90 shadow-2xl shadow-slate-300/50 p-4 sm:p-6 md:p-8 overflow-hidden backdrop-blur-xl"
            >
              {/* Glow accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-bl-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-blue/10 rounded-tr-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-200/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[10px] sm:text-xs font-mono text-slate-500 ml-1.5">infonex-circuit.sys</span>
                </div>

                <button
                  onClick={() => setFormationKey(prev => prev + 1)}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-950 text-[11px] sm:text-xs border border-slate-200 transition-colors cursor-pointer"
                  title="Re-run Formation Animation"
                >
                  <RefreshCw className="w-3 h-3 text-brand-orange shrink-0" />
                  <span>Replay</span>
                </button>
              </div>

              {/* Central Logo Animated Canvas */}
              <div key={formationKey} className="py-4 sm:py-6 flex flex-col items-center justify-center">
                <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50/90 border border-slate-200/80 shadow-inner flex flex-col items-center w-full">
                  <LogoAnimated size="hero" showText={true} showTagline={true} interactive={true} theme="light" />

                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className="text-[11px] sm:text-xs text-slate-500 text-center mt-2.5 sm:mt-3 max-w-xs leading-relaxed"
                  >
                    Tap or hover on the circuit tracks to trigger electron pulse waves culminating in the <span className="text-brand-orange font-bold">Tech Seed</span> sprout.
                  </motion.p>
                </div>
              </div>

              {/* Quick specs card below logo */}
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="font-bold text-slate-900 text-sm sm:text-base font-display">120+</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500">Partner Schools</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="font-bold text-brand-blue text-sm sm:text-base font-display">50k+</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500">Students Active</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="font-bold text-brand-orange text-sm sm:text-base font-display">100%</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500">Practical Labs</div>
                </div>
              </div>
            </ParallaxTiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
