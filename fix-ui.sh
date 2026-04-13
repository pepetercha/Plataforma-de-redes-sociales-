#!/bin/bash

# Ruta base de tus componentes
BASE_DIR="app/componentes/ui"

# Lista de módulos comunes que suelen faltar en shadcn/ui
MODULES=("button" "input" "dialog" "alert-dialog" "card" "badge" "dropdown-menu")

# Crear carpeta si no existe
mkdir -p $BASE_DIR

# Generar stubs para cada módulo faltante
for module in "${MODULES[@]}"; do
  FILE="$BASE_DIR/$module.tsx"
  if [ ! -f "$FILE" ]; then
    echo "Creando stub para $module..."
    cat <<EOF > $FILE
"use client"

import { cn } from "@/lib/utils"

export function ${module^}(props: any) {
  return (
    <div className={cn("p-2 border rounded-md", props.className)}>
      {props.children || "${module^} componente"}
    </div>
  )
}

export function ${module^}Variants({ className }: { className?: string }) {
  return cn("inline-flex items-center justify-center px-4 py-2 text-sm font-medium", className)
}
EOF
  fi
done

echo "✅ Todos los stubs creados en $BASE_DIR"
