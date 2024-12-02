import React from "react";
import { MdOutlineSupportAgent } from "react-icons/md";
import onspringcardImg from "@/public/onspringcardalt.png";
import portfoliositecardImg from "@/public/portfoliositecard.png";
import healthcheckcardImg from "@/public/healthcheckcardalt.png";
import monitoringdoccardImg from "@/public/monitoringdoccard.png";
import sdrpcardImg from "@/public/sdrpcard.png";

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
    title: "Managed Support Operations",
    location: "Overland Park, KS",
    description:
      "I currently manage support operations for a medical software company based out of Kansas. My main duties include overseeing the handling and allocation of incoming support issues, supervision of assigned engineers, and coordination of client work projects for enterprise class customers. ",
    icon: React.createElement(MdOutlineSupportAgent),
    date: "2023-2024",
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
    title: "Grafana Monitoring Doc",
    description:
      "This is documentation I wrote that provides a detailed breakdown of a configured monitoring system using Prometheus and Grafana.",
    tags: ["Confluence", "Jira", "Grafana", "Github"],
    imageUrl: monitoringdoccardImg,
    hoverUrl: "https://github.com/Westpeaks/Monitoring-Grafana/blob/main/Monitoring-Tools.md",
  },
  {
    title: "Site Down Recovery Plan",
    description:
      "This document was developed as part of a real strategy to provide technical support engineers a line by line process in the event of an entire client site downtime.",
    tags: ["Confluence", "Jira", "Github"],
    imageUrl: sdrpcardImg,
    hoverUrl: "https://github.com/Westpeaks/Site-Down-Recovery-Plan/blob/main/SDRP.md",
  },
  {
    title: "This Site",
    description:
      "In my off time from my current job, I have developed this site.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: portfoliositecardImg,
    hoverUrl: "https://github.com/Westpeaks/portfolio-site",
  },
] as const;

export const skillsData = [
  "Writing",
  "Documentation",
  "Management",
  "Training",
  "Markdown",
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
