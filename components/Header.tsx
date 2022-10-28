import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

function Header ({}: Props) {
  return (
    <header className=' sticky top-0 p-5 flex items-start justify-between max-w-full z-20 xl:items-center '>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className=' flex flex-row items-center space-x-2'
      >
        {/* social icons */}

        <SocialIcon
          url='https://www.facebook.com/fer.medellin.cuevas/'
          fgColor='gray'
          bgColor='trasparent'
        />
        <SocialIcon
          url='https://www.instagram.com/fer0osennin/?hl=en'
          fgColor='gray'
          bgColor='trasparent'
        />

        <SocialIcon
          url='https://www.linkedin.com/in/fernando-medellin-cuevas/'
          fgColor='gray'
          bgColor='trasparent'
        />
        <SocialIcon
          url='https://github.com/fer0o'
          fgColor='gray'
          bgColor='trasparent'
        />
      </motion.div>

      <Link href='#contact'>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className='flex flex-row items-center text-gray-300 cursor-pointer space-x-2 '
        >
          <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='trasparent'
          />
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
            Get In touch
          </p>
        </motion.div>
      </Link>
    </header>
  )
}

export default Header
