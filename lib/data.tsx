import { Github, Twitter, Linkedin } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoVuejs from "/public/images/logos/icon-vuejs.svg";
import LogoNuxtjs from "/public/images/logos/icon-nuxtjs.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoAngular from "/public/images/logos/icon-angular.svg";
import LogoNest from "/public/images/logos/icon-nest.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoStorybook from "/public/images/logos/icon-storybook.svg";
import LogoGit from "/public/images/logos/icon-git.svg";

import LogoOkoone from "/public/images/logos/logo-okoone.svg";
import LogoOkooneLight from "/public/images/logos/logo-okoone-light.svg";
import LogoWingBank from "/public/images/logos/logo-wingbank.svg";
import LogoCoolbeans from "/public/images/logos/logo-coolbeans.svg";

import ProjectShip24 from "/public/images/project-ship24.png";
import ProjectPanelLiving from "/public/images/project-panelliving.png";
import ProjectUnidry from "/public/images/project-unidry.png";

import AvatarSoeng from "/public/images/avatar-soeng.jpeg";
import AvatarAdrien from "/public/images/avatar-adrien.jpeg";
import AvatarHun from "/public/images/avatar-hun.jpeg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/NorrakDev",
  GITHUB_REPO: "https://github.com/NorrakDev/norrak.dev",
  TWITTER: "https://twitter.com/NorrakDashDev",
  LINKED_IN: "https://www.linkedin.com/in/sarun-norrak-2938b0191/",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    url: EXTERNAL_LINKS.LINKED_IN,
  },
  {
    icon: Twitter,
    url: EXTERNAL_LINKS.TWITTER,
  },
  {
    icon: Github,
    url: EXTERNAL_LINKS.GITHUB,
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "Vue.js",
    logo: LogoVuejs,
    url: "https://vuejs.org/",
  },
  {
    label: "Nuxt.js",
    logo: LogoNuxtjs,
    url: "https://nuxt.com/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Angular",
    logo: LogoAngular,
    url: "https://angular.io/",
  },
  {
    label: "Nest.js",
    logo: LogoNest,
    url: "https://nestjs.com/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Storybook",
    logo: LogoStorybook,
    url: "https://storybook.js.org/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoOkoone,
    darkModeLogo: LogoOkooneLight,
    logoAlt: "Okoone logo",
    position: "Software Engineer",
    startDate: new Date(2022, 10),
    currentlyWorkHere: true,
    summary: [
      "Data Scraping & Automation: Developed scripts with Puppeteer to extract courier data, overcoming Akamai & reCAPTCHA hurdles.",
      "Frontend Development: Crafted intuitive dashboards & websites using Angular & Tailwind CSS.",
      "Backend Development: Engineered robust CRUD systems & microservices with TypeScript, Nest.js, MongoDB, MySQL.",
    ],
  },
  {
    logo: LogoWingBank,
    logoAlt: "Wing Bank logo",
    position: "Frontend Web Developer",
    startDate: new Date(2022, 4),
    endDate: new Date(2022, 10),
    summary: [
      "Brainstormed new ideas & gathered requirements for internal projects.",
      "Designed architecture of different projects (frontend + backend).",
      "Worked on enterprise-level projects for a variety of clients.",
      "Handled sprint planning & task distribution.",
    ],
  },
  {
    logo: LogoCoolbeans,
    logoAlt: "Coolbeans logo",
    position: "Junior Web Developer",
    startDate: new Date(2019, 6),
    endDate: new Date(2022, 3),
    summary: [
      "mplementing responsive web design techniques to ensure compatibility across different devices and screen sizes.",
      "Integrating frontend components and widgets into content management systems",
      "Experimenting with animations and transitions to enhance user experience.",
      "Engaging in pair programming sessions to learn from more experienced developers and share knowledge with peers.",
      "Contributing to the development of internal tools and utilities to improve team productivity and efficiency.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Ship24",
    description:
      "A tracking platform that provides real-time tracking services for packages and shipments across various carriers and logistics companies globally. It allows users to track the status and location of their packages by simply entering the tracking number or details provided by the sender or carrier.",
    url: "https://www.ship24.com",
    previewImage: ProjectShip24,
    technologies: [
      "Angular",
      "Typescript",
      "TailwindCSS",
      "Nest.js",
      "MongoDB",
      "Storybook",
      "AWS Cloudfront",
    ],
  },
  {
    name: "Panel Living",
    description:
      "This website serves as an online platform where customers can browse through category of furniture, home furnishings, kitchenware, and accessories. On the website, users can explore product details, view prices, check availability in stock, and even make inquiry online for delivery or pickup.",
    url: "https://panelliving.com/",
    previewImage: ProjectPanelLiving,
    technologies: [
      "JQuery",
      "Vue.js",
      "Nuxt.js",
      "Node.js",
      "Typescript",
      "Bootstrap",
      "SASS",
      "Animate.css",
    ],
  },
  {
    name: "Unidry Cambodia",
    description:
      "Introducing Cambodia's top diaper brand! Crafted from premium materials sourced globally, this platform offers unparalleled convenience and quality. With engaging animations and responsive design, parents can easily browse products, access expert parenting tips, and consult with ease. Experience the difference today!",
    url: "https://unidrycambodia.com/",
    previewImage: ProjectUnidry,
    technologies: [
      "JQuery",
      "Vue.js",
      "Nuxt.js",
      "Typescript",
      "Bootstrap",
      "SASS",
      "AOS",
      "Animate.css",
      "GSAP",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "San Soeng",
    personAvatar: AvatarSoeng,
    title: "UI/UX Designer",
    testimonial:
      "Working with Norrak has been an absolute pleasure. His attention to detail in implementing our designs is remarkable. The way he brings our visions to life with seamless functionality is truly impressive.",
  },
  {
    personName: "Adrien Mounier",
    personAvatar: AvatarAdrien,
    title: "Senior Project Manager",
    testimonial:
      "I must say, working with Norrak has been a game-changer for our team. His proficiency in web development not only ensures timely project delivery but also elevates the quality of our work to new heights.",
  },
  {
    personName: "Heng Hun",
    personAvatar: AvatarHun,
    title: "QA Engineer",
    testimonial:
      "In the fast-paced environment of web development, Norrak consistently delivers reliable, high-quality code that makes our job as QA testers much easier. His commitment to producing error-free software is evident in every project he undertakes.",
  },
];
