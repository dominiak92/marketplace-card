import { motion } from "framer-motion"

export function DrawLine({ className }: { className?: string }) {
  return (
    <motion.div
      className={`h-px bg-red-600 origin-left ${className ?? ""}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    />
  )
}
