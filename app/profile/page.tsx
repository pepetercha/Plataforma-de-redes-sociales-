import ProfileHeader from "@/components/profile-header"
import SocialLinks from "@/components/social-links"
import FeaturedLinks from "@/components/featured-links"
import Navigation from "@/components/navigation"

export default function ProfilePage() {
  return (
    <div>
      {/* Menú de navegación */}
      <Navigation />

      {/* Encabezado de perfil */}
      <ProfileHeader />

      {/* Sección de enlaces destacados */}
      <section>
        <h2>Enlaces Destacados</h2>
        <FeaturedLinks />
      </section>

      {/* Sección de redes sociales */}
      <section>
        <h2>Redes Sociales</h2>
        <SocialLinks />
      </section>

      {/* Contenido principal del perfil */}
      <main>
        <h1>Perfil del Usuario</h1>
        <p>
          Aquí puedes ver tu información personal, tus enlaces favoritos y tus
          redes sociales conectadas. Todo centralizado en tu plataforma.
        </p>
      </main>
    </div>
  )
}
