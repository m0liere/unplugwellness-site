"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="bg-background px-4 md:px-6 pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Movement, breath, and ergonomics for people who work at a desk.
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed mb-6">
            I spent a decade behind a computer and hunched over my phone, and I burned
            out. My healing journey reconnected me to my body, got me out of my head,
            and brought me back to the present moment. And now I want to help you do
            the same.{" "}
            <a href="#story" className="text-accent-primary hover:underline whitespace-nowrap">
              Read my story
            </a>
          </p>
          <p className="text-sm md:text-base text-white/60 mb-8">
            Yoga and Mat Pilates instructor · Certified Office Ergonomics Evaluator
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/#services"
              className="px-6 py-3 bg-accent-primary text-white font-semibold rounded-lg text-center hover:bg-accent-primary-dark transition-colors"
            >
              Work with me
            </a>
            <a
              href="/challenge"
              className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg text-center hover:border-accent-primary hover:text-accent-primary transition-colors"
            >
              The 21-Day Desk Worker Reset
            </a>
          </div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/about-shoot.jpeg"
            alt="Roei seated cross-legged, smiling"
            className="w-full aspect-[4/5] md:aspect-[3/4] object-cover object-top rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
