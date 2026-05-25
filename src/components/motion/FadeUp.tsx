import { motion, TargetAndTransition } from "framer-motion"
import { ReactNode } from "react"

type Variant = "up" | "left" | "right" | "scale" | "blur"

const initials: Record<Variant, TargetAndTransition> = {
  up:    { opacity: 0, y: 28 },
  left:  { opacity: 0, x: -32 },
  right: { opacity: 0, x: 32 },
  scale: { opacity: 0, scale: 0.94 },
  blur:  { opacity: 0, filter: "blur(8px)" },
}

const targets: Record<Variant, TargetAndTransition> = {
  up:    { opacity: 1, y: 0 },
  left:  { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
  scale: { opacity: 1, scale: 1 },
  blur:  { opacity: 1, filter: "blur(0px)" },
}

export function FadeUp({
  children,
  delay = 0,
  className,
  variant = "up",
}: {
  children: ReactNode
  delay?: number
  className?: string
  variant?: Variant
}) {
  return (
    <motion.div
      initial={initials[variant]}
      whileInView={targets[variant]}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
