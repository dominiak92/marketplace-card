import { useMotionValue, animate, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export function AnimatedNumber({
  value,
  duration = 1.2,
  className,
  format,
}: {
  value: number
  duration?: number
  className?: string
  format?: (n: number) => string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        if (ref.current)
          ref.current.textContent = format
            ? format(Math.round(latest))
            : String(Math.round(latest)).padStart(2, "0")
      },
    })
    return controls.stop
  }, [isInView, value, duration, format, motionValue])

  return (
    <span ref={ref} className={className}>
      00
    </span>
  )
}
