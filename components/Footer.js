'use client'

import React from 'react'
import LogoAnimated from './LogoAnimated'
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react'

export default function Footer({ onOpenDemoModal }) {
  return (
    <footer id="contact" className="bg-brand-navy-darkest border-t border-brand-navy-border relative pt-12 sm:pt-16 pb-10 sm:pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-brand-blue/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-brand-navy-border/60">
          
          {/* Brand Col (2 cols wide on desktop) */}
          <div className="sm:col-span-2 space-y-3 sm:space-y-4">
            <LogoAnimated size="default" showText={true} showTagline={true} />

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed mt-3">
              <span className="text-brand-orange font-semibold">Planting Tech Seeds in Every Classroom.</span> Partnering with schools, academies, and colleges across India for hands-on robotics, AI coding, and turnkey STEM laboratory infrastructure.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-[11px] sm:text-xs">Headquarters: Koramangala / HSR Corridor, Bangalore, Karnataka - 560034</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-blue shrink-0" />
                <span className="text-[11px] sm:text-xs">+91 (80) 4122-STEM / +91 98450 83921</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-orange shrink-0" />
                <span className="text-[11px] sm:text-xs">partnerships@infonex.in</span>
              </div>
            </div>
          </div>

          {/* Solution Links */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white font-display">
              Core Solutions
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs text-slate-400">
              <li><a href="#pillars" className="hover:text-brand-orange transition-colors">Robotics Engineering</a></li>
              <li><a href="#pillars" className="hover:text-brand-orange transition-colors">AI & Computer Vision</a></li>
              <li><a href="#pillars" className="hover:text-brand-orange transition-colors">CSL - Composite Skill Lab</a></li>
              <li><a href="#labs" className="hover:text-brand-orange transition-colors">Atal Tinkering Labs</a></li>
              <li><a href="#kits" className="hover:text-brand-orange transition-colors">IoT & Smart Automation</a></li>
              <li><a href="#curriculum" className="hover:text-brand-orange transition-colors">NEP 2020 Curriculum</a></li>
            </ul>
          </div>

          {/* Hardware & Kits */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white font-display">
              Hardware & Kits
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs text-slate-400">
              <li><a href="#kits" className="hover:text-brand-blue transition-colors">Infonex SparkBot v2</a></li>
              <li><a href="#kits" className="hover:text-brand-blue transition-colors">OmniVision AI Rover</a></li>
              <li><a href="#kits" className="hover:text-brand-blue transition-colors">Smart City & Agritech</a></li>
              <li><a href="#kits" className="hover:text-brand-blue transition-colors">5-DOF Bionic Arm</a></li>
              <li><a href="#kits" className="hover:text-brand-blue transition-colors">School 3D Printers</a></li>
              <li><a href="#kits" className="hover:text-brand-blue transition-colors">Classroom Drone Kit</a></li>
            </ul>
          </div>

          {/* Quick Action */}
          <div className="space-y-2.5 sm:space-y-3 sm:col-span-2 lg:col-span-1">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white font-display">
              School Partnerships
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Book a live on-campus robotics demonstration for your faculty and trustees.
            </p>
            <button
              onClick={onOpenDemoModal}
              className="w-full py-2.5 px-4 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs shadow-md transition-all text-center"
            >
              Request Free Lab Demo
            </button>
            <div className="pt-1 flex items-center gap-1.5 text-[11px] text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Govt. ATL & NITI Aayog Aligned</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-slate-400 gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} INFONEX Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-300">Bangalore, India</span>
            <span>•</span>
            <a href="#" className="hover:text-brand-orange transition-colors">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-brand-orange transition-colors">School Terms</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
