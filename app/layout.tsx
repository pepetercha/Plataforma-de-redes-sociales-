import "./globals.css"

// Imports corregidos apuntando a app/componentes
import Navigation from "./componentes/navigation"
import ProfileHeader from "./componentes/profile-header"
import FeaturedLinks from "./componentes/featured-links"
import SocialLinks from "./componentes/social-links"
import ThemeProvider from "./componentes/theme-provider"

// Ejemplo de la carpeta ui
import Button from "./componentes/ui/button"
import Card from "./componentes/ui/card"

export const metadata = {
  title: "Plataforma Social",
  description: "Aplicación con menú y perfil",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider>
          <Navigation />
          <ProfileHeader />
          <FeaturedLinks />
          <SocialLinks />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
