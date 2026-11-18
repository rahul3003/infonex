'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Layers, ArrowRight, Shield, Wrench, Sparkles, School } from 'lucide-react'

export default function LabCalculator({ onOpenDemoModalWithData }) {
  const [gradeLevel, setGradeLevel] = useState('composite')
  const [studentCount, setStudentCount] = useState(250)
  const [tier, setTier] = useState('advanced')

  const tierDetails = {
    essential: {
      name: 'Essential STEM Tinkering Lab',
      baseKitCount: Math.ceil(studentCount / 12),
      workbenches: Math.ceil(studentCount / 40),
      printers: 1,
      trainingHours: 24,
      aiEnabled: 'Introductory Block AI',
      turnaround: '7 - 10 Days',
    },
    advanced: {
      name: 'Advanced Robotics & AI Hub',
      baseKitCount: Math.ceil(studentCount / 8),
      workbenches: Math.ceil(studentCount / 30),
      printers: 2,
      trainingHours: 48,
      aiEnabled: 'Computer Vision & Edge AI',
      turnaround: '12 - 15 Days',
    },
    atl: {
      name: 'Full Atal Tinkering Lab (ATL)',
      baseKitCount: Math.ceil(studentCount / 6),
      workbenches: Math.ceil(studentCount / 25),
      printers: 3,
      trainingHours: 72,
      aiEnabled: 'Complete AI, IoT & Drones',
      turnaround: '15 - 20 Days',
    }
  }

  const current = tierDetails[tier]

  const handleGenerateQuote = () => {
    if (onOpenDemoModalWithData) {
      onOpenDemoModalWithData({
        gradeLevel,
        studentCount,
        tier: current.name,
        baseKits: current.baseKitCount
      })
    }
  }

  return (
    <section id="estimator" className="py-14 sm:py-20 md:py-28 relative bg-brand-navy-darker border-t border-brand-navy-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy-surface border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Decision Tool</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display">
            School Lab Setup <span className="text-brand-orange">Estimator</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base mt-2 max-w-2xl mx-auto leading-relaxed">
            Select your institution profile and student strength to calculate required robotics stations, equipment ratios, and curriculum scale.
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Controls (Left 7 cols) */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl bg-brand-navy-surface p-5 sm:p-7 md:p-8 border border-brand-navy-border/80 shadow-xl flex flex-col justify-between">
            <div className="space-y-5 sm:space-y-6">
              
              {/* Step 1: Grade Level */}
              <div>
                <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2 sm:mb-3">
                  1. Target Grade Level
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'primary', label: 'Primary (1-5)' },
                    { id: 'middle', label: 'Middle (6-8)' },
                    { id: 'senior', label: 'Senior (9-12)' },
                    { id: 'composite', label: 'K-12 Composite' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setGradeLevel(item.id)}
                      className={`py-2 px-2.5 sm:py-2.5 sm:px-3 rounded-xl text-xs font-bold border transition-all ${
                        gradeLevel === item.id
                          ? 'bg-brand-blue/20 text-white border-brand-blue shadow-md shadow-brand-blue/15'
                          : 'bg-brand-navy-darkest text-slate-300 border-brand-navy-border hover:border-slate-600'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Student Count Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300">
                    2. Total Student Strength
                  </label>
                  <span className="text-xs sm:text-sm font-extrabold text-brand-orange font-mono bg-brand-orange/15 px-2.5 py-1 rounded-lg border border-brand-orange/30">
                    {studentCount} Students
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1500"
                  step="25"
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full h-2 bg-brand-navy-darkest rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-300 mt-1">
                  <span>50</span>
                  <span>500</span>
                  <span>1000</span>
                  <span>1500+</span>
                </div>
              </div>

              {/* Step 3: Tier Selection */}
              <div>
                <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2 sm:mb-3">
                  3. Select Lab Configuration Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'essential', title: 'Essential', sub: 'Starter Tinkering' },
                    { id: 'advanced', title: 'Advanced Hub', sub: 'AI + Robotics' },
                    { id: 'atl', title: 'Full ATL Suite', sub: 'NEP + Prototyping' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTier(t.id)}
                      className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl text-left border transition-all ${
                        tier === t.id
                          ? 'bg-brand-orange/15 border-brand-orange text-white shadow-md shadow-brand-orange/15'
                          : 'bg-brand-navy-darkest border-brand-navy-border text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm">{t.title}</div>
                      <div className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5">{t.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Note */}
            <div className="mt-5 pt-3.5 border-t border-brand-navy-border/60 flex items-center gap-2 text-[11px] sm:text-xs text-slate-300">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span>Includes teacher certification, lesson plans & 12-month hardware replacement.</span>
            </div>
          </div>

          {/* Results Card (Right 5 cols) */}
          <div className="lg:col-span-5 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-brand-navy-surface to-brand-navy-darkest p-5 sm:p-7 md:p-8 border-2 border-brand-orange/50 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-brand-orange bg-brand-orange/20 px-2.5 py-0.5 rounded-full border border-brand-orange/40">
                  Recommended Layout
                </span>
                <span className="text-[11px] sm:text-xs text-slate-300">Setup in {current.turnaround}</span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white font-display mb-1">
                {current.name}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-300 mb-4 sm:mb-5">
                Calibrated for {studentCount} active learners with hands-on 2:1 student-to-kit engagement.
              </p>

              {/* Metric badges */}
              <div className="space-y-2 sm:space-y-2.5 mb-5">
                <div className="p-2.5 sm:p-3 rounded-xl bg-brand-navy-darkest border border-brand-navy-border flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-blue" />
                    <span>Robotics & AI Kits</span>
                  </div>
                  <span className="text-sm sm:text-base font-bold text-white font-mono">{current.baseKitCount} Sets</span>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-brand-navy-darkest border border-brand-navy-border flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-orange" />
                    <span>Modular Workbenches</span>
                  </div>
                  <span className="text-sm sm:text-base font-bold text-white font-mono">{current.workbenches} Units</span>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-brand-navy-darkest border border-brand-navy-border flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                    <span>3D Rapid Prototypers</span>
                  </div>
                  <span className="text-sm sm:text-base font-bold text-white font-mono">{current.printers} Station(s)</span>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-brand-navy-darkest border border-brand-navy-border flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <School className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                    <span>Teacher Training</span>
                  </div>
                  <span className="text-sm sm:text-base font-bold text-emerald-400 font-mono">{current.trainingHours} Hours</span>
                </div>
              </div>

              <div className="text-[11px] sm:text-xs text-slate-300 bg-brand-navy-darkest/70 p-2.5 sm:p-3 rounded-xl border border-slate-700/50">
                <span className="font-semibold text-white">AI Capability:</span> {current.aiEnabled}
              </div>
            </div>

            {/* Action button */}
            <div className="mt-6 sm:mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGenerateQuote}
                className="w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white font-bold text-xs sm:text-sm shadow-lg shadow-brand-orange/30 flex items-center justify-center gap-2"
              >
                <span>Receive Official School Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <p className="text-[10px] sm:text-[11px] text-center text-slate-400 mt-2">
                Detailed BOM (Bill of Materials) & proposal sent to your email.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
