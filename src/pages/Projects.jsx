import React, { useState } from 'react'

const projectList = [
  {id:'ecommerce',title:'E-Commerce Website',desc:'Full-stack e-commerce website with cart and admin features.',img:'images/bag.jpg',link:'https://github.com/sasangihasadara/elements'},
  {id:'wellness',title:'Wellness Mobile App',desc:'Android health tracking app.',img:'images/app.jpg',link:'https://github.com/sasangihasadara/Wellness-App'},
  {id:'optical',title:'Optical System',desc:'Inventory and billing system for optical shops.',img:'images/optical.jpg',link:'https://github.com/sasangihasadara/Myproject'},
  {id:'exam',title:'Online Examination System',desc:'University project for conducting online exams.',img:'images/exam.jpg',link:'https://github.com/sasangihasadara/Online-Examination-System'}
]

export default function Projects(){
  const [modal, setModal] = useState(null)
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {projectList.map(p => (
          <div key={p.id} className="bg-[#0b0f3b] rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 hover:scale-[1.02] transition-all">
            <img src={p.img} alt={p.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-purple-400">{p.title}</h3>
              <p className="text-gray-400 mt-2">{p.desc}</p>
              <button onClick={() => setModal(p)} className="mt-4 bg-purple-600 px-5 py-2 rounded-lg hover:bg-purple-700 font-semibold">View Details</button>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#0b0f3b] max-w-lg w-full p-6 rounded-xl relative border border-purple-500/30">
            <button onClick={() => setModal(null)} className="absolute top-3 right-3 text-gray-400 hover:text-white">✖</button>
            <h3 className="text-2xl font-bold text-purple-400 mb-3">{modal.title}</h3>
            <p className="text-gray-300 mb-4">{modal.desc}</p>
            <p className="text-sm text-gray-400">Technologies:</p>
            <p className="text-purple-300 mb-4">See GitHub</p>
            <a href={modal.link} target="_blank" rel="noreferrer" className="inline-block bg-purple-600 px-4 py-2 rounded hover:bg-purple-700">View on GitHub</a>
          </div>
        </div>
      )}
    </section>
  )
}
