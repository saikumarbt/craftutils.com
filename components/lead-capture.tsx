"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function LeadCapture() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Show popup after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 30000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    setSubmitted(true)
    setTimeout(() => setIsOpen(false), 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
        >
          <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-[90vw] max-w-md rounded-lg bg-background p-6 shadow-lg border"
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>

              {!submitted ? (
                <>
                  <h2 className="text-2xl font-bold mb-2">Want ToolsKitt Updates?</h2>
                  <p className="text-muted-foreground mb-4">
                    Subscribe to our newsletter and receive all the latest updates. No spam, ever.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button type="submit" className="w-full">
                      Subscribe
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-4">
                  <h3 className="text-xl font-semibold text-primary mb-2">Thank you!</h3>
                  <p className="text-muted-foreground">
                    You've been successfully subscribed to our newsletter.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
