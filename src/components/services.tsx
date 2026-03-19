"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Zap, BookOpen, MonitorPlay, PersonStanding } from "lucide-react"
import { ContactPopup } from "./ContactPopup"

const services = [
  {
    icon: Zap,
    title: "Office Yoga",
    description: "Yoga sessions designed specifically for desk workers focused on posture, movement, and reconnecting to the body.\n\nTailored for your team, no experience required. Book a one-off session to give your team an immediate reset, or lock in a monthly cadence to build lasting habits.\n\nVirtual or in-person.",
    image: "/yoga-class-wellness.jpg",
    href: "/yoga"
  },
  {
    icon: BookOpen,
    title: "Wellness Workshop",
    description: "A 2-day workshop that gives your team the tools to build sustainable work habits for long-term physical and mental health.\n\nDay 1: Musculoskeletal Health — posture and ergonomics education and yoga for desk workers.\n\nDay 2: Mental Health — breathwork and meditation for stress reduction and burnout prevention.\n\nVirtual or in-person.",
    image: "/wellness-workshop-group.jpg",
    href: "/workshop"
  },
  {
    icon: PersonStanding,
    title: "12-Week Workforce Transformation",
    description: "A structured 12-session program that builds a healthier, more resilient workforce from the ground up.\n\nEach session combines movement with education covering posture, ergonomics, stress physiology, and breathwork so employees don't just feel better in the moment, they understand why and know how to sustain it.\n\nBy the end, your team has reduced musculoskeletal discomfort, ergonomics-informed workstations, and a toolkit for managing stress and preventing burnout.\n\nVirtual or in-person.",
    image: "/evolution-of-deskman.png",
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
          className="grid md:grid-cols-3 gap-8 mb-16"
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