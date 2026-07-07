import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-sky-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-violet-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="space-y-9 max-w-2xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-3 rounded-full border border-sky-400/20 bg-sky-400/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-sky-200 shadow-[0_18px_60px_rgba(56,189,248,0.08)]"
            >
              Fullstack • UI/UX • QA
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.1}>
              <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Hi, I&apos;m <span className="text-transparent bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 bg-clip-text">Sasangi Ranasingha</span>
              </h1>
            </motion.div>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.2}
              className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              I build responsive web and mobile applications using frontend and backend technologies, databases, and software testing. My focus is on polished interfaces, stable performance, and real-world usability.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.3}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:-translate-y-0.5"
              >
                Contact Me
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </Link>

              <a
                href="/images/Sasangi_CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
              >
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.4}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/sasangihasadara"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.81 1.305 3.495.998.108-.775.418-1.306.76-1.606-2.665-.303-5.467-1.332-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.48 5.921.43.372.815 1.102.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.216.694.825.576 4.765-1.589 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sasangi-ranasingha-67b35b34a"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.75v2.2h.05c.52-.98 1.8-2.01 3.7-2.01 3.96 0 4.7 2.6 4.7 5.98V24h-4V14.3c0-2.28-.04-5.2-3.18-5.2-3.18 0-3.66 2.48-3.66 5.04V24h-4V8.5z" />
                </svg>
              </a>
              <a
                href="mailto:sasangihasadara@gmail.com"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8z" />
                </svg>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative max-w-[28rem] rounded-[2.6rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="absolute inset-0 rounded-[2.3rem] bg-gradient-to-br from-fuchsia-500/30 via-violet-500/20 to-sky-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.3rem] bg-[#060918] p-6">
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent" />
                <img
                  src="/images/Me.jpg"
                  alt="Profile"
                  className="h-[24rem] w-full rounded-[2rem] object-cover object-top shadow-2xl shadow-black/30 sm:h-[30rem]"
                />
                <div className="absolute bottom-6 left-6 inline-flex items-center gap-3 rounded-full bg-black/60 px-4 py-2 text-sm text-white shadow-lg shadow-black/40 backdrop-blur-md">
                  <span className="h-3.5 w-3.5 rounded-full bg-emerald-400" />
                  Available for work
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


