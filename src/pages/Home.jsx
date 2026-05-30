import React from 'react'

export default function Home(){
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-purple-300 mb-4">Full Stack Developer • UI-focused • React + Tailwind</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Hi, I'm <br />
            <span className="text-purple-400">Sasangi Ranasinghe</span>
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-xl">
            I design and build modern web applications that help businesses launch faster and provide users with clean, responsive experiences.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-semibold text-purple-300">3+</p>
              <p className="text-gray-400 mt-2 text-sm">Projects shipped</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-semibold text-purple-300">React</p>
              <p className="text-gray-400 mt-2 text-sm">Modern front-end apps</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-semibold text-purple-300">Fast</p>
              <p className="text-gray-400 mt-2 text-sm">Clean, polished UI</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="/contact" className="inline-flex items-center justify-center bg-purple-600 px-6 py-3 rounded-full font-semibold text-white hover:bg-purple-700 transition">Work with me</a>
            <a href="files/Sasangi_CV.pdf" download className="inline-flex items-center justify-center border border-purple-500 px-6 py-3 rounded-full font-semibold text-white hover:bg-white/10 transition">Download CV</a>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-gray-400">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">React</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Tailwind CSS</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Node.js</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Responsive design</span>
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
