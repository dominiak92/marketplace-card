import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

export function ScrollIndicator() {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (y) => {
    setHidden(y > 80)
  })

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.4, delay: hidden ? 0 : 1.6 }}
    >
      <span className="text-[9px] uppercase tracking-[0.25em] text-white/30 font-semibold">
        scroll
      </span>
      <motion.div
        className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent rounded-full"
        animate={{ scaleY: [1, 0.4, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  )
}
