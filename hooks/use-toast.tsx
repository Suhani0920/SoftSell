"use client"

import * as React from "react"

type ToastProps = {
  title: string
  description?: string
  duration?: number
}

type Toast = ToastProps & {
  id: string
  visible: boolean
}

const ToastContext = React.createContext<{
  toast: (props: ToastProps) => void
  toasts: Toast[]
}>({
  toast: () => {},
  toasts: [],
})

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  React.useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    toasts.forEach((toast) => {
      if (toast.visible) {
        const timer = setTimeout(() => {
          setToasts((prevToasts) => prevToasts.map((t) => (t.id === toast.id ? { ...t, visible: false } : t)))
        }, toast.duration || 5000)

        timers.push(timer)
      }
    })

    return () => {
      timers.forEach((timer) => clearTimeout(timer))
    }
  }, [toasts])

  const toast = React.useCallback((props: ToastProps) => {
  const id =
    typeof window !== "undefined" && crypto?.randomUUID
      ? crypto.randomUUID()
      : Math.random().toString(36).substring(2, 9)

  setToasts((prevToasts) => [...prevToasts, { ...props, id, visible: true }])
}, [])


  return <ToastContext.Provider value={{ toast, toasts }}>{children}</ToastContext.Provider>
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

// Direct export for convenience
export const toast = (props: ToastProps) => {
  // This is a fallback for when the hook is used outside of the provider
  console.warn("Toast used outside provider - this is a no-op in production")
  console.info("Toast content:", props)
}
