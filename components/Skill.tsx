import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  skill: Skill
  directionLeft?: boolean
}

function Skill ({ directionLeft, skill }: Props) {
  return (
    <div className='group flex cursor-pointer '>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className='rounded-full border border-white object-cover lg:w-24 w-20 lg:h-24 h-20 md:w-28 md:h-28 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white lg:w-24 w-20 lg:h-24 h-20 md:w-28 md:h-28 xl:h-28 xl:w-28 rounded-full z-0 '>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill
