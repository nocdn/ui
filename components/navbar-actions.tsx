"use client"

import dynamic from "next/dynamic"
import { MenuIcon } from "./icons"

const ThemeToggle = dynamic(() => import("./theme-toggle").then((mod) => mod.ThemeToggle), {
  ssr: false,
  loading: () => <div className="size-5" aria-hidden />,
})

const MobileDrawer = dynamic(() => import("./mobile-drawer").then((mod) => mod.MobileDrawer), {
  ssr: false,
  loading: () => (
    <button className="cursor-pointer md:hidden" aria-label="Open menu" disabled>
      <MenuIcon className="size-5" strokeWidth={2} />
    </button>
  ),
})

export function NavbarActions() {
  return (
    <>
      <ThemeToggle />
      <MobileDrawer />
    </>
  )
}
