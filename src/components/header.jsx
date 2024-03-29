import { MdOutlineShoppingBag } from "react-icons/md";
import { FaUser, FaChevronDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";

const header = () => {
  return (
    <header className="py-4 flex items-center justify-between">
        <div className="logo italic"><Link href="/">EVA-TOUCH</Link></div>
        <nav className="md:block hidden">
            <ul className="flex items-center gap-8">
                <Link href="" className="flex items-center gap-2">Shop <FaChevronDown /></Link>
                <Link href="" className="flex items-center gap-2">Our Services <FaChevronDown /></Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact Us</Link>
            </ul>
        </nav>
        <div className="flex items-center gap-4 md:gap-10">
            <div className="relative">
                <input className="pl-10 border-2 border-black h-12 md:h-14" type="text" name="" id="" placeholder="Search"/>
                <IoMdSearch className="absolute left-5 top-1/2 -translate-y-1/2" size={20} />
            </div>
            <MdOutlineShoppingBag size={20} />
            <FaUser size={20} />
        </div>
    </header>
  )
}

export default header