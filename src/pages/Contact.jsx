import React, { useRef, useState } from 'react'
import PageHeader from '../components/PageHeader'

export default function Contact() {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (!window.emailjs) {
        throw new Error('EmailJS is not available')
      }

      const form = new FormData(formRef.current)
      const data = Object.fromEntries(form.entries())
      await window.emailjs.send('service_2q8e18o', 'template_qcb2xq8', data)

      alert('Message sent successfully! I will get back to you soon.')
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      alert('Failed to send message. Please try again later or email me directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-[#070b2a] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <PageHeader
          eyebrow="Contact"
          title="Let's build something useful together"
          description="I'm open to internships, collaborations, and project opportunities. If you need a responsive site or a practical student project partner, send a message."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6 rounded-[1.5rem] border border-purple-500/20 bg-[#0b0f3b] p-8 text-left shadow-xl">
            <div>
              <p className="flex items-center gap-2 font-semibold text-gray-400">
                <i data-lucide="phone" className="h-5 w-5" />
                Phone
              </p>
              <p className="ml-7 text-lg font-bold text-purple-300">+94 77 230 1171</p>
            </div>

            <div>
              <p className="flex items-center gap-2 font-semibold text-gray-400">
                <i data-lucide="mail" className="h-5 w-5" />
                Email
              </p>
              <p className="ml-7 text-lg font-semibold text-purple-300">
                <a href="mailto:sasangihasadara@gmail.com" className="hover:underline">
                  sasangihasadara@gmail.com
                </a>
              </p>
            </div>

            <div>
              <p className="flex items-center gap-2 font-semibold text-gray-400">
                <i data-lucide="map-pin" className="h-5 w-5" />
                Location
              </p>
              <p className="ml-7 text-white">Colombo, Sri Lanka</p>
            </div>

            <div>
              <p className="mb-3 font-semibold text-gray-400">Follow Me</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/sasangihasadara"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/5"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sasangi-ranasingha-67b35b34a/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/5"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:sasangihasadara@gmail.com"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/5"
                >
                  Email
                </a>
              </div>
            </div>

            <iframe
              className="h-48 w-full rounded-2xl border-0"
              src="https://maps.google.com/maps?q=colombo&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen=""
              loading="lazy"
              title="Colombo map"
            />
          </div>

          <div className="rounded-[1.5rem] border border-purple-500/20 bg-[#0b0f3b] p-8 text-left shadow-xl">
            <h2 className="text-2xl font-bold text-white">Send a Message</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block font-semibold text-gray-400">Inquiry Type</label>
                <select
                  name="inquiry_type"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white outline-none transition placeholder:text-gray-400 focus:border-purple-500"
                >
                  <option value="">Select type...</option>
                  <option value="Project">Project</option>
                  <option value="Internship">Internship</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-semibold text-gray-400">Your Name</label>
                <input
                  name="from_name"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white outline-none transition placeholder:text-gray-400 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-gray-400">Email</label>
                <input
                  name="from_email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white outline-none transition placeholder:text-gray-400 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-gray-400">Subject</label>
                <input
                  name="subject"
                  required
                  placeholder="Subject of your message"
                  className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white outline-none transition placeholder:text-gray-400 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-gray-400">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Type your message here..."
                  className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white outline-none transition placeholder:text-gray-400 focus:border-purple-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center rounded-full bg-purple-600 py-3 font-bold text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

