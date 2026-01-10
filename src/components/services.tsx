"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Zap, BookOpen, MonitorPlay } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Yoga Sessions",
    description: "Give Your Team 30-60 Minutes to Reset Their Bodies and Minds. Mindful yoga sessions designed for desk workers: reduce pain, sharpen focus, and prevent burnout. No experience required.",
    image: "/yoga-class-wellness.jpg",
  },
  {
    icon: BookOpen,
    title: "Wellness Workshop",
    description: "Stop Losing Productivity to Desk Pain and Burnout. A 2-day workshop that teaches your team tools to prevent chronic pain, sharpen focus, and build sustainable work habits—before small problems become serious injuries.",
    image: "/wellness-workshop-group.jpg",
  },
  {
    icon: MonitorPlay,
    title: "Ergonomics",
    description: "Fix the Setup Before It Breaks the Body. Certified ergonomics assessments that prevent desk pain before it becomes chronic injury. Individual workstation evaluations or team education sessions—virtual or in-person.",
    image: "/ergonomic-workspace-setup.jpg",
  },
]

export function Services() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-24 bg-background px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Services</h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                className="group rounded-lg overflow-hidden border border-border hover:border-accent-primary transition-colors"
                variants={itemVariants}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3 text-accent-primary">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-muted leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
