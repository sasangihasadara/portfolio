import React, { useRef, useState } from 'react'

export default function Contact(){
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const form = new FormData(formRef.current)
    const data = Object.fromEntries(form.entries())
    try{
      await window.emailjs.send('service_2q8e18o','template_qcb2xq8', data)
      alert('✅ Message sent successfully!')
      formRef.current.reset()
    }catch(err){
      console.error(err)
      alert('❌ Failed to send message. Please try again later.')
    }finally{
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#070b2a]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#0b0f3b] p-8 rounded-xl space-y-6 text-left border border-purple-500/20">
            <div>
              <p className="text-gray-400 font-semibold flex items-center gap-2">Phone</p>
              <p className="text-lg font-bold text-purple-400 ml-7">+94 77 230 1171</p>
            </div>
            <div>
              <p className="text-gray-400 font-semibold flex items-center gap-2">Email</p>
              <p className="text-lg text-purple-400 font-semibold ml-7"><a href="mailto:sasangihasadara@gmail.com">sasangihasadara@gmail.com</a></p>
            </div>
          </div>

          <div className="bg-[#0b0f3b] p-8 rounded-xl text-left border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-400 font-semibold mb-2">Inquiry Type</label>
                <select name="inquiry_type" required className="w-full bg-white/10 text-white p-3 rounded">
                  <option value="">Select type...</option>
                  <option>Project</option>
                  <option>Internship</option>
                  <option>Job Opportunity</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 font-semibold mb-2">Your Name</label>
                <input name="from_name" required className="w-full bg-white/10 p-3 rounded" />
              </div>
              <div>
                <label className="block text-gray-400 font-semibold mb-2">Email</label>
                <input name="from_email" type="email" required className="w-full bg-white/10 p-3 rounded" />
              </div>
              <div>
                <label className="block text-gray-400 font-semibold mb-2">Subject</label>
                <input name="subject" required className="w-full bg-white/10 p-3 rounded" />
              </div>
              <div>
                <label className="block text-gray-400 font-semibold mb-2">Message</label>
                <textarea name="message" rows="5" required className="w-full bg-white/10 p-3 rounded"></textarea>
              </div>
              <button type="submit" className="w-full bg-purple-600 py-3 rounded-lg text-white font-bold hover:bg-purple-700">{loading ? 'Sending...' : 'Send Message'}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
