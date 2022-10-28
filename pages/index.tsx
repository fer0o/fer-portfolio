import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import WorkExperience from '../components/WorkExperience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div className='bg-black text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-blue-900/80'>
      <Head>
        <title>Fer's Portfolios</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>
      {/* Experience */}
      <section className='snap-center' id='experience'>
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      {/* Contact Me */}
      <section id='contact' className=' snap-center'>
        <ContactMe />
      </section>
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              src='https://play-lh.googleusercontent.com/sjY0YeMySx9TQOFFJgbRa-hJlFICKIKy2sELJB1z4MCwKRxlXNkhvS5G72ZHvK4sqA'
              alt=''
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home
