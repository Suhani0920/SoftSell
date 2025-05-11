"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type Message = {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! 👋 How can I help you with selling your software licenses today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const exampleQuestions = [
    "How do I sell my license?",
    "What types of licenses do you buy?",
    "How long does the process take?",
    "How do you determine the value?",
  ]

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isOpen])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      let botResponse = ""

      // Simple pattern matching for demo purposes
      const lowerText = text.toLowerCase()
      if (lowerText.includes("sell") || lowerText.includes("how")) {
        botResponse =
          "To sell your license, simply fill out our contact form with your license details. Our team will evaluate it and get back to you within 24 hours with a valuation."
      } else if (lowerText.includes("type") || lowerText.includes("license")) {
        botResponse =
          "We purchase a wide range of software licenses including Microsoft, Adobe, Oracle, SAP, Salesforce, VMware, and many others. If you have a specific license type, please let us know!"
      } else if (lowerText.includes("time") || lowerText.includes("long") || lowerText.includes("process")) {
        botResponse =
          "Our process is quick! You'll receive a valuation within 24 hours, and once you accept our offer, payment is typically processed within 48 hours."
      } else if (lowerText.includes("value") || lowerText.includes("price") || lowerText.includes("worth")) {
        botResponse =
          "We determine value based on current market demand, remaining subscription time, license type, and quantity. Our goal is to offer you the best possible market rate."
      } else {
        botResponse =
          "Thanks for your message! For specific questions about your software licenses, please fill out our contact form and our team will assist you promptly."
      }

      const botMessage: Message = {
        id: Date.now().toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const handleExampleClick = (question: string) => {
    setInputValue(question)
    handleSendMessage(question)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 w-[350px] sm:w-[400px] h-[500px] bg-background border rounded-xl shadow-lg flex flex-col z-50 overflow-hidden"
          >
            <div className="p-4 border-b bg-primary text-primary-foreground flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <span className="font-medium">SoftSell Assistant</span>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleChat} className="text-primary-foreground">
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />

              {messages.length === 1 && (
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground mb-2">Try asking:</p>
                  <div className="flex flex-wrap gap-2">
                    {exampleQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={() => handleExampleClick(question)}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button size="icon" onClick={() => handleSendMessage()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button onClick={toggleChat} className="fixed bottom-6 right-6 rounded-full w-12 h-12 shadow-lg" size="icon">
        <MessageCircle className="h-6 w-6" />
      </Button>
    </>
  )
}
