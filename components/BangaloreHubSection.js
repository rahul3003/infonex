'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Building, Zap, Award, Users, ArrowUpRight } from 'lucide-react'

export default function BangaloreHubSection({ onOpenDemoModal }) {
  const highlights = [
    {
      icon: Building,
      title: 'Bangalore R&D Facility',
      desc: 'In-house hardware prototyping, embedded firmware testing, and kit assembly right here in Bangalore.'
    },
    {
      icon: Zap,
      title: '24-48 Hr Component Dispatch',
      desc: 'Never let a broken motor halt learning. Replacement sensors, motors, and cables shipped immediately.'
    },
    {
      icon: Users,
      title: 'Master Trainers on Campus',
      desc: 'Our certified STEM engineers visit your school for onboarding, live bootcamps, and teacher enablement.'
    },
    {
      icon: Award,
      title: 'Inter-School Robotics League',
      desc: 'Annual championship hosted across Bangalore giving your students regional and national stage recognition.'
    }
  ]

  return (
    <section id="about" className="py-14 sm:py-20 md:py-28 relative bg-white border-t border-slate-200 overflow-hidden z-10">
      <div id="hub" className="absolute -top-10" />
      {/* Background graphic elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Bangalore Story */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
              <MapPin className="w-3.5 h-3.5" />
              <span>Bangalore Headquarters & R&D</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display mb-4">
              Born in Bangalore. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-500 to-slate-900">
                Powering India's Next Generation.
              </span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
              Bangalore is the heart of India's aerospace, robotics, and artificial intelligence revolutions. Infonex brings that exact industry-grade spirit directly into your school’s daily timetable.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
              Unlike generic textbook distributors, we are actual robotics engineers and educators who build the hardware, train your teachers, and ensure your lab thrives year after year.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenDemoModal}
                className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs sm:text-sm shadow-xl shadow-brand-orange/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Schedule a Campus Visit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              
              <div className="text-[11px] sm:text-xs text-slate-600">
                <span className="font-bold text-slate-900 block">Tech Experience Center:</span>
                Koramangala / HSR Corridor, Bangalore
              </div>
            </div>
          </div>

          {/* Right: Bangalore Advantage Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-blue/50 transition-all shadow-sm"
                >
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white text-brand-blue w-fit mb-3 border border-slate-200 shadow-xs">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-display mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
