import React from 'react'
import PageHeader from '../components/PageHeader'

const focusPoints = [
  'I like turning ideas into working interfaces with clear structure.',
  'I enjoy learning through real projects and improving with every build.',
  'I value teamwork, communication, and practical problem solving.',
]

export default function About() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <PageHeader
          eyebrow="About"
          title="A bit more about me"
          description="I am an undergraduate IT student focused on full-stack web development, practical UI design, and building projects that feel useful and polished."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[1.5rem] border border-purple-500/20 bg-[#0b0f3b] p-8 shadow-xl">
            <p className="text-base leading-8 text-gray-300">
              I enjoy building responsive web applications with a strong attention to detail. My background includes
              PHP, HTML, CSS, JavaScript, Python, Java, MySQL, and React-based interface work. I like projects that
              blend clean design with useful functionality.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {focusPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-gray-300"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-purple-500/20 bg-[#0b0f3b] p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-purple-300">What I bring</h2>
            <div className="mt-6 space-y-4 text-gray-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Responsive UI development with a clean visual style.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Practical project experience across web, mobile, and database work.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                A growth mindset and willingness to learn from team feedback.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

