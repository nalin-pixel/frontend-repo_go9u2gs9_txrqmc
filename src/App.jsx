import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import VisionMission from './components/VisionMission'
import Activities from './components/Activities'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
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
