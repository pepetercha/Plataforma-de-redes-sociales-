#!/bin/bash

BASE_DIR="app/componentes/ui"

# Crear carpeta si no existe
mkdir -p $BASE_DIR

# Buscar todos los imports que apunten a "@/components/ui/*"
grep -R "@/components/ui/" app | while read -r line; do
  # Extraer el nombre del módulo
  MODULE=$(echo "$line" | sed -n 's/.*@\/components\/ui\/\([a-zA-Z0-9_-]*\).*/\1/p')
  FILE="$BASE_DIR/$MODULE.tsx"

  if [ -n "$MODULE" ]; then
    if [ ! -f "$FILE" ]; then
      echo "Creando stub para $MODULE..."
      cat <<EOF > $FILE
"use client"

import { cn } from "@/lib/utils"

export function ${MODULE^}(props: any) {
  return (
    <div className={cn("p-2 border rounded-md", props.className)}>
      {props.children || "${MODULE^} componente"}
    </div>
  )
}

export function ${MODULE^}Variants({ className }: { className?: string }) {
  return cn("inline-flex items-center justify-center px-4 py-2 text-sm font-medium", className)
}
EOF
    fi
  fi
done

echo "✅ Todos los stubs generados automáticamente en $BASE_DIR"
