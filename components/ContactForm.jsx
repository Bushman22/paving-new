"use client";

import React, { useState } from 'react';
import { Card, CardBody, Input, Button, Textarea } from '@nextui-org/react'

function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log('Form Data:', formData);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
        setIsSubmitted(true);
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    return (
        <div>
            <Card className='h-full py-0'>
                <CardBody className='h-full'>
                    <form className='h-full' onSubmit={handleSubmit}>
                        {isSubmitted ? (
                            <div className=' flex flex-col items-center justify-center text-center h-full'>
                                <h1 className='font-bold'>Thank you for submitting the form</h1>
                                <p className='text-default-500'>we will get back to you as soon as we can</p>
                                <Button className='mt-5' onPress={() => setIsSubmitted(false)} >
                                    Redo form
                                </Button>
                            </div>
                        ) : (
                            <div className='flex flex-col justify-between h-full gap-2'>
                                <div className='flex justify-center text-center'>
                                    <div>
                                        <p className='font-bold mt-2'>Contact Us</p>
                                        <p className=' mb-3 text-tiny mb-5 text-default-500'>We will get back to you as soon as possible</p>
                                    </div>
                                </div>
                                <Input
                                    className=''
                                    type="text"
                                    name="name"
                                    label="Name & Surname"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    className=''
                                    type="email"
                                    name="email"
                                    label="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    className=''
                                    type="tel"
                                    name="phone"
                                    label="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                <Textarea
                                    className=''
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Message'
                                />
                                <Button className='bg-red-500 w-full py-2' size='lg' type='submit' isLoading={isLoading}>
                                    {isLoading ? (
                                        <span>Loading</span>
                                    ) : (
                                        <span>Submit</span>
                                    )}
                                </Button>
                            </div>
                        )}

                    </form>
                </CardBody>
            </Card>
        </div>
    )
}

export default ContactForm