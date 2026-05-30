export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/education', label: 'Education' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export const heroStats = [
  { value: '4+', label: 'Portfolio projects' },
  { value: '5+', label: 'Core technologies' },
  { value: 'Open', label: 'For internships' },
]

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'layout-template',
    items: ['HTML / CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: 'server',
    items: ['PHP', 'Node.js', 'Python', 'REST APIs'],
  },
  {
    title: 'Mobile',
    icon: 'smartphone',
    items: ['Kotlin', 'Android Studio', 'UI / UX Design', 'Wireframing'],
  },
  {
    title: 'Database & Tools',
    icon: 'wrench',
    items: ['MySQL', 'Git & GitHub', 'Figma', 'VS Code'],
  },
]

export const services = [
  {
    title: 'Responsive Websites',
    icon: 'monitor-smartphone',
    description:
      'Clean, mobile-friendly portfolio, business, and landing pages built with React and Tailwind CSS.',
    points: ['Modern layouts', 'Fast UI delivery', 'Cross-device polish'],
  },
  {
    title: 'Project UI Implementation',
    icon: 'layers-3',
    description:
      'Turning wireframes or ideas into polished interfaces with clear structure and smooth user flow.',
    points: ['Figma to code', 'Reusable components', 'Consistent design systems'],
  },
  {
    title: 'Backend Integration',
    icon: 'database-zap',
    description:
      'Connecting frontend interfaces with practical backend logic, forms, and data-driven features.',
    points: ['PHP / MySQL projects', 'Form handling', 'API integration'],
  },
  {
    title: 'Academic & Team Projects',
    icon: 'users',
    description:
      'Reliable support for university assignments, group projects, and collaborative development work.',
    points: ['Team collaboration', 'Problem solving', 'Clear handoff'],
  },
]

export const educationItems = [
  {
    year: 'Current',
    title: 'Undergraduate IT Student',
    description:
      'Building a strong foundation in software development, UI implementation, and practical problem solving.',
  },
  {
    year: 'Ongoing',
    title: 'Web Development Practice',
    description:
      'Working with React, PHP, CSS, JavaScript, Python, and MySQL through real portfolio projects.',
  },
  {
    year: 'Next Step',
    title: 'Internship Readiness',
    description:
      'Preparing for an internship opportunity where I can learn from production work and contribute to a team.',
  },
]

export const experienceItems = [
  {
    title: 'E-Commerce Website',
    period: 'Full-stack portfolio project',
    description:
      'Built an online shopping experience with product browsing, cart flow, and admin-oriented features.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
  {
    title: 'Wellness Mobile App',
    period: 'Android app project',
    description:
      'Created a health and wellness tracking concept focused on a simple user experience and clean structure.',
    tags: ['Kotlin', 'Android Studio', 'UI / UX'],
  },
  {
    title: 'Optical System',
    period: 'Management system',
    description:
      'Designed a shop management solution for inventory and billing workflows in an optical business context.',
    tags: ['PHP', 'CSS', 'MySQL'],
  },
  {
    title: 'Online Examination System',
    period: 'University group project',
    description:
      'Contributed to an online assessment system designed for structured exam workflows and submission handling.',
    tags: ['PHP', 'HTML', 'CSS', 'MySQL'],
  },
]

export const projects = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Website',
    description: 'Online shopping platform with a polished shopping flow and practical backend support.',
    image: '/images/bag.jpg',
    github: 'https://github.com/sasangihasadara/elements',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    details:
      'This project focuses on a real-world shopping experience with product browsing, cart interactions, and admin-friendly structure.',
  },
  {
    id: 'wellness',
    title: 'Wellness Mobile App',
    description: 'Android health tracking app with an approachable and clean mobile-first experience.',
    image: '/images/app.jpg',
    github: 'https://github.com/sasangihasadara/Wellness-App',
    tech: ['Kotlin', 'Android Studio', 'UI / UX'],
    details:
      'A concept app for health and wellness tracking that prioritizes usability, simple flows, and mobile clarity.',
  },
  {
    id: 'optical',
    title: 'Optical System',
    description: 'Inventory and billing system tailored for optical shop operations.',
    image: '/images/optical.jpg',
    github: 'https://github.com/sasangihasadara/Myproject',
    tech: ['PHP', 'CSS', 'MySQL'],
    details:
      'Built to support business operations such as stock handling, billing, and a structured management flow.',
  },
  {
    id: 'exam',
    title: 'Online Examination System',
    description: 'University group project for conducting and managing online exams.',
    image: '/images/exam.jpg',
    github: 'https://github.com/sasangihasadara/Online-Examination-System',
    tech: ['PHP', 'HTML', 'CSS', 'MySQL'],
    details:
      'A collaborative academic project designed around question handling, exam flow, and structured submission management.',
  },
]

