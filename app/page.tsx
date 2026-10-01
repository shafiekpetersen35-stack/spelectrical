import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white flex items-center justify-center">
      <section className="w-full max-w-3xl text-center">
        <div className="relative mx-auto mb-10 aspect-[3.65/1] w-[min(90vw,540px)] overflow-hidden rounded">
          <Image
            src="/sp-electrical-logo-transparent.png"
            alt="SP Electrical Services — Trusted Expertise"
            fill
            priority
            sizes="(max-width: 640px) 90vw, 540px"
            className="object-cover"
          />
        </div>

        <p className="mb-4 inline-flex rounded-full border border-primary/50 px-4 py-2 text-sm font-semibold tracking-widest text-primary">
          WEBSITE IN PROGRESS
        </p>

        <h1 className="mb-5 text-3xl font-bold sm:text-5xl">
          We’re updating our website
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
          SP Electrical Services is working on an updated website. In the meantime, Shafiek Petersen is available
          for domestic and commercial electrical installations, rewiring, maintenance, COCs, solar and backup
          systems, and SSEG registration assistance.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+27766729270"
            className="w-full rounded-md bg-primary px-6 py-3 font-bold text-black transition-colors hover:bg-green-700 sm:w-auto"
          >
            Call +27 76 672 9270
          </a>
          <a
            href="mailto:shafiek@spelectrical.co.za"
            className="w-full rounded-md border border-gray-500 px-6 py-3 font-semibold text-white transition-colors hover:border-primary hover:text-primary sm:w-auto"
          >
            Email Shafiek
          </a>
        </div>

        <p className="mt-12 text-sm text-gray-500">
          SP Electrical Services (Pty) Ltd · DOL Licensed · ECA (SA) Member · Registered Electrical Contractor
        </p>
      </section>
    </main>
  )
}
