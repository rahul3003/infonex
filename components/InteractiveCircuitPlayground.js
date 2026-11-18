'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ArrowRight, ArrowLeft, Play, Pause, CheckCircle, Layers } from 'lucide-react'

export default function InteractiveCircuitPlayground({ onOpenDemoModal }) {
  const [currentState, setCurrentState] = useState(0) // 0, 1, 2, 3
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const timerRef = useRef(null)

  // Auto-cycle through the 4 states every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return

    timerRef.current = setInterval(() => {
      setCurrentState(prev => (prev >= 3 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(timerRef.current)
  }, [isAutoPlaying, currentState])

  const handleSelectState = (index) => {
    setCurrentState(index)
    setIsAutoPlaying(false) // pause on interaction
  }

  const handleNext = () => {
    setCurrentState(prev => (prev >= 3 ? 0 : prev + 1))
    setIsAutoPlaying(false)
  }

  const handlePrev = () => {
    setCurrentState(prev => (prev <= 0 ? 3 : prev - 1))
    setIsAutoPlaying(false)
  }

  // Content for the 4 distinct states
  const states = [
    {
      prefix: "We engineer",
      keyword: "Hardware Logic",
      keywordColor: "text-indigo-400",
      glowColor: "rgba(29, 78, 137, 0.8)",
      themeColor: "#1D4E89",
      badge: "State 01 • Silicon Architecture",
      description: "Physical computing, transistor switching, breadboard prototyping, and embedded microcontroller architecture from the silicon up.",
      voltage: "3.3V SILICON LOGIC",
      capabilities: ["Discrete Electronics & Breadboards", "ESP32 & ARM Microcontroller Registers", "Motor Kinematics & PWM Speed Control"]
    },
    {
      prefix: "We connect",
      keyword: "Networked IoT",
      keywordColor: "text-brand-blue",
      glowColor: "rgba(0, 144, 255, 0.8)",
      themeColor: "#0090FF",
      badge: "State 02 • Cloud Telemetry",
      description: "Wireless sensor arrays, MQTT web dashboards, automated telemetry, and real-time cloud data streams connecting classroom robots to smart cities.",
      voltage: "5.0V TELEMETRY BUS",
      capabilities: ["Wi-Fi & Bluetooth Low Energy Mesh", "Real-Time Cloud IoT Dashboards", "Agricultural & Climate Telemetry"]
    },
    {
      prefix: "We train",
      keyword: "Autonomous AI",
      keywordColor: "text-brand-orange",
      glowColor: "rgba(255, 107, 0, 0.8)",
      themeColor: "#FF6B00",
      badge: "State 03 • Machine Vision",
      description: "OpenCV computer vision, neural network classification, real-time face tracking, and edge machine learning deployed directly on low-power classroom rovers.",
      voltage: "12.0V NEURAL ENGINE",
      capabilities: ["OpenCV Face & Gesture Tracking", "Edge TensorFlow Lite Inference", "Autonomous Maze & Pathfinding Models"]
    },
    {
      prefix: "We sprout",
      keyword: "Tech Seeds",
      keywordColor: "text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-400 to-yellow-200",
      glowColor: "rgba(255, 161, 20, 0.9)",
      themeColor: "#FFA114",
      badge: "State 04 • The Living Sprout",
      description: "Planting lifelong passion in every classroom. Empowering curious students to become inventive roboticists, patent creators, and tomorrow's engineering leaders.",
      voltage: "PULSE 100% COMPLETE",
      capabilities: ["Patent Incubation & Capstone Projects", "National Robotics Olympiad Mentorship", "NEP 2020 Aligned Innovation Hubs"]
    }
  ]

  const active = states[currentState]

  // Smooth blur and slide animation variants
  const textVariants = {
    initial: {
      opacity: 0,
      y: 20,
      filter: "blur(5px)"
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -18,
      filter: "blur(5px)",
      transition: {
        duration: 0.22,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section 
      id="anatomy"
      className="relative py-14 sm:py-20 md:py-28 bg-brand-navy-darker/80 border-t border-b border-brand-navy-border/60 z-10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[650px] h-60 sm:h-[450px] rounded-full blur-3xl pointer-events-none transition-colors duration-700"
        style={{
          backgroundColor: `${active.themeColor}15`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Top Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-brand-navy-border/50 pb-4 mb-8 sm:mb-12 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping shrink-0" />
            <span className="font-mono uppercase tracking-widest text-slate-300 text-[10px] sm:text-xs">
              Interactive Brand Architecture
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-slate-400">
              STATE 0{currentState + 1} OF 04
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy-darkest border border-brand-navy-border text-[11px] text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full transition-colors duration-300" style={{ backgroundColor: active.themeColor }} />
              <span>{active.voltage}</span>
            </div>
          </div>
        </div>

        {/* 50/50 Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ========================================================
              LEFT COLUMN: DYNAMIC HEADLINE & PARAGRAPH
              ======================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Active Stage Badge */}
            <div className="mb-3 sm:mb-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={active.badge}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold font-mono tracking-wider border shadow-sm"
                  style={{
                    backgroundColor: `${active.themeColor}20`,
                    borderColor: `${active.themeColor}50`,
                    color: active.themeColor === "#FFA114" ? "#FFB84D" : active.themeColor
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>{active.badge}</span>
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Massive Bold Headline: "We engineer [dynamic_word]." */}
            <div className="min-h-[90px] sm:min-h-[130px] md:min-h-[150px] flex items-center mb-3 sm:mb-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.keyword}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full"
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-display">
                    {active.prefix}{" "}
                    <span 
                      className={`${active.keywordColor} block sm:inline`}
                      style={{
                        textShadow: `0 0 35px ${active.glowColor}`
                      }}
                    >
                      {active.keyword}.
                    </span>
                  </h2>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dynamic Paragraph below Headline */}
            <div className="min-h-[65px] sm:min-h-[80px] mb-5 sm:mb-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active.description}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-xl"
                >
                  {active.description}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Capabilities Badges */}
            <div className="space-y-2 mb-6 sm:mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentState}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap gap-2"
                >
                  {active.capabilities.map((cap, i) => (
                    <span 
                      key={i}
                      className="px-2.5 sm:px-3 py-1 rounded-lg bg-brand-navy-surface border border-brand-navy-border/70 text-[11px] sm:text-xs text-slate-300 font-medium"
                    >
                      {cap}
                    </span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={onOpenDemoModal}
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white font-bold text-xs sm:text-sm shadow-lg shadow-brand-orange/25 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer w-fit"
              >
                <span>Book Free Demo Lab</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: ABSTRACT VISUAL (MORPHING CIRCUIT & SPROUT)
              ======================================================== */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            
            {/* Morphing ambient color backdrop */}
            <div
              className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-[100px] pointer-events-none transition-colors duration-700"
              style={{
                backgroundColor: `${active.themeColor}25`
              }}
            />

            {/* Visual Glass Stage */}
            <div className="relative p-5 sm:p-8 rounded-3xl bg-brand-navy-darkest/95 border border-brand-navy-border/90 shadow-2xl backdrop-blur-2xl flex flex-col items-center justify-center overflow-hidden w-full max-w-md mx-auto">
              
              {/* Circuit Grid Canvas Background */}
              <div className="absolute inset-0 opacity-15 circuit-grid pointer-events-none" />

              {/* The Central Abstract Infonex Circuit SVG */}
              <svg
                width="220"
                height="260"
                viewBox="0 0 200 250"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-2xl overflow-visible max-h-[200px] sm:max-h-[250px]"
              >
                <defs>
                  <linearGradient id="splitLeafGrad" x1="175" y1="48" x2="210" y2="10" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FF6B00" />
                    <stop offset="60%" stopColor="#FFA043" />
                    <stop offset="100%" stopColor="#FFC837" />
                  </linearGradient>

                  <filter id="splitCircuitGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Base Ghost Tracks (Inactive circuit rails) */}
                <path
                  d="M 40 207 L 40 76 L 135 180 L 135 53"
                  stroke="#1D4E89"
                  strokeWidth="7"
                  strokeOpacity="0.18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M 60 207 L 60 76 L 155 180 L 155 47"
                  stroke="#0090FF"
                  strokeWidth="7"
                  strokeOpacity="0.18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M 80 207 L 80 76 L 175 180 L 175 52"
                  stroke="#FF6B00"
                  strokeWidth="7.5"
                  strokeOpacity="0.18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />

                {/* Bottom Solder Pads */}
                <circle
                  cx="40"
                  cy="215"
                  r="8"
                  stroke="#1D4E89"
                  strokeWidth="4"
                  fill={currentState >= 0 ? "#1D4E89" : "#050D1A"}
                  className="transition-colors duration-400"
                />
                <circle
                  cx="60"
                  cy="215"
                  r="8"
                  stroke="#0090FF"
                  strokeWidth="4"
                  fill={currentState >= 1 ? "#0090FF" : "#050D1A"}
                  className="transition-colors duration-400"
                />
                <circle
                  cx="80"
                  cy="215"
                  r="8"
                  stroke="#FF6B00"
                  strokeWidth="4"
                  fill={currentState >= 2 ? "#FF6B00" : "#050D1A"}
                  className="transition-colors duration-400"
                />

                {/* Top Solder Pads */}
                <circle
                  cx="135"
                  cy="46"
                  r="7"
                  stroke="#1D4E89"
                  strokeWidth="3.5"
                  fill={currentState >= 0 ? "#1D4E89" : "#050D1A"}
                  className="transition-colors duration-400"
                />
                <circle
                  cx="155"
                  cy="40"
                  r="7"
                  stroke="#0090FF"
                  strokeWidth="3.5"
                  fill={currentState >= 1 ? "#0090FF" : "#050D1A"}
                  className="transition-colors duration-400"
                />

                {/* Trace 1 Path */}
                <motion.path
                  d="M 40 207 L 40 76 L 135 180 L 135 53"
                  stroke="#1D4E89"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: currentState >= 0 ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                {/* Trace 2 Path */}
                <motion.path
                  d="M 60 207 L 60 76 L 155 180 L 155 47"
                  stroke="#0090FF"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  filter="url(#splitCircuitGlow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: currentState >= 1 ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                {/* Trace 3 Path */}
                <motion.path
                  d="M 80 207 L 80 76 L 175 180 L 175 52"
                  stroke="#FF6B00"
                  strokeWidth="7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  filter="url(#splitCircuitGlow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: currentState >= 2 ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                {/* Sprouting Tech Seed Leaf (State 4 Culmination) */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: currentState >= 3 ? 1 : 0,
                    rotate: currentState >= 3 ? 0 : -35,
                    opacity: currentState >= 3 ? 1 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  style={{ transformOrigin: "175px 52px" }}
                >
                  <path
                    d="M 175 52 C 170 30 185 10 216 12 C 218 36 200 55 175 52 Z"
                    fill="url(#splitLeafGrad)"
                    stroke="#FF8A00"
                    strokeWidth="2"
                    className="drop-shadow-lg"
                  />
                  <path
                    d="M 175 52 Q 192 34 216 12"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </motion.g>
              </svg>

              {/* Status Label on Visual Box */}
              <div className="mt-4 pt-3 border-t border-brand-navy-border/60 w-full flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>STATE VISUALIZATION</span>
                <span className="font-bold" style={{ color: active.themeColor }}>
                  {active.keyword.toUpperCase()}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================
            BOTTOM PROGRESS INDICATOR (4 HORIZONTAL DASHES)
            ======================================================== */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-brand-navy-border/50 pt-5 sm:pt-6 mt-8 sm:mt-12 gap-4">
          
          {/* Controls & State indicator */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-brand-navy-surface border border-brand-navy-border text-slate-300 hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
              title="Previous State"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-brand-navy-surface border border-brand-navy-border text-slate-300 hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
              title="Next State"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-2 rounded-xl bg-brand-navy-surface border border-brand-navy-border text-slate-300 hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
              title={isAutoPlaying ? "Pause autoplay" : "Resume autoplay"}
            >
              {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <span className="text-[11px] font-mono text-slate-400 ml-1">
              {currentState + 1} / 4
            </span>
          </div>

          {/* 4 Horizontal Dashes Indicator */}
          <div className="flex items-center gap-2 sm:gap-3">
            {states.map((st, idx) => {
              const isActive = currentState === idx
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectState(idx)}
                  className="group py-2 cursor-pointer focus:outline-none"
                  title={`Jump to ${st.keyword}`}
                >
                  <motion.div
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'w-10 sm:w-16 shadow-lg' 
                        : 'w-6 sm:w-8 bg-slate-800 hover:bg-slate-700'
                    }`}
                    style={{
                      backgroundColor: isActive ? st.themeColor : undefined,
                      boxShadow: isActive ? `0 0 12px ${st.themeColor}80` : undefined
                    }}
                    layout
                  />
                </button>
              )
            })}
          </div>

          {/* Hint */}
          <div className="text-[11px] font-mono text-slate-400">
            Click any dash to explore
          </div>

        </div>

      </div>
    </section>
  )
}
