"use client"
import { motion } from "motion/react"
import { useState } from "react"

export function TikTokLoader() {
  const redShade = "#FF2C55"
  const blueShade = "#3DF1FF"

  const [moved, setMoved] = useState(false)

  return (
    <>
      <div className="flex">
        <motion.div
          className="size-6 rounded-full"
          style={{
            backgroundColor: redShade,
          }}
          animate={{ x: moved ? 24 : 0, scale: moved ? [1, 0.8, 1] : 1 }}
          transition={{
            x: { duration: 0.4, ease: "linear" },
            scale: { duration: 0.4, ease: "linear" },
          }}
        />
        <motion.div
          className="size-6 rounded-full"
          style={{
            backgroundColor: blueShade,
          }}
          animate={{ x: moved ? -24 : 0 }}
          transition={{
            x: { duration: 0.4, ease: "linear" },
            scale: { duration: 0.4, ease: "linear" },
          }}
        />
      </div>
      <button
        className="border-shadow rounded-full px-4 py-1.5 transition-transform active:scale-[0.97]"
        onMouseDown={() => setMoved(!moved)}
        onMouseUp={() => setMoved(!moved)}
      >
        Move
      </button>
    </>
  )
}
