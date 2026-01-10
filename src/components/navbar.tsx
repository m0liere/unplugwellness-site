"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ContactPopup } from "./ContactPopup"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute top-0 z-50 w-full bg-transparent border-none">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unplug-white-cropped-4xq9eej3r9eWGpoAFU7SfXVHduYvef.png" 
            alt="Unplug Wellness" 
            className="w-auto max-w-[150px] md:max-w-[200px] h-auto block"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#story" className="text-white hover:text-accent-primary transition-colors">
            About
          </a>
          <a href="#challenge" className="text-white hover:text-accent-primary transition-colors">
            The Challenge
          </a>
          <a href="#work" className="text-white hover:text-accent-primary transition-colors">
            Work with me
          </a>
          <a href="https://unplugwithroei.substack.com" className="text-white hover:text-accent-primary transition-colors">
            Substack
          </a>
        </div>

        {/* CTA Button - Desktop */}
        <ContactPopup>
          <motion.button 
            className="hidden md:block px-6 py-2 bg-accent-primary text-white font-semibold rounded-lg hover:bg-accent-primary-dark transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.button>
        </ContactPopup>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 space-y-4">
          <a href="#story" className="block text-white hover:text-accent-primary transition-colors">
            About
          </a>
          <a href="#challenge" className="block text-white hover:text-accent-primary transition-colors">
            The Challenge
          </a>
          <a href="#work" className="block text-white hover:text-accent-primary transition-colors">
            Work with me
          </a>
          <ContactPopup>
            <motion.button 
              className="w-full px-6 py-2 bg-accent-primary text-white font-semibold rounded-lg hover:bg-accent-primary-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
            </motion.button>
          </ContactPopup>
        </div>
      )}
    </header>
  )
}
