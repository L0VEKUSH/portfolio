export const profile = {
  name: 'Lovekush Kumar',
  roles: ['Full Stack MERN Developer', 'Software Engineer', 'AI & ML Enthusiast'],
  intro:
    "Final-year Computer Science student building production-grade full-stack applications and computer vision systems — from real-time platforms to end-to-end ML pipelines. I care about clean architecture, honest engineering, and shipping things that actually work.",
  location: 'India',
  email: 'lovekushkumar4312@gmail.com',
  github: 'https://github.com/L0VEKUSH',
  linkedin: 'https://www.linkedin.com/in/lovekush-kumar-a0898533b/',
  resumeUrl: 'Lovekush_resume_wd.pdf',
};


export const navLinks = [
  { path: '~/home', label: 'Home', href: '#home' },
  { path: '~/about', label: 'About', href: '#about' },
  { path: '~/skills', label: 'Skills', href: '#skills' },
  { path: '~/experience', label: 'Experience', href: '#experience' },
  { path: '~/projects', label: 'Projects', href: '#projects' },
  { path: '~/achievements', label: 'Achievements', href: '#achievements' },
  { path: '~/resume', label: 'Resume', href: '#resume' },
  { path: '~/contact', label: 'Contact', href: '#contact' },
];

export const skills = [
  {
    category: 'Programming',
    items: ['JavaScript', 'Python', 'Java', 'C++', 'C'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'JWT Auth', 'Socket.IO'],
  },
  {
    category: 'Database',
    items: ['MongoDB', 'MongoDB Atlas', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'AI / ML',
    items: ['TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn', 'XGBoost', 'YOLOv8', 'CNNs'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Render', 'Vercel'],
  },
];

export const experience = [
  {
    role: 'Web Development Intern',
    org: 'Axlero Solutions',
    period: '',
    points: [
      'Built and maintained features across the MERN stack, working from database schema to UI.',
      'Developed and integrated REST APIs consumed by the production frontend.',
      'Worked directly with MongoDB for schema design and query optimization.',
      'Collaborated in an agile workflow with regular Git-based code review.',
    ],
  },
];

export const projects = [
  {
    slug: 'hitrack-rider',
    name: 'HiTrack Rider',
    flagship: true,
    tagline: 'Full-stack ride-hailing platform with live tracking and social matching',
    description:
      "A production-style ride-hailing platform with real-time driver tracking, ride matching, and a companion social feature ('Be Together') for matching users around shared activities. Built end-to-end and put through a dedicated security and reliability audit.",
    stack: ['NestJS', 'Next.js 15', 'PostgreSQL', 'Socket.IO', 'Leaflet'],
    highlights: [
      'Real-time location tracking with Socket.IO and Leaflet maps',
      'Security hardening pass: fixed race conditions, added missing DB indexes',
      'Second module, Be Together, for social activity matching',
      'Some secondary pages (wallet, safety, settings) are flagged as in-progress',
    ],
    github: '',
    demo: '',
  },
  {
    slug: 'smart-disease-detection',
    name: 'AI-Powered Smart Disease Detection System',
    tagline: 'ML pipelines for five disease categories using classical and gradient-boosted models',
    description:
      'A machine learning system covering diabetes, heart disease, liver disease, kidney disease, and pneumonia detection, using Random Forest, SVM, XGBoost, and HOG+LBP feature pipelines trained on real public datasets, with a unified treatment recommendation engine.',
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'OpenCV', 'Jupyter'],
    highlights: [
      'Six fully executed Jupyter notebooks with real datasets, not synthetic data',
      '15 serialized trained models across five disease categories',
      'CNN deliberately avoided for pneumonia due to limited training data — documented a VGG-16 transfer-learning path for future work instead of overstating results',
    ],
    github: '',
    demo: '',
  },
  {
    slug: 'taskflow',
    name: 'TaskFlow',
    tagline: 'MERN task tracker with dashboard analytics',
    description:
      'A complete task management app with authentication, CRUD task management, and a dashboard analytics view, styled with Tailwind and shipped with dark mode support.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Vite', 'Tailwind CSS'],
    highlights: [
      'JWT-authenticated REST API with Mongoose models',
      'Dashboard analytics view built on real task data',
      'Deployment-ready configs for Render and Vercel',
    ],
    github: '',
    demo: '',
  },
  {
    slug: 'smart-attendance-system',
    name: 'Smart Attendance System',
    tagline: 'Face recognition and emotion-aware attendance pipeline',
    description:
      'A final-year project combining an LBPH face recognizer with a custom EmotionNet CNN trained on FER-2013 for emotion-aware, time-windowed attendance logging.',
    stack: ['Python', 'OpenCV', 'TensorFlow/Keras'],
    highlights: [
      'Custom EmotionNet CNN trained on FER-2013',
      'Time-windowed attendance runner with a verified unit test suite',
      'LBPH-based face recognition pipeline',
    ],
    github: '',
    demo: '',
  },
  {
    slug: 'animal-detection-system',
    name: 'Animal Detection System',
    tagline: 'Real-time animal detection with YOLOv8',
    description:
      'A computer vision system for detecting animals in real time, built to internship-submission standard with a full GUI and CSV logging.',
    stack: ['Python', 'YOLOv8', 'OpenCV'],
    highlights: [
      'Real-time detection GUI',
      'CSV-based detection logging',
      'Delivered with full documentation',
    ],
    github: '',
    demo: '',
  },
  {
    slug: 'drowsiness-detection-system',
    name: 'Drowsiness Detection System',
    tagline: 'Real-time driver drowsiness detection',
    description:
      'A computer vision safety system that detects signs of driver drowsiness in real time, with graceful degradation built into all three model components after diagnosing a Keras deserialization issue in the original model files.',
    stack: ['Python', 'TensorFlow/Keras', 'OpenCV'],
    highlights: [
      'Diagnosed and fixed a Keras 3.14 .h5 model deserialization bug',
      'Graceful degradation across all model components',
      'Delivered with GUI and detection logging',
    ],
    github: '',
    demo: '',
  },
];

export const achievements = [
  'Built and delivered multiple production-style full-stack applications end-to-end, from schema to deployment config.',
  'Completed a dedicated security and reliability audit on a real-time platform, fixing race conditions and missing database indexes.',
  'Built ML pipelines across five medical diagnosis categories using real public datasets, not synthetic placeholders.',
  'Diagnosed and fixed a real model-deserialization bug in a computer vision pipeline rather than working around it superficially.',
  'Maintains a portfolio built on honest, non-inflated project descriptions.',
];

export const githubUsername = 'https://github.com/L0VEKUSH';
