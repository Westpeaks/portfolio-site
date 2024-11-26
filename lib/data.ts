import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import onspringcardImg from "@/public/onspringcard.png";
import portfoliositecardImg from "@/public/portfoliositecard.png";
import healthcheckcardImg from "@/public/healthcheckcardalt.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Onspring API/SDK Python Library",
    description:
      "When I worked for Onspring, I developed and scripted several API projects. This project was a library I built for the Onspring SDK.",
    tags: ["Python", "API/SDK", "MongoDB"],
    imageUrl: onspringcardImg,
    hoverUrl: "https://github.com/Westpeaks/OnspringAPILibraryPython",
  },
  {
    title: "HTTP Healthcheck Script",
    description:
      "This is a project I did as part of training for site reliability engineering. I developed both the project and documentation.",
    tags: ["Python", "HTTP Requests", "YAML", "Terminal"],
    imageUrl: healthcheckcardImg,
    hoverUrl: "https://github.com/Westpeaks/HTTP-Healthcheck",
  },
  {
    title: "This Site",
    description:
      "In my off time from my current job, I have developed this site.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: portfoliositecardImg,
  },
] as const;

export const skillsData = [
  "Writing",
  "Training",
  "Documentation",
  "Markdown",
  "Management",
  "Commmunication",
  "APIs",
  "Python",
  "Linux",
  "Windows Server",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Framer Motion",
  "Tailwind",
  "Node.js",
  "Github",
  "Jira",
  "Confluence",
  "SQL",
  "MongoDB",
  "PostgreSQL",
  "Microsoft SQL Server",
] as const;
