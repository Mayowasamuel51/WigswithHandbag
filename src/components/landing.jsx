
import Options from "./options";
import { Vollkorn, Poppins } from "next/font/google";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import LandingParallax from "./landingParallax";
import Slider from "./slider";
import SlideController from "./slideController";
// import { Parallax } from 'react-scroll-parallax';

const vollkorn = Vollkorn({ subsets: ["latin"]})
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"]}, )

import Image from 'next/image'
import landingImg from "../app/images/landing-img.jpg"


const Landing = () => {
  return (
    <>
      <section className="md:py-0 py-32 flex items-center md:flex-row flex-col justify-between gap-16 min-h-screen">
        <div className="">
          <h1 className="font-bold text-3xl md:text-6xl">Welcome To EvaTouch Beauty</h1>
          <p className="text-2xl my-4 w-[450px]">Your one-stop shop for exquisite hair & make-up products</p>
          <div className="text-xl flex items-center gap-4 font-bold">
            <button className="px-5 py-4 bg-black text-white">SHOP NOW</button>
            <button className="px-5 py-4 bg-transparent text-black border-2 border-black">BOOK APPOINTMENT</button>
          </div>
        </div>
        <div className="border-2 border-black bg-[#fddd6b]">
          <Image style={{width: "auto"}} src={landingImg} width={265} height={213} alt="Landing image" className="md:block hidden bg-transparent" />
          <Image style={{width: "auto"}} src={landingImg} width={1000} height={1000} alt="Landing image" className="md:hidden block" />
          <div className="p-2">
            <p>Bella - Preorder</p>
            <p>Fron $320.00</p>
          </div>
        </div>
      </section>
      <LandingParallax />

      <Options />

      <section className="md:my-32">
        <div className="relative flex justify-between my-4">
          <div>
            <h1 className={`${poppins.className} font-bold text-lg md:text-4xl`}>New Arrivals</h1>
            <p className={`${vollkorn.className} text-base md:text-lg`}>Shop our range of products and embrace your unique radiance</p>
          </div>
          <SlideController />
        </div>

        <Slider />
      </section>


      <section className="md:my-32">
        <div className="relative flex justify-between my-4">
          <div>
            <h1 className={`${poppins.className} font-bold text-lg md:text-4xl`}>Best Sellers</h1>
            <p className={`${vollkorn.className} text-base md:text-lg`}>Shop our range of products and embrace your unique radiance</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex justify-center items-center w-10 aspect-square rounded-full bg-black">
              <FaArrowRightLong color="white" />
            </div>
            <div className="flex justify-center items-center w-10 aspect-square rounded-full bg-black">
              <FaArrowLeftLong color="white" />
            </div>
          </div>
        </div>

        <Slider left={true} />
      </section>

    </>
  )
}

export default Landing