import Navigation from "../componentes/navigation"
import ProfileHeader from "../componentes/profile-header"
import FeaturedLinks from "../componentes/featured-links"
import SocialLinks from "../componentes/social-links"
import Table from "../componentes/ui/table"
import Chart from "../componentes/ui/chart"

export default function StatsPage() {
  const data = [
    { id: 1, metric: "Usuarios activos", value: 120 },
    { id: 2, metric: "Publicaciones", value: 45 },
    { id: 3, metric: "Comentarios", value: 230 },
    { id: 4, metric: "Nuevos registros", value: 15 },
  ]

  return (
    <div>
      <Navigation />
      <ProfileHeader />
      <main>
        <h1>Estadísticas Detalladas</h1>
        <section>
          <h2>Métricas en Tabla</h2>
          <Table>
            <thead>
              <tr>
                <th>Métrica</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d) => (
                <tr key={d.id}>
                  <td>{d.metric}</td>
                  <td>{d.value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
        <section>
          <h2>Visualización en Gráfico</h2>
          <Chart data={data} />
        </section>
      </main>
      <FeaturedLinks />
      <SocialLinks />
    </div>
  )
}
