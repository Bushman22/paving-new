"use client";

import React, { useState } from 'react';
import { Image, Modal, ModalContent, ModalBody, ModalHeader, ModalFooter, Card, useDisclosure } from '@nextui-org/react';
import { Button, ButtonGroup, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { services } from '@/lib/data';
import { title, subtitle } from '@/components/primitives';
import { FaChevronDown } from "react-icons/fa";

function Gallery() {
    const [selectedId, setSelectedId] = useState(null);
    const [visibleImagesCount, setVisibleImagesCount] = useState(6);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const currentFilterLabel = selectedId ? services.find(service => service.id === selectedId)?.title : 'All Photos';

    const handleCardClick = (review) => {
        setSelectedCard(review);
        onOpen();
    };

    const handleImagesSelect = (id) => {
        setSelectedId(id === selectedId ? null : id);
        setVisibleImagesCount(6);
    };

    const clearImagesFilter = () => {
        setSelectedId(null);
        setVisibleImagesCount(6);
    };

    const loadMoreImages = () => {
        setVisibleImagesCount((prevCount) => prevCount + 6);
    };

    const getImages = () => {
        if (selectedId) {
            const selectedServices = services.find((r) => r.id === selectedId);
            return selectedServices ? selectedServices.images : [];
        }
        return services.flatMap((r) => r.images);
    };

    const filteredImages = getImages();
    const reversedImages = [...filteredImages];
    const visibleImages = reversedImages.slice(0, visibleImagesCount);

    return (
        <div className="">
            <div className='flex justify-center text-center mb-8'>
                <div>
                    <h1 className={title()}>View Our Photos</h1>
                    <h2 className={subtitle()}>Select any image to enlarge</h2>
                </div>
            </div>
            <div className="grid lg:grid-cols-8 md:grid-cols-3 grid-cols-2 gap-4 mb-4 mt-4 max-md:hidden">
                <Button
                    auto
                    variant={selectedId === null ? 'success' : 'default'}
                    onClick={clearImagesFilter}
                    className={selectedId === null ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'}
                >
                    All Photos
                </Button>
                {services.map((image) => (
                    <Button
                        key={image.id}
                        auto
                        variant={selectedId === image.id ? 'success' : 'default'}
                        onClick={() => handleImagesSelect(image.id)}
                        className={selectedId === image.id ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'}
                    >
                        {image.title}
                    </Button>
                ))}
            </div>
            <div className="block md:hidden mb-4 mt-4 flex items-center gap-2">
                <h1>Filter - </h1>
                <ButtonGroup>
                    <Button className='w-[150px] border-r'>{currentFilterLabel}</Button>
                    <Dropdown placement="bottom-end" >
                        <DropdownTrigger>
                            <Button isIconOnly>
                                <FaChevronDown />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Room Selection">
                            <DropdownItem key="all" onClick={clearImagesFilter}>
                                All Photos
                            </DropdownItem>
                            {services.map((image) => (
                                <DropdownItem key={image.id} onClick={() => handleImagesSelect(image.id)}>
                                    {image.title}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                </ButtonGroup>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                {visibleImages.map((image, index) => (
                    <Card
                        key={index}
                        isPressable
                        onPress={() => handleCardClick(image)}
                        className="border-none cursor-pointer h-[300px]"
                    >
                        <Image
                            removeWrapper
                            src={image.href}
                            alt=''
                            className='w-full h-full object-cover max-h-[300px]'
                        />
                    </Card>
                ))}
            </div>
            {visibleImagesCount < filteredImages.length && (
                <div className="flex justify-center mt-10">
                    <Button auto onClick={loadMoreImages} className="bg-red-500 text-white px-10">
                        See More
                    </Button>
                </div>
            )}

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='3xl' className='px-0 max-h-[90%]' placement='center'>
                <ModalContent>
                    <ModalHeader>

                    </ModalHeader>
                    <ModalBody className='px-5 pb-2'>
                        <div className='w-full'>
                            <Image
                                removeWrapper
                                height={100}
                                src={selectedCard?.href}
                                alt=''
                                className='w-full h-[500px] object-cover'
                            />
                        </div>
                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>

        </div>
    );
}

export default Gallery;
