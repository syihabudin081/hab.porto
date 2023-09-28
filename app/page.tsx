import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-10 py-4">
        <Hero />
      </div>

    </main>
  )
}
