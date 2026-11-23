'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Sparkles, ArrowRight } from 'lucide-react'
import ParallaxTiltCard from './ParallaxTiltCard'

export default function KitsShowcase({ onOpenDemoModal }) {
  const [activeTab, setActiveTab] = useState('all')

  const categories = [
    { id: 'all', name: 'All Kits' },
    { id: 'robotics', name: 'Robotics & Rovers' },
    { id: 'ai', name: 'AI & Vision' },
    { id: 'iot', name: 'IoT & Smart Cities' },
    { id: 'makers', name: 'Tinkering & Makers' },
  ]

  const kits = [
    {
      id: 'spark-bot',
      category: 'robotics',
      title: 'Infonex SparkBot v2',
      badge: 'Bestseller',
      grades: 'Grades 3 - 7',
      coding: 'Block Coding & Python',
      imageBg: 'from-blue-600/30 to-brand-navy-darkest',
      accent: 'border-brand-blue/50 text-brand-blue',
      description: 'Modular educational robotic rover designed for classroom durability. Features dual DC gear motors, obstacle avoidance, line-following, and RGB LED matrix.',
      specs: ['Dual Ultrasonic Sensors', 'Rechargeable Li-Ion Battery', 'Scratch 3.0 Compatible', 'Bluetooth Wireless'],
      curriculum: '24 Step-by-Step Lessons'
    },
    {
      id: 'quad-vision',
      category: 'ai',
      title: 'Infonex OmniVision AI Rover',
      badge: 'Flagship AI',
      grades: 'Grades 6 - 10',
      coding: 'Python & OpenCV',
      imageBg: 'from-orange-600/30 to-brand-navy-darkest',
      accent: 'border-brand-orange/50 text-brand-orange',
      description: 'Omnidirectional mecanum wheel rover powered by an onboard AI vision coprocessor. Real-time face tracking, traffic sign recognition, and gesture steering.',
      specs: ['4x Mecanum Wheels', 'HD Camera Neural Core', 'Edge Machine Learning', 'Autonomous Path Mapping'],
      curriculum: '32 Advanced AI Projects'
    },
    {
      id: 'iot-smartcity',
      category: 'iot',
      title: 'Infonex Smart City & Agritech Hub',
      badge: 'NEP 2020 Ready',
      grades: 'Grades 5 - 10',
      coding: 'C++ & MicroPython',
      imageBg: 'from-cyan-600/30 to-brand-navy-darkest',
      accent: 'border-cyan-400/50 text-cyan-400',
      description: 'Interactive smart agriculture and sustainable city station. Measures soil moisture, automated irrigation pumps, air quality index, and syncs to a live web dashboard.',
      specs: ['ESP32 Cloud Gateway', '12 Industrial Sensors', 'Solar Micro-Array', 'MQTT Live Dashboard'],
      curriculum: '20 Sustainable Tech Labs'
    },
    {
      id: 'bionic-arm',
      category: 'robotics',
      title: 'Infonex 5-DOF Bionic Arm',
      badge: 'Senior & College',
      grades: 'Grades 8 - 12+',
      coding: 'ROS & Python',
      imageBg: 'from-indigo-600/30 to-brand-navy-darkest',
      accent: 'border-indigo-400/50 text-indigo-400',
      description: 'Precision robotic arm with metal gear servos, flex-sensor glove control, inverse kinematics, and teach-and-repeat automation routines.',
      specs: ['5x Metal Servos', 'Flex Sensor Glove', 'Pick-and-Place Gripper', 'Kinematics Simulator'],
      curriculum: '18 Mechanical Units'
    },
    {
      id: 'tinymaker-3d',
      category: 'makers',
      title: 'Infonex Maker 3D Studio',
      badge: 'Prototyping',
      grades: 'Grades 4 - 12',
      coding: 'Tinkercad & CAD',
      imageBg: 'from-emerald-600/30 to-brand-navy-darkest',
      accent: 'border-emerald-400/50 text-emerald-400',
      description: 'School-safe enclosed 3D printer bundle with pre-calibrated nozzle, child-safe bio-PLA filament, and 3D design curriculum mapped to school science topics.',
      specs: ['Enclosed Safety Hood', 'Auto-Bed Leveling', 'Non-Toxic Bio-PLA', 'Includes 10 Toolkits'],
      curriculum: '25 3D Modeling Lessons'
    },
    {
      id: 'drone-avionics',
      category: 'makers',
      title: 'Infonex AeroDrone Lab Kit',
      badge: 'Aeronautics',
      grades: 'Grades 7 - 12',
      coding: 'Python Drone SDK',
      imageBg: 'from-sky-600/30 to-brand-navy-darkest',
      accent: 'border-sky-400/50 text-sky-400',
      description: 'Enclosed indoor education drone with propeller cages, optical flow sensor for rock-solid hovering, and programmable flight choreography via Python.',
      specs: ['Propeller Enclosure', 'Barometric Hover Lock', 'Python Autonomous Flips', 'Crash-Resistant Frame'],
      curriculum: '16 Flight Physics Modules'
    }
  ]

  const filteredKits = activeTab === 'all' 
    ? kits 
    : kits.filter(k => k.category === activeTab)

  return (
    <section id="kits" className="py-14 sm:py-20 md:py-28 relative bg-white z-10">
      <div id="gallery" className="absolute -top-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-bold uppercase tracking-wider mb-2.5 shadow-xs">
              <Bot className="w-3.5 h-3.5" />
              <span>Engineered in Bangalore</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
              Proprietary Hardware <span className="text-brand-orange">& Kits</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-base mt-2 max-w-xl leading-relaxed">
              Durable, classroom-tested hardware kits built specifically for student usage with modular plug-and-play electronics.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-5 md:mt-0 flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === cat.id
                    ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Kits Grid with Parallax Tilt */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          <AnimatePresence>
            {filteredKits.map((kit) => (
              <motion.div
                key={kit.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <ParallaxTiltCard 
                  maxTilt={8}
                  className="group rounded-2xl sm:rounded-3xl bg-white border border-slate-200 hover:border-brand-orange/60 p-4 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/80 relative overflow-hidden h-full shadow-lg shadow-slate-100"
                >
                  {/* Header info */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
                        {kit.badge}
                      </span>
                      <span className="text-[11px] sm:text-xs text-slate-500 font-mono">
                        {kit.grades}
                      </span>
                    </div>

                    {/* Visual card */}
                    <div className="h-28 sm:h-36 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center p-3 relative overflow-hidden mb-4 group-hover:scale-[1.01] transition-transform">
                      <Bot className="w-12 h-12 sm:w-14 sm:h-14 text-slate-400 mb-1.5 group-hover:text-brand-orange transition-colors" />
                      <div className="text-[10px] sm:text-xs font-semibold text-slate-700 bg-white px-2.5 py-0.5 rounded-full border border-slate-200 shadow-xs">
                        {kit.coding}
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 font-display mb-1.5 group-hover:text-brand-orange transition-colors">
                      {kit.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {kit.description}
                    </p>

                    {/* Specs list */}
                    <div className="space-y-1 mb-5">
                      {kit.specs.map((spec, sidx) => (
                        <div key={sidx} className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer action */}
                  <div className="pt-3.5 border-t border-slate-200 flex items-center justify-between">
                    <div className="text-[11px] text-brand-blue font-semibold">
                      {kit.curriculum}
                    </div>
                    <button
                      onClick={onOpenDemoModal}
                      className="text-xs font-bold text-slate-800 bg-slate-100 hover:bg-brand-orange hover:text-white px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer border border-slate-200 hover:border-brand-orange"
                    >
                      <span>Request Kit</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </ParallaxTiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-50 via-blue-50/40 to-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-5 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl sm:rounded-2xl bg-brand-orange/15 text-brand-orange shrink-0">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-display">Need Custom Hardware Kits for Your School Curriculum?</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">We custom fabricate and white-label robotics kits for schools, Atal Tinkering Labs, and education franchises.</p>
            </div>
          </div>

          <button
            onClick={onOpenDemoModal}
            className="w-full md:w-auto shrink-0 px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs sm:text-sm shadow-md"
          >
            Request Custom Kit Proposal
          </button>
        </div>

      </div>
    </section>
  )
}
