"use client"
import ContactForm from '@/components/ContactForm'
import React from 'react'

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(assets/bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div

        // style={{ backgroundImage: "url(assets/atombg-comp.webp" }}
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-grey"
      > <div className='relative top-[15%] ml-[40px] text-[105px] text-white tracking-tight'  style={{ fontFamily: "'Barlow Semi Condensed', 'monospace'"}} >
          <p>Let&apos;s </p>
        <p className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Connect</p></div>
        <div 
        className="absolute right-20 bottom-24 w-[90%] md:w-[50%]">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Page