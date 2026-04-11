import Menu from "../componentes/Menu";
import "../estilos/globals.css"; // si ya tienes un archivo de estilos globales

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <title>Plataforma de Redes Sociales</title>
      </head>
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9" }}>
        <Menu />
        <main style={{ padding: "2rem" }}>
          {children}
        </main>
        <footer style={{ marginTop: "2rem", padding: "1rem", textAlign: "center", background: "#eee" }}>
          <p>© 2026 Plataforma de Redes Sociales</p>
        </footer>
      </body>
    </html>
  );
}
