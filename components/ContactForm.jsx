"use client";

import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs

import { Card, CardBody, Input, Button, Textarea } from '@nextui-org/react';

function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);
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
        setIsError(false)
        setIsLoading(true);

        try {
            const templateParams = {
                from_name: formData.name,
                user_email: formData.email,
                user_phone: formData.phone,
                message: formData.message,
            };

            await emailjs.send(
                'service_xzz07w8',
                'template_eief64g',
                templateParams,
                'XA2NvqhLPZMFZQfnb'
            );

            setIsSubmitted(true);
        } catch (error) {
            setIsError(true);
            console.error('Error sending email:', error);
        } finally {
            setIsLoading(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
        }
    };

    return (
        <div>
            <Card className='h-full py-0'>
                <CardBody className='h-full'>
                    <form className='h-full' onSubmit={handleSubmit}>
                        {isSubmitted ? (
                            <div className='flex flex-col items-center justify-center text-center h-full'>
                                <h1 className='font-bold'>Thank you for submitting the form</h1>
                                <p className='text-default-500'>We will get back to you as soon as we can</p>
                                <Button className='mt-5' onPress={() => setIsSubmitted(false)}>
                                    Redo form
                                </Button>
                            </div>
                        ) : (
                            <div className='flex flex-col justify-between h-full gap-2'>
                                <div className='flex justify-center text-center'>
                                    <div>
                                        <p className='font-bold mt-2'>Contact Us</p>
                                        <p className='mb-3 text-tiny mb-5 text-default-500'>
                                            We will get back to you as soon as possible
                                        </p>
                                    </div>
                                </div>
                                <Input
                                    className=''
                                    type='name'
                                    name='name'
                                    label='Name & Surname'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    autoComplete='name'
                                />
                                <Input
                                    className=''
                                    type='email'
                                    name='email'
                                    label='Email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete='email'
                                />
                                <Input
                                    className=''
                                    type='tel'
                                    name='phone'
                                    label='Phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                <Textarea
                                    className=''
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Message'
                                />
                                <Button className='bg-red-500 w-full py-2 text-white' size='lg' type='submit' isLoading={isLoading} isError={isError}>
                                    {isLoading ? <span>Loading</span> : (isError ? <span>Submit Failed</span> : <span>Submit</span>)}
                                </Button>
                                {isError && (
                                    <div className='text-center'>
                                        <h1 className='text-red-500'>Error submitting form, please try again</h1>
                                    </div>
                                )}
                            </div>
                        )}
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}

export default ContactForm;
