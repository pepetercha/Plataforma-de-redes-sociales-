import Menu from "../componentes/Menu";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
      <Menu />
      <section style={{ marginTop: "2rem" }}>
        <h1>Bienvenido a la Plataforma de Redes Sociales</h1>
        <p>
          Esta es tu página principal. Desde aquí puedes navegar a Configuración,
          Agregar Usuario o Perfil usando el menú superior.
        </p>

        <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
          <div style={{ flex: 1, padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h2>⚙️ Configuración</h2>
            <p>Administra tus preferencias y ajustes de cuenta.</p>
          </div>

          <div style={{ flex: 1, padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h2>👤 Agregar Usuario</h2>
            <p>Registra nuevos usuarios en la plataforma.</p>
          </div>

          <div style={{ flex: 1, padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h2>📄 Perfil</h2>
            <p>Consulta y edita la información de tu perfil.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
