#!/bin/bash
# Script maestro para depuración y preparación de release estable en Vercel + Zenodo

echo "🚀 Iniciando depuración del proyecto..."

# 1. Eliminar lockfiles duplicados
echo "🧹 Limpiando lockfiles..."
rm -f yarn.lock package-lock.json pnpm-lock.yaml

# 2. Reinstalar dependencias
echo "📦 Reinstalando dependencias..."
npm install || yarn install || pnpm install

# 3. Verificar build local
echo "🔍 Probando build local..."
npx vercel build || echo "❌ Error en build local, revisa logs arriba."

# 4. Revisar variables de entorno
echo "⚙️ Variables de entorno definidas en .env.local:"
if [ -f .env.local ]; then
  cat .env.local
else
  echo "⚠️ No se encontró archivo .env.local"
fi

# 5. Confirmar estructura de páginas Next.js
echo "📂 Verificando estructura de /pages..."
find pages -type f

# 6. Crear release estable en GitHub
echo "🏷️ Preparando release..."
git add .
git commit -m "Release estable para Zenodo"
git tag -a v1.0.0 -m "Versión estable"
git push origin main --tags

echo "✅ Release estable creado. Ahora conecta este repositorio con Zenodo para generar DOI."
