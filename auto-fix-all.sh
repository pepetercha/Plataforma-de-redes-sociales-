#!/bin/bash
set -e

echo "🔧 Corrigiendo tsconfig.json..."
cat > tsconfig.json <<'EOF'
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "target": "ES6",
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": {
      "@/*": ["app/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": ["node_modules"]
}
EOF
echo "✅ tsconfig.json corregido."

echo "🔧 Corrigiendo imports rotos..."
# Cambiar ../componentes y ./componentes a alias
grep -rl "../componentes/" app | xargs sed -i 's#../componentes/#@/components/#g' || true
grep -rl "./componentes/" app | xargs sed -i 's#./componentes/#@/components/#g' || true

# Cambiar ../components y ./components a alias
grep -rl "../components/" app | xargs sed -i 's#../components/#@/components/#g' || true
grep -rl "./components/" app | xargs sed -i 's#./components/#@/components/#g' || true

# Corregir imports con comillas faltantes
grep -rl "from @/components" app | xargs sed -i 's#from @/components#from "@/components#g' || true
grep -rl "from @/lib" app | xargs sed -i 's#from @/lib#from "@/lib#g' || true

echo "✅ Imports corregidos."

echo "🔧 Verificando componentes faltantes..."
mkdir -p app/components

create_component() {
  local file=$1
  local content=$2
  if [ ! -f "app/components/$file.tsx" ]; then
    echo "⚠️ Creando $file.tsx..."
    cat > "app/components/$file.tsx" <<EOF
"use client"
import * as React from "react"

export function ${content}() {
  return (
    <div>
      <h2>${content}</h2>
    </div>
  )
}
EOF
  fi
}

create_component "featured-links" "FeaturedLinks"
create_component "navigation" "Navigation"
create_component "profile-header" "ProfileHeader"
create_component "social-links" "SocialLinks"
create_component "theme-provider" "ThemeProvider"

echo "✅ Componentes verificados/creados."

echo "🚀 Corrección completa. Ahora ejecuta:"
echo "npm run build"
