import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all ${
    scrolled ? 'backdrop-blur-md bg-white/70 shadow-md' : 'bg-transparent'
  }`

  const linkClasses = 'text-sm font-medium text-emerald-900 hover:text-emerald-700 transition-colors'

  return (
    <header className={navClasses}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-emerald-600 grid place-items-center text-white font-bold">RA</div>
            <div className="leading-tight">
              <p className="font-semibold text-emerald-900">RA Al-Huda</p>
              <p className="text-xs text-emerald-700">Probolinggo</p>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className={linkClasses}>About</a>
            <a href="#vision" className={linkClasses}>Vision & Mission</a>
            <a href="#activities" className={linkClasses}>Activities</a>
            <a href="#contact" className={linkClasses}>Contact</a>
          </div>
          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg text-emerald-900 hover:bg-emerald-50">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-emerald-100 bg-white/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3">
            <a href="#about" className={linkClasses} onClick={() => setOpen(false)}>About</a>
            <a href="#vision" className={linkClasses} onClick={() => setOpen(false)}>Vision & Mission</a>
            <a href="#activities" className={linkClasses} onClick={() => setOpen(false)}>Activities</a>
            <a href="#contact" className={linkClasses} onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
