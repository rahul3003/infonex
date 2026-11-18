'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ParallaxBackground from '../components/ParallaxBackground'
import ParallaxMarquee from '../components/ParallaxMarquee'
import InteractiveCircuitPlayground from '../components/InteractiveCircuitPlayground'
import PillarsSection from '../components/PillarsSection'
import KitsShowcase from '../components/KitsShowcase'
import LabCalculator from '../components/LabCalculator'
import CurriculumRoadmap from '../components/CurriculumRoadmap'
import BangaloreHubSection from '../components/BangaloreHubSection'
import ComparisonSection from '../components/ComparisonSection'
import TestimonialsSection from '../components/TestimonialsSection'
import Footer from '../components/Footer'
import DemoModal from '../components/DemoModal'

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [modalInitialData, setModalInitialData] = useState(null)

  const handleOpenDemoModal = () => {
    setModalInitialData(null)
    setIsDemoModalOpen(true)
  }

  const handleOpenDemoModalWithData = (data) => {
    setModalInitialData(data)
    setIsDemoModalOpen(true)
  }

  return (
    <div className="relative min-h-screen bg-brand-navy-darkest text-slate-100 overflow-x-hidden selection:bg-brand-orange selection:text-white">
      {/* Floating Multi-Layer Scroll Parallax Background (Sobra.be / Fragment.im style) */}
      <ParallaxBackground />

      {/* Sticky navigation */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      <main className="relative z-10">
        {/* Hero Section with Scroll Parallax & 3D Tilt Card */}
        <HeroSection onOpenDemoModal={handleOpenDemoModal} />

        {/* Dynamic Horizontal Parallax Marquee Ticker */}
        <ParallaxMarquee />

        {/* The 3 Signature Pillars: Robotics, AI & Coding, STEM Labs with 3D Tilt Cards */}
        <PillarsSection onOpenDemoModal={handleOpenDemoModal} />

        {/* Interactive Anatomy of Infonex Circuit Traces */}
        <InteractiveCircuitPlayground onOpenDemoModal={handleOpenDemoModal} />

        {/* Hardware, Rovers & Kits Showcase with Tab Filters & 3D Tilt */}
        <KitsShowcase onOpenDemoModal={handleOpenDemoModal} />

        {/* Interactive School Lab Setup Estimator & Cost Calculator */}
        <LabCalculator onOpenDemoModalWithData={handleOpenDemoModalWithData} />

        {/* Grade 1 to 12 NEP 2020 Curriculum Roadmap: Seed to Bloom */}
        <CurriculumRoadmap />

        {/* Why Choose Infonex Comparison vs Conventional Labs */}
        <ComparisonSection onOpenDemoModal={handleOpenDemoModal} />

        {/* Bangalore R&D Innovation Hub & Fast Logistics */}
        <BangaloreHubSection onOpenDemoModal={handleOpenDemoModal} />

        {/* Educator Testimonials & Partner School Network */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer onOpenDemoModal={handleOpenDemoModal} />

      {/* Interactive Free Demo / Lab Inquiry Modal with Confetti Celebration */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialData={modalInitialData}
      />
    </div>
  )
}
