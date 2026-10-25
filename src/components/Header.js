import Link from "next/link";
import { enlaces } from "@/lib/enlaces";
import MenuMovil from "./MenuMovil";

export default function Header() {
  return (
    <header className="relative z-50 border-b border-gris-calido bg-surface">
      <div className="mx-auto flex min-h-16 max-w-[1200px] items-center justify-between gap-4 px-4 py-3 md:px-8">
        {/* Identidad */}
        <Link
          href="/"
          aria-label="Mamá Furiosa, ir al inicio"
          className="shrink-0 font-titulo text-xl font-bold tracking-tight text-carbon transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          Mamá Furiosa
        </Link>

        {/* Navegación de escritorio */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-6 md:flex"
        >
          {enlaces.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className="whitespace-nowrap py-2 text-sm font-semibold text-carbon/80 transition-colors hover:text-carbon focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {enlace.texto}
            </Link>
          ))}
        </nav>

        {/* Navegación móvil */}
        <div className="shrink-0 md:hidden">
          <MenuMovil />
        </div>
      </div>
    </header>
  );
}
