export interface ToastProps {
  id: string
  title?: string
  description?: string   // ahora está incluida
  action?: React.ReactNode
  variant?: "default" | "destructive"   // opcional, para estilos
  duration?: number                     // opcional, tiempo de vida del toast
  className?: string                    // opcional, para estilos adicionales
}
