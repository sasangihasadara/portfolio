import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const heroStats = [
  { value: 'Full-Stack', label: 'Build and integration' },
  { value: 'UI/UX', label: 'Design and usability' },
  { value: 'QA', label: 'Testing and quality' },
]

const skillTags = ['React', 'Figma', 'Test Cases', 'Regression', 'UI Review', 'Bug Reports']

const processSteps = [
  {
    title: 'Build',
    text: 'I turn ideas into responsive interfaces and practical application flows.',
  },
  {
    title: 'Design',
    text: 'I shape layout, spacing, and visual rhythm so the experience feels clear.',
  },
  {
    title: 'Test',
    text: 'I check behavior, edge cases, and responsiveness so issues are caught early.',
  },
  {
    title: 'Refine',
    text: 'I polish the result through re-testing, feedback, and final quality checks.',
  },
]

const focusPoints = [
  'Full-stack development for practical web apps',
  'UI/UX design for clear, usable interfaces',
  'QA and testing for reliable delivery',
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function Home() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-sky-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[540px] w-[540px] rounded-full bg-violet-500/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Full-stack / UI/UX / QA portfolio
            </motion.div>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.1}
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-400"
            >
              Third-year IT undergraduate at SLIIT
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.2}
              className="font-display max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] bg-gradient-to-r from-blue-400 via-violet-400 to-blue-500 bg-clip-text text-transparent sm:text-4xl lg:text-5xl"
            >
              I build, design, and test digital experiences so they feel reliable,
              polished, and easy to use.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.3}
              className="max-w-2xl text-xs font-medium leading-6 text-sky-200 sm:text-sm"
            >
              I&apos;m Sasangi Ranasinghe, a third-year Information Technology undergraduate who enjoys
              working across full-stack development, UI/UX, and QA. I focus on practical web apps,
              usable interfaces, and testing that helps teams ship with confidence.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.4}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:scale-[1.03] hover:shadow-sky-500/40"
              >
                Let&apos;s talk
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-sky-400/40 hover:bg-white/10"
              >
                View projects
              </Link>

              <a
                href="/images/Sasangi_CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/25 hover:bg-white/10"
              >
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.5}
              className="ui-card rounded-3xl p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Current focus</p>
                  <p className="mt-1 text-sm text-slate-200">
                    Balancing build quality, usable design, and reliable testing.
                  </p>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                  Open for internships
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {focusPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.6}
              className="grid gap-3 sm:grid-cols-3"
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="ui-card rounded-3xl p-5">
                  <p className="text-xl font-bold text-sky-300">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.7}
              className="flex flex-wrap gap-2"
            >
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium text-slate-300 transition hover:border-sky-400/30 hover:text-sky-200"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[30rem]">
              <div
                className="absolute inset-[-3px] rounded-[2.5rem]"
                style={{
                  background: 'linear-gradient(135deg, rgba(56,189,248,0.95) 0%, rgba(124,58,237,0.8) 52%, rgba(14,165,233,0.95) 100%)',
                  padding: '3px',
                }}
              >
                <div className="h-full w-full rounded-[2.3rem] bg-[#060918]" />
              </div>

              <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-sky-500/15 blur-3xl" />

              <motion.img
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                src="/images/Me.jpg"
                alt="Sasangi Ranasinghe"
                className="relative z-10 h-[26rem] w-full rounded-[2.3rem] object-cover object-top shadow-2xl shadow-black/40 sm:h-[34rem]"
              />

            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0.2}
          className="mt-20 grid gap-6 lg:mt-24"
        >
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-400">
              My process
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
              A simple process that keeps the product stable, usable, and well built.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              I approach project work by shaping the interface carefully, checking the flow, and
              re-testing with a focus on usability, consistency, and edge cases.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="ui-card rounded-3xl p-6">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-sky-200">
                    0{index + 1}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                    Step
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md sm:flex"
      >
        <svg className="h-4 w-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.div>
    </section>
  )
}


