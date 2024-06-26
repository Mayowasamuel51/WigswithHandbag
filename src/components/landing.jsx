
import Options from "./options";
import { Vollkorn, Poppins } from "next/font/google";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import LandingParallax from "./landingParallax";
import Slider from "./slider";
import SlideController from "./slideController";

import best_one from "../app/images/best1.png"
import best_two from "../app/images/best2.png"
import best_three from "../app/images/best3.png"
import best_four from "../app/images/best4.png"

const vollkorn = Vollkorn({ subsets: ["latin"]})
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"]}, )

import Image from 'next/image'

import landing1 from "../../src/app/images/landing1.jpg"
import landing2 from "../../src/app/images/landing2.jpg"
import landing3 from "../../src/app/images/landing3.jpg"

export const metadata ={
  title: "EvaTouch HomePage",
  keywords:"",
  content:"Evatouchbeauty: Your Trusted Global Destination for Premium Haircare and Makeup Essentials  At Evatouchbeauty, we pride ourselves on being the go-to choice for discerning individuals worldwide. Renowned for our unwavering commitment to quality and innovation, we specialize in curating the finest haircare and makeup products that elevate your beauty regimen to new heights",
  description:"Evatouchbeauty: Your Trusted Global Destination for Premium Haircare and Makeup Essentials "
}

const Landing = () => {
  return (
    <>
      <div className="landing-bg border-2 ">
        <div className="min-h-screen -z-[3] grid place-items-center absolute w-full">
          <div className="flex gap-8">
            <Image src={landing1} width={250} height={250} alt="landing-img" style={{width:"auto"}} className="flex-1 object-cover lg:block hidden" />
            <Image src={landing2} width={250} height={250} alt="landing-img"style={{width:"auto"}} className="flex-1 object-cover" />
            <Image src={landing3} width={250} height={250} alt="landing-img" className="flex-1 object-cover lg:block hidden" />
          </div>
        </div>
        <section className="flex items-center md:flex-row flex-col justify-center gap-16 min-h-screen py-32 md:py-10 md:my-10">
          <div className={`md:px-0 px-4 w-fit mx-auto md:text-center text-left ${poppins.className}`}>
            <h1 className="font-bold text-3xl md:text-4xl">Create Your Own Unique Sense of Style</h1>
            <p className="text-lg md:text-2xl my-4">The ultimate feel and loog Good store</p>
            <div className="text-base md:text-xl flex items-center gap-3 md:gap-4 font-bold w-fit md:mx-auto">
              <button className="md:px-5 px-2 py-3 md:py-4 text-black bg-white">SHOP NOW</button>
              <button className="md:px-5 px-2 py-3 md:py-4 bg-transparent text-white border-2 border-white">BOOK APPOINTMENT</button>
            </div>
          </div>
        </section>
      </div>
      <LandingParallax />

      <Options />

      <section className="md:my-32 my-10 md:px-20 px-4 ">
        <div className="relative flex justify-between my-4">
          <div>
            <h1 className={`${poppins.className} font-bold text-2xl md:text-4xl`}>New Arrivals</h1>
            <p className={`${vollkorn.className} text-base md:text-lg`}>Shop our range of products and embrace your unique radiance</p>
          </div>
          {/* <SlideController /> */}
        </div>

        <Slider />
      </section>

      <section className="md:my-32 my-10 md:px-20 px-4 ">
        <div className="relative flex justify-between my-4">
          <div>
            <h1 className={`${poppins.className} font-bold text-2xl md:text-4xl`}>Best Sellers</h1>
            <p className={`${vollkorn.className} text-base md:text-lg`}>Shop our range of products and embrace your unique radiance</p>
          </div>
          {/* <SlideController /> */}
        </div>

        <Slider 
        best1={best_one}
        best2 ={best_two}
        best3 ={best_three}
        best4={best_four}
        rtl={true}
         />
      </section>

    </>
  )
}

export default Landing