import React from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}
type Props = {}

export default function ContactMe ({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:fermedellincuevas@gmail.com?subject=${formData.subject}&body=Hi, my name is: ${formData.name}. from (${formData.email}) the subject for ths message:  ${formData.message} `
  }
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-white text-2xl'>
        {' '}
        Contact Me
      </h3>
      <div className='flex flex-col space-y-10 mt-20'>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-blue-900 h-7 w-7 animate-pulse' />
            <p> +52 5540150996</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-blue-900 h-7 w-7 animate-pulse' />
            <p> fermedellincuevas@gmail.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'
        >
          <div className='flex space-x-2'>
            <input
              {...register('name')}
              placeholder='Name'
              type='text'
              className='contactInput'
            />
            <input
              {...register('email')}
              placeholder='Email'
              type='email'
              className='contactInput'
            />
          </div>
          <input
            {...register('subject')}
            placeholder='Subject'
            type='text'
            className='contactInput'
          />
          <textarea
            {...register('message')}
            placeholder='Message'
            className='contactInput'
          />
          <button className='bg-blue-900 py-5 px-10 font-bold rounded-md'>
            {' '}
            Submit{' '}
          </button>
        </form>
      </div>
    </div>
  )
}
