import Navigation from "@/components/navigation"
import ProfileHeader from "@/components/profile-header"
import FeaturedLinks from "@/components/featured-links"
import SocialLinks from "@/components/social-links"

export default function Page() {
  return (
    <div>
      {/* Menú de navegación */}
      <Navigation />

      {/* Encabezado de perfil */}
      <ProfileHeader />

      {/* Enlaces destacados */}
      <section>
        <h2>Enlaces Destacados</h2>
        <FeaturedLinks />
      </section>

      {/* Enlaces sociales */}
      <section>
        <h2>Redes Sociales</h2>
        <SocialLinks />
      </section>

      {/* Contenido principal */}
      <main>
        <h1>Bienvenido a la Plataforma Social</h1>
        <p>
          Aquí podrás gestionar tu perfil, navegar entre secciones y acceder a tus
          enlaces favoritos y redes sociales desde un solo lugar.
        </p>
      </main>
    </div>
  )
}
