"use client"

import { useState } from "react"
import { subscribeToGuide, EMAIL_REGEX } from "@/lib/email-subscriptions"

// Marca en el navegador que esta persona ya se suscribió (para no volver a ofrecerle la guía).
const SUBSCRIBED_KEY = "franesdev:guide-subscribed"

export function hasSubscribedToGuide() {
  try {
    return localStorage.getItem(SUBSCRIBED_KEY) === "1"
  } catch {
    return false
  }
}

// Campo trampa: invisible para humanos; si llega con valor, es un bot.
export const honeypotInputProps = {
  type: "text",
  name: "website",
  tabIndex: -1,
  autoComplete: "off",
  "aria-hidden": true,
  className: "hidden",
} as const

// Lógica única del formulario de la guía (validación + honeypot + envío). La usan el home y /enfoque.
export function useGuideSignup(onSuccess?: () => void) {
  const [email, setEmailValue] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const setEmail = (value: string) => {
    setEmailValue(value)
    if (error) setError(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!EMAIL_REGEX.test(trimmed)) {
      setError(true)
      return
    }

    if (new FormData(e.currentTarget).get("website")) {
      setSubmitted(true)
      return
    }

    setLoading(true)
    setError(false)

    try {
      await subscribeToGuide(trimmed)
      setSubmitted(true)
      setEmailValue("")
      try {
        localStorage.setItem(SUBSCRIBED_KEY, "1")
      } catch {}
      onSuccess?.()
    } catch (err) {
      console.error("Guide subscription error:", err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  // true si el error es de formato (email incompleto) y no de envío.
  const isInvalid = error && !EMAIL_REGEX.test(email.trim())

  return { email, setEmail, submitted, loading, error, isInvalid, handleSubmit }
}
