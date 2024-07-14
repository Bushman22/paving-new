"use client";

import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { Image, Button } from '@nextui-org/react';
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2";
import { services } from '@/lib/data';

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <Button className='absolute right-1/2 -mr-8 transform -translate-x-1/2 bottom-[-50px] text-2xl cursor-pointer z-10 rounded-full bg-red-500 text-white' onClick={onClick}>
            <HiArrowSmallLeft className="" />
        </Button>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <Button className='absolute left-1/2 transform -ml-8 translate-x-1/2 bottom-[-50px] text-2xl cursor-pointer z-10 rounded-full bg-red-500 text-white' onClick={onClick}>
            <HiArrowSmallRight className="" />
        </Button>
    );
};


const HomeAboutSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        pauseOnHover: true,
        swipeToSlide: true,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };


    return (
        <div className="carouselContainer relative h-[400px]">
            <div className="absolute top-2 left-2 z-10 bg-white text-black w-10 h-10 m-1 flex items-center justify-center rounded-full">
                {currentSlide + 1}/{services.length}
            </div>
            <Slider {...settings} className="gap-2">
                {services.map((items) => (
                    <div key={items.id} className="rounded-xl p-2 focus:outline-none ">
                        <Image
                            removeWrapper
                            className='w-full h-full rounded-xl h-[400px] object-cover'
                            src={items.images[1].href}
                            alt='home slider images'
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HomeAboutSlider;
