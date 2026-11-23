'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BookOpen, Sparkles, GraduationCap, CheckCircle2, ArrowRight, 
  Clock, Users, Award, Download, Layers, Cpu, Bot, Code2, 
  Rocket, Terminal, Laptop
} from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import DemoModal from '../../components/DemoModal'

export default function CoursesPage() {
  const [selectedTrack, setSelectedTrack] = useState('all')
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [modalInitialData, setModalInitialData] = useState(null)

  const handleOpenDemoModal = (courseName) => {
    setModalInitialData({
      notes: courseName ? `Inquiring about syllabus and school deployment for: ${courseName}` : ''
    })
    setIsDemoModalOpen(true)
  }

  const tracks = [
    { id: 'all', name: 'All Grades (K-12)' },
    { id: 'primary', name: 'Primary (Grades 1-4)' },
    { id: 'middle', name: 'Middle School (Grades 5-8)' },
    { id: 'senior', name: 'Senior School (Grades 9-12)' },
  ]

  const courses = [
    {
      id: 'junior-robotics',
      track: 'primary',
      stage: 'Seed Stage • Grades 1 to 2',
      title: 'Little Inventors: Physical Computing & Mechanics',
      icon: Bot,
      color: '#E5A00D',
      duration: '32 Hours (Year-Long)',
      projects: '14 Hands-On Models',
      tools: 'Snap Circuits, Tactile Logic Blocks, Cardboard Automata',
      overview: 'Introduces foundational engineering, levers, gears, simple circuits, and mechanical motion through tactile, screen-free learning.',
      outcomes: [
        'Understand electricity, polarity, and closed circuits safely',
        'Build functional mechanical machines with gears and pulleys',
        'Develop spatial intelligence and algorithmic thinking without screens',
        'Design creative moving animal automata for science fairs'
      ]
    },
    {
      id: 'scratch-coding',
      track: 'primary',
      stage: 'Seed Stage • Grades 3 to 4',
      title: 'Scratch Coding & Interactive SparkBot Rovers',
      icon: Code2,
      color: '#FF6B00',
      duration: '40 Hours (Year-Long)',
      projects: '18 Interactive Missions',
      tools: 'Scratch 3.0, Infonex SparkBot v2, Ultrasonic Modules',
      overview: 'Students transition from physical blocks to graphical coding, programming their autonomous rovers to navigate mazes and solve line challenges.',
      outcomes: [
        'Master loops, variables, conditional statements, and logic flow',
        'Program line-following and obstacle-avoiding autonomous rovers',
        'Create interactive storytelling games with hardware sensors',
        'Understand sensor feedback loops and motor speed control'
      ]
    },
    {
      id: 'iot-smart-systems',
      track: 'middle',
      stage: 'Sprout Stage • Grades 5 to 6',
      title: 'Smart Sensors, ESP32 & IoT Agritech Solutions',
      icon: Cpu,
      color: '#0090FF',
      duration: '48 Hours (Year-Long)',
      projects: '20 Working Prototypes',
      tools: 'ESP32 IoT Hub, MicroPython, Cloud Telemetry Dashboards',
      overview: 'Connecting physical hardware to the internet. Students build automated greenhouse monitors, smart home systems, and smart city models.',
      outcomes: [
        'Write clean MicroPython scripts for microcontroller hardware',
        'Interface temperature, humidity, gas, and soil moisture sensors',
        'Stream real-time telemetry to live web dashboards via MQTT',
        'Design automated water pump triggers based on soil data'
      ]
    },
    {
      id: 'ai-computer-vision',
      track: 'middle',
      stage: 'Branch Stage • Grades 7 to 8',
      title: 'Computer Vision, OpenCV & Edge Machine Learning',
      icon: Terminal,
      color: '#E11D48',
      duration: '52 Hours (Year-Long)',
      projects: '16 AI Models',
      tools: 'Python 3, OpenCV, Edge Neural Processor, OmniVision Rover',
      overview: 'Demystifying Artificial Intelligence. Students train neural networks for facial recognition, gesture-based steering, and autonomous path tracking.',
      outcomes: [
        'Train custom image classification models with Edge ML',
        'Implement OpenCV face tracking and gesture recognition algorithms',
        'Deploy autonomous obstacle detection on Mecanum rovers',
        'Understand ethical AI principles and algorithm accuracy metrics'
      ]
    },
    {
      id: 'bionic-kinematics',
      track: 'senior',
      stage: 'Bloom Stage • Grades 9 to 10',
      title: '5-DOF Bionic Arm, Robotics Kinematics & ROS',
      icon: Layers,
      color: '#10B981',
      duration: '60 Hours (Year-Long)',
      projects: '12 Capstone Automations',
      tools: 'Infonex Bionic Arm, Flex Sensor Glove, Robot Operating System',
      overview: 'Senior robotics modeling industrial pick-and-place, inverse kinematics, teach-and-repeat workflows, and robotic operating protocols.',
      outcomes: [
        'Formulate mathematical kinematics for multi-joint robotic arms',
        'Program wearable glove teleoperation using flex sensors',
        'Automate sorting routines with color sensor discrimination',
        'Simulate trajectory paths in virtual 3D robotics environments'
      ]
    },
    {
      id: 'patent-incubation',
      track: 'senior',
      stage: 'Bloom Stage • Grades 11 to 12',
      title: 'Drone Flight Physics, 3D CAD & Capstone Patent Lab',
      icon: Rocket,
      color: '#8B5CF6',
      duration: '64 Hours (Capstone)',
      projects: '1 Final Patented Innovation',
      tools: 'Tinkercad, Autodesk Fusion, AeroDrone, Bio-PLA 3D Printers',
      overview: 'Pre-engineering incubation preparing students for top engineering universities and patent filings through interdisciplinary invention.',
      outcomes: [
        'Design mechanical chassis in parametric CAD and 3D print prototypes',
        'Program aerodynamic choreographies with Python drone SDKs',
        'Draft provisional patent documentation and research abstracts',
        'Compete in National Robotics Olympiads with faculty mentorship'
      ]
    }
  ]

  const filteredCourses = selectedTrack === 'all'
    ? courses
    : courses.filter(c => c.track === selectedTrack)

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-brand-orange selection:text-white">
      
      {/* Sticky Appbar */}
      <Navbar onOpenDemoModal={() => handleOpenDemoModal()} />

      <main className="relative z-10">
        
        {/* Course Catalog Hero */}
        <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 overflow-hidden">
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-orange/30 text-brand-orange text-xs font-semibold mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>NEP 2020 Aligned K-12 Robotics & Coding Syllabus</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4 font-display">
              Curriculum Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-500 to-orange-600">Tomorrow's Inventors</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
              From kindergarten tactile logic to senior year machine learning and patent filing. Our spiral curriculum progresses through four distinct stages: <span className="text-slate-900 font-bold">Seed → Sprout → Branch → Bloom</span>.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-6">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">100%</div>
                <div className="text-xs text-slate-500 mt-1">Hands-On Practicals</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-blue font-display">250+</div>
                <div className="text-xs text-slate-500 mt-1">Lesson Workbooks</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-orange font-display">Grade 1-12</div>
                <div className="text-xs text-slate-500 mt-1">NEP 2020 Mapped</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-display">Zero Prep</div>
                <div className="text-xs text-slate-500 mt-1">For School Teachers</div>
              </div>
            </div>

            {/* Download CTA */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => handleOpenDemoModal('Complete K-12 Syllabus Document')}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-lg shadow-brand-orange/30 flex items-center gap-2 cursor-pointer hover:scale-105 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Full Syllabus PDF</span>
              </button>

              <button
                onClick={() => handleOpenDemoModal('Teacher Enablement Demo')}
                className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-medium border border-slate-200 shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Users className="w-4 h-4 text-brand-blue" />
                <span>Request Teacher Training Demo</span>
              </button>
            </div>

          </div>
        </section>

        {/* Grade Filter Bar */}
        <section className="py-6 border-b border-slate-200 sticky top-[95px] z-30 bg-white/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
              {tracks.map((tr) => {
                const isActive = selectedTrack === tr.id
                return (
                  <button
                    key={tr.id}
                    onClick={() => setSelectedTrack(tr.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/25'
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {tr.name}
                  </button>
                )
              })}
            </div>

            <span className="text-xs font-mono text-slate-500">
              Showing {filteredCourses.length} Comprehensive Tracks
            </span>

          </div>
        </section>

        {/* Course Cards Grid */}
        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCourses.map((course) => {
              const Icon = course.icon
              return (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl bg-white border border-slate-200/90 hover:border-brand-blue/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-slate-200/50 group"
                >
                  <div>
                    {/* Header Stage & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wider border shadow-sm"
                        style={{
                          backgroundColor: `${course.color}15`,
                          borderColor: `${course.color}40`,
                          color: course.color
                        }}
                      >
                        {course.stage}
                      </span>
                      <div 
                        className="p-3 rounded-2xl border"
                        style={{
                          backgroundColor: `${course.color}15`,
                          borderColor: `${course.color}30`,
                          color: course.color
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Course Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display group-hover:text-brand-orange transition-colors mb-3">
                      {course.title}
                    </h3>

                    {/* Course Metas */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4 pb-4 border-b border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-brand-blue" />
                        <span>{course.duration}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-brand-orange" />
                        <span>{course.projects}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {course.overview}
                    </p>

                    {/* Hardware Tools Used */}
                    <div className="mb-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <span className="font-mono text-slate-500 uppercase tracking-wider block mb-1">
                        Classroom Kit & Platforms:
                      </span>
                      <span className="font-semibold text-slate-800">
                        {course.tools}
                      </span>
                    </div>

                    {/* Key Learning Outcomes */}
                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block font-mono">
                        Key Competencies Mastered:
                      </span>
                      {course.outcomes.map((out, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => handleOpenDemoModal(course.title)}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-md shadow-brand-orange/25 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>Book School Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono text-slate-500">Teacher Guide Included</span>
                  </div>

                </motion.div>
              )
            })}
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer onOpenDemoModal={() => handleOpenDemoModal()} />

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialData={modalInitialData}
      />

    </div>
  )
}
