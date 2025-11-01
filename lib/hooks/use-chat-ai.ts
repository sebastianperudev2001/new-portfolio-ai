"use client"

import { useState, useCallback, useRef } from "react"

export interface ChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  streaming?: boolean
}

export function useChatAI() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  const sendMessage = useCallback(async (userMessage: string) => {
    // Reset error state
    setError(null)

    // Add user message immediately
    const userMessageId = `msg-${Date.now()}`
    setMessages((prev) => [
      ...prev,
      {
        id: userMessageId,
        role: "user",
        content: userMessage,
      },
    ])

    setIsLoading(true)

    try {
      // TODO: Replace with actual OpenAI API call
      // This is a placeholder that simulates streaming response
      const assistantMessageId = `msg-${Date.now() + 1}`

      // Simulated response based on user input
      let assistantResponse = ""

      if (userMessage.toLowerCase().includes("quién eres") || userMessage.toLowerCase().includes("who are you")) {
        assistantResponse =
          "Soy un asistente de IA creado para ayudarte a conocer más sobre Sebastián Chávary. Soy un Software Engineer con experiencia en IA, AWS y Desarrollo Web. ¿Hay algo específico que quieras saber?"
      } else if (userMessage.toLowerCase().includes("proyecto") || userMessage.toLowerCase().includes("project")) {
        assistantResponse =
          "Sebastián ha trabajado en varios proyectos interesantes incluyendo un Portfolio Website, una Aplicación de Chat con IA, y una Plataforma de E-commerce. ¿Cuál de estos te interesa conocer más?"
      } else if (userMessage.toLowerCase().includes("tecnología") || userMessage.toLowerCase().includes("technology")) {
        assistantResponse =
          "Sebastián domina TypeScript, React, Next.js, Tailwind CSS, AWS, Python, y tiene experiencia con LLMs y APIs de IA. ¿Hay alguna tecnología específica que quieras que explique?"
      } else {
        assistantResponse =
          "Es una buena pregunta. Para respuestas más detalladas sobre temas específicos, te recomendaría contactar directamente a través del formulario de contacto. ¿Hay algo más que pueda ayudarte?"
      }

      // Add assistant message with streaming effect
      setMessages((prev) => [
        ...prev,
        {
          id: assistantMessageId,
          role: "assistant",
          content: "",
          streaming: true,
        },
      ])

      // Simulate streaming by adding text character by character
      let currentContent = ""
      for (let i = 0; i < assistantResponse.length; i++) {
        currentContent += assistantResponse[i]

        setMessages((prev) =>
          prev.map((msg) => (msg.id === assistantMessageId ? { ...msg, content: currentContent } : msg)),
        )

        // Add slight delay for streaming effect
        await new Promise((resolve) => setTimeout(resolve, 20))
      }

      // Mark streaming as complete
      setMessages((prev) => prev.map((msg) => (msg.id === assistantMessageId ? { ...msg, streaming: false } : msg)))
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Error al enviar el mensaje"
      setError(errorMessage)
      console.error("[useChatAI] Error:", err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const clearMessages = useCallback(() => {
    setMessages([])
    setError(null)
  }, [])

  const cancel = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
  }, [])

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
    cancel,
  }
}
