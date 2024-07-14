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

            <div>
                <div className='text-center mt-28'>
                    <h1 className='text-4xl font-semibold'>Installer of the year</h1>
                    <h2 className='text-default-500'>Smartstone Pool Surround</h2>
                </div>
                <div className='flex lg:flex-row flex-col items-center justify-center '>
                    <Link href="https://www.smartstone.co.za/" isExternal>
                        <Image
                            radius='0'
                            removeWrapper
                            className='w-[300px] h-[300px] max-lg:mt-10 max-lg:w-[150px] max-lg:h-[150px]'
                            src='/badge.jpeg'
                            alt=''
                        />
                    </Link>
                    <div className='max-w-xl'>
                        <p className='text-center text-2xl'>Judges were impressed with the innovative use and neat cutting of the rectangular pavers by Thomson Paving</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services