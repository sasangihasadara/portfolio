import React from 'react'

export default function Home(){
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm <br /><span className="text-purple-400">Sasangi Ranasinghe</span></h1>
          <p className="text-gray-300 mb-4">IT Student & Aspiring Full Stack Developer</p>
          <p className="text-gray-400 max-w-lg mb-8">Building functional web applications with modern technologies. Focused on smooth, user-friendly experiences. Always learning and improving development skills.</p>

          <div className="flex gap-4 mb-8">
            <a href="/contact" className="bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">Hire Me</a>
            <a href="files/Sasangi_CV.pdf" download className="border border-purple-500 px-6 py-3 rounded-lg hover:bg-purple-500/20">Download CV</a>
          </div>

          <div className="flex gap-6 text-gray-400">
            <a href="https://github.com/sasangihasadara" className="hover:text-purple-400"><i data-lucide="github"></i></a>
            <a href="https://www.linkedin.com/in/sasangi-ranasingha-67b35b34a/" className="hover:text-purple-400"><i data-lucide="linkedin"></i></a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-purple-500 blur-2xl opacity-40"></div>
            <img src="images/sasa.jpg" alt="Sasangi" className="w-72 h-72 rounded-full object-cover object-top border-4 border-purple-500 shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
