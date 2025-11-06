export default function VisionMission() {
  const items = [
    {
      title: 'Vision',
      content:
        'To become an early childhood education institution that nurtures religious, intelligent, skilled, and noble-minded generations.',
    },
    {
      title: 'Mission',
      content: [
        'Provide Islamic-based education and care for early childhood.',
        'Develop character, personality, and independence from an early age.',
        "Implement active, creative, and fun learning based on children’s development stages.",
        'Prepare children to continue to higher education with strong character and abilities.',
      ],
    },
    {
      title: 'Goal',
      content:
        'To shape a generation of faithful, moral, quality, and independent children according to their age development.',
    },
  ]

  return (
    <section id="vision" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">Vision, Mission & Goals</h2>
          <p className="mt-3 text-emerald-800/80">Our guidance for nurturing a joyful, faithful, and independent generation.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3" data-aos="fade-up" data-aos-delay="100">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-emerald-900">{item.title}</h3>
              {Array.isArray(item.content) ? (
                <ul className="mt-4 list-disc pl-5 space-y-2 text-emerald-800">
                  {item.content.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-emerald-800">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
