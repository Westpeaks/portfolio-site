'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section>
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
    </section>
  )
}
