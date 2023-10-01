import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ProjectsSection from '@/components/ProjectSec'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-10 py-4">
        <Hero />
        <About />
        <ProjectsSection/>
        <Contact/>
        <Footer/>
      </div>

    </main>
  )
}
