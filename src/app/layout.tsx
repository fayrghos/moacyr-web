import { Footer } from "@/components/layout/Footer"
import { Nav } from "@/components/layout/Header"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Moacyr",
    template: "%s - Moacyr",
  },
  description: "A multipurpose, free and open source Discord bot in early development stage.",
  openGraph: {
    locale: "pt-BR",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body className={"antialiased text-shadow-lg text-shadow-black/30 overflow-y-scroll"}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
