'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function LogoAnimated({ 
  size = 'default', // 'small' | 'default' | 'large' | 'hero'
  showText = true, 
  showTagline = false,
  interactive = true,
  className = "" 
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [key, setKey] = useState(0)

  // Responsive sizing definitions
  const dimensions = {
    small: { w: 32, h: 38, viewBox: "0 0 200 250" },
    default: { w: 42, h: 50, lgW: 52, lgH: 62 },
    large: { w: 60, h: 72, lgW: 80, lgH: 96 },
    hero: { w: 120, h: 145, smW: 160, smH: 195, lgW: 190, lgH: 230 },
  }[size] || { w: 42, h: 50, lgW: 52, lgH: 62 }

  const replay = () => {
    setKey(prev => prev + 1)
  }

  return (
    <div 
      className={`inline-flex items-center gap-2 sm:gap-3 select-none ${className}`}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
    >
      <div 
        className="relative cursor-pointer group shrink-0"
        onClick={replay}
        title="Click to replay formation animation"
      >
        {/* Ambient background glow */}
        <motion.div 
          className="absolute -inset-3 rounded-full bg-gradient-to-r from-brand-blue/20 via-brand-orange/20 to-transparent blur-lg pointer-events-none"
          animate={{
            scale: isHovered ? 1.25 : 1,
            opacity: isHovered ? 0.75 : 0.35
          }}
          transition={{ duration: 0.4 }}
        />

        <svg
          key={key}
          viewBox="0 0 200 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`relative drop-shadow-md overflow-visible ${
            size === 'small' 
              ? 'w-7 h-9 sm:w-8 sm:h-10' 
              : size === 'hero' 
              ? 'w-28 h-36 sm:w-40 sm:h-48 md:w-48 md:h-56' 
              : size === 'large' 
              ? 'w-14 h-16 sm:w-20 sm:h-24' 
              : 'w-8 h-10 sm:w-11 sm:h-13'
          }`}
        >
          <defs>
            <linearGradient id="leafGradient" x1="175" y1="48" x2="210" y2="10" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF6B00" />
              <stop offset="60%" stopColor="#FFA043" />
              <stop offset="100%" stopColor="#FFC837" />
            </linearGradient>
            
            <filter id="circuitGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ========================================================
              CIRCUIT TERMINAL BOTTOM PADS
              ======================================================== */}
          {/* Pad 1: Dark Navy/Indigo */}
          <motion.circle
            cx="40"
            cy="215"
            r="8"
            stroke="#1D4E89"
            strokeWidth="4"
            fill="#050D1A"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />
          {/* Pad 2: Electric Cyan */}
          <motion.circle
            cx="60"
            cy="215"
            r="8"
            stroke="#0090FF"
            strokeWidth="4"
            fill="#050D1A"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />
          {/* Pad 3: Tech Orange */}
          <motion.circle
            cx="80"
            cy="215"
            r="8"
            stroke="#FF6B00"
            strokeWidth="4"
            fill="#050D1A"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          />

          {/* ========================================================
              TOP TERMINAL PADS FOR TRACK 1 & 2
              ======================================================== */}
          <motion.circle
            cx="135"
            cy="46"
            r="7"
            stroke="#1D4E89"
            strokeWidth="3.5"
            fill="#050D1A"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1.1 }}
          />
          <motion.circle
            cx="155"
            cy="40"
            r="7"
            stroke="#0090FF"
            strokeWidth="3.5"
            fill="#050D1A"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1.25 }}
          />

          {/* ========================================================
              TRACK 1: DARK BLUE / INDIGO TRACE
              ======================================================== */}
          <motion.path
            d="M 40 207 L 40 76 L 135 180 L 135 53"
            stroke="#1D4E89"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.circle
            r="3"
            fill="#70A9FF"
            filter="url(#circuitGlow)"
            animate={{
              cx: [40, 40, 135, 135],
              cy: [207, 76, 180, 53],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "linear",
              delay: 1.4
            }}
          />

          {/* ========================================================
              TRACK 2: ELECTRIC CYAN BLUE TRACE
              ======================================================== */}
          <motion.path
            d="M 60 207 L 60 76 L 155 180 L 155 47"
            stroke="#0090FF"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#circuitGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.3, ease: "easeInOut", delay: 0.35 }}
          />
          <motion.circle
            r="3.5"
            fill="#FFFFFF"
            filter="url(#circuitGlow)"
            animate={{
              cx: [60, 60, 155, 155],
              cy: [207, 76, 180, 47],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 0.8,
              ease: "linear",
              delay: 1.6
            }}
          />

          {/* ========================================================
              TRACK 3: TECH ORANGE TRACE
              ======================================================== */}
          <motion.path
            d="M 80 207 L 80 76 L 175 180 L 175 52"
            stroke="#FF6B00"
            strokeWidth="7.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#circuitGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.circle
            r="4"
            fill="#FFF066"
            filter="url(#circuitGlow)"
            animate={{
              cx: [80, 80, 175, 175],
              cy: [207, 76, 180, 52],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2.0,
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: "linear",
              delay: 1.8
            }}
          />

          {/* ========================================================
              THE TECH SEED / LEAF
              ======================================================== */}
          <motion.g
            initial={{ scale: 0, rotate: -25, transformOrigin: "175px 52px", opacity: 0 }}
            animate={{ 
              scale: 1, 
              rotate: 0, 
              opacity: 1,
            }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 18, 
              delay: 1.4 
            }}
            whileHover={{ scale: 1.15, rotate: 6 }}
          >
            <path
              d="M 175 52 C 170 30 185 10 216 12 C 218 36 200 55 175 52 Z"
              fill="url(#leafGradient)"
              stroke="#FF8A00"
              strokeWidth="2"
              className="drop-shadow-md"
            />
            <motion.path
              d="M 175 52 Q 192 34 216 12"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            />
          </motion.g>
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center tracking-wider font-extrabold font-display leading-none">
            <span className={`text-white transition-colors duration-300 ${
              size === 'small' 
                ? 'text-sm sm:text-base' 
                : size === 'large' 
                ? 'text-2xl sm:text-3xl' 
                : size === 'hero' 
                ? 'text-3xl sm:text-5xl md:text-6xl' 
                : 'text-lg sm:text-2xl'
            }`}>
              INFONE
            </span>
            <motion.span 
              className={`text-brand-orange drop-shadow-sm ${
                size === 'small' 
                  ? 'text-sm sm:text-base' 
                  : size === 'large' 
                  ? 'text-2xl sm:text-3xl' 
                  : size === 'hero' 
                  ? 'text-3xl sm:text-5xl md:text-6xl' 
                  : 'text-lg sm:text-2xl'
              }`}
              animate={{
                textShadow: isHovered 
                  ? '0 0 20px rgba(255, 107, 0, 0.9)' 
                  : '0 0 8px rgba(255, 107, 0, 0.4)'
              }}
            >
              X
            </motion.span>
          </div>

          {showTagline && (
            <motion.div 
              className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-slate-300 font-semibold uppercase mt-0.5 sm:mt-1 flex items-center gap-1 sm:gap-1.5 whitespace-nowrap"
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <span>LEARN</span>
              <span className="text-brand-blue">•</span>
              <span>INNOVATE</span>
              <span className="text-brand-orange">•</span>
              <span>TRANSFORM</span>
            </motion.div>
          )}
        </div>
      )}
    </div>
  )
}
