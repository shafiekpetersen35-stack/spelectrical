export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block text-primary font-bold text-sm tracking-widest">ABOUT US</div>

          <h2 className="text-3xl md:text-4xl font-bold text-black text-pretty">
            Your Trusted Electrical Partner in Cape Town
          </h2>

          <p className="text-gray-600 leading-relaxed">
            SP Electrical Services (Pty) Ltd provides professional electrical contracting services for domestic
            and commercial clients, covering new installations, rewiring, maintenance, COCs, solar and backup power systems.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We also assist clients with SSEG registrations and applications for eligible small-scale embedded generation
            systems. Our approach is built around safe workmanship, applicable standards, compliance and dependable service.
          </p>

          <ul className="space-y-3">
            {[
              "DOL Licensed",
              "ECA (SA) Member",
              "Registered Electrical Contractor",
              "COCs & Certificates of Compliance",
              "SSEG Registration Assistance",
              "Domestic & Commercial Services",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="text-primary font-bold">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
