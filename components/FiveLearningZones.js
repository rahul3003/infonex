'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function FiveLearningZones({ onOpenDemoModal }) {
  const [hoveredZone, setHoveredZone] = useState(null)

  const zones = [
    {
      number: 1,
      name: 'Yantra',
      meaning: 'machine',
      desc: 'Hands-on building and mechanisms',
      color: '#D99B00',
      lightBg: 'bg-[#FAF8F5]',
      borderDash: 'bg-[#D99B00]'
    },
    {
      number: 2,
      name: 'Shakti',
      meaning: 'power',
      desc: 'Circuits and working models',
      color: '#E05A2B',
      lightBg: 'bg-[#FAF8F5]',
      borderDash: 'bg-[#E05A2B]'
    },
    {
      number: 3,
      name: 'Tarka',
      meaning: 'logic',
      desc: 'From visual to written programming',
      color: '#C2185B',
      lightBg: 'bg-[#FAF8F5]',
      borderDash: 'bg-[#C2185B]'
    },
    {
      number: 4,
      name: 'Chetana',
      meaning: 'awareness',
      desc: 'Sensing and acting together',
      color: '#00897B',
      lightBg: 'bg-[#FAF8F5]',
      borderDash: 'bg-[#00897B]'
    },
    {
      number: 5,
      name: 'Srishti',
      meaning: 'creation',
      desc: 'Integrated projects and systems',
      color: '#2E7D32',
      lightBg: 'bg-[#FAF8F5]',
      borderDash: 'bg-[#2E7D32]'
    }
  ]

  return (
    <section id="zones" className="py-14 sm:py-20 md:py-28 relative bg-white overflow-hidden z-10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* The Exact Split-Screen Layout on White Background */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 bg-white">
          
          {/* ========================================================
              LEFT COLUMN: Editorial Framework Block (White / Light Slate)
              ======================================================== */}
          <div className="lg:col-span-5 bg-slate-50 p-8 sm:p-12 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 text-slate-900">
            <div>
              {/* Eyebrow Numbering */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                <span className="font-mono text-xs uppercase tracking-widest text-brand-orange font-bold">
                  03 — FIVE LEARNING ZONES
                </span>
              </div>

              {/* Serif / Bold Editorial Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] mb-6 font-display">
                Every grade moves through all five zones
              </h2>

              {/* Sanskrit Lore Paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Rooted in Sanskrit, each zone names a way of learning. Children pass through all five every year, from handling a machine to creating a complete system.
              </p>

              {/* How vs What Distinction Callout */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5 text-xs sm:text-sm shadow-xs">
                <div className="text-slate-700">
                  Zones describe <span className="text-brand-orange font-bold uppercase tracking-wide">how</span> children learn.
                </div>
                <div className="text-slate-700">
                  Pillars describe <span className="text-brand-blue font-bold uppercase tracking-wide">what</span> they learn.
                </div>
              </div>
            </div>

            {/* Bottom Methodology Motto */}
            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-0.5">
                  Methodology Framework
                </span>
                <span className="text-xs font-bold text-slate-900">
                  From Curiosity to Creation • Infonex Marga
                </span>
              </div>

              <button
                onClick={onOpenDemoModal}
                className="px-4 py-2 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-brand-orange/30 cursor-pointer shrink-0"
              >
                <span>Book Demo Lab</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Structured Zones Table on Crisp White
              ======================================================== */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
            
            <div>
              {/* Top Section Header with Rule */}
              <div className="border-t-2 border-slate-800 pt-2 mb-8">
                <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-slate-500 uppercase">
                  THE FIVE SPARK LEARNING ZONES
                </span>
              </div>

              {/* The 5 Stacked Zone Rows */}
              <div className="divide-y divide-slate-200">
                {zones.map((zone) => {
                  const isHovered = hoveredZone === zone.number
                  return (
                    <motion.div
                      key={zone.number}
                      onMouseEnter={() => setHoveredZone(zone.number)}
                      onMouseLeave={() => setHoveredZone(null)}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="py-5 sm:py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 group cursor-pointer"
                    >
                      {/* Left: Indicator Dash, Number & Sanskrit Name */}
                      <div className="flex items-center gap-4 sm:gap-6 min-w-[220px]">
                        {/* Colored accent dash above/beside row */}
                        <div className="flex flex-col items-center gap-1.5 shrink-0">
                          <div 
                            className="w-8 h-1 rounded-full transition-all duration-300"
                            style={{ 
                              backgroundColor: zone.color,
                              width: isHovered ? '40px' : '32px'
                            }} 
                          />
                          <span 
                            className="font-extrabold text-3xl sm:text-4xl font-display leading-none select-none transition-transform duration-200"
                            style={{ color: zone.color }}
                          >
                            {zone.number}
                          </span>
                        </div>

                        {/* Zone Name + Meaning */}
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl sm:text-2xl font-black text-slate-900 font-display tracking-tight group-hover:text-slate-800">
                              {zone.name}
                            </span>
                            <span 
                              className="text-sm sm:text-base font-serif italic font-medium"
                              style={{ color: zone.color }}
                            >
                              ({zone.meaning})
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right: English Functional Description */}
                      <div className="text-xs sm:text-sm text-slate-600 font-medium sm:text-right pl-12 sm:pl-0 leading-relaxed">
                        {zone.desc}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Bottom Flow Ribbon: Yantra -> Shakti -> Tarka -> Chetana -> Srishti */}
            <div className="mt-10 pt-6 border-t border-slate-200">
              <div className="font-serif italic text-xs sm:text-sm text-slate-700 flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span>Yantra</span>
                <span className="text-slate-400 not-italic">→</span>
                <span>Shakti</span>
                <span className="text-slate-400 not-italic">→</span>
                <span>Tarka</span>
                <span className="text-slate-400 not-italic">→</span>
                <span>Chetana</span>
                <span className="text-slate-400 not-italic">→</span>
                <span>Srishti</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
