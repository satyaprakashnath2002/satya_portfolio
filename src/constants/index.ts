// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  fullstack,
  backend,
  quality,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  python,
  java,
  springboot,
  mysql,  
  git,
  starbucks,
  tesla,
  shopify,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/satyaprakashnath2002/satya_portfolio",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "fullstack Developer",
    icon: fullstack,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Quality Assurance",
    icon: quality,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Full Stack Developer Intern",
    company_name: "AUROSKKIL",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2024 - September 2024",
    points: [
      "Developed full-stack web applications using the MERN stack with scalable and modular architecture.",
       "Built reusable and interactive React components to enhance UI responsiveness.",
          "Designed and implemented RESTful APIs for efficient backend communication.",
       "Integrated databases and handled real-time data flow for dynamic web applications."
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "RINEX",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - March 2025",
    points: [
      "Built 10+ responsive web pages using HTML, CSS, Bootstrap, and Tailwind CSS.",
      "Ensured mobile-first design and cross-browser compatibility across Chrome, Firefox, and Edge.",
        "Used Git and GitHub for version control and collaborative development.",
      "Debugged and resolved 20+ UI and layout issues to improve consistency and user experience."
    ],
  },
  {
    title: "Software Quality Assurance Intern",
    company_name: "TEKKZY",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2025 - October 2025",
    points: [
      "Tested and validated web and mobile application features to identify functional, UI, and performance defects.",
      "Executed 50+ test cases and documented bugs, improving application stability and release quality.",
        "Collaborated closely with developers to reproduce, track, and resolve issues efficiently.",
      "Participated in Agile sprint reviews and gained exposure to real-world product development workflows."
    ],
  },
  
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Event Management SaaS",
    description:
  "Engineered a scalable full-stack event management platform enabling real-time event tracking, secure booking workflows, and QR-based attendee verification. Implemented dynamic status management (Upcoming, Live, Ended) with seamless backend synchronization and optimized database performance for high concurrency.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "springboot", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: project1,
    source_code_link:
      "https://github.com/satyaprakashnath2002/event-management-saas",
  },
  {
    name: "Nestorria – Real Estate Platform",
    description:
  "Developed a modern real estate platform featuring dynamic property listings, advanced filtering, and responsive UI architecture. Implemented optimized state management and modular component structure to enhance performance, scalability, and seamless user navigation across devices.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: project2,
    source_code_link:
      "https://github.com/satyaprakashnath2002/nestorria-real-estate",
  },
  {
    name: "Dental Care Website",
    description:
  "Designed and developed a responsive dental care service website with structured service modules, appointment sections, and optimized UI components. Focused on accessibility, clean design architecture, and cross-device compatibility to enhance patient engagement and usability.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: project3,
    source_code_link:
      "https://github.com/satyaprakashnath2002/Dental_care",
  },
  {
    name: "Blog Platform",
    description:
  "Built a dynamic blog web application with structured content rendering, reusable UI components, and optimized routing. Implemented scalable architecture to support efficient content management and seamless browsing experience across devices.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: project4,
    source_code_link:
      "https://github.com/satyaprakashnath2002/Blog",
  },
  {
    name: "Book Finder Application",
    description:
  "Developed an API-integrated book discovery application enabling real-time search functionality, efficient state handling, and responsive UI rendering. Optimized API calls and component structure to deliver fast and smooth user interaction.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: project5,
    source_code_link:
      "https://github.com/satyaprakashnath2002/Book_Finder",
  },
  {
    name: "YouTube Clone",
    description:
  "Implemented a responsive video streaming platform integrating dynamic routing, reusable components, and API-driven content rendering. Focused on performance optimization, structured state management, and clean UI architecture for smooth video browsing experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "youtube-api", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: project6,
    source_code_link:
      "https://github.com/satyaprakashnath2002/YtClone",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/satyaprakash-nath-917811254",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/satyaprakashnath2002",
  },
] as const;
