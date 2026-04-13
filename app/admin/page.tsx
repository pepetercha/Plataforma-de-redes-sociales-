"use client"

import { Navigation } from "@/components/navigation"
import { ProfileHeader } from "@/components/profile-header"
import { FeaturedLinks } from "@/components/featured-links"
import { SocialLinks } from "@/components/social-links"

export default function AdminPage() {
  return (
    <div>
      {/* Menú de navegación */}
      <Navigation activeSection="links" onSectionChange={() => {}} />

      {/* Encabezado de perfil */}
      <ProfileHeader />

      {/* Sección principal de administración */}
      <main>
        <h1>Panel de Administración</h1>
        <p>
          Aquí puedes gestionar usuarios y administrar la plataforma de manera avanzada.
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
          <p>Administra permisos, roles y ajustes de la plataforma.</p>
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
