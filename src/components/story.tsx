"use client"

import { motion } from "framer-motion"

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const beats = [
  {
    label: "Who I am",
    body: <>{"I'm Roei. "}<strong className="text-white">I spent a decade in tech and burned out.</strong>{" That started my healing journey, which led me to become a yoga and Mat Pilates instructor and a Certified Office Ergonomics Evaluator."}</>,
  },
  {
    label: "The cost",
    body: <>{"Big 4 consulting. Early-stage startups. A large fintech, from pre- to post-IPO. I know the pressure, the deadlines, and the intensity. I lived in my mind and lost touch with my body. For me, it showed up as tension, pain, and poor posture. It built slowly. "}<strong className="text-white">Then my body made me stop.</strong>{" "}<strong className="text-white">Modern work keeps us in our minds and out of our bodies.</strong></>,
  },
  {
    label: "Not only desk workers",
    body: <>{"Athletes in a training block. Actors and musicians in rehearsal. Executives and leaders in weeks that never let up. Anyone at that pace ends up "}<strong className="text-white">performing on a body they stopped listening to.</strong></>,
  },
  {
    label: "Why Unplug",
    body: <>{"In these environments, the body is rarely the focus. I want to change that. "}<strong className="text-white">I teach the humans behind the screens to listen to their bodies again,</strong>{" with movement, breath, and ergonomics, so they can bring present, healthy, and capable selves to their work and their lives."}</>,
  },
]

export function Story() {
  return (
    <section className="py-24 bg-background px-4 md:px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div id="story">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Story</h2>
            <div className="space-y-8">
              {beats.map((beat) => (
                <div key={beat.label}>
                  <h3 className="text-accent-primary font-semibold uppercase tracking-wider text-sm mb-2">{beat.label}</h3>
                  <p className="text-muted text-lg leading-relaxed">{beat.body}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
