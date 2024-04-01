"use client"
import { useRef } from "react";
import { Vollkorn, Poppins } from "next/font/google";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Parallax } from 'react-scroll-parallax';

const vollkorn = Vollkorn({ subsets: ["latin"]})
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"]}, )

import { useState } from 'react'
import Link from 'next/link'

const Options = () => {
    const [glam, setGlam] = useState(false)
    return (
        <>
            <Parallax
                speed={10}
                translateY={['0px', '-80px']}
                className='overflow-hidden'
            >
                <div className="my-4 shadow-md p-3 md:p-6 w-fit mx-auto overflow-hidden">
                    <div className="flex justify-center items-center gap-3 md:gap-10">
                        <motion.button whileTap={{scale: 1.05}} onClick={() => setGlam(false)} className={`px-3 md:px-5 py-3 border-2 border-black ${!glam && "bg-black text-white"} `}>Bridal MakeUp</motion.button>
                        <motion.button whileTap={{scale: 1.05}} onClick={() => setGlam(true)} className={`px-3 md:px-5 py-3 text-black border-2 border-black ${glam && "bg-black text-white"}`}>Soft Glam</motion.button>
                    </div>
                </div>
                <AnimatePresence>
                    {glam ?
                        <motion.section exit={{opacity: 0}} transition={{duration: 0.3}}>
                            <motion.div exit={{opacity: 0}} transition={{duration: 0.3, staggerChildren: 0.3}} className="text-center my-10">
                                <h1 className={`${poppins.className} font-bold text-xl md:text-3xl my-2 md:my-4`}>Have an event coming up?</h1>
                                <p className={`${vollkorn.className} md:w-[700px] text-base md:text-lg mx-auto`}>Whether it’s a special occasion or you just want to feel fabulous, we will help you create a flawless look that leaves you feeling glamorous and make you the star of the show. Secure your spot and get ready to slayyy</p>
                                <Link href="/softglam">
                                    <button className="my-3 px-3 md:px-5 py-3 bg-transparent text-black border-2 border-black">Book Apointment</button>
                                </Link>
                            </motion.div>
                            <Parallax
                            >
                                <section className="flex flex-wrap md:flex-row flex-col gap-10 items-center justify-between">
                                    <div className="border-2 flex-1 w-full aspect-square bg-black"></div>
                                    <div className="border-2 flex-1 w-full aspect-square bg-black"></div>
                                    <div className="border-2 flex-1 w-full aspect-square bg-black"></div>
                                </section>
                            </Parallax>
                        </motion.section>
                        :
                        <motion.section exit={{opacity: 0}} transition={{duration: 0.3}}>
                            <motion.div exit={{opacity: 0}} transition={{duration: 0.3, staggerChildren: 0.3}} className="text-center my-10">
                                <h1 className={`${poppins.className} font-bold text-xl md:text-3xl my-2 md:my-4`}>Is your big day on the way?</h1>
                                <p className={`${vollkorn.className} md:w-[700px] text-base md:text-lg mx-auto`}>Get ready to say ‘I DO’ in style with our exceptional bridal makeup services. At Evatouch beauty, we are equipped with all that it takes to make you look absolutely stunning and make you the most beautiful bride ever.</p>
                                <Link href="/softglam">
                                    <button className="my-3 px-3 md:px-5 py-3 bg-transparent text-black border-2 border-black">Book Apointment</button>
                                </Link>
                            </motion.div>
                            <Parallax
                            >
                                <section className="flex flex-wrap md:flex-row flex-col gap-10 items-center justify-between">
                                    <div className="border-2 flex-1 w-full aspect-square bg-black"></div>
                                    <div className="border-2 flex-1 w-full aspect-square bg-black"></div>
                                    <div className="border-2 flex-1 w-full aspect-square bg-black"></div>
                                </section>
                            </Parallax>
                        </motion.section>
                    }
                </AnimatePresence>
            </Parallax>
        </>
    )
}

export default Options