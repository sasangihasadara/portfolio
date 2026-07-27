export const navLinks = [
  { to: '#home', label: 'Home' },
  { to: '#about', label: 'About' },
  { to: '#skills', label: 'Skills' },
  { to: '#projects', label: 'Projects' },
  { to: '#services', label: 'Services' },
  { to: '#certificates', label: 'Certificates' },
  { to: '#contact', label: 'Contact' },
]

export const heroStats = [
  { value: 'Full-Stack', label: 'Build and integration' },
  { value: 'UI/UX', label: 'Design and usability' },
  { value: 'QA', label: 'Testing and quality' },
]

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'layout-template',
    summary: 'Responsive interfaces, clean layouts, and polished UI flows.',
    level: 92,
    items: [
      { label: 'HTML / CSS', icon: 'code' },
      { label: 'JavaScript', icon: 'sparkles' },
      { label: 'React', icon: 'component' },
      { label: 'Tailwind CSS', icon: 'wind' },
    ],
  },
  {
    title: 'Backend',
    icon: 'server',
    summary: 'Practical server-side logic, forms, and API-ready thinking.',
    level: 78,
    items: [
      { label: 'PHP', icon: 'file-code' },
      { label: 'Node.js', icon: 'braces' },
      { label: 'Python', icon: 'terminal' },
      { label: 'REST APIs', icon: 'plug' },
    ],
  },
  {
    title: 'Mobile',
    icon: 'smartphone',
    summary: 'Mobile UI concepts, Android workflow, and usability planning.',
    level: 72,
    items: [
      { label: 'Kotlin', icon: 'code-xml' },
      { label: 'Android Studio', icon: 'smartphone' },
      { label: 'UI / UX Design', icon: 'palette' },
      { label: 'Wireframing', icon: 'pen-tool' },
    ],
  },
  {
    title: 'Database & Tools',
    icon: 'wrench',
    summary: 'Data handling, version control, and design-to-code workflow tools.',
    level: 84,
    items: [
      { label: 'MySQL', icon: 'database' },
      { label: 'Git & GitHub', icon: 'git-branch' },
      { label: 'Figma', icon: 'figma' },
      { label: 'VS Code', icon: 'box' },
    ],
  },
]

export const services = [
  {
    title: 'Full-Stack Web Apps',
    icon: 'layers-3',
    description:
      'Responsive web applications built with clean structure, practical logic, and a focus on maintainable delivery.',
    points: ['React', 'PHP / MySQL', 'API-ready flow'],
  },
  {
    title: 'UI / UX Design',
    icon: 'pen-tool',
    description:
      'Clear layouts, wireframes, and user flows that make interfaces feel easier to scan and use.',
    points: ['Figma', 'Responsive layout', 'Accessible flow'],
  },
  {
    title: 'QA & Testing',
    icon: 'clipboard-check',
    description:
      'Manual testing, bug reporting, regression checks, and retesting that help teams ship with confidence.',
    points: ['Test cases', 'Bug reports', 'UAT and regression'],
  },
]

export const educationItems = [
  {
    year: 'Current',
    title: 'Undergraduate IT Student',
    description:
      'Building a strong foundation in software development, UI/UX thinking, and QA-driven problem solving.',
  },
  {
    year: 'Ongoing',
    title: 'Full-Stack, UI/UX, and QA Practice',
    description:
      'Working with real portfolio projects while balancing build quality, user experience, and testing discipline.',
  },
  {
    year: 'Next Step',
    title: 'Internship Readiness',
    description:
      'Preparing for an internship opportunity where I can contribute through full-stack delivery, UI/UX awareness, and quality checks.',
  },
]

