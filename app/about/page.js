'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Building2, MapPin, Sparkles, Award, Users, CheckCircle2, 
  ArrowRight, ShieldCheck, HeartHandshake, Lightbulb, Compass,
  Cpu, Bot, Zap, Rocket, Check
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import DemoModal from '../../components/DemoModal'
import LogoAnimated from '../../components/LogoAnimated'

export default function AboutPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  const zones = [
    {
      id: 1,
      name: 'Yantra',
      meaning: 'machine',
      desc: 'Hands-on building and mechanisms',
      color: '#E5A00D'
    },
    {
      id: 2,
      name: 'Shakti',
      meaning: 'power',
      desc: 'Circuits and working models',
      color: '#FF6B00'
    },
    {
      id: 3,
      name: 'Tarka',
      meaning: 'logic',
      desc: 'From visual to written programming',
      color: '#E11D48'
    },
    {
      id: 4,
      name: 'Chetana',
      meaning: 'awareness',
      desc: 'Sensing and acting together',
      color: '#0090FF'
    },
    {
      id: 5,
      name: 'Srishti',
      meaning: 'creation',
      desc: 'Integrated projects and systems',
      color: '#10B981'
    }
  ]

  const pillars = [
    {
      title: 'Our Mission',
      desc: 'Planting tech seeds in every classroom across India. Ensuring no child is left behind in the era of artificial intelligence and physical automation.',
      icon: Lightbulb,
      color: 'text-brand-orange'
    },
    {
      title: 'Zero Downtime Guarantee',
      desc: 'From our Bangalore warehouse, replacement motors, microcontrollers, and sensor modules ship within 24–48 hours directly to your school.',
      icon: ShieldCheck,
      color: 'text-brand-blue'
    },
    {
      title: 'On-Campus Master Trainers',
      desc: 'We don’t just ship boxes. Our certified robotics engineers deliver continuous on-campus teacher bootcamps and student mentorship.',
      icon: Users,
      color: 'text-emerald-400'
    }
  ]

  return (
    <div className="relative min-h-screen bg-brand-navy-darkest text-slate-100 selection:bg-brand-orange selection:text-white">
      
      {/* Sticky Appbar */}
      <Navbar onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      <main className="relative z-10">
        
        {/* About Hero */}
        <section className="relative py-16 sm:py-24 bg-gradient-to-b from-brand-navy-darker to-brand-navy-darkest border-b border-brand-navy-border/60 overflow-hidden">
          <div className="absolute top-10 left-1/3 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-surface border border-brand-orange/30 text-brand-orange text-xs font-semibold mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>About Infonex Education</span>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-5 font-display">
                  Transforming Classrooms into <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-400 to-yellow-200">Innovation Hubs</span>
                </h1>

                <p className="text-slate-300 text-sm sm:text-lg leading-relaxed mb-6">
                  Founded in Bangalore—the Silicon Valley of India—Infonex is an engineering-first STEM and robotics education partner. We bridge the gap between abstract textbook theory and real-world physical inventions.
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-brand-orange" />
                    <span>R&D: Bangalore, Karnataka</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-brand-blue" />
                    <span>120+ Partner Schools</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>NEP 2020 Certified</span>
                  </div>
                </div>
              </div>

              {/* Logo Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="p-8 rounded-3xl bg-brand-navy-darker border border-brand-navy-border/80 shadow-2xl flex flex-col items-center text-center max-w-sm w-full">
                  <LogoAnimated size="default" showText={true} showTagline={true} />
                  <div className="mt-6 pt-6 border-t border-brand-navy-border/60 text-xs text-slate-400 leading-relaxed">
                    The <span className="text-brand-orange font-semibold">Tech Seed</span> sprout rising through electronic circuit tracks: symbolizes growing curious children into patent-holding roboticists.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* The 5 Spark Learning Zones (Sanskrit Lore) */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-brand-navy-border/60">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-orange block mb-2">
              03 — The Five Learning Zones
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display mb-4">
              Rooted in Sanskrit, Engineered for Modern Robotics
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Each zone names a way of learning. Children pass through all five every single year—from handling a machine to creating a complete, interconnected autonomous system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {zones.map((zone) => (
              <div
                key={zone.id}
                className="p-6 rounded-2xl bg-brand-navy-darker/80 border border-brand-navy-border/80 flex flex-col justify-between hover:border-slate-500 transition-all group"
              >
                <div>
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold font-mono text-base mb-4 border"
                    style={{
                      backgroundColor: `${zone.color}20`,
                      borderColor: `${zone.color}50`,
                      color: zone.color
                    }}
                  >
                    0{zone.id}
                  </div>
                  <h3 className="text-xl font-bold font-display text-white mb-1">
                    {zone.name}
                  </h3>
                  <div className="text-xs italic font-medium mb-3" style={{ color: zone.color }}>
                    ({zone.meaning})
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {zone.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-navy-border/40 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  Zone 0{zone.id} of 05
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-4 rounded-2xl bg-brand-navy-surface/50 border border-brand-navy-border/60 text-center text-xs font-mono text-slate-300">
            <span className="text-brand-orange font-bold">Progression:</span> Yantra (machine) → Shakti (power) → Tarka (logic) → Chetana (awareness) → Srishti (creation)
          </div>
        </section>

        {/* 3 Core Pillars */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-brand-navy-border/60">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, idx) => {
              const Icon = p.icon
              return (
                <div key={idx} className="p-8 rounded-3xl bg-brand-navy-darker/90 border border-brand-navy-border/80">
                  <div className={`p-3.5 rounded-2xl bg-brand-navy-surface w-fit mb-5 ${p.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mb-3">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Bangalore R&D Facility */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-brand-navy-darker via-brand-navy-surface to-brand-navy-darker border border-brand-navy-border p-8 sm:p-12 text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-blue block mb-2">
              Bangalore Logistics Hub
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display mb-4">
              Direct Institutional Support from India's Tech Capital
            </h2>
            <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Every rover chassis, circuit board, and sensor array is assembled and quality-checked at our Bangalore facility before being shipped to school labs nationwide.
            </p>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-lg shadow-brand-orange/30 hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Schedule On-Campus Lab Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

    </div>
  )
}
