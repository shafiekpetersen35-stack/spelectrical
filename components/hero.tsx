import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="bg-black text-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full">
              <span className="text-xs uppercase tracking-widest text-gray-100">TRUSTED EXPERTISE</span>
              <span className="text-primary font-semibold text-sm">Registered Electrical Contractor</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pretty leading-tight">
              Powering Your Home & Business
            </h1>

            <p className="text-lg text-gray-300 text-pretty">
              Professional electrical services covering new installations, rewiring, maintenance, COCs,
              solar and backup power systems, and SSEG registrations across Cape Town.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-green-700 text-black font-bold text-lg py-6 px-8">
                Get Free Quote
              </Button>
              <Button
                variant="outline"
                className="border-primary hover:bg-primary/10 font-bold text-lg py-6 px-8 bg-transparent text-white"
              >
                Call: 076 672 9270
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700">
              <div>
                <div className="text-2xl font-bold text-primary">15+</div>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">COCs</div>
                <p className="text-sm text-gray-400">Certificates of Compliance</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">SSEG</div>
                <p className="text-sm text-gray-400">Registration Assistance</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl md:mx-0">
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-primary/30 bg-black shadow-[0_25px_65px_rgba(0,0,0,0.55)]">
              <Image
                src="/hero-electrician.jpg"
                alt="SP Electrical Services electrician wiring inverter and distribution board equipment"
                width={575}
                height={1280}
                priority
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 540px, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}