export const certificateItems = [
  {
    priority: 700,
    title: 'AI/ML Engineer - Stage 2',
    issuer: 'Centre for Open and Distance Education, Faculty of Computing, SLIIT',
    year: '2026',
    image: '/images/Screenshot 2026-05-30 231428.png',
    issuedDate: 'Issued 2026-01-06',
    verification: {
      label: 'Certificate ID',
      value: '8hv1whxcnt',
    },
    description:
      'Completed the second stage of the AI and machine learning learning path with continued progress in structured technical study.',
  },
  {
    priority: 690,
    title: 'AI/ML Engineer - Stage 1',
    issuer: 'Centre for Open and Distance Education, Faculty of Computing, SLIIT',
    year: '2026',
    image: '/images/Screenshot 2026-05-30 231325.png',
    issuedDate: 'Issued 2026-01-06',
    verification: {
      label: 'Certificate ID',
      value: 'lhg4aojzu4',
    },
    description:
      'Completed the first stage of an AI and machine learning learning path focused on foundational concepts and practical progression.',
  },
  {
    priority: 680,
    title: 'Python for Beginners',
    issuer: 'Centre for Open & Distance Learning (CODL), University of Moratuwa, Sri Lanka',
    year: '2025',
    image: '/images/Screenshot 2026-05-30 230506.png',
    issuedDate: 'Issued 2025-12-09',
    verification: {
      label: 'Verification URL',
      value: 'open.uom.lk/verify',
      href: 'https://open.uom.lk/verify',
    },
    description:
      'Completed an online learning programme focused on Python fundamentals, beginner programming concepts, and practical coding basics.',
  },
  {
    priority: 670,
    title: 'Web Design for Beginners',
    issuer: 'Centre for Open & Distance Learning (CODL), University of Moratuwa, Sri Lanka',
    year: '2026',
    image: '/images/Screenshot 2026-05-30 225611.png',
    issuedDate: 'Issued 2026-05-30',
    verification: {
      label: 'Verification Code',
      value: 'kaujFybQ0d',
      href: 'https://open.uom.lk/verify',
    },
    description:
      'Completed an online learning programme focused on the basics of web design and introductory digital layout concepts. The certificate now shows the updated name and the final issued version.',
  },
  {
    priority: 660,
    title: 'Front-End Web Development',
    issuer: 'Centre for Open & Distance Learning (CODL), University of Moratuwa, Sri Lanka',
    year: '2026',
    image: '/images/Screenshot 2026-05-30 224153.png',
    issuedDate: 'Issued 2026-05-30',
    verification: {
      label: 'Verification Code',
      value: 'BXiatOPcaw',
      href: 'https://open.uom.lk/verify',
    },
    description:
      'Completed a front-end focused learning programme covering interface building and practical web development basics.',
  },
  {
    priority: 650,
    title: 'MongoDB Node.js Developer Path',
    issuer: 'MongoDB',
    year: '2026',
    image: '/images/Screenshot 2026-05-30 224631.png',
    issuedDate: 'Issued 2026-01-05',
    verification: {
      label: 'Certificate ID',
      value: 'MDbxuf82a9gxr',
    },
    description:
      'Completed the MongoDB Node.js Developer Path, focusing on using MongoDB with Node.js for real application workflows.',
  },
  {
    priority: 640,
    title: 'MongoDB Atlas Administrator Path',
    issuer: 'MongoDB',
    year: '2026',
    image: '/images/Screenshot 2026-05-30 224702.png',
    issuedDate: 'Issued 2026-01-05',
    verification: {
      label: 'Certificate ID',
      value: 'MDbwggzhb8fq',
    },
    description:
      'Completed the MongoDB Atlas Administrator Path, covering practical database administration and Atlas management tasks.',
  },
]

export const projects = [
  {
    id: 'vehicle-service',
    title: 'Vehicle Service and Fuel Station Management System',
    description:
      'Web-based management system for service scheduling, fuel stock monitoring, and customer record handling.',
    image: '/images/vehicle-service-banner-v2.svg',
    github: 'https://github.com/sasangihasadara/Online-Vehicle-Service-and-Fuel-Station-Management-System',
    liveUrl: null,
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    challenge:
      'The challenge was to keep service scheduling, fuel stock monitoring, and customer records organized in one secure system.',
    approach:
      'I designed a responsive web interface with secure user authentication, structured service and fuel tracking, and clear record-management sections.',
    result:
      'The final system streamlines daily operations, improves data accuracy, and helps make vehicle service and fuel management more efficient.',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Website',
    description: 'Online shopping platform with a polished shopping flow and MongoDB-backed backend support.',
    image: '/images/bag.jpg',
    github: 'https://github.com/sasangihasadara/Smart-_bag-_system',
    liveUrl: null,
    tech: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
    challenge:
      'The goal was to create a shopping experience that felt clear for users while still supporting MongoDB-based data handling for products and orders.',
    approach:
      'I organized the interface around product discovery, cart flow, and structured data handling so the project stayed practical and easy to navigate.',
    result:
      'The final build gives a clean online shopping flow with a more complete e-commerce feel and a stronger foundation for future expansion.',
  },
  {
    id: 'wellness',
    title: 'Wellness Mobile App',
    description: 'Android health tracking app with an approachable and clean mobile-first experience.',
    image: '/images/app.jpg',
    github: 'https://github.com/sasangihasadara/Wellness_App',
    liveUrl: null,
    tech: ['Kotlin', 'Android Studio', 'UI / UX'],
    challenge:
      'The app needed to feel calm and easy to use so health tracking would not become overwhelming for the user.',
    approach:
      'I kept the layout minimal, focused on simple navigation, and used mobile-friendly patterns that make the experience feel light and direct.',
    result:
      'The project reads as a clear wellness concept with a strong mobile-first identity and a tidy interaction flow.',
  },
  {
    id: 'optical',
    title: 'Optical System',
    description: 'Inventory and billing system tailored for optical shop operations.',
    image: '/images/optical.jpg',
    github: 'https://github.com/sasangihasadara/Optical_System',
    liveUrl: 'https://portfolio-ksca-cyan.vercel.app/',
    tech: ['PHP', 'CSS', 'MySQL'],
    challenge:
      'The challenge was to support day-to-day optical shop tasks such as stock tracking, billing, and record keeping in one organized system.',
    approach:
      'I structured the system around business workflow so the interface could stay practical, readable, and easy to operate.',
    result:
      'The result is a management-style project that demonstrates how I think about real-world data entry and workflow handling.',
  },
  {
    id: 'exam',
    title: 'Online Examination System',
    description: 'University group project for conducting and managing online exams.',
    image: '/images/exam.jpg',
    github: 'https://github.com/sasangihasadara/Online-Examination-System',
    liveUrl: null,
    tech: ['PHP', 'HTML', 'CSS', 'MySQL'],
    challenge:
      'This project needed to support question delivery, timed exam flow, and structured submission handling in a group setting.',
    approach:
      'I helped shape a simple exam workflow with clear sections so users could focus on the assessment instead of the interface.',
    result:
      'The project shows my ability to contribute to a team-built system and organize a task-heavy workflow into a readable interface.',
  },
]
