"use client"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Parallax } from 'react-scroll-parallax';

const Slider = () => {
    return (
            <Splide aria-label="My Favorite Images" options={{
                type : 'loop',
                perPage: 3,
                perMove: 1,
                autoplay: true,
                interval: 2000,
                speed: 2000,
                pauseOnHover: true,
                arrows: false,
                pagination: false,
                gap: "40px",
                drag : 'free',
                    snap : true,
                 breakpoints: {
                    640: {
                        type : 'loop',
                        perPage: 1,
                        perMove: 1,
                    }
                }
            }}
             className="overflow-hidden">
                <SplideSlide>
                    <div className="w-full aspect-square bg-black"></div>
                </SplideSlide>
                <SplideSlide>
                    <div className="w-full aspect-square bg-black"></div>
                </SplideSlide>
                <SplideSlide>
                    <div className="w-full aspect-square bg-black"></div>
                </SplideSlide>
                <SplideSlide>
                    <div className="w-full aspect-square bg-black"></div>
                </SplideSlide>
                <SplideSlide>
                    <div className="w-full aspect-square bg-black"></div>
                </SplideSlide>
                <SplideSlide>
                    <div className="w-full aspect-square bg-black"></div>
                </SplideSlide>
            </Splide>
    )
}

export default Slider;