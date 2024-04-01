"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const SlideController = () => {
    return (
        <div className="flex items-center gap-3 md:gap-5">
            <button className=" cursor-pointer flex justify-center items-center w-8 md:w-10 aspect-square rounded-full bg-black">
                <FaArrowRightLong color="white" />
            </button>
            <button className=" cursor-pointer flex justify-center items-center w-8 md:w-10 aspect-square rounded-full bg-black">
                <FaArrowLeftLong color="white" />
            </button>
        </div>
    )
}

export default SlideController