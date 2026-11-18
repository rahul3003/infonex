'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, MapPin, Phone, ArrowRight, Bot, Cpu, BookOpen, Calculator, Layers } from 'lucide-react'
import LogoAnimated from './LogoAnimated'

export default function Navbar({ onOpenDemoModal }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Core Pillars', href: '#pillars', icon: Cpu },
    { name: 'Turnkey Labs', href: '#labs', icon: Bot },
    { name: 'Kits & Hardware', href: '#kits', icon: Layers },
    { name: 'Curriculum K-12', href: '#curriculum', icon: BookOpen },
    { name: 'Lab Estimator', href: '#estimator', icon: Calculator },
  ]

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-brand-navy-darkest/95 border-b border-brand-navy-border/50 py-2 px-4 text-xs relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-slate-300 gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-orange/20 text-brand-orange font-semibold text-[10px] uppercase tracking-wider shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
              NEP 2020 Aligned
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:inline font-medium text-slate-300 text-xs">
              Planting Tech Seeds in Every Classroom across India
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] shrink-0">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span>Bangalore, Karnataka</span>
            </div>
            <span className="text-slate-600 hidden md:inline">|</span>
            <a 
              href="tel:+918000000000" 
              className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-brand-orange transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue shrink-0" />
              <span>+91 (80) 4122-STEM</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-brand-navy-darkest/95 backdrop-blur-xl border-b border-brand-navy-border shadow-2xl py-2.5' 
            : 'bg-brand-navy-darkest/75 backdrop-blur-md border-b border-brand-navy-border/40 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo with formation animation */}
            <a href="#" className="flex items-center group shrink-0">
              <LogoAnimated size="default" showText={true} showTagline={true} />
            </a>

            {/* Desktop Navigation links pill */}
            <nav className="hidden lg:flex items-center gap-1 bg-brand-navy-surface/80 border border-brand-navy-border/80 rounded-full px-3 py-1.5 backdrop-blur-xl shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-white rounded-full transition-all duration-200 hover:bg-brand-blue/15 hover:text-white whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Side: Primary CTA */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenDemoModal}
                className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white text-xs md:text-sm font-bold shadow-lg shadow-brand-orange/30 flex items-center gap-2 border border-brand-orange/40"
              >
                <span className="relative z-10 whitespace-nowrap">Book Demo Lab</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform shrink-0" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-brand-navy-surface border border-brand-navy-border text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-brand-orange" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[108px] z-50 p-4 bg-brand-navy-darkest/98 backdrop-blur-2xl border-b border-brand-navy-border lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-200 hover:text-white hover:bg-brand-navy-surface transition-all font-medium text-sm"
                  >
                    <div className="p-2 rounded-lg bg-brand-blue/10 text-brand-blue shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{link.name}</span>
                  </a>
                )
              })}

              <div className="pt-3 border-t border-brand-navy-border/60 flex flex-col gap-2 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenDemoModal()
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white font-bold text-sm shadow-lg shadow-brand-orange/30 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Free School Demo Lab</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
