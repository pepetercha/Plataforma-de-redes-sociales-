import Navigation from "../componentes/navigation"
import ProfileHeader from "../componentes/profile-header"
import FeaturedLinks from "../componentes/featured-links"
import SocialLinks from "../componentes/social-links"

export default function DashboardPage() {
  // Ejemplo de métricas simuladas
  const stats = [
    { id: 1, label: "Usuarios activos", value: 120 },
    { id: 2, label: "Publicaciones hoy", value: 45 },
    { id: 3, label: "Comentarios", value: 230 },
    { id: 4, label: "Nuevos registros", value: 15 },
  ]

  return (
    <div>
      {/* Menú de navegación */}
      <Navigation />

      {/* Encabezado de perfil */}
      <ProfileHeader />

      {/* Sección principal del dashboard */}
      <main>
        <h1>Panel de Control</h1>
        <p>
          Aquí tienes un resumen general de la actividad en la plataforma y accesos rápidos a las secciones más importantes.
        </p>

        {/* Métricas */}
        <section>
          <h2>Métricas Generales</h2>
          <ul>
            {stats.map((stat) => (
              <li key={stat.id}>
                <strong>{stat.label}:</strong> {stat.value}
              </li>
            ))}
          </ul>
        </section>

        {/* Accesos rápidos */}
        <section>
          <h2>Accesos Rápidos</h2>
          <ul>
            <li>Gestión de Usuarios</li>
            <li>Configuración</li>
            <li>Estadísticas</li>
            <li>Administración</li>
          </ul>
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
