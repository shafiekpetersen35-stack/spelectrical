import type { ReactNode } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LegalPage({ title, intro, children }: {
  title: string
  intro: string
  children: ReactNode
}) {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8 md:py-20">
        <Link href="/#home" className="text-sm font-semibold text-green-700 hover:underline">
          ← Back to SP Electrical
        </Link>
        <p className="mt-8 text-sm font-bold uppercase tracking-widest text-green-700">SP Electrical Services (Pty) Ltd</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-4 text-gray-600">{intro}</p>
        <p className="mt-2 text-sm text-gray-500">Last updated: 4 October 2026</p>
        <div className="policy-content mt-10 space-y-8 text-base leading-7 text-gray-700">
          {children}
        </div>
      </article>
      <Footer />
    </main>
  )
}

export function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-950">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  )
}
