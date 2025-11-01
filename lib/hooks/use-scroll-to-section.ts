"use client"

import { useCallback } from "react"

/**
 * Hook para hacer scroll suave a una sección específica
 * Maneja tanto anchor links como scroll programático
 */
export function useScrollToSection() {
  const scrollToSection = useCallback((sectionId: string) => {
    // Remover el # si viene en la URL
    const id = sectionId.replace("#", "")
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [])

  return { scrollToSection }
}
