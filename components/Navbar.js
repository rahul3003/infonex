'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, Sparkles, MapPin, Phone, ArrowRight, Home, 
  BookOpen, Info, Image as ImageIcon, Mail, ShoppingBag 
} from 'lucide-react'
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
    { name: 'Home', href: '/', icon: Home },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Gallery', href: '/gallery', icon: ImageIcon },
    { name: 'Contact Us', href: '/contact', icon: Mail },
  ]

  return (
    <>
      {/* Fixed Sticky Appbar on Scroll */}
      <div className="fixed top-0 inset-x-0 z-50 w-full shadow-2xl">
        {/* Top announcement bar */}
        <div className="bg-slate-100/95 border-b border-slate-200/80 py-2 px-4 text-xs backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-slate-700 gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-orange/15 text-brand-orange font-bold text-[10px] uppercase tracking-wider shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
              NEP 2020 Aligned
            </span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <span className="hidden sm:inline font-semibold text-slate-800 text-xs">
              Planting Tech Seeds in Every Classroom across India
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] shrink-0 font-medium">
            <div className="flex items-center gap-1.5 text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span>Bangalore, Karnataka</span>
            </div>
            <span className="text-slate-300 hidden md:inline">|</span>
            <a 
              href="tel:+918000000000" 
              className="hidden md:flex items-center gap-1.5 text-slate-700 hover:text-brand-orange transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue shrink-0" />
              <span>+91 (80) 4122-STEM</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <header 
        className={`transition-all duration-300 ${
          scrolled 
            ? 'bg-white/98 backdrop-blur-2xl border-b border-slate-200 shadow-md py-2.5' 
            : 'bg-white/92 backdrop-blur-xl border-b border-slate-200/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo with formation animation on Light Background */}
            <Link href="/" className="flex items-center group shrink-0">
              <LogoAnimated size="default" showText={true} showTagline={true} theme="light" />
            </Link>

            {/* Desktop Navigation links pill */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 border border-slate-200/90 rounded-full px-3 py-1.5 backdrop-blur-xl shadow-xs">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-slate-700 hover:text-slate-950 rounded-full transition-all duration-200 hover:bg-slate-200/80 whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Side: Primary CTA */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="/store"
                className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white text-xs md:text-sm font-bold shadow-lg shadow-brand-orange/30 flex items-center gap-2 border border-brand-orange/40 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 relative z-10" />
                <span className="relative z-10 whitespace-nowrap">Store</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform shrink-0" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.a>
            </div>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200 focus:outline-none"
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
            className="fixed inset-x-0 top-[88px] sm:top-[98px] z-50 p-4 bg-white/98 backdrop-blur-2xl border-b border-slate-200 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-800 hover:text-slate-950 hover:bg-slate-100 transition-all font-medium text-sm"
                  >
                    <div className="p-2 rounded-lg bg-brand-blue/10 text-brand-blue shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{link.name}</span>
                  </Link>
                )
              })}

              <div className="pt-3 border-t border-slate-200 flex flex-col gap-2 mt-2">
                <Link
                  href="/store"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white font-bold text-sm shadow-lg shadow-brand-orange/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Visit Store</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    {/* Spacer so page content begins neatly below fixed appbar */}
    <div className="h-[88px] sm:h-[94px] w-full shrink-0 pointer-events-none" aria-hidden="true" />
  </>
  )
}
