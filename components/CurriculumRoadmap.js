'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sprout, Compass, GitBranch, Flower, CheckCircle, Sparkles } from 'lucide-react'

export default function CurriculumRoadmap() {
  const [activeStage, setActiveStage] = useState(0)

  const stages = [
    {
      id: 'seed',
      phase: 'Phase 01',
      title: 'The Seed',
      subtitle: 'Grades 1 to 3',
      tagline: 'Igniting Curiosity & Computational Logic',
      icon: Sprout,
      color: 'text-brand-orange',
      badge: 'bg-brand-orange/20 text-brand-orange border-brand-orange/30',
      description: 'Children develop foundational logic through tangible puzzles, interactive mechanical toys, and visual drag-and-drop game design without screen fatigue.',
      topics: [
        'Sequencing & Algorithmic Loops',
        'Simple Machines: Gears, Levers & Pulleys',
        'Block Coding Animations & Stories',
        'Introductory Sensor Wonder: Sound & Light'
      ],
      outcome: 'Confidence in logical problem-solving and basic mechanics.'
    },
    {
      id: 'sprout',
      phase: 'Phase 02',
      title: 'The Sprout',
      subtitle: 'Grades 4 to 6',
      tagline: 'Electronics, Motors & Autonomous Micro-Bots',
      icon: Compass,
      color: 'text-brand-blue',
      badge: 'bg-brand-blue/20 text-brand-blue border-brand-blue/30',
      description: 'Hands-on circuit prototyping using breadboards, microcontroller inputs/outputs, DC gear motors, and autonomous line-following algorithms.',
      topics: [
        'Microcontroller Basics (Infonex Core V1)',
        'Ultrasonic Obstacle Avoidance & Buzzer Logic',
        'Visual-to-Syntax Code Transition',
        'Design Thinking & Iterative Debugging'
      ],
      outcome: 'Builds and codes 4 independent autonomous robotic rovers.'
    },
    {
      id: 'branch',
      phase: 'Phase 03',
      title: 'The Branch',
      subtitle: 'Grades 7 to 9',
      tagline: 'Python, Internet of Things & Applied Physics',
      icon: GitBranch,
      color: 'text-cyan-400',
      badge: 'bg-cyan-500/20 text-cyan-400 border-cyan-400/30',
      description: 'Moving into native text-based Python programming, wireless IoT sensor arrays, MQTT web dashboards, and CAD 3D modeling for custom robotics parts.',
      topics: [
        'Python 3 Syntax, Functions & Sensor Libraries',
        'Cloud IoT Telemetry: Smart Weather & Soil Kits',
        '3D CAD Modeling (Tinkercad / Autodesk)',
        'Kinematics: 4-DOF Robotic Gripper Arms'
      ],
      outcome: 'Deploys real-world smart automation prototypes connected to the cloud.'
    },
    {
      id: 'bloom',
      phase: 'Phase 04',
      title: 'The Bloom',
      subtitle: 'Grades 10 to 12 & College',
      tagline: 'Artificial Intelligence, Computer Vision & Inventions',
      icon: Flower,
      color: 'text-amber-400',
      badge: 'bg-amber-500/20 text-amber-400 border-amber-400/30',
      description: 'Senior learners train neural network classifiers, implement OpenCV edge camera vision, program drone flight choreographies, and build competitive competition rovers.',
      topics: [
        'OpenCV Face, Gesture & Object Tracking',
        'Edge AI: TensorFlow Lite on ESP32 & Pi',
        'Drone Flight Physics & Autonomous Navigation',
        'Patent Pitching, Hackathons & Capstone Incubation'
      ],
      outcome: 'Portfolio-ready inventions, national competition entries & college STEM credits.'
    }
  ]

  const current = stages[activeStage]
  const Icon = current.icon

  return (
    <section id="curriculum" className="py-14 sm:py-20 md:py-28 relative bg-brand-navy-darkest circuit-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-navy-surface border border-brand-blue/30 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NEP 2020 Pedagogical Framework</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display mb-3">
            The Infonex Growth Journey: <br />
            <span className="text-brand-orange">Seed</span> to <span className="text-brand-blue">Bloom</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            A comprehensive, grade-by-grade roadmap designed to take a curious primary student to an inventive AI engineer by high school graduation.
          </p>
        </div>

        {/* Stage Navigation Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 max-w-4xl mx-auto mb-8 sm:mb-12">
          {stages.map((stage, idx) => {
            const StageIcon = stage.icon
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all ${
                  activeStage === idx
                    ? 'bg-brand-navy-surface border-brand-orange shadow-md shadow-brand-orange/20'
                    : 'bg-brand-navy-surface/40 border-brand-navy-border hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase text-slate-300">
                    {stage.phase}
                  </span>
                  <StageIcon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${stage.color}`} />
                </div>
                <div className="text-sm sm:text-base font-bold text-white font-display">
                  {stage.title}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 mt-0.5">
                  {stage.subtitle}
                </div>
              </button>
            )
          })}
        </div>

        {/* Active Stage Deep-Dive Card */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl bg-brand-navy-surface/90 border border-brand-navy-border/80 p-5 sm:p-7 md:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 mb-5 pb-5 border-b border-brand-navy-border/60">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-brand-navy-darkest border border-brand-navy-border text-brand-orange shrink-0">
                <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <span className={`text-[10px] sm:text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border ${current.badge}`}>
                  {current.subtitle} • {current.phase}
                </span>
                <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white font-display mt-1">
                  {current.title}: {current.tagline}
                </h3>
              </div>
            </div>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
            {current.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 mb-6">
            {current.topics.map((t, tidx) => (
              <div key={tidx} className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-brand-navy-darkest/60 border border-brand-navy-border/60">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">{t}</span>
              </div>
            ))}
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-brand-orange/15 to-transparent border border-brand-orange/30 flex items-center gap-2.5 sm:gap-3">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange shrink-0" />
            <div className="text-xs sm:text-sm text-slate-200">
              <span className="font-bold text-white">Graduation Milestone:</span> {current.outcome}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
