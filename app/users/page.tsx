import Navigation from "@/components/navigation"
import ProfileHeader from "@/components/profile-header"
import FeaturedLinks from "@/components/featured-links"
import SocialLinks from "@/components/social-links"

export default function UsersPage() {
  // Ejemplo de usuarios simulados
  const users = [
    { id: 1, name: "Juan Pérez", role: "Administrador" },
    { id: 2, name: "María López", role: "Editor" },
    { id: 3, name: "Carlos Sánchez", role: "Usuario" },
  ]

  return (
    <div>
      {/* Menú de navegación */}
      <Navigation />

      {/* Encabezado de perfil */}
      <ProfileHeader />

      {/* Sección principal de usuarios */}
      <main>
        <h1>Gestión de Usuarios</h1>
        <p>
          Aquí puedes ver la lista de usuarios registrados en la plataforma y sus
          roles asignados.
        </p>

        <section>
          <h2>Lista de Usuarios</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong> — {user.role}
              </li>
            ))}
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
