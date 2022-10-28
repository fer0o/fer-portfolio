import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects ({}: Props) {
  const projects = [1, 2, 3]
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
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-500/20 scrollbar-thumb-blue-900/80'>
        {projects.map((project, idx) => (
          <div
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
            key={idx}
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src='https://www.geekmi.news/__export/1624738926498/sites/debate/img/2021/06/26/nigatoro.jpg_976912859.jpg'
              alt=''
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-2xl font-semibold text-center'>
                <span className='underline decoration-slate-50'>
                  Project {idx + 1} of {projects.length}:
                </span>{' '}
                mundialito shop
              </h4>
              <p className='text-lg text-center md:text-left'>
                El proyecto se basa en un e-commerce que posee las siguientes
                características: Barra de navegación: link por categoría y
                carrito de compras (para los links se utiliza React Router).
                Detalle de los productos. Listado de todos los artículos
                disponibles en la página principal. Filtrado de vistas por
                categoría (Hombres y Mujeres).
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-slate-600/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}
