"use client"
import { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import Links from "./links";
import { FaBars } from "react-icons/fa";
import { FaChevronDown, FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import LOGO from "../app/images/eva.png"
import Image from "next/image";

const divVariant =  {
    initial: {
        opacity: 0,
        scale: 0,
    },
    final: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3
        }
    }
}

const ulVariant = {
    initial: {
        opacity: 0,
    },
    final: {
        opacity: 1,
        transition: {
            duration: 0.5, delayChildren: 0.5, staggerChildren: 0.3
        }
    }
}

const liVariant = {
    initial: {
        opacity: 0,
        y: "-50px"
    },
    final: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3
        }
    }
}

const Header = () => {
    const [nav, setNav] = useState(false)
    const pathname = usePathname()
    const [subNav , setSubNav] = useState(false)
    const [subNav2 , setSubNav2] = useState(false)

    const openSubNav = ()=> {
        setSubNav(prev => !prev)
    }
    const openSubNav2 = ()=> {
        setSubNav2(prev => !prev)
    }
    return (
        <header className="md:px-20 px-4 bg-white fixed w-screen left-0 top-0 flex items-center justify-between z-[999999999]">
            <div className="lg:block hidden"><Link href="/"><Image src={LOGO} width={80} height={80} alt="LOGO"/></Link></div>
            <div className="lg:hidden block"><Link href="/"><Image src={LOGO} width={40} height={40} alt="LOGO"/></Link></div>
            <nav className="lg:block hidden">
                <Links />
            </nav>
            <div className="lg:flex hidden items-center gap-4 md:gap-10">
                <div className="relative">
                    <input className="pl-10 border-2 border-black h-12 md:h-14" type="text" name="" id="" placeholder="Search" />
                    <IoMdSearch className="absolute left-5 top-1/2 -translate-y-1/2" size={20} />
                </div>
                <MdOutlineShoppingBag size={20} />
                <FaUser size={20} />
            </div>
            <motion.div className={`${nav ? "static" : "relative"} cursor-pointer bg-black p-2 rounded-md lg:hidden block`}>
                {nav ? 
                <div className="z-[9999999] text-xl md:text-2xl relative border-2 border-white" onClick={()=> setNav(prev => !prev)}>
                    <FaXmark color="white" size={20} />
                </div>
                :
                <div className="z-[9999999] text-xl md:text-2xl relative" onClick={()=> setNav(prev => !prev)}>
                    <FaBars color="white" size={20} />
                </div>
                }
                <motion.div variants={divVariant} initial="initial" animate={nav ? "final" : "initial"} className={`fixed ${nav ? "" : ""} inset-0 bg-black text-white origin-top-right duration-300`}>
                    <motion.ul variants={ulVariant} className="font-bold md:font-semibold p-4 md:text-xl leading-10">
                        <motion.li onClick={()=> openSubNav()} variants={liVariant}><span className="px-3 flex items-center gap-1">Shop<FaChevronDown /></span>
                        <ul className={`flex flex-col px-4 ${subNav ? "h-[84px]" : "h-0"} transition-all duration-300 overflow-hidden`}>
                            <Link href="/wig">Wig</Link>
                            <Link href="/bundles">Bundle</Link>
                        </ul>
                        </motion.li>
                        <motion.li onClick={()=> openSubNav2()} variants={liVariant}><span className="px-3 flex items-center gap-1">Our Services<FaChevronDown /></span>
                        <ul className={`px-4 ${subNav2 ? "h-[44px]" : "h-0"} transition-all duration-300 overflow-hidden`}>
                            <Link href="/makeup">MakeUp</Link>
                        </ul>
                        </motion.li>
                        <motion.li variants={liVariant}><Link className={`${pathname === "/gallery" && "nav-others"} nav-active px-3 py-3`} href="/gallery">Gallery</Link></motion.li>
                        <motion.li variants={liVariant}><Link className={`${pathname === "/about" && "nav-others"} nav-active px-3 py-3`} href="/about">About Us</Link></motion.li>
                        <motion.li variants={liVariant}><Link className={`${pathname === "/contact" && "nav-others"} nav-active px-3 py-3`} href="/contact">Contact Us</Link></motion.li>
                        <motion.li variants={liVariant} className="relative">
                            <input className="pl-5 md:pl-10 h-12 md:h-14 text-black" type="text" name="" id="" placeholder="Search" />
                            <IoMdSearch className="absolute left-5 top-1/2 -translate-y-1/2" size={20} />
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </motion.div>
        </header>
    )
}

export default Header