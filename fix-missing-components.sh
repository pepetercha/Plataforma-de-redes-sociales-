#!/bin/bash
set -e

echo "🔧 Creando componentes faltantes en app/components..."

mkdir -p app/components

# FeaturedLinks
cat > app/components/featured-links.tsx <<'EOF'
"use client"
import * as React from "react"

export function FeaturedLinks() {
  return (
    <div>
      <h2>Featured Links</h2>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
      </ul>
    </div>
  )
}
EOF

# Navigation
cat > app/components/navigation.tsx <<'EOF'
"use client"
import * as React from "react"

export function Navigation() {
  return (
    <nav>
      <a href="/">Home</a> | <a href="/dashboard">Dashboard</a>
    </nav>
  )
}
EOF

# ProfileHeader
cat > app/components/profile-header.tsx <<'EOF'
"use client"
import * as React from "react"

export function ProfileHeader() {
  return (
    <header>
      <h1>User Profile</h1>
    </header>
  )
}
EOF

# SocialLinks
cat > app/components/social-links.tsx <<'EOF'
"use client"
import * as React from "react"

export function SocialLinks() {
  return (
    <div>
      <a href="https://twitter.com">Twitter</a> | <a href="https://github.com">GitHub</a>
    </div>
  )
}
EOF

# ThemeProvider
cat > app/components/theme-provider.tsx <<'EOF'
"use client"
import * as React from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <div className="theme-light">{children}</div>
}
EOF

echo "✅ Todos los componentes básicos creados en app/components/"
echo "🚀 Ahora ejecuta: npm run build"
