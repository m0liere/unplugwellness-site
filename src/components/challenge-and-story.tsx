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
            In today's world we're constantly connected, always on, living in our minds. Often we lose awareness of our bodies until they're screaming at us with pain and discomfort.
            <br />
            <br />
            The 21-Day Desk Worker Reset guides you through your entire body — teaching you what sitting 8+ hours a day is actually doing to you, and giving you the movement, breathwork, and ergonomics tools to reverse it.
            <br />
            <br />
            15 minutes a day. 21 days. A completely different relationship with your body.
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
              src="/about-shoot.jpeg"
              alt="The Story"
              className="w-full h-auto block" 
            />
          </div>
          <div className="order-1 md:order-2" id="story">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Story</h2>
            <p className="text-muted text-lg leading-relaxed mb-4">
              {"I'm Roei, an engineer who became a yoga and Pilates instructor, and a Certified Office Ergonomics Evaluator."}
            </p>
            <p className="text-muted text-lg leading-relaxed mb-4">
              {"I've worked at a Big 4 consulting firm, early stage startups, and through the pre to post-IPO journey of a large fintech company. I know what it feels like to be swept up in the waves of pressure, deadlines, and intensity — living in your mind, completely disconnected from your body."}
            </p>
            <p className="text-muted text-lg leading-relaxed mb-4">
              {"That disconnection has a cost. It shows up as tension, pain, poor posture, burnout. It sneaks up on you until your body is the one forcing you to stop."}
            </p>
            <p className="text-muted text-lg leading-relaxed">
              {"I built Unplug With Roei because nobody in these environments is talking about this. I'm here to change that — to educate the human behind the computer, and help you bring the most present, healthy, and capable version of yourself to your work and your life."}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
