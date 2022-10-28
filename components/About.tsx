import React from 'react'
import { motion } from 'framer-motion'
// https://pbs.twimg.com/profile_images/1097208044231057408/hhYbzbJh_400x400.jpg
type Props = {}

export default function About ({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl font-semibold '>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        src='https://scontent.fgdl9-1.fna.fbcdn.net/v/t31.18172-8/28515285_10215158260894176_3227784359906811773_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=S5-DEyZr0UgAX-Wi7Pg&_nc_ht=scontent.fgdl9-1.fna&oh=00_AT8iMfUhrJRdM3zB_jHQW2ASGGz-gAHCNYyUgIk66hNPfg&oe=6378F0EA'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          {' '}
          Here is a{' '}
          <span className='underline decoration-blue-500'>little</span>{' '}
          background
        </h4>
        <p className='text-base'>
          Hola, Soy Fer o Fero como gusten llamarme. Soy desarrollador web muy
          interesado y actualmente aprendiendo en el área del frontend con
          React, fotográfo amateur y próximo campeon de LoL de mi cuadra.✌️
        </p>
      </div>
    </motion.div>
  )
}
