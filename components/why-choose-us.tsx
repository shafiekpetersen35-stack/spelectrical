import { CheckCircle2, Award, ShieldCheck, FileCheck2, ClipboardCheck } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "DOL Licensed",
      description: "Department of Labour licensing is one of the professional credentials highlighted by SP Electrical Services.",
      icon: Award,
    },
    {
      title: "Registered Electrical Contractor",
      description: "Registered electrical contracting for domestic and commercial installations.",
      icon: CheckCircle2,
    },
    {
      title: "ECA (SA) Member",
      description: "SP Electrical Services is an Electrical Contractors' Association of South Africa (ECA (SA)) member.",
      icon: ShieldCheck,
    },
    {
      title: "SSEG Registrations",
      description: "Assistance with Small-Scale Embedded Generation (SSEG) registration applications for eligible solar and embedded-generation systems.",
      icon: ClipboardCheck,
    },
    {
      title: "COCs & Certifications",
      description: "Certificates of Compliance (COCs), with inspection and certification support for applicable electrical work.",
      icon: FileCheck2,
    },
    {
      title: "Safety & SABS Compliance",
      description: "Safe, efficient installations with attention to applicable SABS standards and electrical requirements.",
      icon: ShieldCheck,
    },
  ]

  return (
    <section id="why-us" className="py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block text-primary font-bold text-sm tracking-widest mb-3">LICENSING, MEMBERSHIP & REGISTRATIONS</div>
          <h2 className="text-3xl md:text-4xl font-bold text-pretty">Professional credentials. Compliant electrical work.</h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            SP Electrical Services is DOL Licensed, an ECA (SA) Member and a Registered Electrical Contractor.
            We also assist clients with COCs and SSEG registration applications for eligible systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="flex gap-4">
                <Icon className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                  <p className="text-gray-400">{reason.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}