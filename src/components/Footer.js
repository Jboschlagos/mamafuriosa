import Link from "next/link";
import { enlaces } from "@/lib/enlaces";
import { redes } from "@/lib/redes";

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="bg-carbon text-surface">
      <div className="mx-auto max-w-[1200px] px-4 py-10 md:px-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
          {/* Identidad */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="w-fit text-xl font-bold tracking-tight transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Mamá Furiosa
            </Link>

            <p className="max-w-xs text-sm leading-relaxed opacity-75">
              Una comunidad para compartir, conectar y abrir nuevas
              oportunidades.
            </p>
          </div>

          {/* Navegación */}
          <nav aria-label="Enlaces del sitio">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider">
              Explora
            </h2>

            <ul className="flex flex-col items-start">
              {enlaces.map((enlace) => (
                <li key={enlace.href}>
                  <Link
                    href={enlace.href}
                    className="inline-block py-2 text-sm transition-opacity hover:opacity-70 focus-visible:underline focus-visible:outline-none"
                  >
                    {enlace.texto}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes sociales */}
          {redes.length > 0 && (
            <nav aria-label="Redes sociales">
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wider">
                Síguenos
              </h2>

              <ul className="flex flex-col items-start">
                {redes.map((red) => (
                  <li key={red.href}>
                    <a
                      href={red.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-2 text-sm transition-opacity hover:opacity-70 focus-visible:underline focus-visible:outline-none"
                    >
                      {red.texto}
                      <span className="sr-only">
                        {" "}
                        (abre en una nueva pestaña)
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        {/* Cierre */}
        <div className="mt-10 border-t border-current/20 pt-5">
          <p className="text-xs opacity-70">
            © {anio} Mamá Furiosa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
