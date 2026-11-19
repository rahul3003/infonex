'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, Camera, Trophy, Calendar, MapPin, Users, 
  ChevronLeft, ChevronRight, Maximize2, X, ArrowRight,
  Award, Play, Pause, ExternalLink
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import DemoModal from '../../components/DemoModal'

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeSlide, setActiveSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  // Featured Event Carousel Data (Highlights)
  const featuredEvents = [
    {
      id: 'feat-1',
      title: 'Bangalore Inter-School Robotics Championship 2026',
      subtitle: 'Over 48 schools and 500+ young engineers competing in autonomous rover maze navigation and AI computer vision challenges.',
      date: 'November 2026',
      location: 'Kanteerava Arena, Bangalore',
      attendees: '520+ Students & Mentors',
      category: 'Championship League',
      badgeColor: 'bg-brand-orange text-white',
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=85'
    },
    {
      id: 'feat-2',
      title: 'Hands-On Robotics & Circuit Prototyping Bootcamp',
      subtitle: 'Middle school students building dual-motor obstacle rovers and breadboard logic controllers at DPS Bangalore.',
      date: 'October 2026',
      location: 'DPS South Campus, Bangalore',
      attendees: '180 Students Certified',
      category: 'Classroom Workshop',
      badgeColor: 'bg-brand-blue text-white',
      imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85'
    },
    {
      id: 'feat-3',
      title: 'Turnkey ATL Innovation Lab Grand Inauguration',
      subtitle: 'Inauguration of a 30-seater physical computing and 3D printing laboratory by school trustees and Infonex master trainers.',
      date: 'September 2026',
      location: 'National Hill View Academy, Bangalore',
      attendees: 'Faculty & Management',
      category: 'Lab Inauguration',
      badgeColor: 'bg-emerald-500 text-white',
      imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=85'
    },
    {
      id: 'feat-4',
      title: 'Autonomous Drone Flight & Avionics Demonstration',
      subtitle: 'Indoor optical flow hover testing and Python flight choreography executed by high school aeronautics students.',
      date: 'August 2026',
      location: 'Greenwood High International, Bangalore',
      attendees: '90 High Schoolers',
      category: 'Avionics Expo',
      badgeColor: 'bg-sky-500 text-white',
      imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1600&q=85'
    }
  ]

  // All Event Photographs for the Grid
  const eventPhotos = [
    {
      id: 1,
      category: 'competitions',
      title: 'Inter-School Rover Racing Finals',
      event: 'Bangalore STEM Olympiad',
      date: 'Nov 12, 2026',
      location: 'Bangalore Arena',
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80',
      tag: 'Competition',
      tagColor: 'bg-brand-orange text-white'
    },
    {
      id: 2,
      category: 'workshops',
      title: 'Breadboard Circuit Prototyping',
      event: 'Grade 6 Practical Electronics',
      date: 'Nov 04, 2026',
      location: 'DPS Bangalore South',
      imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
      tag: 'Workshop',
      tagColor: 'bg-brand-blue text-white'
    },
    {
      id: 3,
      category: 'labs',
      title: 'Innovation Lab Ribbon Cutting',
      event: 'ATL Lab Launch',
      date: 'Oct 28, 2026',
      location: 'National Hill View Public',
      imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
      tag: 'Inauguration',
      tagColor: 'bg-emerald-500 text-white'
    },
    {
      id: 4,
      category: 'workshops',
      title: 'Autonomous Drone Flight Demonstration',
      event: 'AeroDrone Bootcamp',
      date: 'Oct 20, 2026',
      location: 'Greenwood High Campus',
      imageUrl: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1000&q=80',
      tag: 'Workshop',
      tagColor: 'bg-sky-500 text-white'
    },
    {
      id: 5,
      category: 'competitions',
      title: 'AI Computer Vision Hackathon',
      event: 'Young Innovators League',
      date: 'Oct 14, 2026',
      location: 'Whitefield Tech Center',
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
      tag: 'Hackathon',
      tagColor: 'bg-purple-500 text-white'
    },
    {
      id: 6,
      category: 'awards',
      title: 'National Olympiad Champions Trophy',
      event: 'Annual Awards Gala',
      date: 'Sep 30, 2026',
      location: 'IISc Auditorium, Bangalore',
      imageUrl: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1000&q=80',
      tag: 'Awards',
      tagColor: 'bg-amber-500 text-white'
    },
    {
      id: 7,
      category: 'workshops',
      title: '3D CAD & Prototyping Workshop',
      event: 'Maker Studio Session',
      date: 'Sep 22, 2026',
      location: 'Infonex R&D Lab',
      imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80',
      tag: '3D Workshop',
      tagColor: 'bg-pink-500 text-white'
    },
    {
      id: 8,
      category: 'workshops',
      title: 'Microcontroller Firmware Sprint',
      event: 'ESP32 IoT Bootcamp',
      date: 'Sep 15, 2026',
      location: 'St. Joseph’s Academy',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
      tag: 'Electronics',
      tagColor: 'bg-indigo-500 text-white'
    },
    {
      id: 9,
      category: 'labs',
      title: 'School Lab Engineering Workstations',
      event: 'Hardware Deployment',
      date: 'Sep 08, 2026',
      location: 'Brigade Gateway School',
      imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80',
      tag: 'Lab Setup',
      tagColor: 'bg-emerald-500 text-white'
    },
    {
      id: 10,
      category: 'competitions',
      title: 'Student Robotics Collaborative Sprint',
      event: 'Inter-College Hackathon',
      date: 'Aug 29, 2026',
      location: 'Koramangala Hub',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
      tag: 'Competition',
      tagColor: 'bg-brand-orange text-white'
    },
    {
      id: 11,
      category: 'awards',
      title: 'Annual Science Fair Exhibition',
      event: 'Robotics Project Showcase',
      date: 'Aug 18, 2026',
      location: 'Bengaluru Tech Expo',
      imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1000&q=80',
      tag: 'Exhibition',
      tagColor: 'bg-yellow-500 text-black'
    },
    {
      id: 12,
      category: 'workshops',
      title: 'Autonomous AI Rover Track Testing',
      event: 'OpenCV Computer Vision Lab',
      date: 'Aug 10, 2026',
      location: 'TVS Academy Campus',
      imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80',
      tag: 'AI Lab',
      tagColor: 'bg-cyan-500 text-white'
    }
  ]

  // Auto-cycle Featured Carousel every 6 seconds
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % featuredEvents.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, featuredEvents.length])

  const nextSlide = () => {
    setActiveSlide(prev => (prev + 1) % featuredEvents.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setActiveSlide(prev => (prev - 1 + featuredEvents.length) % featuredEvents.length)
    setIsAutoPlaying(false)
  }

  const categories = [
    { id: 'all', name: 'All Events (12)' },
    { id: 'competitions', name: 'Competitions & Arenas' },
    { id: 'workshops', name: 'Classroom Workshops' },
    { id: 'labs', name: 'ATL Lab Inaugurations' },
    { id: 'awards', name: 'Awards & Science Fairs' }
  ]

  const filteredPhotos = activeCategory === 'all'
    ? eventPhotos
    : eventPhotos.filter(p => p.category === activeCategory)

  const currentFeatured = featuredEvents[activeSlide]

  return (
    <div className="relative min-h-screen bg-brand-navy-darkest text-slate-100 selection:bg-brand-orange selection:text-white">
      
      {/* Sticky Appbar */}
      <Navbar onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      <main className="relative z-10">
        
        {/* ========================================================
            SECTION 1: FEATURED EVENT KINETIC 3D CAROUSEL
            ======================================================== */}
        <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 bg-gradient-to-b from-brand-navy-darker to-brand-navy-darkest border-b border-brand-navy-border/60 overflow-hidden">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header Title */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-navy-surface border border-brand-orange/30 text-brand-orange text-xs font-semibold mb-2">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Official Event Photographic Gallery</span>
                </div>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
                  Moments from Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-400 to-yellow-200">School Events</span>
                </h1>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-full bg-brand-navy-surface hover:bg-brand-navy-light text-slate-300 hover:text-white border border-brand-navy-border transition-colors cursor-pointer"
                  title="Previous Event"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-full bg-brand-navy-surface hover:bg-brand-navy-light text-slate-300 hover:text-white border border-brand-navy-border transition-colors cursor-pointer"
                  title="Next Event"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="p-2.5 rounded-full bg-brand-navy-surface hover:bg-brand-navy-light text-slate-300 hover:text-white border border-brand-navy-border transition-colors cursor-pointer text-xs"
                  title={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* The Cinematic Carousel Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-navy-border/80 h-[380px] sm:h-[480px] lg:h-[520px] group">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeatured.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  {/* Event Photographic Image */}
                  <img
                    src={currentFeatured.imageUrl}
                    alt={currentFeatured.title}
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-darkest via-brand-navy-darkest/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-darkest/80 via-transparent to-transparent" />

                  {/* Text & Meta Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12 z-20 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${currentFeatured.badgeColor}`}>
                        {currentFeatured.category}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono">
                        <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                        <span>{currentFeatured.date}</span>
                      </span>
                      <span className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono">
                        <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                        <span>{currentFeatured.location}</span>
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display mb-3 tracking-tight">
                      {currentFeatured.title}
                    </h2>

                    <p className="text-xs sm:text-base text-slate-200 line-clamp-2 sm:line-clamp-none max-w-2xl leading-relaxed mb-4">
                      {currentFeatured.subtitle}
                    </p>

                    <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-emerald-400" />
                        <span>{currentFeatured.attendees}</span>
                      </div>
                      <span>•</span>
                      <button
                        onClick={() => {
                          const idx = eventPhotos.findIndex(p => p.title.toLowerCase().includes('inter-school') || p.id === 1)
                          setLightboxIndex(idx >= 0 ? idx : 0)
                        }}
                        className="text-brand-orange hover:text-brand-orange-hover font-bold inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>View Photo in Fullscreen</span>
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Carousel Pagination Dots */}
              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-30 flex items-center gap-2">
                {featuredEvents.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveSlide(i)
                      setIsAutoPlaying(false)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeSlide === i ? 'w-8 bg-brand-orange' : 'w-2 bg-white/40 hover:bg-white/80'
                    }`}
                    title={`Slide ${i + 1}`}
                  />
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================
            SECTION 2: CATEGORY FILTER TABS
            ======================================================== */}
        <section className="py-5 border-b border-brand-navy-border/60 sticky top-[95px] z-30 bg-brand-navy-darkest/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/25'
                        : 'bg-brand-navy-surface text-slate-300 hover:text-white hover:bg-brand-navy-light border border-brand-navy-border'
                    }`}
                  >
                    {cat.name}
                  </button>
                )
              })}
            </div>

            <span className="text-xs font-mono text-slate-400">
              Showing {filteredPhotos.length} Event Photographs
            </span>

          </div>
        </section>

        {/* ========================================================
            SECTION 3: EVENT PHOTOGRID (BENTO / MASONRY)
            ======================================================== */}
        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-3xl overflow-hidden bg-brand-navy-darker border border-brand-navy-border/80 shadow-xl cursor-pointer hover:border-brand-blue/60 transition-all duration-300"
              >
                {/* Photo Image with Hover Zoom */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-darkest via-brand-navy-darkest/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md ${photo.tagColor}`}>
                      {photo.tag}
                    </span>
                  </div>

                  {/* Top Right Expand Icon Button */}
                  <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Text Information */}
                  <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-300 mb-1.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-brand-orange shrink-0" />
                        <span>{photo.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 truncate">
                        <MapPin className="w-3 h-3 text-brand-blue shrink-0" />
                        <span className="truncate">{photo.location}</span>
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white font-display group-hover:text-brand-orange transition-colors">
                      {photo.title}
                    </h3>

                    <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">
                      {photo.event}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </section>

        {/* ========================================================
            SECTION 4: HOST AN EVENT CALLOUT FOR SCHOOLS
            ======================================================== */}
        <section className="py-16 bg-gradient-to-r from-brand-navy-darker via-brand-navy-surface to-brand-navy-darker border-t border-brand-navy-border/60">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-semibold mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>Bring Infonex to Your Campus</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display mb-3">
              Want to Host a Robotics Championship or Workshop?
            </h2>

            <p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              We organize hands-on STEM hackathons, drone arenas, and faculty bootcamps for partner schools across Karnataka and nationwide.
            </p>

            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-lg shadow-brand-orange/30 hover:scale-105 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Request Event Proposal for Your School</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </main>

      {/* ========================================================
          FULL-SCREEN LIGHTBOX MODAL FOR EVENT PHOTOGRAPHS
          ======================================================== */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Lightbox Top Bar */}
            <div className="flex items-center justify-between text-white z-50">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-slate-400">
                  {lightboxIndex + 1} OF {filteredPhotos.length}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${filteredPhotos[lightboxIndex].tagColor}`}>
                  {filteredPhotos[lightboxIndex].tag}
                </span>
              </div>

              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Main Stage Image */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              <motion.img
                key={filteredPhotos[lightboxIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                src={filteredPhotos[lightboxIndex].imageUrl}
                alt={filteredPhotos[lightboxIndex].title}
                className="max-h-[70vh] sm:max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
              />

              {/* Prev / Next Stage Buttons */}
              <button
                onClick={() => setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length)}
                className="absolute left-2 sm:left-6 p-3 rounded-full bg-black/70 hover:bg-brand-orange text-white transition-colors cursor-pointer"
                title="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length)}
                className="absolute right-2 sm:right-6 p-3 rounded-full bg-black/70 hover:bg-brand-orange text-white transition-colors cursor-pointer"
                title="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Bottom Caption Bar */}
            <div className="max-w-3xl mx-auto text-center text-white z-50 pb-2">
              <h3 className="text-lg sm:text-2xl font-bold font-display">
                {filteredPhotos[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {filteredPhotos[lightboxIndex].event} • {filteredPhotos[lightboxIndex].location} ({filteredPhotos[lightboxIndex].date})
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

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
