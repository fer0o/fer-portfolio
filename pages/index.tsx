import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import WorkExperience from '../components/WorkExperience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocial } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo
  experiences: Experience[]
  skills: Skill[]
  projects: Project[]
  socials: Social[]
}

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className='bg-black text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 lg:scrollbar lg:scrollbar-track-gray-500/20 lg:scrollbar-thumb-blue-900/80'>
      <Head>
        <title>Fer&apos;s Portfolios</title>
      </Head>
      {/* Header */}
      <Header socials={socials} />
      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero pageInfo={pageInfo} />
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>
      {/* Experience */}
      <section className='snap-center' id='experience'>
        <WorkExperience experiences={experiences} />
      </section>
      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>
      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>
      {/* Contact Me */}
      <section id='contact' className=' snap-center'>
        <ContactMe />
      </section>
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/1946/1946488.png'
              alt=''
              className='h-8 lg:h-12 w-8 lg:w-12 rounded-full filter grayscale hover:grayscale-0 bg-white'
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocial()
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    //Next.js will attempt to re-generate the page:
    // When a request comes in
    // at most once every 30 seconds
    revalidate: 30
  }
}
