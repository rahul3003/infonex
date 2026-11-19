'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, MapPin, Clock, Send, Sparkles, 
  CheckCircle2, Building2, MessageSquare, ShieldCheck 
} from 'lucide-react'
import confetti from 'canvas-confetti'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import DemoModal from '../../components/DemoModal'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    schoolName: '',
    role: 'Principal / Management',
    phone: '',
    email: '',
    city: '',
    requirement: 'Turnkey Innovation Lab Setup',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  return (
    <div className="relative min-h-screen bg-brand-navy-darkest text-slate-100 selection:bg-brand-orange selection:text-white">
      
      {/* Sticky Appbar */}
      <Navbar onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      <main className="relative z-10">
        
        {/* Contact Hero */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-b from-brand-navy-darker to-brand-navy-darkest border-b border-brand-navy-border/60 overflow-hidden text-center">
          <div className="absolute top-10 left-1/3 w-80 h-80 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy-surface border border-brand-orange/30 text-brand-orange text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bangalore Innovation Office</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4 font-display">
              Let's Partner to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-400 to-yellow-200">Plant Tech Seeds</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Reach out to our Bangalore engineering team for lab consultations, custom syllabus design, or on-campus robotics demonstrations.
            </p>
          </div>
        </section>

        {/* Contact Details & Form Grid */}
        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 5 Cols: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-8 rounded-3xl bg-brand-navy-darker/90 border border-brand-navy-border/80 shadow-xl space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-display mb-1">
                    Bangalore Headquarters
                  </h3>
                  <p className="text-xs text-slate-400">
                    R&D Assembly, Hardware Testing & Central Logistics
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-orange/15 text-brand-orange shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-0.5">Physical Facility:</div>
                      <div className="text-slate-300 leading-relaxed text-xs">
                        Infonex STEM Labs Pvt Ltd<br />
                        Koramangala / HSR Innovation Corridor<br />
                        Bangalore, Karnataka - 560034, India
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-blue/15 text-brand-blue shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-0.5">Telephone Support:</div>
                      <a href="tel:+918000000000" className="text-slate-300 hover:text-brand-orange transition-colors text-xs block">
                        +91 (80) 4122-STEM (Mon–Sat, 9AM–6:30PM)
                      </a>
                      <a href="tel:+919880012345" className="text-slate-300 hover:text-brand-orange transition-colors text-xs block mt-0.5">
                        Direct Helpline: +91 98800 12345
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-0.5">Official Inquiries:</div>
                      <a href="mailto:partnerships@infonex.in" className="text-slate-300 hover:text-brand-orange transition-colors text-xs block">
                        partnerships@infonex.in
                      </a>
                      <a href="mailto:support@infonex.in" className="text-slate-300 hover:text-brand-orange transition-colors text-xs block mt-0.5">
                        support@infonex.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-400 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-0.5">Guaranteed SLA:</div>
                      <div className="text-slate-300 text-xs">
                        Every institutional query answered within 4 business hours.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-navy-border/60 flex items-center gap-2 text-xs text-emerald-400 font-mono">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Official Government & ATL Vendor Compliant</span>
                </div>
              </div>

            </div>

            {/* Right 7 Cols: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-brand-navy-darker/90 border border-brand-navy-border/80 shadow-2xl">
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white font-display">
                      Thank You, {formData.name || 'Educator'}!
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Your inquiry has been routed directly to our Bangalore regional team. An education consultant will reach out to you within 4 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-brand-navy-surface border border-brand-navy-border text-xs text-slate-300 hover:text-white mt-4"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white font-display mb-1">
                        Send Us an Inquiry
                      </h3>
                      <p className="text-xs text-slate-400 mb-6">
                        Complete this form to request a lab proposal or curriculum overview.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Dr. Rajesh Sharma"
                          className="w-full px-4 py-2.5 rounded-xl bg-brand-navy-surface border border-brand-navy-border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                          School / Institution Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.schoolName}
                          onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                          placeholder="e.g. Bangalore Public School"
                          className="w-full px-4 py-2.5 rounded-xl bg-brand-navy-surface border border-brand-navy-border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                          Your Role / Designation
                        </label>
                        <select
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-brand-navy-surface border border-brand-navy-border text-xs text-white focus:outline-none focus:border-brand-blue"
                        >
                          <option>Principal / Trustee</option>
                          <option>Academic Director / Dean</option>
                          <option>STEM / Science Coordinator</option>
                          <option>Computer Science Teacher</option>
                          <option>Parent / Student</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                          City & State *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Bangalore, Karnataka"
                          className="w-full px-4 py-2.5 rounded-xl bg-brand-navy-surface border border-brand-navy-border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98800 00000"
                          className="w-full px-4 py-2.5 rounded-xl bg-brand-navy-surface border border-brand-navy-border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="principal@school.edu.in"
                          className="w-full px-4 py-2.5 rounded-xl bg-brand-navy-surface border border-brand-navy-border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Primary Interest / Requirement
                      </label>
                      <select
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-brand-navy-surface border border-brand-navy-border text-xs text-white focus:outline-none focus:border-brand-blue"
                      >
                        <option>Turnkey Innovation Lab Setup (Physical Lab)</option>
                        <option>NEP 2020 K-12 Robotics Curriculum & Workbooks</option>
                        <option>Hardware Kits & SparkBot Rovers Purchase</option>
                        <option>Teacher Training & Faculty Enablement</option>
                        <option>Atal Tinkering Lab (ATL) Upgrade</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                        Additional Message / Student Strength
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share any specific requirements (e.g., student batch size, target start term)..."
                        className="w-full px-4 py-2.5 rounded-xl bg-brand-navy-surface border border-brand-navy-border text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-lg shadow-brand-orange/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry to Bangalore R&D</span>
                    </button>
                  </form>
                )}

              </div>
            </div>

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
