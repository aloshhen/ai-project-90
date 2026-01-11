import { motion } from 'framer-motion'

export const BackgroundBeams = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-px w-full bg-gradient-to-r from-transparent via-bar-accent to-transparent"
        style={{ top: `${20 * i}%` }}
        animate={{
          x: ['-100%', '100%'],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 3 + i,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    ))}
  </div>
)