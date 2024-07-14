"use client"

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Image } from '@nextui-org/react';
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2";
import { services } from '@/lib/data';
import { Button, ButtonGroup, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { FaChevronDown } from "react-icons/fa";

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

const ServicesItems = () => {
    const [currentService, setCurrentService] = useState(services[0]);

    const handleServiceChange = (service) => {
        setCurrentService(service);
    };

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
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className="mt-10">
            <div className=''>
                <h1>Select one to view</h1>
                <div className="mt-2">
                    <div className='flex space-x-2 max-md:hidden'>
                        {services.map(service => (
                            <Button
                                key={service.id}
                                className={`${service.id === currentService.id ? 'bg-red-500 text-white' : 'bg-default'}`}
                                onClick={() => handleServiceChange(service)}
                            >
                                {service.title}
                            </Button>
                        ))}
                    </div>
                    <div className='md:hidden'>
                        <ButtonGroup>
                            <Button className='w-[150px] border-r'>{currentService.title}</Button>
                            <Dropdown placement="bottom-end">
                                <DropdownTrigger>
                                    <Button isIconOnly>
                                        <FaChevronDown />
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Room Selection">
                                    {services.map((service) => (
                                        <DropdownItem key={service.id} onClick={() => handleServiceChange(service)}>
                                            {service.title}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2  grid-cols-1 items-center gap-10 mt-5">
                <div className="">
                    <h2 className="text-4xl font-bold mb-5">{currentService.title}</h2>
                    <p className="text-gray-600 text-xl">{currentService.description}</p>
                </div>
                <div className="">
                    <Slider {...settings} className="gap-2">
                        {currentService.images.map((image, index) => (
                            <div key={index} className="rounded-xl p-2 focus:outline-none">
                                <Image
                                    removeWrapper
                                    className='w-full h-full rounded-xl h-[400px] object-cover'
                                    src={image.href}
                                    alt='home slider images'
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ServicesItems;
