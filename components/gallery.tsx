import Image from "next/image"

const projects = [
  { src: "/hero.jpg", alt: "Rooftop solar installation", title: "Rooftop Solar Installation" },
  { src: "/solar.jpg", alt: "Roof-mounted solar panels", title: "Solar Panel Installation" },
  { src: "/solarinstall.jpg", alt: "Solar inverter, battery and electrical distribution boards", title: "Solar & Backup Power" },
  { src: "/IMG-20251110-WA0019.jpg", alt: "Battery backup equipment beside an electrical installation", title: "Battery Backup Installation" },
  { src: "/IMG-20251110-WA0033.jpg", alt: "Inverter and distribution boards mounted on a wall", title: "Inverter & Distribution Boards" },
  { src: "/IMG-20251110-WA0016.jpg", alt: "Distribution board wiring before work", title: "Distribution Board - Before" },
  { src: "/IMG-20251110-WA0011.jpg", alt: "Before, after and completed distribution board work", title: "Distribution Board - Before & After" },
  { src: "/DBrewire.jpg", alt: "Rewired electrical distribution board", title: "Distribution Board Rewiring" },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block text-primary font-bold text-sm tracking-widest mb-3">OUR WORK</div>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Our Work in Pictures</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Explore our electrical, solar and backup power installations.</p>
          <p className="mt-2 text-sm font-semibold text-gray-800">Real installations. Real electrical work. Professional results.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <a key={project.src} href={project.src} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <Image src={project.src} alt={project.alt} width={900} height={675} className="h-full w-full object-contain p-2 group-hover:scale-[1.02] transition-transform" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
              </div>
              <div className="p-4"><h3 className="font-bold text-black">{project.title}</h3></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
