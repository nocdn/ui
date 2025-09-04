"use client"

import { Terminal, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function ShadcnCommand({ link }: { link: string }) {
  const [isCopied, setIsCopied] = useState(false)

  const commands = {
    bun: "bunx --bun shadcn@latest add",
    pnpm: "pnpm dlx shadcn@latest add",
    npm: "npx shadcn@latest add",
    yarn: "yarn shadcn@latest add",
  }

  const [packageManager, setPackageManager] =
    useState<keyof typeof commands>("bun")

  const currentCommand = `${commands[packageManager]} ${link}`

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (error) {
      // swallow copy error silently
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 flex flex-col py-3 gap-3 font-mono text-sm">
      <div className="flex items-center gap-2.5 w-full border-b border-gray-200 pb-2 px-4">
        <Terminal size={17} className="mr-2.5" />
        {(Object.keys(commands) as (keyof typeof commands)[]).map((pm) => (
          <button
            key={pm}
            type="button"
            onClick={() => setPackageManager(pm)}
            aria-pressed={pm === packageManager}
            className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
              pm === packageManager
                ? "bg-gray-900 text-white"
                : "text-gray-700 hover:text-black"
            }`}
          >
            {pm}
          </button>
        ))}
        <button
          className={`cursor-pointer ml-auto ${
            isCopied ? "text-green-600" : "text-gray-400"
          }`}
          type="button"
          aria-label={isCopied ? "Copied" : "Copy command"}
          onClick={() => handleCopy(currentCommand)}
        >
          {isCopied ? <Check size={15} /> : <Copy size={15} />}
        </button>
      </div>
      <div className="px-4">
        <span className="text-gray-400 select-none mr-2">$</span>
        <span className="break-all">{currentCommand}</span>
      </div>
    </div>
  )
}
