import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCircles from './BackgroundCircles'
type Props = {
  pageInfo: PageInfo
}

function Hero ({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi Im ${pageInfo?.name}`,
      'WebDesigner',
      'Working to convert me in Fullstack',
      'Eat, Sleep, Code, Repeat!',
      'Lear React'
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={urlFor(pageInfo?.heroImage).url()}
        alt=''
      />
      {/* div with the text */}
      <div className='z-20'>
        <h2 className='text-md uppercase text-white pb-2 tracking-[15px]'>
          {pageInfo?.role}
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='text-2xl mr-3'>{text}</span>
          <Cursor cursorColor='#80b3ff' />
        </h1>
        {/* about experience */}
        <div className='pt-5 '>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>

          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>

          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
