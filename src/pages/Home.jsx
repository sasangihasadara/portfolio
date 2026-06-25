import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// ── Starfield canvas ────────────────────────────────────────────────────────
function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Generate stars
    const STAR_COUNT = 180
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.4 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.004 + 0.001,
      phase: Math.random() * Math.PI * 2,
    }))

    // Generate connection lines (sparse)
    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connecting lines between nearby stars
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x
          const dy = stars[i].y - stars[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(100,140,255,${0.09 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(stars[i].x, stars[i].y)
            ctx.lineTo(stars[j].x, stars[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw stars
      stars.forEach((s) => {
        const alpha = 0.4 + 0.6 * Math.abs(Math.sin(t * s.speed + s.phase))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180,200,255,${alpha})`
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}

// ── Data ────────────────────────────────────────────────────────────────────
const heroStats = [
  { value: '10+', label: 'Projects Completed' },
  { value: '3+', label: 'Technologies Mastered' },
  { value: '100%', label: 'Dedication & Hard Work' },
]

const skillTags = [
  { label: 'React' },
  { label: 'Tailwind' },
  { label: 'JavaScript' },
  { label: 'Responsive UI' },
]

// ── Fade-up animation variant ────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.14, duration: 0.55, ease: 'easeOut' },
  }),
}

// ── Home ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#060918] text-white">

      {/* ── Background ── */}
      <StarField />

      {/* Radial glow — top-left */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#1a237e]/30 blur-[120px]" style={{ zIndex: 1 }} />
      {/* Radial glow — bottom-right */}
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-[#311b92]/25 blur-[100px]" style={{ zIndex: 1 }} />

      {/* ── Main grid ── */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-28" style={{ zIndex: 2 }}>

        {/* ══ LEFT ══════════════════════════════════════════════════════════ */}
        <div className="space-y-7">

          {/* Top badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium tracking-[0.22em] uppercase text-slate-300"
          >
            {/* gear icon */}
            <svg className="h-3.5 w-3.5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            SLIIT / Full-Stack Web Developer / UI Focus
          </motion.div>

          {/* Sub-label */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.5}
            className="text-[11px] tracking-[0.25em] uppercase text-blue-400 font-semibold"
          >
            Third-Year IT Undergraduate · Open For Internships
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-5xl font-extrabold leading-tight md:text-6xl"
          >
            Hi, I&apos;m
            <br />
            <span
              className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-500 bg-clip-text text-transparent"
            >
              Sasangi Ranasinghe
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="max-w-lg leading-7 text-slate-300 text-sm"
          >
            I&apos;m a third-year Information Technology undergraduate at SLIIT with a
            strong interest in full-stack web development. I build responsive web
            applications that work well across devices and focus on clean,
            practical user experiences with React, Tailwind CSS, PHP,
            JavaScript, MySQL, and APIs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:scale-105 hover:shadow-blue-500/50 transition-all duration-200"
            >
              {/* paper-plane icon */}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              Hire Me
            </Link>

            <a
              href="/images/Sasangi_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-200"
            >
              {/* download icon */}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
          </motion.div>

          {/* Internship note card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
            className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 max-w-md backdrop-blur-sm"
          >
            {/* person icon */}
            <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5.356-3.712M9 20H4v-2a4 4 0 015.356-3.712M15 11a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <p className="text-xs leading-relaxed text-slate-300">
              I am looking forward to working with a software development
              team to gain practical industry experience as a Full-Stack Web
              Developer. I value teamwork, communication, and learning
              through real project work.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={5}
            className="grid grid-cols-3 gap-3"
          >
            {heroStats.map((s, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm"
              >
                <p className="text-xl font-bold text-blue-400">{s.value}</p>
                <p className="mt-0.5 text-[10px] text-slate-400 leading-tight">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Skill tag row */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={6}
            className="flex flex-wrap gap-2"
          >
            {skillTags.map((tag) => (
              <span
                key={tag.label}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium text-slate-300 hover:border-blue-500/40 hover:text-blue-300 transition-colors cursor-default"
              >
                {tag.label}
              </span>
            ))}
          </motion.div>

        </div>

        {/* ══ RIGHT ═════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">

            {/* Outer decorative ring with gradient border */}
            <div
              className="absolute inset-[-3px] rounded-[2.2rem] z-0"
              style={{
                background: 'linear-gradient(135deg, #4f8ef7 0%, #7b5ea7 50%, #3b6ff5 100%)',
                padding: '3px',
                borderRadius: '2.2rem',
              }}
            >
              <div className="h-full w-full rounded-[2rem] bg-[#060918]" />
            </div>

            {/* Corner neon accents */}
            <div className="absolute -top-3 -left-3 h-6 w-6 rounded-tl-xl border-l-2 border-t-2 border-blue-400 z-10" />
            <div className="absolute -top-3 -right-3 h-6 w-6 rounded-tr-xl border-r-2 border-t-2 border-blue-400 z-10" />
            <div className="absolute -bottom-3 -left-3 h-6 w-6 rounded-bl-xl border-b-2 border-l-2 border-violet-400 z-10" />
            <div className="absolute -bottom-3 -right-3 h-6 w-6 rounded-br-xl border-b-2 border-r-2 border-violet-400 z-10" />

            {/* Ambient glow behind */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-blue-600/15 blur-3xl" />

            {/* Profile image */}
            <motion.img
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              src="/images/Me.jpg"
              alt="Sasangi Ranasinghe"
              className="relative z-10 h-[22rem] w-[18rem] sm:h-[28rem] sm:w-[22rem] rounded-[2rem] object-cover object-top"
            />

            {/* Availability badge — bottom right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 z-20 flex items-center gap-3 rounded-xl border border-white/10 bg-[#10152e]/80 backdrop-blur-md px-4 py-3 shadow-xl"
            >
              {/* briefcase icon */}
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/20 border border-blue-500/30">
                <svg className="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-slate-400">Open for</p>
                <p className="text-xs font-bold leading-tight">Internships &amp;<br />Project Work</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5"
      style={{ zIndex: 2 }}
      >
        <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.div>

    </section>
  )
}
