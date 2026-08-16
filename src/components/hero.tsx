"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/hero-shoot.jpeg")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Reclaim your presence.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-muted leading-relaxed text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I spent a decade in tech and burned out. My healing journey reconnected me
          to my body, got me out of my head, and brought me back to the present
          moment. And now I want to help you do the same.
        </motion.p>
        <motion.p
          className="mt-6 text-sm md:text-base text-white/60 text-balance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Yoga and Mat Pilates instructor · Certified Office Ergonomics Evaluator
        </motion.p>
      </motion.div>
    </section>
  )
}
