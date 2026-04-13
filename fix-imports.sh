#!/bin/bash
set -e

echo "🔧 Corrigiendo imports rotos..."

# Corrige casos sin espacio ni comillas iniciales
find app -type f -name "*.tsx" -exec sed -i 's#from@/#from "@/#g' {} +

# Corrige casos con espacio pero sin comillas iniciales
find app -type f -name "*.tsx" -exec sed -i 's#from @/#from "@/#g' {} +

# Corrige casos con comillas dobles al inicio y simples al final
find app -type f -name "*.tsx" -exec sed -i 's#\"@/components/\([^\"'\'']*\)\'#\"@/components/\1\"#g' {} +
find app -type f -name "*.tsx" -exec sed -i 's#\"@/lib/\([^\"'\'']*\)\'#\"@/lib/\1\"#g' {} +

echo "✅ Imports corregidos."

echo "🚀 Compilando proyecto..."
npm run build
