"use client"
import * as React from "react"

interface NavigationProps {
  activeSection: string
  onSectionChange: () => void
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <nav>
      <button
        onClick={onSectionChange}
        className={activeSection === "links" ? "active" : ""}
      >
        Links
      </button>
    </nav>
  )
}
