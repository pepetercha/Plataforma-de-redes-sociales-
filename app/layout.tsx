import "./globals.css"
import Menu from "./components/Menu"

export const metadata = {
  title: "Plataforma Social",
  description: "Aplicación con menú y páginas robustas",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Menu />
        <main>{children}</main>
      </body>
    </html>
  )
}
