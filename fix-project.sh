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

echo "🔧 Corrigiendo imports sin comillas en layout.tsx y page.tsx..."
sed -i 's|import \(.*\) from ../components/|import \1 from "../components/|g' app/layout.tsx || true
sed -i 's|import \(.*\) from ../components/|import \1 from "../components/|g' app/page.tsx || true

echo "✅ Imports corregidos."

echo "🔧 Creando app/lib/utils.ts..."
mkdir -p app/lib
cat > app/lib/utils.ts <<'EOF'
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}
EOF

echo "✅ utils.ts creado."

echo "🚀 Corrección completa. Ahora puedes ejecutar:"
echo "npm run build"
