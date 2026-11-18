# INFONEX — Next.js Educational Website

A modern, interactive, and high-performance website for **INFONEX** ("Planting Tech Seeds in Every Classroom") built with **Next.js (JavaScript, App Router)**, **Tailwind CSS**, and **Framer Motion**.

Referenced from leading STEM education platforms:
- **STEMpedia** (AI, robotics kits, curriculum, lab infrastructure)
- **STEMX India** (Tinkering labs, ATL packages, school partnerships)
- **RoboMiracle** (Experiential robotics, competitions, workshops)

---

## 🎨 Brand & Color Theme (Matched from Official Flyer)

- **Deep Navy Background**: `#0A1931` (Darker surfaces: `#050D1A`, `#071326`, `#0E2244`)
- **Electric Cyan/Blue Trace**: `#0090FF` (Glows, circuitry lines, IoT & Robotics highlights)
- **Vibrant Tech Orange**: `#FF6B00` (Call to actions, the sprouting leaf/seed, highlight accents)
- **Sprouting Leaf Gradient**: `#FFA114` to `#FF5E00`
- **Crisp Text & Slate Highlights**: Pure white `#FFFFFF` & Slate `#F1F5F9`

---

## ✨ Features & Framer Motion Animations

1. **Framer Motion Logo Formation**:
   - Progressive SVG circuit path drawing (`pathLength: [0, 1]`) for the 3 parallel traces forming the capital letter **N**.
   - Moving electron energy pulses travelling through the traces.
   - Spring-bouncing **Tech Seed / Leaf** blooming at the peak of the orange track.
   - Replay formation trigger and hover interactivity.
2. **Three Core Pillars** (from official poster):
   - **Robotics Engineering** (Hardware, motors, sensor fusion, rovers)
   - **AI & Coding** (Python, OpenCV computer vision, block coding)
   - **STEM Labs** (Turnkey Tinkering Labs, 3D printers, ATL alignment)
3. **Interactive Circuit Trace Anatomy**:
   - Clickable interactive explorer for Trace 1 (Hardware Logic), Trace 2 (Networked IoT), and Trace 3 (Tech Seed & AI).
4. **Proprietary Hardware & Kits Explorer**:
   - Category filtering (Robotics & Rovers, AI & Vision, IoT & Smart Cities, Tinkering & Makers) with interactive kit cards.
5. **Interactive "Build Your School Lab" Cost Estimator**:
   - Dynamic student count slider (50 to 1500+).
   - Grade level selector (Primary, Middle, Senior, Composite K-12).
   - Tier selector (Essential, Advanced AI Hub, Full ATL Suite).
   - Real-time station & equipment recommendations + instant quotation generation.
6. **Curriculum Growth Roadmap (Seed to Bloom)**:
   - Phase 1: **Seed** (Grades 1-3)
   - Phase 2: **Sprout** (Grades 4-6)
   - Phase 3: **Branch** (Grades 7-9)
   - Phase 4: **Bloom** (Grades 10-12 & College)
7. **Bangalore R&D Innovation Hub Showcase**:
   - Emphasizing Bangalore tech corridor roots, 24-48 hr spare-part dispatch, and on-campus master trainers.
8. **Interactive School Demo Booking Modal**:
   - Form with input validation and celebratory **confetti animation** (`canvas-confetti`) on submission.

---

## 🚀 Getting Started

### 1. Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

### 2. Production Build
```bash
npm run build
npm run start
```
