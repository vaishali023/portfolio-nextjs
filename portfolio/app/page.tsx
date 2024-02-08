import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className='flex items-center w-full h-full bg-cover bg-center' style={{backgroundImage: 'url(/assets/main-bg.webp)'}}>
        <div className='pl-0 md:pl-20 pb-26 md:pb-10 flex flex-col gap-5 z-[10] max-w-[750px]'>
          <h1 className="text-[50px] font-semibold text-white">Design <br/>
          <span className='absolute h-1 w-full flex items-end z-10 left-0'>&
            </span>         
             <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
            {" "}
            Development
          </span>
          </h1>
          <p className='text-gray-200 hidden md:block'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quibusdam totam libero id. Molestias distinctio, maiores dolores aliquid modi reiciendis ipsam eligendi nulla voluptate qui eius molestiae quam corrupti unde.
          </p>
          <div className='flex-col md:flex-row hidden md:flex gap-5'>
            <Link href='/my-skills' className = 'rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              Learn more
            </Link>
            <Link href='/my-projects' className = 'rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20'/>
              My projects
            </Link>
            <Link href='/contact-me' className = 'rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20'/>
              Contact me
            </Link>
      
          </div>
        </div>
      </div>
      <div className='absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5'>
            <Link href='/my-skills' className = 'rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              Learn more
            </Link>
            <Link href='/my-projects' className = 'rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20'/>
              My projects
            </Link>
            <Link href='/contact-me' className = 'rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
              <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20'/>
              Contact me
            </Link>
      
          </div>
          <div className='absolute bottom-0 right-0 z-[10]'>
            <Image src="/assets/horse.png" 
            alt="horse" 
            height={300}
            width={300}
            className='absolute right-55 top-40'
            />
            <Image src='/assets/cliff.webp' alt='cliff' width={480} height={480} />
          </div>
          <div className='absolute bottom-0 z-[5] w-full h-full'>
            <Image src='/assets/trees.webp' 
            alt='trees' 
            width={2000} 
            height={2000} 
            className='w-full h-full' />
          </div>
          <Image src='/assets/stars.png' 
            alt='stars' 
            width={300} 
            height={300} 
            className='absolute top-10 left-0 z-[10]' />

    </main>
  
  )
}
