"use client"

import Link from "@/components/link"
import { usePathname } from "next/navigation"

export function SidebarLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      prefetch={true}
      aria-current={isActive ? "page" : undefined}
      className={`font-inter cursor-pointer pl-3 text-left text-[14px] leading-6 transition-[font-weight] duration-200 ease-[cubic-bezier(0.19,1,0.22,1)] ${
        isActive
          ? "relative -ml-px border-l border-blue-800/90 font-[550] text-blue-900/90 dark:border-blue-400/80 dark:text-blue-400"
          : "font-normal text-gray-950/60 dark:text-neutral-400"
      }`}
    >
      {children}
    </Link>
  )
}
