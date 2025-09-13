// Mock data for Aditya's World Portfolio

export const personalInfo = {
  name: "Aditya Maskar",
  title: "Software Development Engineer I",
  subtitle: "Backend Specialist & AI/ML Enthusiast",
  email: "mr.aditya.maskar@gmail.com",
  phone: "+91 7498729345",
  location: "Navi Mumbai, Maharashtra, India",
  website: "https://lighttoinfinity.com",
  linkedin: "https://www.linkedin.com/in/aditya-maskar/",
  github: "https://github.com/adityamaskar",
  leetcode: "https://leetcode.com/adityamaskar",
  profileImage: "/images/profile-photo.jpeg",
  bio: "A passionate Software Development Engineer specializing in backend development with expertise in microservices architecture, RESTful APIs, and database optimization. Experienced in building scalable, cloud-based solutions using modern technologies like Python, Java, Kotlin, and AWS.",
  resume_url: "/resume.pdf"
};

export const experience = [
  {
    id: 1,
    company: "Jio Platforms Limited",
    position: "Software Development Engineer I - Backend",
    duration: "Dec 2023 – Present",
    location: "Mumbai, India",
    description: "Leading backend development initiatives for enterprise solutions",
    achievements: [
      "Engineered and deployed microservices using Python, Java, Kotlin, Spring Boot, FastAPI",
      "Improved system performance by 91.67% through parallel processing implementation",
      "Optimized database response times by 30% through advanced SQL query optimization",
      "Collaborated on scalable cloud-based solutions using AWS, Kubernetes, and microservices",
      "Applied Agile methodologies (Scrum) for efficient software delivery",
      "Maintained JPW Sales Assist and JPW JioPOS Lite applications"
    ],
    technologies: ["Python", "Java", "Kotlin", "Spring Boot", "FastAPI", "AWS", "Kubernetes", "Redis", "Zookeeper", "MinIO"],
    logo: "https://images.unsplash.com/photo-1681164315430-6159b2361615?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwcHJvamVjdHN8ZW58MHx8fHwxNzU3NzAyMTQ2fDA&ixlib=rb-4.1.0&q=85"
  }
];

export const internships = [
  {
    id: 1,
    company: "LETSGROWMORE",
    position: "Web Development Intern",
    duration: "Oct 2021 – Nov 2021",
    location: "Remote",
    description: "Developed scalable web applications and enhanced user experience",
    achievements: [
      "Developed scalable web applications using Django, HTML, CSS, JavaScript, and MySQL",
      "Improved application efficiency by 20% through optimized code implementation",
      "Enhanced user experience through dynamic UI components",
      "Integrated Git for optimized code management and version control"
    ],
    technologies: ["Django", "HTML", "CSS", "JavaScript", "MySQL", "Git"],
    logo: "https://images.unsplash.com/photo-1637073849667-91120a924221?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxzb2Z0d2FyZSUyMGVuZ2luZWVyaW5nJTIwcHJvamVjdHN8ZW58MHx8fHwxNzU3NzAyMTQ2fDA&ixlib=rb-4.1.0&q=85"
  }
];

export const projects = [
  {
    id: 1,
    title: "Jio Partner World",
    category: "Enterprise Backend System",
    duration: "Aug 2023 – Present",
    description: "Comprehensive backend development and optimization for Jio's partner ecosystem platform",
    longDescription: "Developed and optimized backend services using modern technologies including Spring Boot, Java, Kotlin, Python, and FastAPI. Designed RESTful APIs, improved SQL queries, created services from scratch, and refactored legacy code for better performance and maintainability.",
    technologies: ["Spring Boot", "Java", "Kotlin", "Python", "FastAPI", "RESTful APIs", "SQL", "Kubernetes", "Docker", "Azure Git"],
    image: "/images/projects/jio-partner-world.jpeg",
    highlights: [
      "Built scalable microservices architecture",
      "Implemented comprehensive API documentation",
      "Optimized database queries for better performance",
      "Deployed using Kubernetes and Docker containers"
    ],
    status: "In Production"
  },
  {
    id: 2,
    title: "AI Based Livestock E-commerce",
    category: "Full-stack E-commerce Platform",
    duration: "Jul 2022 – Mar 2023",
    description: "E-commerce platform with AI-powered sentiment analysis for livestock trading",
    longDescription: "Developed a comprehensive e-commerce platform using Django and Python with advanced features including sentiment analysis, automated email notifications, and real-time communication systems.",
    technologies: ["Django", "Python", "AWS EC2", "MySQL", "RabbitMQ", "Celery", "Sentiment Analysis", "AI/ML"],
    image: "/images/projects/livestock-ecommerce.jpeg",
    highlights: [
      "Implemented AI-powered sentiment analysis",
      "Built asynchronous task processing with Celery",
      "Integrated RabbitMQ for message queuing",
      "Deployed on AWS EC2 with auto-scaling"
    ],
    status: "Completed",
    github: "https://github.com/adityamaskar/livestock-ecommerce",
    demo: "https://livestock-demo.com"
  },
  {
    id: 3,
    title: "Smart Attendance System",
    category: "AI/ML Deep Learning Project",
    duration: "Dec 2022 – Jan 2023",
    description: "Face recognition-based attendance system using deep learning",
    longDescription: "Created an intelligent attendance management system using Django and Python with Deep Learning models for accurate face detection and recognition capabilities.",
    technologies: ["Django", "Python", "Deep Learning", "MySQL", "OpenCV", "TensorFlow", "Face Recognition"],
    image: "/images/projects/smart-attendance.jpeg",
    highlights: [
      "Implemented CNN-based face recognition model",
      "Achieved 95%+ accuracy in face detection",
      "Real-time attendance marking system",
      "Admin dashboard for attendance management"
    ],
    status: "Completed",
    github: "https://github.com/adityamaskar/smart-attendance"
  },
  {
    id: 4,
    title: "Personal Blog + Portfolio",
    category: "Full-stack Web Application",
    duration: "Nov 2021 – Present",
    description: "Personal blog and portfolio website with content management system",
    longDescription: "Built a comprehensive personal blog and portfolio website using Django and Python, featuring content management, version control integration, and multiple database support.",
    technologies: ["Django", "Python", "AWS EC2", "MySQL", "PostgreSQL", "Oracle", "GitHub", "HTML/CSS", "JavaScript"],
    image: "/images/projects/personal-blog.jpeg",
    highlights: [
      "Dynamic content management system",
      "Multi-database support (MySQL, PostgreSQL, Oracle)",
      "Responsive design with modern UI/UX",
      "SEO optimized blog functionality"
    ],
    status: "Live",
    demo: "https://lighttoinfinity.com",
    github: "https://github.com/adityamaskar/portfolio"
  }
];

