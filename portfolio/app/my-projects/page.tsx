import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div style={{backgroundImage: "url(/assets/mountains.jpg)"}}
    className='w-screen h-screen flex items-center justify-center bg-center bg-cover' 
    >
        <div className='grid grid-cols-2 gap-8 max-w-[100%] max-h-[100%]'>
            {Projects.map((project, index) => (
                <ProjectCard key={index}
                title={project.title}
                text={project.text}
                image={project.src} />
            ))}
        </div>
    </div>
  )
}

export default Page     