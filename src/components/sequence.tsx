"use client"

import { motion } from "framer-motion"

const steps = [
  {
    n: "01",
    title: "Come back to your body.",
    body: "Movement that undoes what sitting, stress, and pressure have quietly been doing. Before you can drop in anywhere, you have to be in your body and hear what it is asking for. That is what the movement is for, and what learning to tie your breath to it teaches you. You start noticing what your body has been telling you all along.",
  },
  {
    n: "02",
    title: "Quiet the noise.",
    body: "Breath and attention work for the noise that keeps running long after the day has ended. The same breath you learned to move with now settles your nervous system, and meditation sharpens where your attention goes. The noise that follows you home and the noise that gets in your way when it matters both get quieter.",
  },
  {
    n: "03",
    title: "Lock in.",
    body: "Presence is what you gain once you have dropped into your body and quieted the mind. Being all the way here for whatever is in front of you, whether that is the people you go home to or the thing you have been preparing for all year.",
  },
]


export function Sequence() {
  return (
    <section id="approach" className="py-24 bg-background px-4 md:px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            The same three steps, every time
          </h2>
          <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto text-balance">
            For one person this is reversing what years at a desk have done to their body.
            For another it is performing on the biggest stage of their life. The sequence
            does not change.
          </p>
        </motion.div>

        <div className="space-y-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              className="flex gap-6 md:gap-10 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="text-accent-primary text-3xl md:text-4xl font-bold tabular-nums shrink-0">
                {step.n}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
