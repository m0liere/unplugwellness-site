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

export function Story() {
  return (
    <section className="py-24 bg-background px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative w-full rounded-lg overflow-hidden border border-border order-2 md:order-1">
            <img 
              src="/about-shoot.jpeg"
              alt="The Story"
              className="w-full h-auto block" 
            />
          </div>
          <div className="order-1 md:order-2" id="story">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Story</h2>
            <p className="text-muted text-lg leading-relaxed mb-4">
              {"I'm Roei, an engineer who became a yoga and Pilates instructor, and a Certified Office Ergonomics Evaluator."}
            </p>
            <p className="text-muted text-lg leading-relaxed mb-4">
              {"I've worked at a Big 4 consulting firm, early stage startups, and through the pre to post-IPO journey of a large fintech company. I know what it feels like to be swept up in the waves of pressure, deadlines, and intensity — living in your mind, completely disconnected from your body."}
            </p>
            <p className="text-muted text-lg leading-relaxed mb-4">
              {"That disconnection has a cost. It shows up as tension, pain, poor posture, burnout. It sneaks up on you until your body is the one forcing you to stop."}
            </p>
            <p className="text-muted text-lg leading-relaxed mb-4">
              {"It isn't only desk workers. Anyone moving at that pace, through rehearsals, training blocks, or weeks that never let up, ends up in the same place: performing on a body they stopped listening to a long time ago."}
            </p>
            <p className="text-muted text-lg leading-relaxed">
              {"I built Unplug With Roei because nobody in these environments is talking about this. I'm here to change that — to educate the human behind the computer, and help you bring the most present, healthy, and capable version of yourself to your work and your life."}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