export const skills = {
  "Programming Languages": [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "Java", level: 85, icon: "☕" },
    { name: "Kotlin", level: 80, icon: "🔷" },
    { name: "JavaScript", level: 75, icon: "🟨" },
    { name: "SQL", level: 85, icon: "🗃️" }
  ],
  "Frameworks & Libraries": [
    { name: "Spring Boot", level: 90, icon: "🍃" },
    { name: "FastAPI", level: 85, icon: "⚡" },
    { name: "Django", level: 88, icon: "🎸" },
    { name: "React", level: 75, icon: "⚛️" },
    { name: "REST APIs", level: 92, icon: "🔗" }
  ],
  "Databases": [
    { name: "MySQL", level: 88, icon: "🐬" },
    { name: "PostgreSQL", level: 82, icon: "🐘" },
    { name: "MongoDB", level: 78, icon: "🍃" },
    { name: "Oracle DB", level: 75, icon: "🔶" },
    { name: "Redis", level: 80, icon: "📮" }
  ],
  "Cloud & DevOps": [
    { name: "AWS", level: 85, icon: "☁️" },
    { name: "Azure", level: 75, icon: "🔷" },
    { name: "Kubernetes", level: 82, icon: "☸️" },
    { name: "Docker", level: 85, icon: "🐳" },
    { name: "Git", level: 90, icon: "📝" }
  ],
  "Tools & Technologies": [
    { name: "Microservices", level: 88, icon: "🔧" },
    { name: "Zookeeper", level: 78, icon: "🦓" },
    { name: "RabbitMQ", level: 80, icon: "🐰" },
    { name: "Celery", level: 82, icon: "🌿" },
    { name: "MinIO", level: 75, icon: "📦" }
  ]
};

export const education = [
  {
    id: 1,
    institution: "Savitribai Phule Pune University",
    degree: "Bachelor of Computer Engineering + Honours in AI/ML",
    duration: "Aug 2019 – July 2023",
    cgpa: "9.35",
    location: "Pune, India",
    description: "Specialized in Computer Engineering with additional Honours in Artificial Intelligence and Machine Learning",
    achievements: [
      "Graduated with CGPA of 9.35/10",
      "Honours in AI/ML specialization",
      "Active participation in technical events and coding competitions",
      "Led multiple academic projects in AI/ML and software development"
    ],
    logo: "https://images.unsplash.com/photo-1616161560191-7a9ecfc4fbe3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NTc3MDIxNDB8MA&ixlib=rb-4.1.0&q=85"
  }
];

export const achievements = [
  {
    id: 1,
    title: "Performance Optimization Champion",
    description: "Achieved 91.67% performance improvement through parallel processing implementation",
    year: "2024",
    icon: "🏆"
  },
  {
    id: 2,
    title: "Database Optimization Expert",
    description: "Improved database response times by 30% through advanced SQL query optimization",
    year: "2024",
    icon: "📊"
  },
  {
    id: 3,
    title: "Academic Excellence",
    description: "Graduated with CGPA of 9.35 in Computer Engineering with AI/ML Honours",
    year: "2023",
    icon: "🎓"
  },
  {
    id: 4,
    title: "Efficiency Enhancement",
    description: "Improved application efficiency by 20% during internship at LETSGROWMORE",
    year: "2021",
    icon: "⚡"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "Senior Software Engineer",
    company: "Jio Platforms Limited",
    message: "Aditya is an exceptional backend developer with strong problem-solving skills. His ability to optimize system performance and work with complex microservices architecture is impressive.",
    image: "https://images.unsplash.com/photo-1737574107736-9e02ca5d5387?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NTc3MDIxNDB8MA&ixlib=rb-4.1.0&q=85",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Tech Lead",
    company: "LETSGROWMORE",
    message: "During his internship, Aditya showed remarkable dedication and technical skills. He consistently delivered high-quality code and improved our application's efficiency significantly.",
    image: "https://images.unsplash.com/photo-1616161560191-7a9ecfc4fbe3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NTc3MDIxNDB8MA&ixlib=rb-4.1.0&q=85",
    rating: 5
  }
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aditya-maskar/",
    icon: "linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/adityamaskar",
    icon: "github"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/adityamaskar",
    icon: "code"
  },
  {
    name: "Website",
    url: "https://lighttoinfinity.com",
    icon: "globe"
  },
  {
    name: "Email",
    url: "mailto:mr.aditya.maskar@gmail.com",
    icon: "mail"
  }
];