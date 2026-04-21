import localFont from "next/font/local"

export const codeMono = localFont({
  src: [
    { path: "../app/fonts/IoskeleyMono-Regular.woff2", weight: "400" },
    { path: "../app/fonts/IoskeleyMono-Medium.woff2", weight: "500" },
  ],
  variable: "--font-ioskeley-mono",
})
