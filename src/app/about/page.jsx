import React from 'react'
import { Vollkorn, Poppins } from "next/font/google";

const vollkorn = Vollkorn({ subsets: ["latin"]})
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"]}, )


const AboutUs = () => {
  return (
    <section className='md:py-14'>
        <div className='flex items-center gap-36 min-h-screen'>
            <div className="border-2 flex-1 w-full aspect-square bg-black"></div>
            <div className="border-2 flex-1 w-full aspect-square bg-black"></div>
        </div>

        <div className='text-center my-32 font-semibold text-lg leading-9'>
            <p className={vollkorn.className}>At Evatouch Beauty, we stand as a beacon of excellence in the realm of beauty and hair care. We specialize in providing top-tier virgin human hair extensions and lace systems. Our dedication to quality is unwavering, as we believe that every woman deserves access to the finest and most natural-looking hair products. One of our key strengths lies in our diverse product range, which comprises 100% virgin human hair extensions. We deeply understand the intrinsic value that women place on their hair and makeup, recognizing its profound impact on overall appearance and self-confidence. Therefore, we go above and beyond to deliver nothing short of excellence. Whether you seek voluminous curls, sleek straight styles, or intricate lace systems, Evatouch Beauty has you covered. Our products are designed to enhance your natural beauty and empower you to express yourself with confidence and grace. Join us on a journey of beauty and authenticity, where every strand tells a story of elegance and sophistication.</p>
        </div>

        <div className='flex gap-10 items-center md:flex-row flex-col'>
            <div className="border-2 flex-1 w-full aspect-square bg-black"></div>
            <div className='flex-1'>
                <h1 className='my-3 font-bold text-5xl'><span className={poppins.className}>Meet the Genius Behind the Brand</span></h1>
                <p className='font-semibold texl-lg'><span className={vollkorn.className}><span className='font-black'>Evodie Ngoy</span> has worked in the hair and makeup space for 9 years. She has experience styling hair for all types of occasions and makeup application from birthday makeup to bridal makeup. As the Founder and CEO of Evatouch Beauty, her mission is to ensure that all race, age and gender all over the world no matter the skin type and undertones can enjoy affordable luxury by providing innovative and quality products to cater to all beauty needs locally and across the border</span></p>
            </div>
        </div>
    </section>
  )
}

export default AboutUs;