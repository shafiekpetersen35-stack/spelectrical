import { CheckCircle2, Award, ShieldCheck, FileCheck2, ClipboardCheck } from "lucide-react"
import Image from "next/image"

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
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto font-medium">
            Electrical installation work is carried out in accordance with the applicable requirements of the current edition of SANS 10142-1 and the Electrical Installation Regulations under the Occupational Health and Safety Act.
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

        <div className="mt-16">
          <h3 className="text-center text-xl font-bold mb-6">Professional bodies & registration</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-stretch">
            <div className="flex min-h-36 flex-col items-center justify-center gap-3 rounded-xl bg-white p-5 text-center">
              <Image
                src="/credentials/department-of-employment-labour-sa.png"
                alt="Department of Employment and Labour, Republic of South Africa"
                width={226}
                height={102}
                className="h-20 w-full object-contain"
              />
              <p className="text-sm font-semibold text-gray-800">Department of Employment and Labour</p>
            </div>
            <div className="flex min-h-36 flex-col items-center justify-center gap-3 rounded-xl bg-white p-5 text-center">
              <Image
                src="/credentials/eca-sa.png"
                alt="Electrical Contractors’ Association of South Africa (ECA)"
                width={241}
                height={102}
                className="h-20 w-full object-contain"
              />
              <p className="text-sm font-semibold text-gray-800">Electrical Contractors’ Association of South Africa</p>
            </div>
            <div className="flex min-h-36 flex-col items-center justify-center gap-3 rounded-xl bg-white p-5 text-center">
              <Image
                src="/credentials/cidb.png"
                alt="Construction Industry Development Board (cidb)"
                width={247}
                height={102}
                className="h-20 w-full object-contain"
              />
              <p className="text-sm font-semibold text-gray-800">Construction Industry Development Board</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}