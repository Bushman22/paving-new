import React from 'react'
import { title, subtitle } from '@/components/primitives';
import ServicesItems from '@/components/ServicesItems';
import { Image, Link } from '@nextui-org/react';
import Logos from '@/components/Logos';

function Services() {
    return (
        <div>
            <div className='flex justify-center text-center'>
                <div>
                    <h1 className={title()}>See what we have to offer</h1>
                    <h2 className={subtitle()}>View some of our services</h2>
                </div>
            </div>
            <ServicesItems />

            <div>
                <Logos />
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-10 mt-20 items-center md:h-[500px]'>
                <div className='md:h-[500px] flex justify-center'>
                    <video className="md:w-[400px] w-full h-full object-cover rounded-xl"   controls preload="auto">
                        <source src="/video.mp4" type="video/mp4" />
                        Your browser does not support this video
                    </video>
                </div>
                <div>
                    <div className='text-center'>
                        <h1 className='text-4xl font-semibold'>Installer of the year</h1>
                        <h2 className='text-default-500'>Smartstone Pool Surround</h2>
                    </div>
                    <div className='grid grid-cols-2 items-center md:gap-5 gap-2 max-lg:mt-10'>
                        <Link href="https://www.smartstone.co.za/" isExternal>
                            <Image
                                radius='0'
                                removeWrapper
                                className='w-[300px] h-[300px] max-lg:w-[150px] max-lg:h-[150px]'
                                src='/badge.jpeg'
                                alt=''
                            />
                        </Link>
                        <div className=''>
                            <p className='text-center'>Judges were impressed with the innovative use and neat cutting of the rectangular pavers by Thomson Paving</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services