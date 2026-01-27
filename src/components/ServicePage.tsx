"use client"

import React from 'react';
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ContactPopup } from "./ContactPopup"

interface Feature {
  title: string;
  description: string;
}

interface faq {
  question: string;
  answer: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  outcomes?: string[];
  logistics?: string;
  sectiontitle1: string;
  sectiontitle2: string;
  sectiontitle3: string;
  faqs: faq[];
}

export const ServicePage: React.FC<ServicePageProps> = ({ 
  title, 
  subtitle, 
  description, 
  features,
  outcomes,
  logistics,
  sectiontitle1,
  sectiontitle2,
  sectiontitle3,
  faqs,
}) => {
  return (
    <div 
      style={{ backgroundColor: 'var(--color-brand-bg)' }} 
      /* Added pt-32 to create a significant gap for your nav bar */
      className="min-h-screen text-white selection:bg-stone-700 pt-32"
    >
      <header className="py-15 px-6 max-w-4xl mx-auto text-center border-b border-white/10">
        <h1 className="text-5xl md:text-6xl mb-6 tracking-tight text-white">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-stone-300 font-light italic max-w-2xl mx-auto">
          {subtitle}
        </p>
      </header>

      <main className="py-12 px-6 max-w-3xl mx-auto">
        <div className="prose prose-invert prose-lg mb-20 text-stone-200 text-center">
          <p className="whitespace-pre-line text-lg leading-relaxed">{description}</p>
        </div>

        <h2 className="text-3xl mb-12 text-white">{sectiontitle1}</h2>
        <div className="space-y-16 mb-24">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-stone-300 text-lg leading-relaxed whitespace-pre-line">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {outcomes && (
          /* Made the box slightly darker/translucent to pop against the brand bg */
          <div className="bg-white/5 border border-white/10 p-10 rounded-2xl mb-24">
            <h2 className="text-2xl mb-6 text-white">{sectiontitle2}</h2>
            <ul className="space-y-4">
              {outcomes.map((outcome, i) => (
                <li key={i} className="flex gap-3 text-stone-200">
                  <span className="text-stone-500">✓</span> {outcome}
                </li>
              ))}
            </ul>
          </div>
        )}

        {logistics && (
          <div className="border-t border-white/10 pt-16">
            <h2 className="text-2xl font-serif mb-6 text-white">{sectiontitle3}</h2>
            <div className="text-stone-400 whitespace-pre-line leading-relaxed italic">
              {logistics}
            </div>
          </div>
        )}

        <div className="mt-32 text-center pb-20">
            <ContactPopup>
                <motion.button 
                className="px-15 py-5 bg-accent-primary text-white font-semibold rounded-full hover:bg-accent-primary-dark transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                Inquire for your Team
                </motion.button>
            </ContactPopup>
        </div>
      </main>
    </div>
  );
};