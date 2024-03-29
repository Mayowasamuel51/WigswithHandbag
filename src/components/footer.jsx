import { FaArrowRightLong } from "react-icons/fa6";
import { Vollkorn, Poppins } from "next/font/google";

const vollkorn = Vollkorn({ subsets: ["latin"]})
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]}, )


const footer = () => {
  return (
    <footer className="bg-black text-white">
        <div className="md:px-20 px-4 md:py-10 py-5 flex md:items-center justify-between gap-20 md:flex-row flex-col">
            <div className="md:flex-1">
                <h1 className="font-bold text-lg"><span className={poppins.className}>Subscribe to our newslette</span></h1>
                <p className="md:w-[500px] my-2"><span className={vollkorn.className}>We offer tips on how to maintain your hair. We will also send you updates on restock, discounts & more</span></p>
                <div className="relative ">
                    <input className="px-10 w-full h-14 border-2 border-white bg-transparent text-white" type="text" placeholder="Enter Your Email Address" />
                    <FaArrowRightLong className="absolute right-5 top-1/2 -translate-y-1/2" size={20} />
                </div>
            </div>
            <div className={`${vollkorn.className} md:flex-1`}>
                <h1 className="font-bold text-lg">Company</h1>
                <ul>
                    <li>Return & exchange policy</li>
                    <li>Shipping</li>
                    <li>Privacy Policy</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
        <hr />
        <div className={`${vollkorn.className} flex justify-between items-center md:px-20 px-4 py-2`}>
            <p>&copy; Evatouch beauty, 2024. All rights reserve</p>
            <div className="socials flex items-center gap-3">
                <div className="w-5 aspect-square bg-white"></div>
                <div className="w-5 aspect-square bg-white"></div>
                <div className="w-5 aspect-square bg-white"></div>
            </div>
        </div>
    </footer>
  )
}

export default footer