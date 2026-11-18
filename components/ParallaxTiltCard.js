'use client'

import React, { useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function ParallaxTiltCard({ 
  children, 
  className = "", 
  glare = true,
  maxTilt = 12,
  scaleOnHover = 1.02
}) {
  const cardRef = useRef(null)
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 })

  // Spring physics for natural weight and responsiveness
  const springConfig = { stiffness: 220, damping: 20 }
  const rotateX = useSpring(0, springConfig)
  const rotateY = useSpring(0, springConfig)
  const scale = useSpring(1, springConfig)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    // Normalize between -0.5 and +0.5
    const xPct = (mouseX / width) - 0.5
    const yPct = (mouseY / height) - 0.5

    // Invert X for natural tilt
    rotateX.set(-yPct * maxTilt * 2)
    rotateY.set(xPct * maxTilt * 2)
    scale.set(scaleOnHover)

    if (glare) {
      setGlarePos({
        x: (mouseX / width) * 100,
        y: (mouseY / height) * 100,
        opacity: 0.18
      })
    }
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    scale.set(1)
    if (glare) {
      setGlarePos(prev => ({ ...prev, opacity: 0 }))
    }
  }

  return (
    <div style={{ perspective: 1200 }} className="relative">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d"
        }}
        className={`relative will-change-transform ${className}`}
      >
        {children}

        {/* Dynamic glare reflection overlay (Fragment / Sobra style) */}
        {glare && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300 overflow-hidden"
            style={{
              opacity: glarePos.opacity,
              background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.45), transparent 70%)`
            }}
          />
        )}
      </motion.div>
    </div>
  )
}
