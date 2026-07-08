import posImage from "../assets/sistema_pos.png";
import bookifyImage from "../assets/bookify.png";
import userviceImage from "../assets/uservice.png";
import hospitalImage from "../assets/hospital-bg.jpg";

export const HERO_CONTENT = `Student from Tunja, Colombia. I've shipped a restaurant POS for a real client, built full-stack web apps, and contributed to a hospital IT monitoring system. Still learning — and building along the way.`;

export const ABOUT_TEXT = `I'm a systems engineering student at Universidad Santo Tomás in Tunja, Boyacá. Over the past couple of years I've moved from architecture studies into software — and the projects in this portfolio are what I've actually built: a desktop POS for a local restaurant, full-stack scheduling apps, a corporate website, a mobile movie app, and a collaborative hospital monitoring dashboard.

I work mostly with React, TypeScript, Node.js, Python, and PostgreSQL — always tied to something real I've shipped or contributed to. I'm still in formation, but I care about writing code that solves actual problems for real people.`;

export const ABOUT_QUOTE = `"No permitas que tu memoria se enajene de las cosas que tienes, sino de las que te hagan falta."`;

export const EDUCATION = [
  {
    year: "2022 – 2023",
    role: "Architecture Student",
    institution: "Universidad Santo Tomás — Tunja",
    description:
      "Studying architecture helped me understand how form and function come together — something I now apply when thinking about interfaces and user flows in software.",
    technologies: ["Design thinking"],
  },
  {
    year: "2023 – Present",
    role: "Systems Engineering Student",
    institution: "Universidad Santo Tomás — Tunja",
    description:
      "Where I've built most of what's in this portfolio: the Voting System, Bookify, the hospital IT monitoring project, the UService website, and the restaurant POS for Hogareño's in Boyacá.",
    technologies: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL"],
  },
];

export const CERTIFICATIONS = [
  {
    year: "2024 – Present",
    title: "Online Courses & Certifications",
    platform: "Platzi",
    description:
      "Complementary learning in Python, data visualization, and modern web technologies. Not employment — ongoing self-directed study.",
    technologies: ["Python", "Data visualization"],
  },
];

export const PROJECTS = [
  {
    title: "POS Hogareño's",
    description:
      "Offline point-of-sale and billing system built for Hogareño's restaurant in Siachoque, Boyacá. Handles table management, orders, atomic invoice numbering, bill splitting, thermal printing (ESC/POS), inventory control, and PDF/Excel reports. Role-based access for cashier, supervisor, and admin.",
    technologies: ["Python", "CustomTkinter", "SQLite", "ESC/POS", "ReportLab", "openpyxl"],
    githubUrl: "https://github.com/n1kko-source/restaurante_pos",
    liveUrl: null,
    featured: true,
    category: "desktop",
    image: posImage,
    placeholder: {
      gradient: "from-selva-400 to-selva-600",
      label: "Desktop · Offline POS",
    },
  },
  {
    title: "Voting System",
    description:
      "Full-stack web app for creating and participating in polls, with user authentication and real-time results. Built as a university project — my main piece of evidence for web development.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Bootstrap"],
    githubUrl: "https://github.com/n1kko-source/voting-system",
    liveUrl: null,
    featured: true,
    category: "web",
    placeholder: {
      gradient: "from-cielo-500 to-cielo-600",
      label: "Web · Full Stack",
    },
  },
  {
    title: "Bookify",
    description:
      "Full-stack appointment scheduling system for businesses with multiple locations, services, specialists, and spaces. Complete booking flow with authentication and role-based access.",
    technologies: ["React", "TypeScript", "NestJS", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/n1kko-source/bookify",
    liveUrl: null,
    featured: false,
    category: "web",
    image: bookifyImage,
    placeholder: {
      gradient: "from-cielo-400 to-selva-400",
      label: "Web · Scheduling",
    },
  },
  {
    title: "Mobile Movie App",
    description:
      "Mobile app for browsing and discovering movies, built with React Native and Expo. Uses Appwrite as backend and NativeWind for styling.",
    technologies: ["React Native", "Expo", "TypeScript", "Appwrite", "NativeWind"],
    githubUrl: "https://github.com/n1kko-source/mobile_movie_app",
    liveUrl: null,
    featured: false,
    category: "mobile",
    placeholder: {
      gradient: "from-orquidea-400 to-orquidea-600",
      label: "Mobile · React Native",
    },
  },
  {
    title: "UService Website",
    description:
      "Designed and developed the corporate website for UService — focused on digital presence and client outreach. A project I built, not a consultancy track record.",
    technologies: ["React", "TanStack Start", "TanStack Router", "Tailwind CSS", "Radix UI"],
    githubUrl: "https://github.com/n1kko-source/uservice-sas",
    liveUrl: "https://www.userviceglobal.com",
    featured: false,
    category: "web",
    image: userviceImage,
    placeholder: {
      gradient: "from-sol-500 to-orquidea-400",
      label: "Web · Corporate Site",
    },
  },
  {
    title: "Hospital IT Monitoring",
    description:
      "Collaborative university project for Hospital Universitario San Rafael de Tunja. IT infrastructure monitoring dashboard for servers, networks, databases, and connected medical equipment.",
    technologies: ["React", "TypeScript", "TanStack Query", "Tailwind CSS"],
    githubUrl: "https://github.com/EliuBarrera/Sistema_de_Monitoreo_Hospitalario_TI",
    liveUrl: null,
    featured: false,
    category: "collaborative",
    image: hospitalImage,
    imagePosition: "object-[center_35%]",
    placeholder: {
      gradient: "from-sol-400 to-cielo-500",
      label: "Collaborative · University",
    },
  },
];

export const TOOLS_FROM_PROJECTS = [
  { name: "React" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "NestJS" },
  { name: "Python" },
  { name: "PostgreSQL" },
  { name: "MySQL" },
  { name: "SQLite" },
  { name: "Tailwind CSS" },
  { name: "Bootstrap" },
  { name: "React Native" },
  { name: "Expo" },
];

export const CONTACT = {
  address: "Av Universitaria #42A-60, Tunja, Boyacá, Colombia",
  phoneNu: "+57 320 644 8690",
  email: "juannicolasmunoz868@gmail.com",
};

export const SOMBRERO_3D_CREDIT = {
  title: "Sombrero Vueltiao Colombia",
  author: "Juan David",
  authorUrl: "https://sketchfab.com/JuanDavid.497",
  modelUrl:
    "https://sketchfab.com/3d-models/sombrero-vueltiao-colombia-626560a80beb4edc992b001f8b54e714",
  license: "CC Attribution",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
