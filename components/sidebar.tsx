import { sections } from "@/lib/docs-navigation"
import { SidebarLink } from "./sidebar-link"

export function Sidebar() {
  return (
    <div className="h-full overflow-y-auto bg-gray-50/35 px-5 pt-5 dark:bg-neutral-900/60">
      <div className="flex flex-col gap-8">
        {sections.map((section) => (
          <div key={section.title} className="flex flex-col">
            <h3 className="font-jetbrains-mono mb-2 text-[12px] leading-6 font-medium tracking-widest text-gray-500 dark:text-neutral-500">
              {section.title}
            </h3>
            <div className="flex flex-col gap-2 border-l border-gray-950/5 dark:border-white/8">
              {section.links.map((link) => (
                <SidebarLink key={link.href} href={link.href}>
                  {link.name}
                </SidebarLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
