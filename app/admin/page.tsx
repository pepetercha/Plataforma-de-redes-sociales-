import Navigation from "../componentes/navigation"
import ProfileHeader from "../componentes/profile-header"
import FeaturedLinks from "../componentes/featured-links"
import SocialLinks from "../componentes/social-links"

export default function AdminPage() {
  return (
    <div>
      {/* Menú de navegación */}
      <Navigation />

      {/* Encabezado de perfil */}
      <ProfileHeader />

      {/* Sección principal de administración */}
      <main>
        <h1>Panel de Administración</h1>
        <p>
          Aquí puedes gestionar usuarios, revisar estadísticas y configurar la
          plataforma de manera avanzada.
        </p>

        <section>
          <h2>Gestión de Usuarios</h2>
          <p>Crear, editar y eliminar cuentas de usuario.</p>
        </section>

        <section>
          <h2>Estadísticas</h2>
          <p>Visualiza métricas de uso, actividad y rendimiento.</p>
        </section>

        <section>
          <h2>Configuración Avanzada</h2>
          <p>Administra permisos, roles y parámetros del sistema.</p>
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
