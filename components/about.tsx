"use client"

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView('About');

  return <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ delay: 0.175 }}
            id='about'>

    <SectionHeading>about me</SectionHeading>
    <p className="mb-3">
        A long way off from a computer science degree, I originally graduated with a degree in{" "}
        <span className="font-medium">English</span>. This degree has given me a great foundation in the ability to comunicate. 
        After 3 years as a teacher and writing coach, I decided to pursue a new career in programming. I am a proud graduate of the{" "}
        <span className="font-medium">Launchcode</span> program through <span className="font-medium">UMKC</span>.{" "}
        <span className="italic">My favorite part of programming</span> is to see design come to life. 
        I deeply <span className="underline">enjoy</span> seeing the interaction with something I have built. Due to my studies in English 
        and my love of helping others, I have excelled in being a{" "} 
        <span className="font-medium">Technical Support Engineer</span> and{" "} <span className="font-medium">Technical Writer</span>. Both have 
        been intrinsic to my professional career. Working for great companies has provided me with a robust tool 
        set for taking on technical challenges. I am currently working as a{" "}
        <span className="font-medium">Technical Writer</span> {" "} and {" "}
        <span className="font-medium">Support Manager</span>. 
      </p>

      <p>
        <span className="italic">In my downtime</span>, I enjoy spending time with family and friends, making music, 
        <a href='https://www.youtube.com/watch?v=eBxTEoseZak' target='_blank' > smoking some barbecue</a>, and reading. 
        I&apos;ll also bust out some DJ skills if the right person asks. When I am not engaged in those activities, I enjoy{" "} 
        <span className="font-medium">learning new things</span>. I am currently studying to become a{" "}
        <span className="font-medium">Site Reliability / Cloud Engineer</span>. 
      </p>
  </motion.section>
  
}
