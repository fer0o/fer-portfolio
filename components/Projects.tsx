import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  projects: Project[]
}

export default function Projects ({ projects }: Props) {
  // const projects = [1, 2, 3]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-white text-2xl'>
        Projects
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-blue-900/80'>
        {projects.map((project, idx) => (
          <div
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
            key={project._id}
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=''
              className='w-auto h-96'
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-2xl font-semibold text-center uppercase'>
                <span className='underline decoration-slate-50'>
                  Project {idx + 1} of {projects.length}:
                </span>{' '}
                {project.title}
              </h4>
              <p className='text-lg text-center md:text-left'>
                {project?.summary}
              </p>
              <div className='flex text-center justify-center'>
                <a
                  className='text-xl text-center text-blue-500 underline'
                  href={project?.linkToBuild}
                  target='_blank'
                  rel='noreferrer'
                >
                  Link To Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-slate-600/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}
