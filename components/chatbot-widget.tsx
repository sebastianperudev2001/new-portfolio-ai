"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"
import { useChatAI } from "@/lib/hooks/use-chat-ai"

const SUGGESTED_MESSAGES = ["¿Quién eres?", "Muéstrame tus proyectos", "¿Qué tecnologías dominas?"]

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [hasInteracted, setHasInteracted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { messages, isLoading, sendMessage, clearMessages } = useChatAI()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSuggestedMessage = (message: string) => {
    setInput(message)
    sendMessage(message)
    setHasInteracted(true)
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    await sendMessage(input)
    setInput("")
    setHasInteracted(true)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Abrir chat de IA"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-32px)] h-[500px] rounded-2xl border border-border bg-background shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="border-b border-border bg-gradient-to-r from-accent/10 to-accent/5 p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Mar<span className="text-accent">IA</span>na
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Soy la secretaria de Sebastián, pregúntame sobre lo que quieras saber sobre mi creador.
              </p>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 scroll-smooth">
              {/* Show suggested messages if no interaction yet */}
              {!hasInteracted && messages.length === 0 && (
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                    Preguntas sugeridas
                  </p>
                  {SUGGESTED_MESSAGES.map((message, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleSuggestedMessage(message)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full text-left px-3 py-2 rounded-lg border border-border hover:bg-secondary hover:border-accent transition-colors text-sm text-foreground"
                    >
                      {message}
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Chat Messages */}
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                      message.role === "user"
                        ? "bg-accent text-accent-foreground rounded-br-none"
                        : "bg-secondary text-foreground rounded-bl-none border border-border"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    {message.streaming && (
                      <motion.span
                        animate={{ opacity: [0.5, 1] }}
                        transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
                        className="inline-block ml-1"
                      >
                        ▌
                      </motion.span>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && !messages.some((m) => m.streaming) && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2 px-4 py-2">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-muted-foreground"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <motion.div
                    className="w-2 h-2 rounded-full bg-muted-foreground"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.1 }}
                  />
                  <motion.div
                    className="w-2 h-2 rounded-full bg-muted-foreground"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                  />
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="border-t border-border bg-secondary/30 p-4 sm:p-6 space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu pregunta..."
                  disabled={isLoading}
                  className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground text-center">Presiona Enter para enviar</p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
