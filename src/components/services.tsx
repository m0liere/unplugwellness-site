"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Zap, BookOpen, MonitorPlay, PersonStanding } from "lucide-react"
import { ContactPopup } from "./ContactPopup"

const services = [
  {
    icon: BookOpen,
    title: "The 21-Day Desk Worker Reset",
    description: <>
      <p><strong className="text-white">21 days. 15 minutes a day.</strong></p>
      <p>Learn what desk work does to your body, and how to read what yours is telling you. <strong className="text-white">Stop guessing which stretch or chair will fix it.</strong></p>
      <p>Self-guided. Coming soon.</p>
    </>,
    image: "/evolution-of-deskman.png",
    href: "/challenge",
    buttonText: "Learn more"
  },
  {
    icon: Zap,
    title: "The Workshop",
    description: <>
      <p><strong className="text-white">90 minutes for offices, schools, and organizations.</strong></p>
      <p>Why the neck, shoulders, and lower back carry the load. How to set up a workstation. How breath settles a stressed nervous system. Short teaching, short practice, no mats needed.</p>
      <p><strong className="text-white">Want a full class as well?</strong> I can bring mats and teach a yoga session built on the same material.</p>
    </>,
    image: "/wellness-workshop-group.jpg",
    contact: true,
    buttonText: "Get in touch"
  },
  {
    icon: PersonStanding,
    title: "Working Together",
    description: <>
      <p><strong className="text-white">One to one and small groups,</strong> for people who perform under pressure.</p>
      <p>The body first. Then the noise. Then the part most people never get to.</p>
    </>,
    image: "/yoga-class-wellness.jpg",
    contact: true,
    buttonText: "Get in touch"
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
    <section id="services" className="py-24 bg-surface px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Work with me</h2>
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
                  <div className="text-muted leading-relaxed mb-8 flex-grow space-y-3">
                    {service.description}
                  </div>

                  {service.contact ? (
                    <ContactPopup>
                      <button className="w-full px-6 py-3 bg-accent-primary text-white font-semibold rounded-lg hover:bg-accent-primary-dark transition-colors">
                        {service.buttonText}
                      </button>
                    </ContactPopup>
                  ) : (
                    <a
                      href={service.href}
                      className="block w-full text-center px-6 py-3 bg-accent-primary text-white font-semibold rounded-lg hover:bg-accent-primary-dark transition-colors"
                    >
                      {service.buttonText}
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div> 
        {/* --- GRID ENDS --- */}

      </div>
    </section>
  )
}