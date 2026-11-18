'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function ParallaxBackground() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll()

  // Smooth springs for buttery smooth parallax physics like fragment.im / sobra.be
  const smoothY1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -350]), {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  })

  const smoothY2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 450]), {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  })

  const smoothY3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -600]), {
    stiffness: 60,
    damping: 18,
    restDelta: 0.001
  })

  const smoothRotate1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 180]), {
    stiffness: 50,
    damping: 20
  })

  const smoothRotate2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -240]), {
    stiffness: 45,
    damping: 20
  })

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* ========================================================
          LAYER 1: DEEP AMBIENT GLOWING ORBS (PARALLAX LAYER 1)
          ======================================================== */}
      <motion.div 
        style={{ y: smoothY1 }}
        className="absolute -top-32 -left-32 w-96 sm:w-[540px] h-96 sm:h-[540px] rounded-full bg-brand-blue/15 blur-[120px] will-change-transform"
      />
      
      <motion.div 
        style={{ y: smoothY2 }}
        className="absolute top-[35%] -right-32 w-80 sm:w-[600px] h-80 sm:h-[600px] rounded-full bg-brand-orange/15 blur-[140px] will-change-transform"
      />

      <motion.div 
        style={{ y: smoothY3 }}
        className="absolute top-[70%] left-[10%] w-72 sm:w-[480px] h-72 sm:h-[480px] rounded-full bg-cyan-500/10 blur-[130px] will-change-transform"
      />

      {/* ========================================================
          LAYER 2: GEOMETRIC CIRCUIT CROSSHAIRS & FLOATING NODES (FRAGMENT.IM STYLE)
          ======================================================== */}
      {/* Top Left Floating Crosshair */}
      <motion.div 
        style={{ y: smoothY2, rotate: smoothRotate1 }}
        className="absolute top-28 left-[8%] hidden md:flex items-center justify-center opacity-30 will-change-transform"
      >
        <div className="w-12 h-12 border border-brand-blue/40 rounded-full flex items-center justify-center relative">
          <div className="w-2 h-2 rounded-full bg-brand-blue" />
          <div className="absolute w-16 h-[1px] bg-brand-blue/30" />
          <div className="absolute h-16 w-[1px] bg-brand-blue/30" />
        </div>
      </motion.div>

      {/* Mid Right Floating Geometric Diamond */}
      <motion.div 
        style={{ y: smoothY1, rotate: smoothRotate2 }}
        className="absolute top-[45%] right-[6%] hidden md:flex items-center justify-center opacity-25 will-change-transform"
      >
        <div className="w-16 h-16 border-2 border-dashed border-brand-orange/40 rotate-45 rounded-lg flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-brand-orange/60 animate-ping" />
        </div>
      </motion.div>

      {/* Lower Left Floating Terminal Ring */}
      <motion.div 
        style={{ y: smoothY3, rotate: smoothRotate1 }}
        className="absolute top-[75%] left-[5%] hidden lg:flex items-center justify-center opacity-30 will-change-transform"
      >
        <div className="w-20 h-20 border border-brand-blue/30 rounded-full flex items-center justify-center">
          <div className="w-10 h-10 border border-brand-orange/40 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white/80" />
          </div>
        </div>
      </motion.div>

      {/* Floating vertical circuit line with animated electron */}
      <motion.div 
        style={{ y: smoothY1 }}
        className="absolute top-1/4 left-[3%] w-[1px] h-64 bg-gradient-to-b from-transparent via-brand-blue/30 to-transparent hidden xl:block"
      >
        <motion.div 
          animate={{ y: [0, 240, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="w-1.5 h-1.5 -left-[2.5px] rounded-full bg-brand-blue shadow-[0_0_8px_#0090FF] absolute"
        />
      </motion.div>

      <motion.div 
        style={{ y: smoothY2 }}
        className="absolute top-[60%] right-[3%] w-[1px] h-72 bg-gradient-to-b from-transparent via-brand-orange/30 to-transparent hidden xl:block"
      >
        <motion.div 
          animate={{ y: [240, 0, 240] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          className="w-1.5 h-1.5 -left-[2.5px] rounded-full bg-brand-orange shadow-[0_0_8px_#FF6B00] absolute"
        />
      </motion.div>
    </div>
  )
}
