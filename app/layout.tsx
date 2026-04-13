import "./globals.css"

// Imports corregidos apuntando a app/components
import Navigation from "@/components/navigation"
import ProfileHeader from "@/components/profile-header"
import FeaturedLinks from "@/components/featured-links"
import SocialLinks from "@/components/social-links"
import ThemeProvider from "@/components/theme-provider"

// Ejemplo de la carpeta ui
import Button from "@/components/ui/button"
import Card from "@/components/ui/card"

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
