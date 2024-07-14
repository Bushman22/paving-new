import React from 'react'
import { Card, Button, Link } from '@nextui-org/react'
import { SiDatabricks } from "react-icons/si";
import { FaTrowelBricks } from "react-icons/fa6";
import { IoMdBonfire } from "react-icons/io";
import { BsBricks } from "react-icons/bs";

function HomeCard() {
    return (
        <>
            <div className='text-3xl mt-20'>
                <div className='flex justify-center'>
                    <h1>Some of our Services</h1>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full mt-10 gap-5'>
                    <Card className='w-full h-[280px] p-5'>
                        <SiDatabricks className='text-red-500 w-14 h-14' />
                        <h1 className='text-3xl my-5'>Cobbles</h1>
                        <p className='text-sm w-4/5'>The beauty of cobbles lies in their versatility of various shapes and sizes.</p>
                    </Card>
                    <Card className='w-full h-[280px] p-5'>
                        <FaTrowelBricks className='text-red-500 w-14 h-14' />
                        <h1 className='text-3xl my-5'>Flagstones</h1>
                        <p className='text-sm w-4/5'>
                            These pavers have various textures for use in different areas.
                        </p>
                    </Card>
                    <Card className='w-full h-[280px] p-5'>
                        <IoMdBonfire className='text-red-500 w-14 h-14' />
                        <h1 className='text-3xl my-5'>Fire Pits</h1>
                        <p className='text-sm w-4/5'>
                            Fire pits can be created to add appeal in your garden or entertainment area.
                        </p>
                    </Card>
                    <Card className='w-full h-[280px] p-5'>
                        <BsBricks className='text-red-500 w-14 h-14' />
                        <h1 className='text-3xl my-5'>Cladding</h1>
                        <p className='text-sm w-4/5'>
                            Cladding is available in different shapes and sizes to compliment your living space to create a specific look of feel.</p>
                    </Card>
                </div>
                <div className='flex justify-center mt-5'>
                    <Button as={Link} href="/services" showAnchorIcon className='bg-red-500 text-white px-10'>
                        See more
                    </Button>
                </div>
            </div>
        </>
    )
}

export default HomeCard