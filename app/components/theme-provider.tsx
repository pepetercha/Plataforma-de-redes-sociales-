"use client"
import * as React from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <div className="theme-light">{children}</div>
}
