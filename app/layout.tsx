import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    template: "%s — nocdn/ui",
    default: "nocdn/ui",
  },
  description: "Uncommon, but simple shadcn components.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div data-vaul-drawer-wrapper="" className="bg-background min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
