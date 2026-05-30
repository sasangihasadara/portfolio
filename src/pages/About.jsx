import React from 'react'
import PageHeader from '../components/PageHeader'

const focusPoints = [
  'Third-year IT undergraduate at SLIIT with a focus on full-stack web development.',
  'Interested in building responsive web applications that are easy to use across devices.',
  'Looking to gain practical industry experience with a software development team.',
]

export default function About() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <PageHeader
          eyebrow="About"
          title="A bit more about me"
          description="I am a third-year Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), with a strong interest in full-stack web development and building practical, user-friendly web applications."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="ui-card rounded-2xl p-8">
            <p className="text-base leading-8 text-slate-300">
              I have experience working with both front-end and back-end technologies, and I enjoy creating web
              applications that are responsive, easy to use, and practical on different devices. At present, I am
              improving my knowledge of front-end development, back-end development, databases, and APIs.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {focusPoints.map((point) => (
                <div key={point} className="ui-card rounded-2xl p-4 text-sm leading-6 text-slate-300">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="ui-card rounded-2xl p-8">
            <h2 className="font-display text-2xl font-semibold text-white">What I bring</h2>
            <div className="mt-6 space-y-4 text-slate-300">
              <div className="ui-card rounded-2xl p-4">
                Responsive full-stack web development with a clean visual style.
              </div>
              <div className="ui-card rounded-2xl p-4">
                Practical project experience across web development, databases, and APIs.
              </div>
              <div className="ui-card rounded-2xl p-4">
                A growth mindset and willingness to learn from team feedback.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
