export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-muted-foreground mt-2">Página no encontrada</p>
      <a href="/" className="mt-4 text-blue-600 hover:underline">
        Volver al inicio
      </a>
    </div>
  )
}
