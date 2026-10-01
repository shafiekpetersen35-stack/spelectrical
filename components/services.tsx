import { Lightbulb, Home, Building2, Zap, Settings, AlertCircle, FileCheck2, ClipboardCheck } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "New Installations",
      description: "Safe, efficient, SABS-compliant electrical installations for homes and businesses.",
    },
    {
      icon: Settings,
      title: "Rewiring & Maintenance",
      description: "Rewiring, upgrades, fault finding and general electrical maintenance for existing installations.",
    },
    {
      icon: Zap,
      title: "Solar & Backup Systems",
      description: "Solar solutions, inverters, batteries and energy backup systems for domestic and commercial applications.",
    },
    {
      icon: FileCheck2,
      title: "COCs & Certifications",
      description: "Certificates of Compliance (COCs) for electrical work, including inspection and certification support where applicable.",
    },
    {
      icon: ClipboardCheck,
      title: "SSEG Registrations",
      description: "Assistance with Small-Scale Embedded Generation (SSEG) registration applications for eligible solar and embedded-generation systems.",
    },
    {
      icon: Building2,
      title: "Domestic & Commercial",
      description: "Electrical contracting services for residential properties, commercial premises and business installations.",
    },
    {
      icon: Lightbulb,
      title: "Energy Efficient Upgrades",
      description: "LED conversions, energy-conscious electrical upgrades and related efficiency improvements.",
    },
    {
      icon: AlertCircle,
      title: "Emergency Repairs",
      description: "Urgent electrical fault finding, repairs and emergency assistance.",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block text-primary font-bold text-sm tracking-widest mb-3">OUR SERVICES</div>
          <h2 className="text-3xl md:text-4xl font-bold text-black text-pretty">Comprehensive Electrical Solutions</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From SABS-compliant installations and rewiring to COCs, solar and backup power systems, and SSEG
            registration assistance, SP Electrical Services supports domestic and commercial clients across Cape Town.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-white rounded-lg p-8 hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}