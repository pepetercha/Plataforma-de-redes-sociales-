import * as React from "react"
import { ToastProps } from "@/components/ui/toast"

export function useToast() {
  const [toasts, setToasts] = React.useState<ToastProps[]>([])

  const addToast = (toast: ToastProps) => {
    setToasts((prev) => [...prev, toast])
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return { toasts, addToast, removeToast }
}
