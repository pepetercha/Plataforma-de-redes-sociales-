import Navigation from "@/components/navigation"
import ProfileHeader from "@/components/profile-header"
import FeaturedLinks from "@/components/featured-links"
import SocialLinks from "@/components/social-links"

export default function ConfigPage() {
  return (
    <div>
      {/* Menú de navegación */}
      <Navigation />

      {/* Encabezado de perfil */}
      <ProfileHeader />

      {/* Sección de configuración */}
      <main>
        <h1>Configuración de la Plataforma</h1>
        <p>
          Aquí puedes ajustar tus preferencias, actualizar tu información y
          personalizar la experiencia de la plataforma.
        </p>

        <section>
          <h2>Preferencias de Usuario</h2>
          <p>Configura idioma, tema y opciones de visualización.</p>
        </section>

        <section>
          <h2>Seguridad</h2>
          <p>Administra contraseñas, autenticación y accesos.</p>
        </section>

        <section>
          <h2>Integraciones</h2>
          <p>Conecta tus redes sociales y servicios externos.</p>
        </section>
      </main>

      {/* Enlaces destacados y sociales */}
      <aside>
        <FeaturedLinks />
        <SocialLinks />
      </aside>
    </div>
  )
}
