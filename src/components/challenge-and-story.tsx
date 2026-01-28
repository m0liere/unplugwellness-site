"use client"

import { motion } from "framer-motion"

export function ChallengeAndStory() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="challenge" className="py-24 bg-background px-4 md:px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* The Challenge */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Text & Form Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Challenge</h2>
            <p className="text-muted text-lg leading-relaxed mb-4">
              In today's world, we're constantly connected, always on, living in our minds. Often we lose awareness of our bodies until its screaming at us with pain and discomfort.
            </p>
            <p className="text-muted text-lg leading-relaxed mb-8">
              This 21 Day challenge will guide you to building a daily movement habit inspired by yoga and Pilates to address the specific impacts that sitting at your desk all day has on your body. You will also learn ergonomics principles so you can adjust your workstations to have a foundation for healthy posture and work habits.
            </p>

            {/* Email Form Integration */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="inline-block px-3 py-1 rounded-full bg-[#7caf7c]/10 border border-[#7caf7c]/20 text-accent-primary text-xs font-bold uppercase tracking-widest">
                Coming Soon
              </div>
              <form 
                action="https://unplugwithroei.substack.com/api/v1/free?nojs=true" 
                method="post" 
                target="_blank"
                className="flex flex-col sm:flex-row gap-2 max-w-md"
              >
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email..." 
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#7caf7c] transition-colors"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-[#7caf7c] text-white font-bold rounded-lg hover:bg-[#8dbf8d] transition-all whitespace-nowrap"
                >
                  Notify Me
                </button>
              </form>
              <p className="text-xs text-muted italic">
                Join the Substack list to get the launch alert.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative w-full rounded-lg overflow-hidden border border-border">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_2qubv92qubv92qub-jHohCZqsKQE6uH2w5sqfBRwykzmTaQ.png" 
              alt="The Challenge" 
              className="w-full h-auto block" 
            />
          </div>
        </motion.div>

        {/* The Story Section stays exactly as you had it below... */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative w-full rounded-lg overflow-hidden border border-border order-2 md:order-1">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250912-WA0048-tx8AX9lXEcavtiUxJxKLZ9AsrgYR6M.jpg" 
              alt="The Story" 
              className="w-full h-auto block" 
            />
          </div>
          <div className="order-1 md:order-2" id="story">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Story</h2>
            {/* ... Rest of your story text ... */}
            <p className="text-muted text-lg leading-relaxed mb-4">
              {"I'm Roei. I'm an ITOps and DevOps engineer, a Yoga and Mat Pilates Instructor, Certified Office Ergonomics Evaluator, and your posture coach."}
            </p>
            <p className="text-muted text-lg leading-relaxed mb-4">
              {"I have worked at a big 4 consulting firm, early stage and hypergrowth unicorn startups, and participated in the pre to post IPO journey of a large Fintech company. I've been in these environments of high intensity, pressure, and increasing demands and deadlines that keep us sitting at our desks all day."}
            </p>
            <p className="text-muted text-lg leading-relaxed mb-4">
               {"I know what it feels like. I know how easy it can be to be swept up in the waves of stress, anxiety and excitement. It's easy to live in your mind and lose awareness of your body. It's easy to adapt to the workstation and lose control of your posture."}
            </p>
              <p className="text-muted text-lg leading-relaxed mb-4">
               {"I'm here to help you reconnect with your body and reverse the damage done to it by sitting for so long hunched over your computer."}
            </p>
            <p className="text-muted text-lg leading-relaxed">
               {"I want to educate and connect with you — the human behind the computer — so you can learn to be in control of your musculoskeletal and mental health and bring the most energized, productive, and present version of yourself to work and life."}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
