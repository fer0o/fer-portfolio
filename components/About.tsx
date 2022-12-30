import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'
// https://pbs.twimg.com/profile_images/1097208044231057408/hhYbzbJh_400x400.jpg
type Props = {
  pageInfo: PageInfo
}

export default function About ({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left  px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl font-semibold '>
        About
      </h3>
      <div className='grid grid-cols-1 lg:grid-cols-2 mt-16 space-y-8 items-center '>
        <div className='flex justify-center items-center'>
          <motion.img
            initial={{
              x: -200,
              opacity: 0
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={urlFor(pageInfo?.profilePic).url()}
            className='lg:w-[500px] lg:h-[600px] w-48 h-48 rounded-full md:rounded-lg md:w-64 md:h-96 object-cover'
            // className='-mb-20 md:mb-0 flex justify-center w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] lg:mt-16 mt-48'
          />
        </div>
        <div className='space-y-8 px-0 md:px-10'>
          <h4 className='lg:text-4xl text-2xl font-semibold'>
            {' '}
            Here is a{' '}
            <span className='underline decoration-blue-500'>little</span>{' '}
            background
          </h4>
          <p className='lg:text-base text-sm '>
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
