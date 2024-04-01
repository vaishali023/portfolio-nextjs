"use client"
import { sendEmail } from '@/actions/sendEmail';
import React, { useState } from 'react';
import toast from "react-hot-toast";


const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { error } = await sendEmail(formData);
  
    if (error) {
      toast.error(error);
    } else {
      setIsSubmitted(true);
      toast.success('Your message has been sent successfully!');
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center mt-80">
        {isSubmitted ? (
          <>
            <h2 className='text-2xl font-bold mb-6 text-white'>Thank you for reaching out!</h2>
            <p className="text-lg text-gray-200">I appreciate your message and will get back to you as soon as possible.</p>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <h2 className='text-2xl font-bold mb-6 text-white'>Contact me</h2>
            <div className='mb-4'>
              <input
                type='text'
                placeholder='Your name'
                name='name'
                className='w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow'
              />
            </div>
            <div className='mb-4'>
              <input
                type='email'
                placeholder='Email'
                name='senderEmail'
                required
                className='w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 bg-grey border-0 rounded shadow'
              />
            </div>
            <div className='mb-4'>
              <textarea
                placeholder='Your message'
                name='message'
                maxLength={500}
                className='w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow'
              />
            </div>
            <button type="submit" className='px-6 py-3 mb-5 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 rounded'>Send a message</button>
          </form>
        )}
      </div>
    </div>
  );
};


export default ContactForm