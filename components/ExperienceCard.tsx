import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  experience: Experience
}

export default function ExperienceCard ({ experience }: Props) {
  return (
    <div>
      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] lg:w-[900px] snap-center p-10 bg-[#080808] hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='w-28 h-28 rounded-full  object-cover object-center '
          src={urlFor(experience?.companyImage).url()}
        />
        {/* details */}
        <div className='px-0 md:px-10 space-y-2'>
          <h4 className='lg:text-4xl text-base font-light text-left'>
            {experience?.jobTitle}
          </h4>
          <p className='font-bold lg:text-2xl text-base text-left'>
            {experience?.company}
          </p>
          <div className='flex space-x-2 my-2'>
            {/* tech used */}
            {experience.technologies.map(technology => (
              <img
                key={technology._id}
                className='h-12 w-12 rounded-lg object-cover'
                src={urlFor(technology?.image).url()}
              />
            ))}
          </div>
          <p className='uppercase py-2 space-y-4 lg:text-lg text-sm text-left'>
            {new Date(experience.dateStarted).toDateString()} - {''}
            {experience.isCurrentlyWorkingHere
              ? 'Present'
              : new Date(experience.dateEnded).toDateString()}
          </p>
          <ul className='list-disc space-y-2 text-left lg:text-lg text-sm lg:max-h-96 w-full mt-15  '>
            {/* className='list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-blue-900/80 */}
            {experience.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  )
}
