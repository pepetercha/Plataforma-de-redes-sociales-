import Link from "next/link";

export default function Menu() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#eee" }}>
      <Link href="/">Inicio</Link>
      <Link href="/configuracion">Configuración</Link>
      <Link href="/agregar-usuario">Agregar Usuario</Link>
      <Link href="/perfil">Perfil</Link>
    </nav>
  );
}
