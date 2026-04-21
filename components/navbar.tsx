import Link from "@/components/link"
import { ArrowUpRightIcon, SearchIcon } from "./icons"
import { NavbarActions } from "./navbar-actions"

export function Navbar() {
  return (
    <div className="font-inter sticky top-0 z-10 flex h-14 items-center gap-6 border-b border-gray-950/5 dark:border-white/8 bg-gray-50/35 dark:bg-neutral-900/60 backdrop-blur-md px-5 text-sm font-[430] antialiased">
      <Link href="/introduction" prefetch={true} className="group mr-auto cursor-pointer">
        nocdn
        <span className="mx-0.5 transition-all duration-200 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:mx-1.5">
          /
        </span>
        ui
      </Link>
      <div className="hidden cursor-pointer items-center gap-3 rounded-full border border-gray-950/5 dark:border-white/8 bg-gray-950/2 dark:bg-white/5 py-1.25 pr-2.5 pl-2 md:flex">
        <SearchIcon className="size-[14px]" strokeWidth={2} />
        <p className="text-xs">⌘ + K</p>
      </div>
      <Link href="/installation" prefetch={true} className="hidden cursor-pointer md:block">
        Docs
      </Link>
      <Link
        href="/components/cornered-button"
        prefetch={true}
        className="hidden cursor-pointer md:block"
      >
        Components
      </Link>
      <a
        href="https://github.com/nocdn/ui-ssr"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden cursor-pointer items-center gap-1 md:flex"
      >
        Source <ArrowUpRightIcon className="size-4 translate-y-[1px]" strokeWidth={2.15} />
      </a>
      <NavbarActions />
    </div>
  )
}
