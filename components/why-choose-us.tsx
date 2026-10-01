import { CheckCircle2, Award, ShieldCheck, FileCheck2, ClipboardCheck } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "DOL Licensed",
      description: "Electrical contracting services backed by the DOL Licensed credential stated on our company profile.",
      icon: Award,
    },
    {
      title: "ECA (SA) Member",
      description: "SP Electrical Services identifies as an ECA (SA) Member.",
      icon: ShieldCheck,
    },
    {
      title: "Registered Electrical Contractor",
      description: "Professional electrical contracting for domestic and commercial installations.",
      icon: CheckCircle2,
    },
    {
      title: "COCs & Certifications",
      description: "Certificates of Compliance and certification support for applicable electrical work.",
      icon: FileCheck2,
    },
    {
      title: "SSEG Registration Assistance",
      description: "Assistance with SSEG registrations and applications for solar and embedded-generation systems.",
      icon: ClipboardCheck,
    },
    {
      title: "Safety & Compliance",
      description: "A safety-first approach with attention to applicable electrical standards and compliance requirements.",
      icon: ShieldCheck,
    },
  ]

  return (
    <section id="why-us" className="py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block text-primary font-bold text-sm tracking-widest mb-3">CREDENTIALS & WHY US</div>
          <h2 className="text-3xl md:text-4xl font-bold text-pretty">Professional. Compliant. Trusted.</h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            SP Electrical Services provides domestic and commercial electrical services, with credentials and
            registration support highlighted below.
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