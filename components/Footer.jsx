import React from 'react'
import { Image } from '@nextui-org/react';
import Link from 'next/link';
import { siteConfig } from "@/config/site";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { Logo } from './icons';
import { CiMail } from "react-icons/ci";

function Footer() {
    return (
        <div>
            <div className='border-t border-default-300 py-5 md:flex justify-between mt-20'>
                <div>
                    <Link href='/'>
                        <Image
                            removeWrapper
                            className="h-20"
                            alt=""
                            radius='0'
                            src="/logo.png"
                        />
                    </Link>
                </div>
                <div className='md:flex lg:gap-20 md:gap-10 gap-20'>
                    <div>
                        <h1 className='font-semibold mb-5 max-md:mt-5'>Explore</h1>
                        <div className='flex flex-col gap-1 text-default-500'>
                            <Link href='/'>Home</Link>
                            <Link href='/services'>Services</Link>
                            <Link href='/gallery'>Gallery</Link>
                            <Link href='/contact'>Contact</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold mb-5 max-md:mt-5'>Contact Us</h1>
                        <div className='flex flex-col gap-1 text-default-500'>
                            <Link href='/'>Phone: +27 82 892 3675</Link>
                            <Link href='/'>Email: kevin@thomsonpaving.co.za</Link>
                            <Link className='max-lg:hidden' href='/gallery'>
                                Address: South Africa, Gauteng, Eastleigh, Edenvale, 1609
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold mb-5 max-md:mt-5'>Social Media</h1>
                        <div className='flex flex-col gap-1 text-default-500'>
                            <div className='flex gap-2 items-center'>
                                <Link target='_blank' aria-label="Whatsapp" href={siteConfig.links.whatsapp}>
                                    <FaWhatsapp className="text-default-500 w-6 h-6" />
                                </Link>
                                <Link target='_blank' aria-label="Facebook" href={siteConfig.links.facebook}>
                                    <AiOutlineFacebook className="text-default-500 w-6 h-6" />
                                </Link>
                                <Link  target="_blank" aria-label="Mail" href={siteConfig.links.mail}>
                                    <CiMail className="text-default-500 w-6 h-6" />
                                </Link>
                            </div>
                            <div className='mt-5'>
                                <h1>Powered by</h1>
                                <Link className='flex items-center text-tiny' href="https://embarkdigital.co.za" target='_blank'>
                                    <Logo />
                                    <h1>Embark Digital</h1>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-5'>
                <h1 className='text-sm text-default-500'>2023 &copy; Thomson Paving - All Rights Reserved</h1>
            </div>
        </div>
    )
}

export default Footer