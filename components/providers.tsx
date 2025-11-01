"use client"

import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"
import { ChatbotWidget } from "./chatbot-widget"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
      <ChatbotWidget />
    </ThemeProvider>
  )
}
