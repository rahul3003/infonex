'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, ArrowRight, ArrowLeft, Play, Pause, 
  Layers, Cpu, Wifi, Eye, Rocket, RefreshCw, Zap, Box 
} from 'lucide-react'

export default function InteractiveCircuitPlayground({ onOpenDemoModal }) {
  const [currentState, setCurrentState] = useState(0) // 0, 1, 2, 3
  const [hoveredCell, setHoveredCell] = useState(null)
  const [flippedCells, setFlippedCells] = useState({})
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const timerRef = useRef(null)

  // Auto-cycle through the 4 states every 5.5 seconds (only when not interacting)
  useEffect(() => {
    if (!isAutoPlaying || hoveredCell !== null) return

    timerRef.current = setInterval(() => {
      setCurrentState(prev => (prev >= 3 ? 0 : prev + 1))
    }, 5500)

    return () => clearInterval(timerRef.current)
  }, [isAutoPlaying, currentState, hoveredCell])

  const handleSelectState = (index) => {
    setCurrentState(index)
    setIsAutoPlaying(false) // pause on manual interaction
  }

  const handleNext = () => {
    setCurrentState(prev => (prev >= 3 ? 0 : prev + 1))
    setIsAutoPlaying(false)
  }

  const handlePrev = () => {
    setCurrentState(prev => (prev <= 0 ? 3 : prev - 1))
    setIsAutoPlaying(false)
  }

  const handleCellClick = (index) => {
    setFlippedCells(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
    handleSelectState(index)
  }

  const handleResetFlips = () => {
    setFlippedCells({})
  }

  // The 4 Interactive Brand Architecture Pillars
  const states = [
    {
      prefix: "We engineer",
      keyword: "Hardware Logic",
      keywordColor: "text-indigo-400",
      glowColor: "rgba(29, 78, 137, 0.8)",
      themeColor: "#1D4E89",
      accentColor: "#38BDF8",
      badge: "State 01 • Silicon Architecture",
      description: "Physical computing, transistor switching, breadboard prototyping, and embedded microcontroller architecture from the silicon up.",
      voltage: "3.3V SILICON LOGIC",
      capabilities: ["Discrete Electronics & Breadboards", "ESP32 & ARM Microcontroller Registers", "Motor Kinematics & PWM Speed Control"],
      cellTitle: "Silicon & Hardware Logic",
      cellSubtitle: "3.3V Logic • Transistors & Registers",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      specs: [
        { label: "Core Processing", val: "ARM Cortex-M4 @ 240MHz" },
        { label: "Logic Bus", val: "3.3V CMOS Registers" },
        { label: "I/O Multiplex", val: "36 Programmable GPIOs" },
        { label: "Prototyping", val: "Solderless Breadboards" }
      ]
    },
    {
      prefix: "We connect",
      keyword: "Networked IoT",
      keywordColor: "text-brand-blue",
      glowColor: "rgba(0, 144, 255, 0.8)",
      themeColor: "#0090FF",
      accentColor: "#60A5FA",
      badge: "State 02 • Cloud Telemetry",
      description: "Wireless sensor arrays, MQTT web dashboards, automated telemetry, and real-time cloud data streams connecting classroom robots to smart cities.",
      voltage: "5.0V TELEMETRY BUS",
      capabilities: ["Wi-Fi & Bluetooth Low Energy Mesh", "Real-Time Cloud IoT Dashboards", "Agricultural & Climate Telemetry"],
      cellTitle: "Networked IoT & Cloud",
      cellSubtitle: "5.0V Bus • Wireless Mesh & Dashboards",
      icon: Wifi,
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1200&q=80",
      specs: [
        { label: "Telemetry Protocol", val: "MQTT over TLS v1.3" },
        { label: "Mesh Frequency", val: "2.4GHz Wi-Fi + BLE 5.2" },
        { label: "Cloud Sampling", val: "< 15ms Roundtrip" },
        { label: "Sensor Array", val: "Temp, Humidity, Soil, Lux" }
      ]
    },
    {
      prefix: "We train",
      keyword: "Autonomous AI",
      keywordColor: "text-brand-orange",
      glowColor: "rgba(255, 107, 0, 0.8)",
      themeColor: "#FF6B00",
      accentColor: "#F59E0B",
      badge: "State 03 • Machine Vision",
      description: "OpenCV computer vision, neural network classification, real-time face tracking, and edge machine learning deployed directly on low-power classroom rovers.",
      voltage: "12.0V NEURAL ENGINE",
      capabilities: ["OpenCV Face & Gesture Tracking", "Edge TensorFlow Lite Inference", "Autonomous Maze & Pathfinding Models"],
      cellTitle: "Autonomous AI & Vision",
      cellSubtitle: "12.0V Engine • Edge Neural Models",
      icon: Eye,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
      specs: [
        { label: "Vision Pipeline", val: "OpenCV + MobileNet v3" },
        { label: "Edge Inference", val: "60 FPS Neural Tensor" },
        { label: "Autonomous Drive", val: "PID Closed-Loop Rover" },
        { label: "Model Accuracy", val: "98.4% Classification" }
      ]
    },
    {
      prefix: "We sprout",
      keyword: "Tech Seeds",
      keywordColor: "text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-400 to-yellow-200",
      glowColor: "rgba(255, 161, 20, 0.9)",
      themeColor: "#FFA114",
      accentColor: "#34D399",
      badge: "State 04 • The Living Sprout",
      description: "Planting lifelong passion in every classroom. Empowering curious students to become inventive roboticists, patent creators, and tomorrow's engineering leaders.",
      voltage: "PULSE 100% COMPLETE",
      capabilities: ["Patent Incubation & Capstone Projects", "National Robotics Olympiad Mentorship", "NEP 2020 Aligned Innovation Hubs"],
      cellTitle: "Living Tech Seeds",
      cellSubtitle: "Patents • Young Inventors & Olympiads",
      icon: Rocket,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      specs: [
        { label: "School Deployments", val: "120+ Partner Institutions" },
        { label: "Active Innovators", val: "50,000+ Young Creators" },
        { label: "Curriculum Standard", val: "NEP 2020 & ATL Ready" },
        { label: "Capstone Goal", val: "Patents & Science Fairs" }
      ]
    }
  ]

  const active = states[currentState]
  // On cursor point (hover) it must show that cell's image in the card background
  const displayedIndex = hoveredCell !== null ? hoveredCell : currentState
  const displayedState = states[displayedIndex]

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
              RIGHT COLUMN: INTERACTIVE 3D CUBIC MATRIX & CARD SHOWCASE
              Instead of the static logo SVG, displays cubic flip cells.
              On cursor point (hover), card background displays that cell's image!
              On click, cell performs a 3D cubic flip revealing specs & telemetry!
              ======================================================== */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            
            {/* Morphing ambient color backdrop */}
            <div
              className="absolute w-72 sm:w-[500px] h-72 sm:h-[500px] rounded-full blur-[100px] pointer-events-none transition-colors duration-700"
              style={{
                backgroundColor: `${displayedState.themeColor}30`
              }}
            />

            {/* Visual Glass Stage Card */}
            <div className="relative p-4 sm:p-6 rounded-3xl bg-brand-navy-darkest/95 border border-brand-navy-border/90 shadow-2xl backdrop-blur-2xl flex flex-col justify-between overflow-hidden w-full max-w-lg lg:max-w-xl mx-auto min-h-[460px] sm:min-h-[500px]">
              
              {/* ============================================================
                  DYNAMIC CARD BACKGROUND IMAGE LAYER:
                  "in card in background for on cursor point it must show that cell image"
                  Smoothly crossfades to that hovered/pointed cell's high-res image!
                  ============================================================ */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl z-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={displayedIndex}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 0.38, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${displayedState.image})`
                    }}
                  />
                </AnimatePresence>

                {/* Dark technical vignette masks to keep cells and typography 100% crisp */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-[#050D1A]/80 to-[#050D1A]/60" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,#050D1A_90%)]" />
                <div className="absolute inset-0 opacity-15 circuit-grid" />
              </div>

              {/* Card Header Toolbar */}
              <div className="relative z-10 flex items-center justify-between pb-3 mb-3 border-b border-brand-navy-border/70">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 ml-1">
                    brand-matrix.sys
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span 
                    className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider border"
                    style={{
                      backgroundColor: `${displayedState.themeColor}25`,
                      borderColor: `${displayedState.themeColor}60`,
                      color: displayedState.themeColor === "#FFA114" ? "#FFB84D" : displayedState.themeColor
                    }}
                  >
                    {hoveredCell !== null ? `HOVERED: STATE 0${displayedIndex + 1}` : `ACTIVE: STATE 0${displayedIndex + 1}`}
                  </span>

                  {Object.keys(flippedCells).length > 0 && (
                    <button
                      onClick={handleResetFlips}
                      className="flex items-center gap-1 px-2 py-0.5 rounded bg-brand-navy-surface hover:bg-brand-navy-light text-slate-300 text-[10px] font-mono border border-brand-navy-border transition-colors cursor-pointer"
                      title="Reset flipped cells"
                    >
                      <RefreshCw className="w-2.5 h-2.5 text-brand-orange" />
                      <span>Reset</span>
                    </button>
                  )}
                </div>
              </div>

              {/* ============================================================
                  2x2 CUBIC CELLS GRID:
                  "each sell must have cubeic click lip on in card"
                  3D perspective container with flippable cubic cards
                  ============================================================ */}
              <div 
                className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 my-auto py-1"
                style={{ perspective: '1400px' }}
              >
                {states.map((st, idx) => {
                  const isActive = currentState === idx
                  const isHovered = hoveredCell === idx
                  const isFlipped = !!flippedCells[idx]
                  const Icon = st.icon

                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredCell(idx)}
                      onMouseLeave={() => setHoveredCell(null)}
                      onClick={() => handleCellClick(idx)}
                      className="relative h-[160px] sm:h-[175px] rounded-2xl cursor-pointer select-none group"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* 3D Flippable Cubic Container */}
                      <motion.div
                        animate={{ 
                          rotateY: isFlipped ? 180 : 0,
                          scale: isHovered ? 1.025 : (isActive ? 1.015 : 1),
                        }}
                        transition={{ 
                          duration: 0.6, 
                          ease: [0.16, 1, 0.3, 1] 
                        }}
                        className="w-full h-full relative"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        {/* ----------------------------------------------------
                            FRONT FACE: The Cell Preview with Image & Glow
                            ---------------------------------------------------- */}
                        <div
                          className={`absolute inset-0 rounded-2xl p-3 flex flex-col justify-between overflow-hidden border backdrop-blur-md transition-all duration-300 ${
                            isActive 
                              ? 'shadow-2xl' 
                              : 'hover:border-slate-500'
                          }`}
                          style={{
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            borderColor: isActive ? st.themeColor : (isHovered ? `${st.themeColor}90` : 'rgba(30, 41, 59, 0.8)'),
                            boxShadow: isActive ? `0 0 25px ${st.themeColor}45` : undefined,
                            backgroundColor: '#071326E6'
                          }}
                        >
                          {/* Subtle photographic backdrop thumbnail */}
                          <img
                            src={st.image}
                            alt={st.cellTitle}
                            className="absolute inset-0 w-full h-full object-cover object-center opacity-30 mix-blend-screen scale-105 group-hover:scale-115 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#071326]/75 to-transparent pointer-events-none" />

                          {/* Technical blueprint corner crosshairs */}
                          <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-white/20 pointer-events-none" />
                          <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-white/20 pointer-events-none" />

                          {/* Top Row: State Pill + Icon */}
                          <div className="relative z-10 flex items-center justify-between">
                            <span 
                              className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider border flex items-center gap-1"
                              style={{
                                backgroundColor: `${st.themeColor}30`,
                                borderColor: `${st.themeColor}70`,
                                color: st.themeColor === "#FFA114" ? "#FFB84D" : st.themeColor
                              }}
                            >
                              {isActive && (
                                <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: st.themeColor }} />
                              )}
                              <span>0{idx + 1} • {st.keyword}</span>
                            </span>

                            <div 
                              className="p-1.5 rounded-lg border flex items-center justify-center transition-transform group-hover:rotate-6"
                              style={{
                                backgroundColor: `${st.themeColor}25`,
                                borderColor: `${st.themeColor}60`,
                                color: st.themeColor === "#FFA114" ? "#FFB84D" : st.themeColor
                              }}
                            >
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                          </div>

                          {/* Middle: Title & Subtitle */}
                          <div className="relative z-10">
                            <h4 className="text-xs sm:text-sm font-bold text-white font-display tracking-tight leading-snug truncate">
                              {st.cellTitle}
                            </h4>
                            <p className="text-[10px] text-slate-300 font-mono mt-0.5 truncate">
                              {st.cellSubtitle}
                            </p>
                          </div>

                          {/* Bottom: Voltage & Cubic Click Flip Callout */}
                          <div className="relative z-10 pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                            <span className="text-slate-400 truncate">
                              {st.voltage}
                            </span>
                            <span 
                              className="flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase group-hover:underline"
                              style={{ color: st.accentColor }}
                            >
                              <Box className="w-2.5 h-2.5 animate-spin" style={{ animationDuration: '6s' }} />
                              <span>Flip</span>
                            </span>
                          </div>
                        </div>

                        {/* ----------------------------------------------------
                            BACK FACE (180deg): Technical Blueprint & Telemetry Specs
                            ---------------------------------------------------- */}
                        <div
                          className="absolute inset-0 rounded-2xl p-3 flex flex-col justify-between overflow-hidden border shadow-2xl backdrop-blur-xl"
                          style={{
                            transform: 'rotateY(180deg)',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                            borderColor: st.themeColor,
                            boxShadow: `0 0 30px ${st.themeColor}50`,
                            backgroundColor: '#050D1AFA'
                          }}
                        >
                          {/* Top: Header with live indicator */}
                          <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                            <div className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                                TELEMETRY SPECS
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-slate-400">
                              STATE 0{idx + 1}
                            </span>
                          </div>

                          {/* Middle: Structured Technical Specifications */}
                          <div className="space-y-1.5 my-auto">
                            {st.specs.map((sp, sIdx) => (
                              <div key={sIdx} className="flex items-center justify-between text-[10px] font-mono">
                                <span className="text-slate-400 truncate max-w-[100px]">{sp.label}:</span>
                                <span className="text-slate-200 font-medium truncate ml-1">{sp.val}</span>
                              </div>
                            ))}
                          </div>

                          {/* Bottom: Return Flip Hint */}
                          <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                            <span className="text-slate-400">
                              3D CUBIC FLIP
                            </span>
                            <span 
                              className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider"
                              style={{ color: st.themeColor === "#FFA114" ? "#FFB84D" : st.themeColor }}
                            >
                              <RefreshCw className="w-2.5 h-2.5" />
                              <span>Flip Back</span>
                            </span>
                          </div>
                        </div>

                      </motion.div>
                    </div>
                  )
                })}
              </div>

              {/* Card Footer Status Bar */}
              <div className="relative z-10 pt-3 border-t border-brand-navy-border/70 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: displayedState.themeColor }} />
                  <span className="font-bold text-white">{displayedState.keyword}:</span>
                  <span className="text-slate-400 truncate max-w-[200px] sm:max-w-xs">{displayedState.voltage}</span>
                </div>
                <div className="text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-brand-orange shrink-0" />
                  <span>Hover to view image • Click cell to flip</span>
                </div>
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
