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
      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#080808] hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center '
          src={urlFor(experience?.companyImage).url()}
        />
        {/* details */}
        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
          <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
          <div className='flex space-x-2 my-2'>
            {/* tech used */}
            {experience.technologies.map(technology => (
              <img
                className='h-10 w-10 rounded-full'
                src={urlFor(technology?.image).url()}
              />
            ))}
          </div>
          <p className='uppercase py-5 space-y-4 ml-5 text-lg'>
            {new Date(experience.dateStarted).toDateString()} - {''}
            {experience.isCurrentlyWorkingHere
              ? 'Present'
              : new Date(experience.dateEnded).toDateString()}
          </p>
          <ul className='list-disc space-y-4 ml-5 text-lg h-96  '>
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
