'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, School, Mail, Phone, User, MapPin, Send, CheckCircle2 } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function DemoModal({ isOpen, onClose, initialData = null }) {
  const [formData, setFormData] = useState({
    schoolName: '',
    contactPerson: '',
    email: '',
    phone: '',
    city: 'Bangalore',
    interest: 'Turnkey Robotics & STEM Lab',
    studentStrength: initialData?.studentCount || 250,
    comments: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        studentStrength: initialData.studentCount || prev.studentStrength,
        interest: initialData.tier || prev.interest,
        comments: `Estimated for ${initialData.studentCount || 250} students (${initialData.gradeLevel || 'Composite'} level).`
      }))
    }
  }, [initialData])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)

      // Fire celebratory confetti!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0090FF', '#FF6B00', '#FFA114', '#00B4D8', '#FFFFFF']
        })
      } catch (err) {
        // Fallback gracefully
      }
    }, 700)
  }

  const handleReset = () => {
    setSubmitted(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-brand-navy-darkest/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl bg-brand-navy-surface border border-brand-navy-border shadow-2xl p-5 sm:p-7 md:p-8 my-auto max-h-[92vh] overflow-y-auto"
        >
          {/* Ambient top glow */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-brand-orange/15 rounded-full blur-2xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 sm:p-2 rounded-xl bg-brand-navy-darkest/80 border border-brand-navy-border text-slate-300 hover:text-white hover:border-brand-orange transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-orange/15 text-brand-orange text-[10px] sm:text-xs font-bold uppercase tracking-wider w-fit mb-2.5">
                <Sparkles className="w-3 h-3" />
                <span>On-Campus & Online Sessions</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-display">
                Book a Free <span className="text-brand-orange">School Demo Lab</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 mb-5 leading-relaxed">
                Our Bangalore STEM specialists will demonstrate live robotics kits, student projects, and explain turnkey ATL/STEM setup for your faculty.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="text-[11px] sm:text-xs font-bold text-slate-300 mb-1 block">
                      School Name *
                    </label>
                    <div className="relative">
                      <School className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={formData.schoolName}
                        onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                        placeholder="e.g. Cambridge High"
                        className="w-full pl-8 sm:pl-9 pr-3 py-2 sm:py-2.5 rounded-xl bg-brand-navy-darkest border border-brand-navy-border text-white text-xs sm:text-sm focus:border-brand-orange outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] sm:text-xs font-bold text-slate-300 mb-1 block">
                      Contact Person *
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="Dr. Anita Sharma"
                        className="w-full pl-8 sm:pl-9 pr-3 py-2 sm:py-2.5 rounded-xl bg-brand-navy-darkest border border-brand-navy-border text-white text-xs sm:text-sm focus:border-brand-orange outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="text-[11px] sm:text-xs font-bold text-slate-300 mb-1 block">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="principal@school.edu.in"
                        className="w-full pl-8 sm:pl-9 pr-3 py-2 sm:py-2.5 rounded-xl bg-brand-navy-darkest border border-brand-navy-border text-white text-xs sm:text-sm focus:border-brand-orange outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] sm:text-xs font-bold text-slate-300 mb-1 block">
                      Phone / WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full pl-8 sm:pl-9 pr-3 py-2 sm:py-2.5 rounded-xl bg-brand-navy-darkest border border-brand-navy-border text-white text-xs sm:text-sm focus:border-brand-orange outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="text-[11px] sm:text-xs font-bold text-slate-300 mb-1 block">
                      City / Location
                    </label>
                    <div className="relative">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Bangalore / Pan-India"
                        className="w-full pl-8 sm:pl-9 pr-3 py-2 sm:py-2.5 rounded-xl bg-brand-navy-darkest border border-brand-navy-border text-white text-xs sm:text-sm focus:border-brand-orange outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] sm:text-xs font-bold text-slate-300 mb-1 block">
                      Primary Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl bg-brand-navy-darkest border border-brand-navy-border text-white text-xs sm:text-sm focus:border-brand-orange outline-none"
                    >
                      <option value="Turnkey Robotics & STEM Lab">Turnkey Robotics Lab</option>
                      <option value="Atal Tinkering Lab (ATL)">Atal Tinkering Lab (ATL)</option>
                      <option value="Robotics Hardware Kits Sample">Hardware Kits Sample</option>
                      <option value="Teacher STEM Certification">Teacher Certification</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] sm:text-xs font-bold text-slate-300 mb-1 block">
                    Notes / Requirements
                  </label>
                  <textarea
                    rows={2}
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    placeholder="Tell us about student count or preferred demo date..."
                    className="w-full px-3 py-2 rounded-xl bg-brand-navy-darkest border border-brand-navy-border text-white text-xs sm:text-sm focus:border-brand-orange outline-none resize-none"
                  />
                </div>

                <div className="pt-1">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white font-bold text-xs sm:text-sm shadow-xl shadow-brand-orange/30 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Scheduling Demo...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>Confirm Free School Demo</span>
                      </>
                    )}
                  </motion.button>
                  <p className="text-[10px] sm:text-[11px] text-center text-slate-400 mt-1.5">
                    Our team will contact you within 2-4 business hours. No obligations.
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-6 sm:py-8 text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center mb-3">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-1.5">
                Demo Request Confirmed!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto mb-5 leading-relaxed">
                Thank you, <span className="font-semibold text-white">{formData.contactPerson}</span> from <span className="font-semibold text-brand-orange">{formData.schoolName}</span>. 
                Our Bangalore STEM team will contact you via <span className="font-semibold text-white">{formData.phone}</span>.
              </p>
              <button
                onClick={handleReset}
                className="px-5 py-2 rounded-xl bg-brand-navy-light text-white font-bold text-xs hover:bg-brand-orange transition-colors"
              >
                Close & Return
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  )
}
