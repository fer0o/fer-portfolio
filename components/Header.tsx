import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { Social } from '../typings'

type Props = {
  socials: Social[]
}

export default function Header ({ socials }: Props) {
  return (
    <header className=' sticky top-0 p-5 flex items-start justify-between max-w-full z-20 xl:items-center '>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className=' flex flex-row items-center lg:space-x-2'
      >
        {/* social icons */}
        {socials.map(social => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor='gray'
            bgColor='trasparent'
          />
        ))}
      </motion.div>

      <Link href='#contact'>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className='flex flex-row items-center text-gray-300 cursor-pointer space-x-2 mt-2 '
        >
          <div className='flex flex-rows gap-8'>
            <EnvelopeIcon className='text-gray-500 h-8 w-8' />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400 mt-2'>
              Get In touch
            </p>
          </div>
        </motion.div>
      </Link>
    </header>
  )
}
