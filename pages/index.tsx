import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

export default function Home () {
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
      {/* <section id='contact' className=' snap-center'>
          <ContactMe />
        </section> */}
    </div>
  )
}
