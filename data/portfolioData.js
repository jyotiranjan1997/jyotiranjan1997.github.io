export const profile = {
  name: "Jyotiranjan Mohanty",
  title: "Senior Full Stack Developer",
  tagline: "MERN Stack • REST APIs • Automation",
  location: "New Delhi, India",
  phone: "+91-6371660063",
  email: "mohanty.ryzen@gmail.com",
  linkedin: "https://linkedin.com/in/jyoti-ranjan-mohanty-81a240193/",
  github: "https://github.com/jyotiranjan1997/",
  resumeFile: "/JyotiranjanMohanty.pdf",
  photo: "/JyotiranjanMohanty.png",

  summary:
    "Senior Full Stack Developer with 3+ years of experience building web applications, CRM systems, and REST APIs using the MERN stack. Experienced in frontend development, backend architecture, database optimization, deployment, and server management. I've worked on automation workflows, WhatsApp integrations, and scalable business applications — independently handling development, deployment, and production support end to end. I also work AI-augmented — using tools like ChatGPT, Claude, Bolt.new, and Lovable to scaffold pages and features in minutes, then manually integrating them with real backend systems, debugging edge cases, and optimizing what the AI gets wrong.",
  heroHighlights: [
    { label: "Years of Experience", value: "3+" },
    { label: "Leads Managed in CRM", value: "100K+" },
    { label: "REST APIs Built", value: "200+" },
    { label: "Avg. API Response", value: "<350ms" },
  ],
};

export const skillGroups = [
  {
    title: "Languages",
    icon: "code",
    skills: [
      { name: "JavaScript (ES6+)", icon: "javascript" },
      { name: "TypeScript (Basic)", icon: "typescript" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "SQL", icon: "database" },
    ],
  },
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "React Native (Basic)", icon: "react" },
      { name: "Redux", icon: "redux" },
      { name: "Context API", icon: "layers" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "Responsive Design", icon: "responsive" },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "express" },
      { name: "REST APIs", icon: "api" },
      { name: "JWT Authentication", icon: "jwt" },
      { name: "OAuth", icon: "key" },
      { name: "bcrypt", icon: "lock" },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "Mongoose", icon: "leaf" },
      { name: "MySQL", icon: "mysql" },
      { name: "Query Optimization", icon: "gauge" },
      { name: "Indexing", icon: "list" },
      { name: "Schema Design", icon: "diagram" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    skills: [
      { name: "IIS Server (Windows)", icon: "server" },
      { name: "SSL/TLS Configuration", icon: "shield" },
      { name: "Domain Hosting", icon: "globe" },
      { name: "PM2", icon: "cogs" },
    ],
  },
  {
    title: "Integrations & Automation",
    icon: "automation",
    skills: [
      { name: "Interakt (WhatsApp API)", icon: "whatsapp" },
      { name: "SMTP / Nodemailer", icon: "mail" },
      { name: "PhonePe", icon: "payment" },
      { name: "AI Chatbot Integration", icon: "chatbot" },
      { name: "Slack Bot Automation", icon: "slack" },
    ],
  },
  {
    title: "AI-Assisted Development",
    icon: "brain",
    skills: [
      { name: "ChatGPT / OpenAI", icon: "openai" },
      { name: "Claude (Anthropic)", icon: "claude" },
      { name: "Bolt.new", icon: "bolt" },
      { name: "Lovable", icon: "magic" },
      { name: "Rapid AI Prototyping", icon: "brain" },
      { name: "AI-Assisted Debugging & Integration", icon: "bug" },
    ],
  },
];

export const extraSkills = [
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Postman", icon: "postman" },
  { name: "VS Code", icon: "vscode" },
  { name: "Code Reviews", icon: "review" },
];

