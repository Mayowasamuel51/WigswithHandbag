"use client"
import { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import Links from "./links";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import LOGO from "../app/images/eva.jpg"
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
            duration: 0.5, staggerChildren: 0.3
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
                <div className="z-[9999999] relative border-white" onClick={()=> setNav(prev => !prev)}>
                    {nav ? <FaXmark color="white" size={20} /> : <FaBars color="white" size={20} />}
                </div>
                <motion.div variants={divVariant} initial="initial" animate={nav ? "final" : "initial"} className={`fixed ${nav ? "" : ""} inset-0 bg-black text-white origin-top-right duration-300`}>
                    <motion.ul variants={ulVariant} className="p-4 text-xl">
                        <motion.li variants={liVariant}><p className="px-3 py-1.5">Shop</p></motion.li>
                        <motion.li variants={liVariant}><p className="px-3 py-1.5">Our Services</p></motion.li>
                        <motion.li variants={liVariant}><Link className={`${pathname === "/gallery" && "nav-others"} nav-active px-3 py-1.5`} href="/gallery">Gallery</Link></motion.li>
                        <motion.li variants={liVariant}><Link className={`${pathname === "/about" && "nav-others"} nav-active px-3 py-1.5`} href="/about">About Us</Link></motion.li>
                        <motion.li variants={liVariant}><Link className={`${pathname === "/contact" && "nav-others"} nav-active px-3 py-1.5`} href="/contact">Contact Us</Link></motion.li>
                    </motion.ul>
                </motion.div>
            </motion.div>
        </header>
    )
}

export default Header