'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { TfiWrite } from 'react-icons/tfi'
import { HiDownload } from 'react-icons/hi'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
            <div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale:1 }}
                    transition={{ type: 'tween', duration: 0.2, }}
                >
                    <Image src='/profile.jpg' alt='Wes Portriat'
                    width='192'
                    height='192'
                    quality='95'
                    priority={true}
                    className='h-30 w-30 rounded-full object-cover border-[0.35rem] 
                    border-white shadow-xl'
                    />
                </motion.div>
                
            </div>
        </div>

        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <span className="font-bold">Hello, I'm Wesley.</span> I'm a{" "}
            <span className="font-bold">Senior Technical Support Engineer</span> with{" "}
            <span className="font-bold">6+ years</span> of experience. I enjoy
            working with people. My current focus is to become a {" "} <span className="font-bold">Cloud Engineer
            </span>. I'm also training in {" "}<span className="underline">React (Next.js)</span>.
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
        >
            <Link href='#contact' className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 
            rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
            transition' >
                Contact me <TfiWrite className='opacity-70 group-hover:translate-x-1 transition'/>
            </Link>

            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 
            hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10' 
            href='/Peak Resume Updated.pdf' download>
                Download Resume <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
            </a>

            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] 
            hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10' 
            href='https://www.linkedin.com/in/wesley-peak-668b42155/' target='_blank' >
                <BsLinkedin />
            </a>

            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] 
            hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10'
            href='https://github.com/Westpeaks/' target='_blank'>
                <FaGithubSquare />
            </a>

        </motion.div>
    </section>
  )
}
