const html = `
<nav class="fixed w-full top-0 z-50 bg-[#070b2a]/80 backdrop-blur border-b border-purple-500/20">
  <div class="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
    <h1 class="text-xl font-bold text-purple-400">Portfolio</h1>
    <div class="space-x-6 hidden md:flex">
      <a href="#home" class="hover:text-purple-400 transition-colors">Home</a>
      <a href="#about" class="hover:text-purple-400 transition-colors">About</a>
      <a href="#skills" class="hover:text-purple-400 transition-colors">Skills</a>
      <a href="#projects" class="hover:text-purple-400 transition-colors">Projects</a>
      <a href="#contact" class="hover:text-purple-400 transition-colors">Contact</a>
    </div>
  </div>
</nav>

<section id="home" class="min-h-screen flex items-center pt-20">
  <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
    <div>
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Hi, I'm <br><span class="text-purple-400">Sasangi Ranasinghe</span></h1>
      <p class="text-gray-300 mb-4">IT Student & Aspiring Full Stack Developer</p>
      <p class="text-gray-400 max-w-lg mb-8">Building functional web applications with modern technologies. Focused on smooth, user-friendly experiences. Always learning and improving development skills.</p>
      <div class="flex gap-4 mb-8">
        <a href="#contact" class="bg-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">Hire Me</a>
        <a href="files/Sasangi_CV.pdf" download class="border border-purple-500 px-6 py-3 rounded-lg hover:bg-purple-500/20 transition-colors">Download CV</a>
      </div>
      <div class="flex gap-6 text-gray-400">
        <a href="https://github.com/sasangihasadara" class="hover:text-purple-400 transition-colors"><i data-lucide="github"></i></a>
        <a href="https://www.linkedin.com/in/sasangi-ranasingha-67b35b34a/" class="hover:text-purple-400 transition-colors"><i data-lucide="linkedin"></i></a>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="relative">
        <div class="absolute inset-0 rounded-full bg-purple-500 blur-2xl opacity-40"></div>
        <img src="images/sasa.jpg" alt="Sasangi" class="w-72 h-72 rounded-full object-cover object-top border-4 border-purple-500 shadow-lg" />
      </div>
    </div>
  </div>
</section>

<section id="about" class="py-20 px-6">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-4xl font-bold text-center mb-10">About Me</h2>
    <div class="bg-[#0b0f3b] p-8 rounded-xl text-gray-300 leading-relaxed border border-purple-500/20">
      <p>I am a passionate undergraduate software developer with a strong interest in full-stack web development. I enjoy building user-friendly, scalable web applications using modern technologies such as PHP, HTML, CSS, JavaScript, Python, and Java. I am currently seeking an internship opportunity to gain industry experience and further develop my technical skills. I am a quick learner who enjoys problem-solving, teamwork, and continuous learning.</p>
    </div>
  </div>
</section>

<section id="skills" class="py-20 px-4 bg-slate-900/50">
  <h2 class="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
  <div class="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
    <div class="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
      <h3 class="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2"><i data-lucide="layout" class="w-5 h-5"></i> Frontend</h3>
      <div class="space-y-3 text-gray-300">
        <div class="flex items-center gap-3"><i data-lucide="code" class="w-5 h-5 text-purple-400"></i><span>HTML / CSS</span></div>
        <div class="flex items-center gap-3"><i data-lucide="zap" class="w-5 h-5 text-purple-400"></i><span>JavaScript</span></div>
        <div class="flex items-center gap-3"><i data-lucide="component" class="w-5 h-5 text-purple-400"></i><span>React</span></div>
        <div class="flex items-center gap-3"><i data-lucide="wind" class="w-5 h-5 text-purple-400"></i><span>Tailwind CSS</span></div>
      </div>
    </div>
    <div class="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
      <h3 class="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2"><i data-lucide="server" class="w-5 h-5"></i> Backend</h3>
      <div class="space-y-3 text-gray-300">
        <div class="flex items-center gap-3"><i data-lucide="code-2" class="w-5 h-5 text-purple-400"></i><span>PHP</span></div>
        <div class="flex items-center gap-3"><i data-lucide="hexagon" class="w-5 h-5 text-purple-400"></i><span>Node.js</span></div>
        <div class="flex items-center gap-3"><i data-lucide="file-code" class="w-5 h-5 text-purple-400"></i><span>Python</span></div>
        <div class="flex items-center gap-3"><i data-lucide="workflow" class="w-5 h-5 text-purple-400"></i><span>REST APIs</span></div>
      </div>
    </div>
    <div class="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
      <h3 class="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2"><i data-lucide="smartphone" class="w-5 h-5"></i> Mobile</h3>
      <div class="space-y-3 text-gray-300">
        <div class="flex items-center gap-3"><i data-lucide="code-xml" class="w-5 h-5 text-purple-400"></i><span>Kotlin</span></div>
        <div class="flex items-center gap-3"><i data-lucide="tablet" class="w-5 h-5 text-purple-400"></i><span>Android Studio</span></div>
        <div class="flex items-center gap-3"><i data-lucide="palette" class="w-5 h-5 text-purple-400"></i><span>UI / UX Design</span></div>
        <div class="flex items-center gap-3"><i data-lucide="pen-tool" class="w-5 h-5 text-purple-400"></i><span>Wireframing</span></div>
      </div>
    </div>
    <div class="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
      <h3 class="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2"><i data-lucide="wrench" class="w-5 h-5"></i> Database & Tools</h3>
      <div class="space-y-3 text-gray-300">
        <div class="flex items-center gap-3"><i data-lucide="database" class="w-5 h-5 text-purple-400"></i><span>MySQL</span></div>
        <div class="flex items-center gap-3"><i data-lucide="git-branch" class="w-5 h-5 text-purple-400"></i><span>Git & GitHub</span></div>
        <div class="flex items-center gap-3"><i data-lucide="figma" class="w-5 h-5 text-purple-400"></i><span>Figma</span></div>
        <div class="flex items-center gap-3"><i data-lucide="box" class="w-5 h-5 text-purple-400"></i><span>VS Code</span></div>
      </div>
    </div>
  </div>
</section>

<section id="projects" class="py-20 px-6">
  <h2 class="text-4xl font-bold text-center mb-12">Projects</h2>
  <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
    <div class="bg-[#0b0f3b] rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 hover:scale-[1.02] transition-all">
      <img src="images/bag.jpg" alt="E-Commerce Website" class="w-full h-56 object-cover" />
      <div class="p-6">
        <h3 class="text-xl font-bold text-purple-400">E-Commerce Website</h3>
        <p class="text-gray-400 mt-2">Online shopping platform</p>
        <button id="project-ecommerce" class="mt-4 bg-purple-600 px-5 py-2 rounded-lg hover:bg-purple-700 font-semibold">View Details</button>
      </div>
    </div>
    <div class="bg-[#0b0f3b] rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 hover:scale-[1.02] transition-all">
      <img src="images/app.jpg" alt="Wellness Mobile App" class="w-full h-56 object-cover" />
      <div class="p-6">
        <h3 class="text-xl font-bold text-purple-400">Wellness Mobile App</h3>
        <p class="text-gray-400 mt-2">Android health tracking app</p>
        <button id="project-wellness" class="mt-4 bg-purple-600 px-5 py-2 rounded-lg hover:bg-purple-700 font-semibold">View Details</button>
      </div>
    </div>
    <div class="bg-[#0b0f3b] rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 hover:scale-[1.02] transition-all">
      <img src="images/optical.jpg" alt="Optical System" class="w-full h-56 object-cover" />
      <div class="p-6">
        <h3 class="text-xl font-bold text-purple-400">Optical System</h3>
        <p class="text-gray-400 mt-2">Optical shop management system</p>
        <button id="project-optical" class="mt-4 bg-purple-600 px-5 py-2 rounded-lg hover:bg-purple-700 font-semibold">View Details</button>
      </div>
    </div>
    <div class="bg-[#0b0f3b] rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 hover:scale-[1.02] transition-all">
      <img src="images/exam.jpg" alt="Online Examination System" class="w-full h-56 object-cover" />
      <div class="p-6">
        <h3 class="text-xl font-bold text-purple-400">Online Examination System</h3>
        <p class="text-gray-400 mt-2">University group project</p>
        <button id="project-exam" class="mt-4 bg-purple-600 px-5 py-2 rounded-lg hover:bg-purple-700 font-semibold">View Details</button>
      </div>
    </div>
  </div>
</section>

<div id="projectModal" class="fixed inset-0 bg-black/70 hidden items-center justify-center z-50">
  <div class="bg-[#0b0f3b] max-w-lg w-full p-6 rounded-xl relative border border-purple-500/30">
    <button id="modalClose" class="absolute top-3 right-3 text-gray-400 hover:text-white">✖</button>
    <h3 id="modalTitle" class="text-2xl font-bold text-purple-400 mb-3"></h3>
    <p id="modalDesc" class="text-gray-300 mb-4"></p>
    <p class="text-sm text-gray-400">Technologies:</p>
    <p id="modalTech" class="text-purple-300 mb-4"></p>
    <a id="modalLink" target="_blank" rel="noreferrer" class="inline-block bg-purple-600 px-4 py-2 rounded hover:bg-purple-700">View on GitHub</a>
  </div>
</div>

<section id="contact" class="py-20 bg-[#070b2a]">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <h2 class="text-4xl font-bold mb-10">Contact Me</h2>
    <div class="grid md:grid-cols-2 gap-10">
      <div class="bg-[#0b0f3b] p-8 rounded-xl space-y-6 text-left border border-purple-500/20">
        <div>
          <p class="text-gray-400 font-semibold flex items-center gap-2"><i data-lucide="phone" class="w-5 h-5"></i>Phone</p>
          <p class="text-lg font-bold text-purple-400 ml-7">+94 77 230 1171</p>
        </div>
        <div>
          <p class="text-gray-400 font-semibold flex items-center gap-2"><i data-lucide="mail" class="w-5 h-5"></i>Email</p>
          <p class="text-lg text-purple-400 font-semibold ml-7"><a href="mailto:sasangihasadara@gmail.com" class="hover:underline">sasangihasadara@gmail.com</a></p>
        </div>
        <div>
          <p class="text-gray-400 font-semibold flex items-center gap-2"><i data-lucide="map-pin" class="w-5 h-5"></i>Location</p>
          <p class="text-white ml-7">Colombo, Sri Lanka</p>
          <iframe class="w-full h-40 mt-3 rounded-lg border-0" src="https://maps.google.com/maps?q=colombo&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy"></iframe>
        </div>
        <div>
          <p class="text-gray-400 mb-2 font-semibold">Follow Me</p>
          <div class="flex gap-4">
            <a href="https://github.com/sasangihasadara" class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-purple-500 transition-all"><i data-lucide="github" class="w-5 h-5"></i></a>
            <a href="https://www.linkedin.com/in/sasangi-ranasingha-67b35b34a/" class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-purple-500 transition-all"><i data-lucide="linkedin" class="w-5 h-5"></i></a>
            <a href="mailto:sasangihasadara@gmail.com" class="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-purple-500 transition-all"><i data-lucide="mail" class="w-5 h-5"></i></a>
          </div>
        </div>
      </div>
      <div class="bg-[#0b0f3b] p-8 rounded-xl text-left border border-purple-500/20">
        <h3 class="text-2xl font-bold mb-6">Send a Message</h3>
        <form id="contactForm" class="space-y-4">
          <div>
            <label class="block text-gray-400 font-semibold mb-2">Inquiry Type</label>
            <select id="inquiryType" name="inquiry_type" required class="w-full bg-white/10 backdrop-blur-md text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">Select type...</option>
              <option value="Project">Project</option>
              <option value="Internship">Internship</option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-400 font-semibold mb-2">Your Name</label>
            <input type="text" id="userName" name="from_name" placeholder="Enter your name" required class="w-full bg-white/10 backdrop-blur-md text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-300 hover:bg-white/15 transition" />
          </div>
          <div>
            <label class="block text-gray-400 font-semibold mb-2">Email</label>
            <input type="email" id="userEmail" name="from_email" placeholder="Enter your email" required class="w-full bg-white/10 backdrop-blur-md text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-300 hover:bg-white/15 transition" />
          </div>
          <div>
            <label class="block text-gray-400 font-semibold mb-2">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Subject of your message" required class="w-full bg-white/10 backdrop-blur-md text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-300" />
          </div>
          <div>
            <label class="block text-gray-400 font-semibold mb-2">Message</label>
            <textarea rows="5" id="message" name="message" placeholder="Type your message here..." required class="w-full bg-white/10 backdrop-blur-md text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-300"></textarea>
          </div>
          <button type="submit" id="submitBtn" class="w-full bg-purple-600 py-3 rounded-lg text-white font-bold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
            <span id="btnText">Send Message</span>
            <svg id="loader" class="animate-spin h-5 w-5 text-white hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

<footer class="py-8 text-center text-gray-400 border-t border-purple-500/20">
  <p>© 2026 Sasangi Ranasinghe. All rights reserved.</p>
</footer>
`;

