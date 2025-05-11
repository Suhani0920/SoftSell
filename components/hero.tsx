"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center pt-20 px-6 md:px-10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Turn Unused Software Licenses Into Cash
          </h1>
          <p className="text-xl text-muted-foreground">
            SoftSell helps businesses recover value from unused software licenses. Quick, transparent, and hassle-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-lg">
              Sell My Licenses
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Get a Valuation
            </Button>
          </div>
          <div className="pt-8 flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 mr-1 text-primary">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M8.5 12.5l2 2 5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>No upfront fees</span>
            </div>
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 mr-1 text-primary">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M8.5 12.5l2 2 5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Secure process</span>
            </div>
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 mr-1 text-primary">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M8.5 12.5l2 2 5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Fast payment</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 z-10 rounded-xl" />
          <img
            src="/placeholder.svg?height=800&width=1200"
            alt="Software license management dashboard"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
