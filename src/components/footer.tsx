"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"
import { ContactPopup } from "./ContactPopup"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        {/* CTA Button */}
        <ContactPopup>
          <motion.button
            className="px-8 py-3 bg-accent-primary font-semibold rounded-lg hover:bg-accent-primary-dark transition-colors text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.button>
        </ContactPopup>

        {/* Social Links */}
        <div className="flex gap-6">
          <motion.a
            href="https://www.linkedin.com/in/roeihoory/"
            className="text-muted hover:text-accent-primary transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="https://unplugwithroei.substack.com"
            className="text-muted hover:text-accent-primary transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Email"
          >
            <Mail size={24} />
          </motion.a>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unplug-white-cropped-4xq9eej3r9eWGpoAFU7SfXVHduYvef.png" 
            alt="Unplug Wellness" 
            className="w-auto max-w-[150px] md:max-w-[200px] h-auto block"
          />
        </div>

        {/* Copyright */}
        <p className="text-muted text-sm text-center">© 2026 Unplug Wellness</p>
      </div>
    </footer>
  )
}
