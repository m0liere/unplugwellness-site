"use client"

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'
import { cn } from '../lib/utils'

interface ContactPopupProps {
  children: React.ReactNode
  accessKey?: string
}

export function ContactPopup({ children, accessKey }: ContactPopupProps) {
  const [open, setOpen] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const formRef = React.useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.PUBLIC_WEB3FORMS_KEY,
          subject: `Contact Form Submission from ${formData.get('name')}`,
          from_name: formData.get('name'),
          replyto: formData.get('email'),
          email: formData.get('email'),
          message: formData.get('message'),
          botcheck: formData.get('botcheck'),
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSuccess(true)
        formRef.current?.reset()
        // Auto-close after 3 seconds
        setTimeout(() => {
          setIsSuccess(false)
          setOpen(false)
        }, 3000)
      } else {
        alert('There was an error submitting your message. Please try again.')
      }
    } catch (error) {
      alert('There was an error submitting your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen) {
      // Reset form state when closing
      setIsSuccess(false)
      formRef.current?.reset()
    }
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <DialogPrimitive.Trigger asChild>
        {children}
      </DialogPrimitive.Trigger>
      
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50" />
        
        <DialogPrimitive.Content
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-md translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg",
            "bg-[#0d130d] border-white/10"
          )}
          asChild
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={open ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Close Button */}
            <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
              <XIcon className="h-4 w-4 text-white" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-primary/20 flex items-center justify-center"
                  >
                    <svg
                      className="w-8 h-8 text-accent-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted">
                    Your message has been sent. We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <DialogPrimitive.Title className="text-lg font-semibold leading-none text-white mb-2">
                    Get in Touch
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Description className="text-sm text-muted mb-6">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </DialogPrimitive.Description>

                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Honeypot field - hidden from users */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-muted focus:outline-none focus:border-accent-primary transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-muted focus:outline-none focus:border-accent-primary transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-muted focus:outline-none focus:border-accent-primary transition-colors resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-accent-primary text-[#0d130d] font-semibold rounded-lg hover:bg-[#8dbf8d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
