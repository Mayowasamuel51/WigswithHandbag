"use client"
import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const LandingParallax = () => {
  return (
    <Parallax
        opacity={['1', '1', '0']}
        scale={[1, 0.75]}
        easing="easeInQuad"
        className='overflow-hidden'
      >
        <section className="flex flex-wrap md:flex-row flex-col gap-10 items-center justify-between overflow-hidden">
          <div className="border-2 flex-1 w-full aspect-square bg-black"></div>
          <div className="border-2 flex-1 w-full aspect-square bg-black"></div>
          <div className="border-2 flex-1 w-full aspect-square bg-black"></div>
        </section>
      </Parallax>
  )
}

export default LandingParallax