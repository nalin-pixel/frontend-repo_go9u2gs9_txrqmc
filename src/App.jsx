import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import VisionMission from './components/VisionMission'
import Activities from './components/Activities'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // Dynamically load AOS for scroll animations
    const loadAOS = async () => {
      const AOS = (await import('aos')).default
      await import('aos/dist/aos.css')
      AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' })
    }
    loadAOS()
  }, [])

  return (
    <div className="font-inter scroll-smooth text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
