import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90 pointer-events-none" />

      <div className="relative z-10 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm">
            Welcome to
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-emerald-900">
            Raudhatul Athfal (RA) Al-Huda
          </h1>
          <p className="mt-4 text-emerald-800/90 text-lg">
            A joyful place for children to grow, learn, and develop with love and Islamic values.
          </p>
          <div className="mt-8">
            <a href="#about" className="inline-block rounded-lg bg-emerald-600 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
