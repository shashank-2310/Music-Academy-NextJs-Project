"use client";

import React from 'react'
import { WavyBackground } from './ui/wavy-background';

const Instructors = () => {
    return (
        <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
            <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
                <h1 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>Meet our Instructors</h1>
                <p className='text-base md:text-lg text-white text-center mb-4'>Discover the talented professionals who will guide your musical journey</p>
            </WavyBackground>
        </div>
    )
}

export default Instructors