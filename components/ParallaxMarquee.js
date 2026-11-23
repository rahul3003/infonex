'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxMarquee() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Horizontal parallax translation driven by scroll
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
  const x2 = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"])

  const items = [
    { text: "LEARN", dotColor: "text-brand-blue" },
    { text: "INNOVATE", dotColor: "text-brand-orange" },
    { text: "TRANSFORM", dotColor: "text-emerald-400" },
    { text: "ROBOTICS LABS", dotColor: "text-brand-blue" },
    { text: "AI & COMPUTER VISION", dotColor: "text-brand-orange" },
    { text: "NEP 2020 COMPLIANT", dotColor: "text-cyan-400" },
    { text: "PLANTING TECH SEEDS", dotColor: "text-brand-orange" },
    { text: "BANGALORE R&D", dotColor: "text-brand-blue" },
  ]

  return (
    <div 
      ref={containerRef}
      className="relative py-6 sm:py-8 overflow-hidden bg-slate-50 border-t border-b border-slate-200 select-none z-10"
    >
      {/* Top Track: Left-moving parallax marquee */}
      <motion.div 
        style={{ x: x1 }}
        className="flex whitespace-nowrap gap-6 sm:gap-10 text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-slate-600 font-display will-change-transform mb-2 sm:mb-3"
      >
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 sm:gap-6 shrink-0">
            <span className="hover:text-slate-950 transition-colors">{item.text}</span>
            <span className={`text-base sm:text-lg ${item.dotColor}`}>✦</span>
          </div>
        ))}
      </motion.div>

      {/* Bottom Track: Right-moving parallax marquee in reverse */}
      <motion.div 
        style={{ x: x2 }}
        className="flex whitespace-nowrap gap-6 sm:gap-10 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-slate-500 font-mono will-change-transform"
      >
        {[...items, ...items, ...items, ...items].reverse().map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 sm:gap-6 shrink-0">
            <span className="hover:text-brand-orange transition-colors">{item.text}</span>
            <span className="text-xs text-brand-orange/60">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
