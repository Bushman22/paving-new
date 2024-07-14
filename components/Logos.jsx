"use client";

import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { Image, Button } from '@nextui-org/react';

const images = [
    {
        id: 1,
        href: "/images/Logos/Bosun-footer-Logo.png",
    },
    {
        id: 2,
        href: "/images/Logos/CLOETES-FINAL-LOGO-round-1030x442.png",
    },
    {
        id: 3,
        href: "/images/Logos/Corobrik.png",
    },
    {
        id: 4,
        href: "/images/Logos/download.png",
    },
    {
        id: 5,
        href: "/images/Logos/HLP-Construction-Logo-Dark-V2-Lower-Res-e1653636140709.png",
    },
    {
        id: 6,
        href: "/images/Logos/ICPI_logo_RGB.png",
    },
    {
        id: 7,
        href: "/images/Logos/Infraset-Logo.png",
    },
    {
        id: 8,
        href: "/images/Logos/SmartStone-Logo-Rectangle.png",
    },
    {
        id: 9,
        href: "/images/Logos/the-creative-stone-logo.png",
    },
]

const Logos = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        pauseOnHover: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    speed: 2000,
                    autoplaySpeed: 4000,
                },
            },
        ],
    };


    return (
        <div className="carouselContainer relative h-auto w-full mt-36">
            <h1 className='text-4xl font-bold text-center mb-10'>Relied On By <span className='text-red-500'>Professionals</span></h1>
            <Slider {...settings} className="gap-5 w-full">
                {images.map((items) => (
                    <div key={items.id} className="rounded-xl p-5 items-center focus:outline-none ">
                        <Image
                            removeWrapper
                            className='w-full rounded-xl h-auto max-h-[100px] object-cover'
                            src={items.href}
                            alt='home slider images'
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Logos;
