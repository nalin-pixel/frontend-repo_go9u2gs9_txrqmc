export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-emerald-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">About RA Al-Huda</h2>
            <p className="mt-6 text-emerald-800 leading-relaxed">
              “Welcome to Raudhatul Athfal (RA) Al-Huda — a joyful place for children to grow, learn, and develop with love and Islamic values. We believe every child is a precious gift from Allah SWT, with great potential to be nurtured. Through gentle, Islamic, and caring education, RA Al-Huda strives to be a second home for children where they joyfully learn about themselves, their surroundings, and their Creator.”
            </p>
            <p className="mt-4 text-emerald-800 leading-relaxed">
              RA Al-Huda was established in 2023 at Jl. Slamet Riyadi Gang Bima No. 63, Probolinggo City, East Java. The institution is dedicated to nurturing character, independence, and love of knowledge from an early age through active and joyful learning guided by experienced teachers full of compassion.
            </p>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-emerald-100">
              <img src="/images/class-activity.jpg" alt="Students at RA Al-Huda during class activity" className="h-full w-full object-cover" />
            </div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 rounded-xl bg-emerald-200/50 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
