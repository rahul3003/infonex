'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ShoppingBag, ArrowLeft, ArrowRight, ShieldCheck, Truck, 
  RotateCcw, Sparkles, CheckCircle2, Filter, Search, Phone, 
  Mail, Star, Cpu, Bot, Zap, Box, Tag
} from 'lucide-react'
import LogoAnimated from '../../components/LogoAnimated'
import DemoModal from '../../components/DemoModal'
import Footer from '../../components/Footer'

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [modalInitialData, setModalInitialData] = useState(null)

  const handleOpenQuote = (product) => {
    setModalInitialData({
      kit: product.title,
      notes: `Interested in purchasing ${product.title} (${product.price}). Inquiring about institutional / bulk order.`
    })
    setIsDemoModalOpen(true)
  }

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'robotics', name: 'Robotics & Rovers' },
    { id: 'ai', name: 'AI & Vision' },
    { id: 'iot', name: 'IoT & Smart Cities' },
    { id: 'makers', name: '3D Printers & Makers' },
    { id: 'spares', name: 'Sensors & Spares' }
  ]

  const products = [
    {
      id: 'spark-bot',
      category: 'robotics',
      title: 'Infonex SparkBot v2 Rover',
      badge: 'Bestseller',
      badgeColor: 'bg-brand-blue text-white',
      grades: 'Grades 3 - 7',
      price: '₹4,499',
      originalPrice: '₹5,999',
      rating: 4.9,
      reviews: 128,
      dispatch: 'Ships in 24 Hrs',
      description: 'Rugged educational robot rover with dual DC gear motors, obstacle avoidance, line-following sensors, and RGB LED matrix. Compatible with Scratch 3.0 & Python.',
      specs: ['Dual Ultrasonic Sensors', 'Li-Ion Rechargeable Battery', 'Bluetooth Wireless Link', '24 Step-by-Step Lessons Included'],
      inStock: true
    },
    {
      id: 'quad-vision',
      category: 'ai',
      title: 'Infonex OmniVision AI Rover',
      badge: 'Flagship AI',
      badgeColor: 'bg-brand-orange text-white',
      grades: 'Grades 6 - 10',
      price: '₹12,999',
      originalPrice: '₹16,500',
      rating: 5.0,
      reviews: 84,
      dispatch: 'Ships in 24 Hrs',
      description: 'Mecanum-wheel omnidirectional rover powered by an onboard AI vision coprocessor. Real-time face tracking, gesture control, traffic sign detection, and edge neural inference.',
      specs: ['4x High-Torque Mecanum Wheels', 'HD Camera & AI Neural Core', 'Edge TensorFlow Lite Inference', '32 Advanced AI Projects'],
      inStock: true
    },
    {
      id: 'iot-smartcity',
      category: 'iot',
      title: 'Infonex Smart City & Agritech Station',
      badge: 'NEP 2020 Aligned',
      badgeColor: 'bg-cyan-500 text-white',
      grades: 'Grades 5 - 10',
      price: '₹7,899',
      originalPrice: '₹9,999',
      rating: 4.8,
      reviews: 62,
      dispatch: 'Ships in 24 Hrs',
      description: 'Connected sensor station measuring soil moisture, water level, temperature, and AQI with automated micro-pump irrigation and live web IoT dashboard.',
      specs: ['ESP32 Dual-Core IoT Hub', '12 Industrial STEM Sensors', 'Micro-Irrigation Submersible Pump', '20 Sustainable Tech Labs'],
      inStock: true
    },
    {
      id: 'bionic-arm',
      category: 'robotics',
      title: 'Infonex 5-DOF Metal Bionic Arm',
      badge: 'Senior & College',
      badgeColor: 'bg-indigo-500 text-white',
      grades: 'Grades 8 - 12+',
      price: '₹14,499',
      originalPrice: '₹18,000',
      rating: 4.9,
      reviews: 47,
      dispatch: 'Ships in 48 Hrs',
      description: 'High-torque robotic arm with all-metal gear servos, wearable flex-sensor control glove, inverse kinematics library, and automated pick-and-place capabilities.',
      specs: ['5x High-Torque Metal Servos', 'Wearable Flex Sensor Glove', 'Inverse Kinematics Library', '18 Industrial Automation Labs'],
      inStock: true
    },
    {
      id: 'tinymaker-3d',
      category: 'makers',
      title: 'Infonex Maker 3D Studio Printer',
      badge: 'School-Safe Enclosed',
      badgeColor: 'bg-emerald-500 text-white',
      grades: 'Grades 4 - 12',
      price: '₹28,999',
      originalPrice: '₹34,999',
      rating: 4.9,
      reviews: 91,
      dispatch: 'White-Glove Delivery',
      description: 'Fully enclosed, child-safe 3D printer pre-calibrated for classrooms. Comes with bio-safe PLA filament spools, spare nozzles, and 25 3D CAD design lesson modules.',
      specs: ['Fully Enclosed Safety Hood', 'Auto Bed Leveling & Heated Plate', 'Includes 2kg Bio-PLA Filament', 'Tinkercad & CAD Curriculum'],
      inStock: true
    },
    {
      id: 'drone-avionics',
      category: 'makers',
      title: 'Infonex AeroDrone Lab Kit',
      badge: 'Aeronautics',
      badgeColor: 'bg-sky-500 text-white',
      grades: 'Grades 7 - 12',
      price: '₹9,999',
      originalPrice: '₹12,499',
      rating: 4.8,
      reviews: 38,
      dispatch: 'Ships in 24 Hrs',
      description: 'Programmable educational quadcopter drone featuring 360° propeller safety cages, optical flow sensor for indoor hover lock, and block/Python aerial choreography.',
      specs: ['Enclosed Propeller Cage', 'Optical Flow Hover Stabilization', 'Python Flight Scripting SDK', '16 Flight Physics Labs'],
      inStock: true
    },
    {
      id: 'spares-pack',
      category: 'spares',
      title: 'ATL Essential Sensor & Motor Refill Pack',
      badge: 'Refill Pack',
      badgeColor: 'bg-amber-500 text-white',
      grades: 'All Grades',
      price: '₹2,499',
      originalPrice: '₹3,200',
      rating: 5.0,
      reviews: 154,
      dispatch: 'Ships in 24 Hrs',
      description: 'The master replacement kit for school innovation labs: 4x DC gear motors, 6x ultrasonic sensors, 10x IR modules, jumper wires, breadboards, and wheels.',
      specs: ['4x TT Geared Motors', '6x Ultrasonic & IR Sensors', '120x High-Grade Jumper Leads', '2x Solderless Breadboards'],
      inStock: true
    },
    {
      id: 'microcontroller-pack',
      category: 'spares',
      title: 'Infonex SparkCore ESP32 Board (Pack of 5)',
      badge: 'School Multi-Pack',
      badgeColor: 'bg-purple-500 text-white',
      grades: 'Grades 5 - 12',
      price: '₹3,799',
      originalPrice: '₹4,999',
      rating: 4.9,
      reviews: 73,
      dispatch: 'Ships in 24 Hrs',
      description: 'Custom educational microcontrollers with labeled pinouts, USB-C programming, built-in Wi-Fi & Bluetooth, and reverse polarity circuit protection.',
      specs: ['Dual-Core 240MHz ESP32', 'Type-C USB Connector', 'Overcurrent Circuit Protection', 'Pre-Loaded Bootloader'],
      inStock: true
    }
  ]

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-brand-orange selection:text-white">
      
      {/* Top Announcement Bar */}
      <div className="bg-slate-100 border-b border-slate-200 py-2 px-4 text-xs relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-slate-600 gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-orange/15 text-brand-orange font-semibold text-[10px] uppercase tracking-wider shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
              Direct From Bangalore R&D
            </span>
            <span className="text-slate-500 hidden sm:inline">
              Official Infonex Hardware Store • School Purchase Orders Accepted
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] shrink-0">
            <a href="tel:+918000000000" className="flex items-center gap-1.5 text-slate-600 hover:text-brand-orange transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand-blue" />
              <span>Bulk Enquiries: +91 (80) 4122-STEM</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center group shrink-0">
              <LogoAnimated size="default" showText={true} showTagline={true} theme="light" />
            </Link>
            <div className="hidden md:flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600">
              <ShoppingBag className="w-3.5 h-3.5 text-brand-orange" />
              <span className="text-slate-900 font-bold">STORE FRONT</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 font-medium text-xs sm:text-sm border border-slate-200 transition-all flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <button
              onClick={() => handleOpenQuote({ title: 'School Bulk Order', price: 'Institutional' })}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-lg shadow-brand-orange/30 flex items-center gap-1.5 cursor-pointer"
            >
              <Tag className="w-4 h-4" />
              <span>Get School Quote</span>
            </button>
          </div>

        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-orange/30 text-brand-orange text-xs font-semibold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NEP 2020 & ATL Ready Hardware Kits</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-display">
            Infonex Robotics & STEM <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-500 to-orange-600">Hardware Store</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Direct institutional and retail kits engineered in Bangalore. Every kit comes pre-calibrated with grade-mapped curriculum, teacher guides, and zero hardware downtime guarantee.
          </p>

          {/* Quick Value Props */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2.5 text-left">
              <Truck className="w-5 h-5 text-brand-blue shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-900">24-48 Hr Dispatch</div>
                <div className="text-[10px] text-slate-500">Direct from Bangalore Hub</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2.5 text-left">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-900">1 Year Warranty</div>
                <div className="text-[10px] text-slate-500">Instant component swap</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2.5 text-left">
              <RotateCcw className="w-5 h-5 text-brand-orange shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-900">Free Spares Policy</div>
                <div className="text-[10px] text-slate-500">For partner institutions</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2.5 text-left">
              <Tag className="w-5 h-5 text-purple-500 shrink-0" />
              <div>
                <div className="text-xs font-bold text-slate-900">Bulk School Pricing</div>
                <div className="text-[10px] text-slate-500">Up to 25% off on 10+ sets</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-6 border-b border-slate-200 sticky top-[72px] z-30 bg-white/95 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/25'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat.name}
                </button>
              )
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search kits, rovers, sensors..."
              className="w-full pl-9 pr-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-blue"
            />
          </div>

        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              {categories.find(c => c.id === activeCategory)?.name || 'Kits'}
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Showing {filteredProducts.length} items</p>
          </div>
          <span className="text-xs text-brand-orange font-mono font-medium">All prices include GST</span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-slate-500 text-sm">No products found matching your search.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-3 px-4 py-1.5 rounded-full bg-slate-200 text-xs text-slate-800 hover:bg-brand-orange hover:text-white"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-white border border-slate-200 hover:border-slate-400 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-md shadow-slate-100"
              >
                <div>
                  {/* Card Header with Badges */}
                  <div className="p-5 pb-3 flex items-start justify-between gap-2 border-b border-slate-100">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${product.badgeColor}`}>
                      {product.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
                      {product.grades}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-brand-orange transition-colors">
                      {product.title}
                    </h3>

                    {/* Ratings */}
                    <div className="flex items-center gap-1.5 text-xs">
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-slate-800 font-bold">{product.rating}</span>
                      <span className="text-slate-500">({product.reviews} reviews)</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Specs List */}
                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer with Price & Actions */}
                <div className="p-5 pt-3 border-t border-slate-100 bg-slate-50/70">
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <span className="text-2xl font-extrabold text-slate-900 font-display">{product.price}</span>
                      <span className="text-xs text-slate-400 line-through ml-2">{product.originalPrice}</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {product.dispatch}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleOpenQuote(product)}
                      className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Tag className="w-3.5 h-3.5 text-brand-blue" />
                      <span>Quote</span>
                    </button>

                    <button
                      onClick={() => handleOpenQuote(product)}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white text-xs font-bold shadow-md shadow-brand-orange/20 hover:scale-[1.02] transition-transform cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Buy / Order</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Institutional Inquiry Callout */}
      <section className="py-12 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-2">
            Setting Up a School or College Innovation Lab?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            We provide institutional turnkey bundles with custom lab furniture, master trainers, teacher manuals, and full NEP 2020 syllabus integration.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => handleOpenQuote({ title: 'Complete Turnkey Lab Setup', price: 'Turnkey Package' })}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white text-sm font-bold shadow-lg shadow-brand-orange/30 cursor-pointer hover:scale-105 transition-all"
            >
              Request Institutional Proposal
            </button>
            <Link
              href="/courses"
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-700 text-sm font-medium border border-slate-200 transition-colors shadow-sm"
            >
              Explore Infonex Curriculum
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenDemoModal={() => handleOpenQuote({ title: 'Footer Inquiry', price: 'Standard' })} />

      {/* Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialData={modalInitialData}
      />

    </div>
  )
}
