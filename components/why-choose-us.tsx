"use client"

import { motion } from "framer-motion"
import { Shield, Clock, TrendingUp, Award } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      title: "Secure Transactions",
      description: "Bank-level encryption and secure processes to protect your data and transactions.",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      title: "Fast Turnaround",
      description: "Get valuations within 24 hours and payment within 48 hours of accepting an offer.",
      icon: <Clock className="h-8 w-8" />,
    },
    {
      title: "Best Market Rates",
      description: "Our extensive network ensures you get the highest possible value for your licenses.",
      icon: <TrendingUp className="h-8 w-8" />,
    },
    {
      title: "Expert Team",
      description: "Our specialists have deep knowledge of software licensing across all major vendors.",
      icon: <Award className="h-8 w-8" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="why-choose-us" className="w-full py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            SoftSell offers unmatched benefits when it comes to selling your software licenses.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col p-6 rounded-xl border bg-background shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
