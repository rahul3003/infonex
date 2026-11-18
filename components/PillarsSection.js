'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Cpu, Microscope, ArrowRight, Check, Sparkles } from 'lucide-react'
import ParallaxTiltCard from './ParallaxTiltCard'

export default function PillarsSection({ onOpenDemoModal }) {
  const pillars = [
    {
      id: 'robotics',
      tag: 'Pillar 01',
      title: 'Robotics Engineering',
      tagline: 'From Basic Mechanisms to Autonomous Rovers',
      theme: 'blue',
      icon: Bot,
      borderColor: 'border-brand-blue/40',
      badgeColor: 'bg-brand-blue/20 text-brand-blue border-brand-blue/40',
      accentColor: 'text-brand-blue',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(0,144,255,0.25)]',
      description: 'Hands-on mechanical design, motor kinematics, sensor fusion, and autonomous pathfinding. Students build, wire, program, and iterate real robots.',
      features: [
        'Modular Chassis & High-Torque Gear Motors',
        'Ultrasonic, IR, Gyroscope & LiDAR Sensors',
        'Microcontroller Integration (ESP32 / Arduino / ARM)',
        'RoboCup & WRO Competition Readiness'
      ],
      grades: 'Grades 3 to 12 & Engineering Colleges'
    },
    {
      id: 'ai-coding',
      tag: 'Pillar 02',
      title: 'AI, ML & Coding',
      tagline: 'Demystifying Neural Networks & Intelligent Systems',
      theme: 'orange',
      icon: Cpu,
      borderColor: 'border-brand-orange/40',
      badgeColor: 'bg-brand-orange/20 text-brand-orange border-brand-orange/40',
      accentColor: 'text-brand-orange',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(255,107,0,0.25)]',
      description: 'Progressive computing curriculum moving from intuitive visual block programming into Python, Computer Vision, Speech Recognition, and Edge AI deployment.',
      features: [
        'Visual Block Programming for Young Coders',
        'Python 3 & OpenCV Real-Time Face Tracking',
        'Voice AI, NLP & Gesture Controlled Interfaces',
        'Ethical AI, Data Literacy & Algorithmic Logic'
      ],
      grades: 'Grades 1 to 12'
    },
    {
      id: 'stem-labs',
      tag: 'Pillar 03',
      title: 'Turnkey STEM Labs',
      tagline: 'Transforming Classrooms into Innovation Hubs',
      theme: 'cyan',
      icon: Microscope,
      borderColor: 'border-cyan-400/40',
      badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-400/40',
      accentColor: 'text-cyan-400',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]',
      description: 'End-to-end laboratory infrastructure featuring smart ergonomic furniture, safety tooling, 3D printers, IoT workstations, and dedicated testing arenas.',
      features: [
        'Turnkey Workbenches, Power Rails & ESD Safety',
        'Industrial-Grade 3D Printers & Prototyping',
        'IoT Smart City & Renewable Energy Testbeds',
        'Complete Teacher Manuals & Yearly Curriculum'
      ],
      grades: 'Schools, K-12 Academies & STEM Clubs'
    }
  ]

  return (
    <section id="pillars" className="py-14 sm:py-20 md:py-28 relative bg-brand-navy-darker/90 border-t border-b border-brand-navy-border/60 z-10">
      <div id="labs" className="absolute -top-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy-surface border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Infonex Foundation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight mb-3">
            Three Core Pillars. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-300 to-brand-orange">
              Infinite Possibilities for Learners.
            </span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Equipping educational institutions with the triad of contemporary tech education, as featured in our Bangalore launch flyer.
          </p>
        </div>

        {/* Pillars Grid with Parallax Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <ParallaxTiltCard 
                  maxTilt={8}
                  className={`group relative rounded-2xl sm:rounded-3xl bg-brand-navy-surface/90 border ${pillar.borderColor} p-5 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 ${pillar.glowColor} h-full`}
                >
                  <div>
                    {/* Top Bar with Icon and Tag */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className={`p-3 rounded-xl sm:rounded-2xl bg-brand-navy-darkest border border-brand-navy-border shadow-inner ${pillar.accentColor}`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className={`text-[11px] sm:text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border ${pillar.badgeColor}`}>
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-display mb-1 sm:mb-2">
                      {pillar.title}
                    </h3>

                    <div className={`text-xs font-semibold ${pillar.accentColor} mb-3 sm:mb-4`}>
                      {pillar.tagline}
                    </div>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                      {pillar.description}
                    </p>

                    {/* Feature Checklist */}
                    <div className="space-y-2 mb-6 sm:mb-8">
                      {pillar.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                          <Check className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0 ${pillar.accentColor}`} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 sm:pt-6 border-t border-brand-navy-border/60 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium text-[11px] sm:text-xs">
                      {pillar.grades}
                    </span>
                    <button 
                      onClick={onOpenDemoModal}
                      className={`font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform ${pillar.accentColor} text-xs sm:text-sm`}
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </ParallaxTiltCard>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
