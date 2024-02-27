import React from 'react'

const ContactForm = () => {
  return (
    <form>
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
            placeholder='email'
            name='email'
            className='w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 bg-grey border-0 rounded shadow'
            />
        </div>
        <div className='mb-4'>
            <input
            placeholder='Your message'
            name='message'
            className='w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow'
            />
        </div>
        <button className='px-6 py-3 mb-5 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 rounded'>Send a message</button>
    </form>
  )
}

export default ContactForm