export const experience = [
  {
    role: "Senior Full Stack Developer",
    company: "Search Education Pvt. Ltd.",
    period: "Apr 2023 — Present",
    note: "Promoted from MERN Stack Developer to Senior Full Stack Developer within 18 months for owning end-to-end delivery and infrastructure of the company's flagship CRM and web platforms.",
    bullets: [
      "Developed and maintained a custom CRM system handling 100,000+ leads and supporting daily operations across sales and support teams.",
      "Built and optimized 200+ REST APIs using caching, indexing, and query optimization techniques, reducing average response time to under 350ms.",
      "Integrated WhatsApp automation through the Interakt API and email workflows using SMTP/Nodemailer for lead updates, meetings, and notification systems.",
      "Implemented secure authentication and authorization using JWT, bcrypt, RBAC, and session management.",
      "Managed IIS production servers, SSL/TLS setup, domain configuration, deployment, and application monitoring across multiple projects.",
      "Optimized MongoDB and MySQL performance using indexing, aggregation pipelines, and schema improvements.",
      "Built and maintained multiple business websites and landing pages using AI tools (ChatGPT, Claude, Bolt.new, Lovable) to generate pages in minutes, then manually integrating them with the backend, debugging, and optimizing what the AI didn't get right.",
      "Built AI chatbot and Slack bot automations for internal messaging and support workflows, cutting manual follow-up work for the team.",
      "Independently handled end-to-end development including requirement analysis, backend architecture, deployment, debugging, and production support.",
    ],
  },
];

export const projects = [
  {
    title: "Search Education — Company Website",
    domain: "searcheducation.in",
    link: "https://www.searcheducation.in/",
    linkLabel: "Visit Live Site",
    theme: "emerald",
    mockIcon: "globe",
    stack: ["Next.js", "SEO", "Responsive Design", "Lead Forms"],
    points: [
      "Built and maintain the company's public-facing marketing website — the primary lead-generation channel for the business.",
      "Implemented responsive landing pages, consultation booking forms, and SEO-optimized content structure.",
      "Used AI-assisted development workflows to ship pages faster without compromising quality.",
    ],
  },
  {
    title: "B2B Partners Portal",
    domain: "partner.searcheducation.in",
    link: "https://partner.searcheducation.in/login",
    linkLabel: "Visit Live Site",
    theme: "violet",
    mockIcon: "briefcase",
    stack: ["MERN", "Interakt API", "Nodemailer", "IIS"],
    points: [
      "Built the custom CRM / partner portal used internally and by global partners to manage students, applications, and leads.",
      "Improved database query performance using indexing, pagination, and query optimization for 100K+ records.",
      "Integrated WhatsApp and email automation for lead updates, follow-ups, and notifications.",
    ],
  },
  {
    title: "Testifyi — Web Application",
    domain: "testifyi.com",
    link: "https://www.testifyi.com/",
    linkLabel: "Visit Live Site",
    theme: "cyan",
    mockIcon: "graduation",
    stack: ["MERN", "REST APIs", "JWT", "MongoDB"],
    points: [
      "Developed and maintained a full-stack EdTech web application with authentication, dashboards, and content management features.",
      "Built backend APIs and responsive frontend modules, and handled deployment and hosting tasks.",
    ],
  },
  {
    title: "Testifyi — Mobile Application",
    domain: "App Store",
    link: "https://apps.apple.com/us/app/testifyi/id6748741811",
    linkLabel: "Download on the App Store",
    theme: "amber",
    mockIcon: "mobile",
    stack: ["React Native", "REST APIs", "Push Notifications", "Android & iOS"],
    points: [
      "Developed a lightweight React Native wrapper app for a mobile-friendly web platform with app-like UI and navigation experience.",
      "Integrated push notifications, authentication handling, and API connectivity.",
      "Managed application deployment on the Google Play Store and Apple App Store.",
    ],
  },
];

export const achievements = [
  "Promoted to Senior Full Stack Developer within 18 months based on project ownership and consistent delivery.",
  "Improved API and database performance through query optimization, indexing, and caching.",
  "Integrated third-party services including WhatsApp APIs, email automation, and payment-related workflows.",
  "Managed deployment, IIS hosting, SSL setup, and production support for multiple applications.",
  "Handled development, debugging, deployment, and maintenance tasks independently across multiple projects.",
  "Adopted an AI-augmented workflow (ChatGPT, Claude, Bolt.new, Lovable) to prototype pages and features in minutes, then manually integrated and optimized them — cutting delivery time without cutting corners.",
];

export const education = [
  {
    degree: "B.Tech in Mechanical Engineering",
    school: "NMIET College",
  },
  {
    degree: "Diploma in Mechanical Engineering",
    school: "DRIEMS Polytechnic",
  },
];

export const certifications = [
  {
    title: "Full Stack Web Development (MERN)",
    issuer: "Masai School",
    detail:
      "Training in frontend, backend, REST APIs, databases, and full-stack application development.",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Hands-on training",
    detail: "Arrays, Strings, and problem-solving for production-grade code.",
  },
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Fluent" },
  { name: "Odia", level: "Native" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
