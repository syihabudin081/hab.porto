import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ProjectsSection from '@/components/ProjectSec'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col bg-[#121212]">
      <Navbar/>
      <div className="flex flex-col">
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
          </div>
        </section>
        
        <section className="min-h-screen flex items-center" id="about">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <About />
          </div>
        </section>

        <section className="min-h-screen flex items-center" id="projects">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectsSection/>
          </div>
        </section>

        <section className="min-h-screen flex items-center" id="contact">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Contact/>
          </div>
        </section>

        <section className="min-h-[20vh] flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Footer/>
          </div>
        </section>
      </div>
    </main>
  )
}
