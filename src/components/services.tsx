"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Zap, BookOpen, MonitorPlay, PersonStanding } from "lucide-react"
import { ContactPopup } from "./ContactPopup"

const services = [
  {
    icon: BookOpen,
    title: "The 21-Day Reset",
    description: "Reclaim Your Body. Twenty-one days, fifteen minutes a day.\n\nYou will learn what desk work has actually been doing to your body, and how to read what yours is telling you, so you stop guessing which stretch or which chair is supposed to fix it.\n\nSelf-guided. Coming this fall.",
    image: "/evolution-of-deskman.png",
    href: "/challenge",
    buttonText: "Learn more"
  },
  {
    icon: Zap,
    title: "The Workshop",
    description: "A half or full day with your team.\n\nMovement, ergonomics, breath, and the physiology of stress, taught so people understand it and can keep it after I leave.\n\nBuilt for offsites and for teams that sit all day. Virtual or in person.",
    image: "/wellness-workshop-group.jpg",
    contact: true,
    buttonText: "Get in touch"
  },
  {
    icon: PersonStanding,
    title: "Working Together",
    description: "One to one and small group work for people who perform under pressure.\n\nThe body first, then the noise, then the part most people never get to.",
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
    <section id="services" className="py-24 bg-background px-4 md:px-6">
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
                  <p className="text-muted leading-relaxed mb-8 flex-grow whitespace-pre-wrap">
                    {service.description}
                  </p>

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