document.body.innerHTML = html;

document.body.style.background = 'linear-gradient(135deg,#070b2a 0%,#0b0f3b 50%,#070b2a 100%)';

window.lucide && lucide.createIcons();

emailjs.init('h7l3hvKInz5qNnRRT');

const projects = {
  ecommerce: {
    title: 'E-Commerce Website',
    desc: 'Full-stack e-commerce website with cart and admin features.',
    tech: 'HTML, CSS, JavaScript, PHP, MySQL',
    link: 'https://github.com/sasangihasadara/elements'
  },
  wellness: {
    title: 'Wellness Mobile App',
    desc: 'Android app for health and wellness tracking.',
    tech: 'Kotlin, Android Studio, UI/UX',
    link: 'https://github.com/sasangihasadara/Wellness-App'
  },
  optical: {
    title: 'Optical System',
    desc: 'Inventory and billing system for optical shops.',
    tech: 'PHP, CSS, MySQL',
    link: 'https://github.com/sasangihasadara/Myproject'
  },
  exam: {
    title: 'Online Examination System',
    desc: 'University project for conducting online exams.',
    tech: 'PHP, HTML, CSS, MySQL',
    link: 'https://github.com/sasangihasadara/Online-Examination-System'
  }
};

function openModal(project) {
  const data = projects[project];
  if (!data) return;
  document.getElementById('modalTitle').innerText = data.title;
  document.getElementById('modalDesc').innerText = data.desc;
  document.getElementById('modalTech').innerText = data.tech;
  document.getElementById('modalLink').href = data.link;
  const modal = document.getElementById('projectModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

window.openModal = openModal;
window.closeModal = closeModal;

const setProjectButtons = () => {
  ['ecommerce', 'wellness', 'optical', 'exam'].forEach(id => {
    const button = document.getElementById(`project-${id}`);
    if (button) button.addEventListener('click', () => openModal(id));
  });
};

const initContactForm = () => {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  const submitBtn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const loader = document.getElementById('loader');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';
    loader.classList.remove('hidden');

    const formData = {
      inquiry_type: document.getElementById('inquiryType').value,
      from_name: document.getElementById('userName').value,
      from_email: document.getElementById('userEmail').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };

    emailjs.send('service_2q8e18o', 'template_qcb2xq8', formData)
      .then(function () {
        alert('✅ Message sent successfully! I will get back to you soon.');
        contactForm.reset();
        submitBtn.disabled = false;
        btnText.textContent = 'Send Message';
        loader.classList.add('hidden');
      }, function () {
        alert('❌ Failed to send message. Please try again or contact me directly via email.');
        submitBtn.disabled = false;
        btnText.textContent = 'Send Message';
        loader.classList.add('hidden');
      });
  });
};

const init = () => {
  setProjectButtons();
  document.getElementById('modalClose').addEventListener('click', closeModal);
  initContactForm();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
