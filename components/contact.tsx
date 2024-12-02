'use client';

import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import { BsLinkedin } from 'react-icons/bs';

export default function Contact() {

    const { ref } = useSectionInView('Contact');

    return (
        <section id='contact' className='mb-20 sm:mb-28 text-lg'>
            <p className='flex flex-wrap items-center justify-center'> contact me on <a className='flex items-center 
            justify-center ml-1' href='https://www.linkedin.com/in/wesley-peak/' target='blank'>Linked
                <span className='ml-0.5 mr-1'><BsLinkedin /></span></a> or at
                <a className=' underline ml-1' 
                href='mailto:wesley.peak@gmail.com'>wesley.peak@gmail.com</a>
            </p>
        </section>
    );
}
