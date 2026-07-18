import { motion } from 'framer-motion'

export const EASE = [0.21, 0.47, 0.32, 0.98]

const directionMap = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { y: 0, x: 28 },
  right: { y: 0, x: -28 },
  none: { y: 0, x: 0 },
}

export function FadeIn({ children, delay = 0, direction = 'up', once = true, className }) {
  const { y, x } = directionMap[direction]

  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  },
}
