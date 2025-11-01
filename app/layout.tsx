import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Providers } from "@/components/providers"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sebastian Chávary - Software Engineer",
  description:
    "Software Engineer with expertise in AI, AWS and Web Development. Building scalable systems and solving complex problems.",
  keywords: ["Software Engineer", "Web Development", "AWS", "AI", "TypeScript", "React", "Next.js"],
  authors: [{ name: "Sebastian Chávary" }],
  openGraph: {
    title: "Sebastian Chávary - Software Engineer",
    description: "Software Engineer with expertise in AI, AWS and Web Development.",
    url: "https://sebastian.dev",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
