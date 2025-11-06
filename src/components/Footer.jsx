export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {year} RA Al-Huda Probolinggo. All rights reserved.</p>
          <p className="text-sm">Developed with love by Flames.Blue</p>
        </div>
      </div>
    </footer>
  )
}
