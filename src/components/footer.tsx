"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"
import { ContactPopup } from "./ContactPopup"

interface FooterProps {
  showCTA?: boolean;
}

export function Footer({ showCTA = true }: FooterProps) {
  return (
    <footer 
      style={{ backgroundColor: 'var(--color-brand-bg)' }} 
      className="border-t border-white/10 py-16 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        
        {/* Conditional CTA Button */}
        {showCTA && (
          <ContactPopup>
          <motion.button 
            className="hidden md:block px-6 py-2 bg-accent-primary text-white font-semibold rounded-lg hover:bg-accent-primary-dark transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.button>
          </ContactPopup>
        )}

        {/* Social Links */}
        <div className="flex gap-6">
          <motion.a
            href="https://www.linkedin.com/in/roeihoory/"
            className="text-white/60 hover:text-white transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="https://unplugwithroei.substack.com"
            className="text-white/60 hover:text-white transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Substack"
          >
            <Mail size={24} />
          </motion.a>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unplug-white-cropped-4xq9eej3r9eWGpoAFU7SfXVHduYvef.png" 
            alt="Unplug Wellness" 
            className="w-auto max-w-[150px] md:max-w-[180px] h-auto block brightness-100"
          />
        </div>

        {/* Copyright */}
        <p className="text-white/40 text-sm text-center font-light tracking-wide">
          © 2026 Unplug Wellness
        </p>
      </div>
    </footer>
  )
}