import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard ({}: Props) {
  return (
    <div>
      <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#080808] hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center '
          src='https://scontent.fgdl9-1.fna.fbcdn.net/v/t1.6435-9/36442167_1633938100049475_3176967186929418240_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0-Sx-7FYZs4AX-B_x9D&_nc_ht=scontent.fgdl9-1.fna&oh=00_AT-mvw3YASj9jlyOvjDhn-UfdCVWbOito39fnQD-1HEmoQ&oe=637CB38E'
        />
        {/* details */}
        <div className='px-0 md:px-10'>
          <h4 className='text-4xl font-light'>Titulo</h4>
          <p className='font-bold text-2xl mt-1'>mini descripcion</p>
          <div className='flex space-x-2 my-2'>
            {/* tech used */}
            <img
              className='h-10 w-10 rounded-full'
              src='https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs'
            />
            <img
              className='h-10 w-10 rounded-full'
              src='https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs'
            />
            <img
              className='h-10 w-10 rounded-full'
              src='https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs'
            />
            <img
              className='h-10 w-10 rounded-full'
              src='https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs'
            />
          </div>
          <p className='uppercase py-5 space-y-4 ml-5 text-lg'>Dates</p>
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>summary points</li>
            <li>summary points</li>
            <li>summary points</li>
          </ul>
        </div>
      </article>
    </div>
  )
}
