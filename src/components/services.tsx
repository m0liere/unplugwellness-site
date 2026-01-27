"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Zap, BookOpen, MonitorPlay, PersonStanding } from "lucide-react"
import { ContactPopup } from "./ContactPopup"

const services = [
  {
    icon: PersonStanding,
    title: "Posture Coaching",
    description: "Our workstations make our bodies adapt to the desk and computer and give us poor posture. My posture coaching sessions help reverse that. Learn exactly how your workstation is impacting your body and the movements and stretches to fix the damage.",
    image: "/evolution-of-deskman.png",
    href: "/yoga"
  },
  {
    icon: Zap,
    title: "Office Yoga",
    description: "Mindful yoga sessions designed for desk workers to improve their posture, tailored for your team. Help your employees prevent pain, discomfort, and injury and reconnect to their body and breath. No experience required. Virtual or in-person.",
    image: "/yoga-class-wellness.jpg",
    href: "/yoga"
  },
  {
    icon: BookOpen,
    title: "Wellness Workshop",
    description: "A 2-day workshop that teaches your team tools to build sustainable work habits for optimal physical and mental health.\nDay 1: Musculoskeletal Health - Eronomics education and yoga for desk workers.\nDay 2: Mental Health - Mindfulness breathwork and meditation for stress reduction and burnout prevention.\nVirtual or in-person.",
    image: "/wellness-workshop-group.jpg",
    href: "/workshop"
  },
  {
    icon: MonitorPlay,
    title: "Ergonomics Education",
    description: "Fix the setup before it breaks the body. Certified ergonomics assessments to adjust workstations for preventing desk pain before it becomes chronic injury. Individual evaluations or team education sessions. Virtual or in-person.",
    image: "/ergonomic-workspace-setup.jpg",
    href: "#services",
    buttonText: "Coming Soon"
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
    <section id="services" className="py-24 bg-background px-4 md:px-6">
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

        {/* --- GRID STARTS --- */}
        <motion.div
          ref={ref}
          className="grid md:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                className="group rounded-lg overflow-hidden border border-border hover:border-accent-primary transition-colors flex flex-col h-full"
                variants={itemVariants}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3 text-accent-primary">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-muted leading-relaxed mb-8 flex-grow whitespace-pre-wrap">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div> 
        {/* --- GRID ENDS --- */}

        {/* --- CENTERED BUTTON OUTSIDE THE GRID --- */}
        <div className="flex justify-center w-full">
          <ContactPopup>
            <motion.button
              className="px-10 py-4 text-lg bg-accent-primary text-white font-bold rounded-lg hover:bg-accent-primary-dark transition-colors shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Explore Services
            </motion.button>
          </ContactPopup>
        </div>
      </div>
    </section>
  )
}