'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bot, Cpu, Eye, Zap, Layers, Rocket, Terminal, Radio } from 'lucide-react'

// AI, ML & Robotics tiles to flip inside grid boxes
const gridItems = [
  {
    id: 0,
    title: 'OpenCV Vision',
    category: 'Computer Vision',
    icon: Eye,
    color: '#0090FF',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 1,
    title: 'Edge AI Neural Core',
    category: 'Deep Learning',
    icon: Cpu,
    color: '#FF6B00',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    title: 'SparkBot v2 Rover',
    category: 'Autonomous Mobile',
    icon: Bot,
    color: '#0090FF',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    title: '5-DOF Bionic Arm',
    category: 'Kinematics',
    icon: Layers,
    color: '#10B981',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 4,
    title: 'ESP32 IoT Gateway',
    category: 'Connected Telemetry',
    icon: Radio,
    color: '#E5A00D',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 5,
    title: 'AeroDrone Flight SDK',
    category: 'Avionics AI',
    icon: Rocket,
    color: '#38BDF8',
    img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 6,
    title: 'Enclosed 3D Studio',
    category: 'Additive Prototyping',
    icon: Zap,
    color: '#EC4899',
    img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 7,
    title: 'TensorFlow Inference',
    category: 'Edge ML Models',
    icon: Terminal,
    color: '#A855F7',
    img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 8,
    title: 'Mecanum 360° Drive',
    category: 'Omni Robotics',
    icon: Bot,
    color: '#FF6B00',
    img: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 9,
    title: 'Lidar Point Cloud',
    category: 'SLAM Navigation',
    icon: Eye,
    color: '#06B6D4',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 10,
    title: 'Speech Recognition',
    category: 'Voice AI Systems',
    icon: Radio,
    color: '#E11D48',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 11,
    title: 'Pathfinding Matrix',
    category: 'Reinforcement Logic',
    icon: Cpu,
    color: '#22C55E',
    img: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=500&q=80'
  }
]

export default function HeroFlippingGrid() {
  // Total grid cells (e.g. 24 boxes across the hero canvas)
  const totalCells = 24

  // Set of currently flipped cell indices
  const [flippedCells, setFlippedCells] = useState({})

  // Periodically flip 1 to 2 random cells, keep them open for 2.5s, then flip back
  useEffect(() => {
    const interval = setInterval(() => {
      // Pick 1 or 2 random cell indices to flip
      const randomCell1 = Math.floor(Math.random() * totalCells)
      const randomCell2 = Math.floor(Math.random() * totalCells)

      setFlippedCells(prev => ({
        ...prev,
        [randomCell1]: true,
        [randomCell2]: true
      }))

      // Flip back to original grid line after 2200ms
      setTimeout(() => {
        setFlippedCells(prev => {
          const next = { ...prev }
          delete next[randomCell1]
          delete next[randomCell2]
          return next
        })
      }, 2200)

    }, 3200)

    return () => clearInterval(interval)
  }, [totalCells])

  const handleMouseEnter = (index) => {
    setFlippedCells(prev => ({ ...prev, [index]: true }))
  }

  const handleMouseLeave = (index) => {
    setTimeout(() => {
      setFlippedCells(prev => {
        const next = { ...prev }
        delete next[index]
        return next
      })
    }, 1200)
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-auto overflow-hidden">
      
      {/* 3D Perspective Grid Canvas */}
      <div 
        className="w-full h-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 auto-rows-fr"
        style={{ perspective: '1200px' }}
      >
        {[...Array(totalCells)].map((_, index) => {
          const isFlipped = !!flippedCells[index]
          const item = gridItems[index % gridItems.length]
          const Icon = item.icon

          return (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="relative w-full h-full min-h-[110px] sm:min-h-[140px] lg:min-h-[160px] border border-brand-navy-border/30 transition-all duration-300"
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Flippable Card Container */}
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* ========================================================
                    FRONT FACE: The Original Dark Navy Grid Box
                    ======================================================== */}
                <div
                  className="absolute inset-0 bg-[#050D1A]/70 hover:bg-[#0A1931]/80 transition-colors flex items-center justify-center p-2"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  {/* Subtle technical corner crosshair matching blueprint grid */}
                  <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-brand-blue/30 pointer-events-none" />
                  <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-brand-blue/30 pointer-events-none" />

                  {/* Tiny subtle center node (shows up on every 3rd cell) */}
                  {index % 3 === 0 && (
                    <span className="w-1 h-1 rounded-full bg-brand-blue/20" />
                  )}
                </div>

                {/* ========================================================
                    BACK FACE (180deg): Flipped AI, ML & Robotics Image
                    ======================================================== */}
                <div
                  className="absolute inset-0 rounded-lg overflow-hidden border shadow-2xl p-2.5 flex flex-col justify-between"
                  style={{
                    transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    borderColor: `${item.color}80`,
                    boxShadow: `0 0 25px ${item.color}40`,
                    backgroundColor: '#071326'
                  }}
                >
                  {/* Background photographic preview */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-screen scale-110"
                    loading="lazy"
                  />

                  {/* High contrast gradient tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-brand-navy-darkest/70 to-transparent" />

                  {/* Card Content */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span 
                      className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider border"
                      style={{
                        backgroundColor: `${item.color}25`,
                        borderColor: `${item.color}50`,
                        color: item.color
                      }}
                    >
                      {item.category}
                    </span>
                    <Icon className="w-3.5 h-3.5" style={{ color: item.color }} />
                  </div>

                  <div className="relative z-10">
                    <div className="text-[11px] sm:text-xs font-bold text-white font-display tracking-tight leading-tight truncate">
                      {item.title}
                    </div>
                    <div className="text-[9px] font-mono text-emerald-400 mt-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>LIVE TELEMETRY</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>
          )
        })}
      </div>

      {/* Radial fade mask to ensure foreground headline text remains 100% readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-darkest via-brand-navy-darkest/65 to-brand-navy-darkest/50 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050D1A_80%)] pointer-events-none" />
    </div>
  )
}
