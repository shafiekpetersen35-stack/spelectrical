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
  { src: "/gallery-ceiling-1.jpg", alt: "Timber ceiling with pendant lights in a home", title: "Timber Ceiling & Pendant Lighting" },
  { src: "/gallery-ceiling-2.jpg", alt: "Timber ceiling with recessed downlights and a pendant", title: "Ceiling Downlights & Pendant" },
  { src: "/gallery-ceiling-3.jpg", alt: "Decorative chandelier installed in a hallway", title: "Chandelier Installation" },
  { src: "/solar-project-01.jpg", alt: "Hybrid inverter with dual battery backup system", title: "Hybrid Inverter & Battery Backup" },
  { src: "/solar-project-02.jpg", alt: "Section 34 electrical protection enclosure", title: "kWh Meter Installation" },
  { src: "/solar-project-03.jpg", alt: "Hybrid inverter and solar protection boards", title: "Hybrid Inverter & Protection Boards" },
  { src: "/solar-project-04.jpg", alt: "LuxePowertek inverter and battery backup installation", title: "Inverter & Battery Backup" },
  { src: "/solar-project-05.jpg", alt: "Mecer inverter, electrical board and Greenrich battery", title: "Mecer Inverter & Greenrich Battery" },
  { src: "/solar-project-06.jpg", alt: "Rooftop solar panel array on a metal roof", title: "Rooftop Solar Panel Array" },
  { src: "/solar-project-07.jpg", alt: "Solar panel mounting structure on a rooftop", title: "Solar Panel Mounting Structure" },
  { src: "/solar-project-08.jpg", alt: "Close view of a rooftop solar panel array", title: "Rooftop Solar Panels" },
  { src: "/solar-project-09.jpg", alt: "Solar panels installed on a tiled roof", title: "Tiled-Roof Solar Installation" },
  { src: "/solar-project-10.jpg", alt: "Sunsynk inverter and Hubble lithium battery system", title: "Sunsynk Inverter & Hubble Battery" },
  { src: "/solar-project-11.jpg", alt: "Rooftop solar installation at Keating P1", title: "Solar Installation" },
  { src: "/solar-project-12.jpg", alt: "Residential rooftop solar panel array", title: "Residential Solar Panel Array" },
  { src: "/solar-project-13.jpg", alt: "Technician working beside a rooftop solar array", title: "Solar Installation Work" },
  { src: "/gallery/electrical-installation-1.jpg", alt: "Electrician working at an electrical control panel", title: "Electrical Installation Work" },
  { src: "/gallery/electrical-installation-2.jpg", alt: "Electrician installing and connecting electrical equipment", title: "Electrical Panel Installation" },
  { src: "/gallery/electrical-installation-3.jpg", alt: "Electrician working beside a distribution board", title: "Electrical Work in Progress" },
  { src: "/gallery/recessed-ceiling-lighting-1.jpg", alt: "Recessed downlights installed in a finished ceiling", title: "Recessed Ceiling Lighting" },
  { src: "/gallery/recessed-ceiling-lighting-2.jpg", alt: "Downlights illuminating a newly finished room", title: "Downlight Installation" },
  { src: "/gallery/recessed-ceiling-lighting-3.jpg", alt: "Ceiling downlights installed along a hallway", title: "Hallway Ceiling Lighting" },
  { src: "/gallery/inverter-installation-work.jpg", alt: "Electrician wiring an inverter and electrical board", title: "Inverter Installation Work" },
  { src: "/gallery/distribution-board-installation.jpg", alt: "Neatly wired electrical distribution board", title: "Distribution Board Installation" },
  { src: "/gallery/inverter-wiring-work.jpg", alt: "Electrician wiring a dual inverter installation", title: "Inverter Wiring & Commissioning" },
  { src: "/gallery/synapse-inverter-installation.jpg", alt: "Two Synapse inverters installed beside an electrical distribution board", title: "Dual Synapse Inverter Installation" },
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
              <div className="aspect-[3/4] overflow-hidden">
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