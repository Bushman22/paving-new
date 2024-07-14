"use client";

import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Image, Link } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

const data = [
    {
        id: 1,
        name: 'Anja Squire',
        image: "/images/About/cement/95f9da84-0eff-4c15-ac34-71d399f3a437.jpg",
        date: "November 2023",
        review: "We had our courtyard paved. Kevin and his team were professional and did such an amazing job. They were quick and efficient and even worked in the rain!!!",
    },
    {
        id: 2,
        name: 'Liz Dunbar',
        image: "/images/About/Cladding/five.jpeg",
        date: "November 2023",
        review: "Kevin was reliable and professional. His staff were pleasant and the job was neatly done to a high standard",
    },
    {
        id: 3,
        name: 'Hloni Matsela',
        image: "/images/About/Cobbles/five.jpeg",
        date: "November 2023",
        review: "I have used Thomson Paving before and again recently. I find their professionalism unparalleled. They are friendly, know what they are doing and deliver on their commitments",
    },
    {
        id: 4,
        name: 'Carol Roux',
        image: "/images/About/Copings/four.jpeg",
        date: "November 2023",
        review: "Amazing…. The difference!! Thank YOU … what a team!!!",
    },
    {
        id: 5,
        name: 'Jaco Kruger',
        image: "/images/About/Fire Pits/four.jpeg",
        date: "November 2023",
        review: "Thank you for the great wok, it looks really neat. Will call you when we need to do the next section in the front",
    },
    {
        id: 6,
        name: 'Harold Meyer',
        image: "/images/About/Flagstones/three.jpeg",
        date: "November 2023",
        review: "Thank you for an extremely efficient and professional job. It is greatly appreciated.",
    },
    {
        id: 7,
        name: 'Edward Wilson',
        image: "/images/About/cement/644f0ca8-e2ae-4138-9388-61f4d6f83a80.jpg",
        date: "November 2023",
        review: "I would like to thank Thomson paving for the paving project done at my house. I was impressed with their workmanship. It is the first time i saw any job with such perfect levels for waterflow. I honestly cant complain about any aspect of the project. What also impressed me was how neat they left the site afterwards. They literally swept my grass with a broom where they had the river sand. Thanks so much Kevin and your team for my wonderful experience",
    },
]

function Reviews() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedReview, setSelectedReview] = useState(null);
    const [visibleCount, setVisibleCount] = useState(3);

    const handleReviewClick = (review) => {
        setSelectedReview(review);
        onOpen();
    };

    const handleSeeMoreClick = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    return (
        <div className='md:mt-20 mt-10'>
            <div className='flex justify-center text-center'>
                <div>
                    <h1 className='text-4xl font-semibold'>Our Reviews</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 h-auto gap-5 mt-10'>
                {data.slice(0, visibleCount).map((items) => (
                    <Card key={items.id} className="w-full min-h-[300px]">
                        <CardHeader className="justify-between">
                            <div className="flex gap-5">
                                <Button className='m-0 px-0 w-auto h-auto rounded-full' size="sm" isIconOnly onPress={() => handleReviewClick(items)} >
                                    <Image
                                        className='w-[50px] h-[50px] rounded-full m-1 object-cover'
                                        removeWrapper
                                        src={items.image}
                                        alt=''
                                    />
                                </Button>
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-default-600">{items.name}</h4>
                                </div>
                            </div>
                        </CardHeader>
                        <CardBody className="px-3 py-0 text-default-400 mt-2">
                            <p>{items.review}</p>
                        </CardBody>
                        <CardFooter className="gap-3 mt-2">
                            <div className="flex gap-1">
                                <h5 className="text-small tracking-tight text-default-400">{items.date}</h5>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className='flex justify-center my-10'>
                {visibleCount < data.length && (
                    <Button className='bg-red-500 text-white' onPress={handleSeeMoreClick}>
                        See more reviews
                    </Button>
                )}
            </div>
            {selectedReview && (
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" backdrop="blur" className="max-h-screen w-[400px] h-[400px] m-0 p-0 ">
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalBody className="m-0 p-6">
                                    <Image
                                        removeWrapper
                                        alt=""
                                        className="w-[350px] h-[350px] object-cover rounded-full "
                                        src={selectedReview.image}
                                    />
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            )}
        </div>
    )
}

export default Reviews