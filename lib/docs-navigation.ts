export const sections = [
  {
    title: "GETTING STARTED",
    links: [
      { name: "Introduction", href: "/introduction" },
      { name: "Installation", href: "/installation" },
      { name: "Compatibility", href: "/compatibility" },
    ],
  },
  {
    title: "COMPONENTS",
    links: [
      { name: "Cornered Button", href: "/components/cornered-button" },
      { name: "Animated Ticker", href: "/components/ticker" },
      { name: "Animated Button", href: "/components/animated-button" },
      { name: "Corner Banner", href: "/components/corner-banner" },
      { name: "Reasoning Traces", href: "/components/reasoning-traces" },
    ],
  },
  {
    title: "EXPERIMENTS",
    links: [{ name: "Expanding Menu", href: "/experiments/expanding-menu" }],
  },
  {
    title: "RECREATIONS",
    links: [
      { name: "iPadOS Controls", href: "/recreations/traffic-lights" },
      { name: "TikTok Loader", href: "/recreations/tiktok-loader" },
    ],
  },
  {
    title: "CONTACT",
    links: [
      { name: "Get in touch", href: "/get-in-touch" },
      { name: "Contributing", href: "/contributing" },
    ],
  },
] as const

export type DocsSection = (typeof sections)[number]
export type DocsLink = DocsSection["links"][number]
