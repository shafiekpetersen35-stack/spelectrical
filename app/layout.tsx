import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Cloudflare Pages deployment trigger

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SP Electrical Services (Pty) Ltd | Registered Electrical Contractor Cape Town",
  description:
    "SP Electrical Services (Pty) Ltd provides domestic and commercial electrical contracting, new installations, rewiring, maintenance, COCs, solar and backup power, and SSEG registration assistance in Cape Town. DOL Licensed and ECA (SA) Member.",
  keywords: [
    "SP Electrical Services",
    "electrical contractor Cape Town",
    "registered electrical contractor",
    "DOL Licensed electrician",
    "ECA SA Member",
    "COC electrical certificate",
    "SSEG registration Cape Town",
    "solar backup power Cape Town",
    "rewiring and maintenance",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo-favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/logo-favicon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/logo-favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
