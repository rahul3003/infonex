'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, School, CheckCircle } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Dr. Ramesh Sundaram',
      role: 'Principal, Greenfield International Academy',
      city: 'Bangalore, Karnataka',
      quote: 'Before Infonex, our robotics period was just theoretical PPTs. Now, students from Grade 4 onwards build autonomous line-following rovers. The transformation in their problem-solving is unbelievable.',
      rating: 5,
      impact: '100% Student Participation'
    },
    {
      name: 'Priyanka Menon',
      role: 'Head of STEM & CS, St. Xavier High',
      city: 'Whitefield, Bangalore',
      quote: 'The Infonex teacher training and ongoing engineering support make all the difference. When a sensor broke during our annual exhibition, their Bangalore hub dispatched replacement modules in 4 hours.',
      rating: 5,
      impact: 'Zero Lab Downtime'
    },
    {
      name: 'Anand Kulkarni',
      role: 'Trustee, Vidya Mandir Trust',
      city: 'Mysore, Karnataka',
      quote: 'Setting up an Atal Tinkering Lab with Infonex was seamless. They handled workbenches, 3D printers, safety compliance, and NEP 2020 curriculum mapping. Delighted with our tech leap.',
      rating: 5,
      impact: 'Best STEM School Award'
    }
  ]

  const partnerLogos = [
    'Greenfield International', 'St. Xavier High Bangalore', 'Delhi Public School Partner',
    'National Public School Affiliate', 'Presidency Academy', 'Vidyashilp Network'
  ]

  return (
    <section className="py-14 sm:py-20 md:py-28 relative bg-white border-t border-slate-200 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Quote className="w-3.5 h-3.5" />
            <span>Voices from the Classrooms</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display">
            Trusted by 120+ <span className="text-brand-orange">Visionary Schools</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base mt-2 max-w-2xl mx-auto leading-relaxed">
            Read how educators, principals, and school trustees have transformed student outcomes with Infonex STEM labs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7 mb-12 sm:mb-16">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-5 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 hover:border-brand-blue/50 transition-all flex flex-col justify-between shadow-lg shadow-slate-200/50"
            >
              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed mb-5 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3.5 border-t border-slate-200">
                <div className="font-bold text-slate-900 text-sm sm:text-base font-display">
                  {t.name}
                </div>
                <div className="text-xs text-brand-orange font-bold">
                  {t.role}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {t.city}
                </div>
                <div className="mt-2.5 inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <CheckCircle className="w-3 h-3" />
                  <span>{t.impact}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* School Logo Bar */}
        <div className="py-6 px-4 sm:px-6 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-xs">
          <p className="text-[11px] sm:text-xs uppercase tracking-widest text-slate-600 font-bold mb-4">
            Partnering With Progressive Institutions Across Karnataka & South India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-800">
            {partnerLogos.map((sch, i) => (
              <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white border border-slate-200 shadow-xs">
                <School className="w-3.5 h-3.5 text-brand-blue" />
                <span className="text-xs sm:text-sm">{sch}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
