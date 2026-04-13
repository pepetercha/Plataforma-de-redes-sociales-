#!/bin/bash
set -e

echo "🔧 Corrigiendo Navigation con props tipados..."

cat > app/components/navigation.tsx <<'EOF'
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
EOF

echo "✅ Navigation corregido con props tipados."
echo "🚀 Ahora ejecuta: npm run build"
