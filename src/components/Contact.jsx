import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">Get in touch</h2>
            <p className="mt-3 text-emerald-800/80">We’re happy to answer your questions and welcome new families to our joyful community.</p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-700 mt-1" />
                <p className="text-emerald-900">Jl. Slamet Riyadi Gang Bima No. 63, Probolinggo City, East Java</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-700" />
                <a href="mailto:admin@raalhuda.sch.id" className="text-emerald-900 hover:text-emerald-700">admin@raalhuda.sch.id</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-700" />
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="text-emerald-900 hover:text-emerald-700">WhatsApp: +62 812-3456-7890</a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="h-5 w-5 text-emerald-700" />
                <a href="#" className="text-emerald-900 hover:text-emerald-700">Instagram</a>
              </div>
              <div className="flex items-center gap-3">
                <Facebook className="h-5 w-5 text-emerald-700" />
                <a href="#" className="text-emerald-900 hover:text-emerald-700">Facebook</a>
              </div>
            </div>
            <div className="mt-8">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2">
                Chat via WhatsApp
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm" data-aos="fade-left">
            <iframe
              title="Map"
              className="w-full h-80 rounded-xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Jl.+Slamet+Riyadi+Gang+Bima+No.+63,+Probolinggo&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
