import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Cloudflare Pages deployment trigger

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Website in Progress | SP Electrical Services (Pty) Ltd",
  description:
    "SP Electrical Services is updating its website. Contact Shafiek Petersen for domestic and commercial electrical services, COCs, solar and backup systems, and SSEG registration assistance.",
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