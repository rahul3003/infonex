'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, X, Sparkles, Trophy } from 'lucide-react'

export default function ComparisonSection({ onOpenDemoModal }) {
  const comparisons = [
    {
      feature: 'Hands-On Hardware Kits',
      traditional: 'Only screen-time / MS Office & Typing drills',
      infonex: '100% Tangible robots, microcontrollers, sensors & motors',
      highlight: true
    },
    {
      feature: 'Curriculum & Pedagogy',
      traditional: 'Outdated static textbooks without updates',
      infonex: 'NEP 2020 mapped, yearly updated Python, AI & IoT modules',
      highlight: false
    },
    {
      feature: 'Artificial Intelligence',
      traditional: 'Theoretical definition slides in PowerPoint',
      infonex: 'Live computer vision face/gesture tracking & edge machine learning',
      highlight: true
    },
    {
      feature: 'Teacher Empowerment',
      traditional: 'Teachers left alone to figure out broken software',
      infonex: 'Continuous in-person teacher certification & 24/7 STEM helpline',
      highlight: false
    },
    {
      feature: 'Rapid Prototyping',
      traditional: 'No fabrication tools or hardware access',
      infonex: '3D printers, laser design, soldering stations & testing arenas',
      highlight: true
    },
    {
      feature: 'National Competitions',
      traditional: 'Zero participation in external tech leagues',
      infonex: 'Direct mentorship for WRO, FLL, ATL Marathon & Infonex Cup',
      highlight: false
    }
  ]

  return (
    <section className="py-14 sm:py-20 md:py-28 relative bg-brand-navy-darkest circuit-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy-surface border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>The Infonex Difference</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display">
            Why Schools Upgrade to <span className="text-brand-orange">Infonex</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-2 max-w-2xl mx-auto leading-relaxed">
            Compare a conventional computer lab with an Infonex Robotics & STEM Innovation Center.
          </p>
        </div>

        {/* Mobile View: High-Clarity Comparison Cards (< 640px) */}
        <div className="block sm:hidden space-y-3">
          {comparisons.map((row, idx) => (
            <div 
              key={idx}
              className={`p-4 rounded-2xl border ${
                row.highlight 
                  ? 'bg-brand-navy-surface/90 border-brand-orange/50 shadow-md' 
                  : 'bg-brand-navy-surface/60 border-brand-navy-border'
              }`}
            >
              <div className="font-bold text-white text-sm mb-2.5 flex items-center justify-between">
                <span>{row.feature}</span>
                {row.highlight && (
                  <span className="text-[10px] text-brand-orange bg-brand-orange/15 px-2 py-0.5 rounded-full font-semibold">
                    Key Highlight
                  </span>
                )}
              </div>

              <div className="space-y-2 text-xs">
                {/* Traditional */}
                <div className="p-2.5 rounded-xl bg-black/20 text-slate-300 flex items-start gap-2 border border-slate-800">
                  <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Conventional:</span>
                    <span>{row.traditional}</span>
                  </div>
                </div>

                {/* Infonex */}
                <div className="p-2.5 rounded-xl bg-brand-orange/10 text-white flex items-start gap-2 border border-brand-orange/30">
                  <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-orange block">Infonex Innovation:</span>
                    <span className="font-medium">{row.infonex}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Full Table (>= 640px) */}
        <div className="hidden sm:block overflow-x-auto rounded-3xl border border-brand-navy-border shadow-2xl bg-brand-navy-surface/80 backdrop-blur-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-brand-navy-border/80 bg-brand-navy-darker/80 text-xs sm:text-sm uppercase tracking-wider font-bold">
                <th className="py-4 px-6 text-slate-300">Dimension</th>
                <th className="py-4 px-6 text-slate-400 bg-black/20">Conventional School Lab</th>
                <th className="py-4 px-6 text-brand-orange bg-brand-orange/10 border-l border-brand-orange/30">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-orange" />
                    <span>Infonex Innovation Lab</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-navy-border/60 text-xs sm:text-sm">
              {comparisons.map((row, idx) => (
                <tr 
                  key={idx}
                  className={`hover:bg-brand-navy-light/40 transition-colors ${
                    row.highlight ? 'bg-brand-navy-surface/40' : ''
                  }`}
                >
                  <td className="py-3.5 px-6 font-semibold text-white whitespace-nowrap">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-6 text-slate-300 bg-black/10">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-6 text-slate-100 bg-brand-orange/5 border-l border-brand-orange/30 font-medium">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span>{row.infonex}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-8 sm:mt-10 text-center">
          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white font-bold text-xs sm:text-sm shadow-xl shadow-brand-orange/25 transition-all"
          >
            Upgrade Your School to an Infonex Lab
          </button>
        </div>

      </div>
    </section>
  )
}
