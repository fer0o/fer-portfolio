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
    <div className='bg-black text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-blue-900/80'>
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
              src='https://scontent.fgdl9-1.fna.fbcdn.net/v/t31.18172-8/28515285_10215158260894176_3227784359906811773_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=S5-DEyZr0UgAX-Wi7Pg&_nc_ht=scontent.fgdl9-1.fna&oh=00_AT8iMfUhrJRdM3zB_jHQW2ASGGz-gAHCNYyUgIk66hNPfg&oe=6378F0EA'
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
