import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function ComponentsPage() {
  return (
    <div className="flex flex-col px-8 py-6 gap-2">
      <p className="text-lg font-medium ml-0.25">Available Components</p>
      <Link
        className="px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50/50 w-fit flex items-center"
        href="/docs/cornered-button"
      >
        Cornered Button
        <ArrowUpRight size={17} className="ml-2 mt-0.25" />
      </Link>
    </div>
  )
}
