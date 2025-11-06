export default function Activities() {
  const photos = [
    { src: '/images/firefighter.jpg', caption: 'Firefighter visit' },
    { src: '/images/prayer.jpg', caption: 'Prayer and religious learning' },
    { src: '/images/eating-together.jpg', caption: 'Eating together' },
    { src: '/images/outdoor.jpg', caption: 'Outdoor class moments' },
  ]

  return (
    <section id="activities" className="py-20 bg-emerald-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">Activities</h2>
          <p className="mt-3 text-emerald-800/80">Joyful learning through real-life experiences and caring guidance.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-aos="fade-up" data-aos-delay="100">
          {photos.map((p) => (
            <figure key={p.src} className="group overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg transition-all border border-emerald-100">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.src} alt={p.caption} className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
              </div>
              <figcaption className="p-4 text-center text-emerald-900 font-medium">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
