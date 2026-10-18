import Link from "next/link";
import { enlaces } from "@/lib/enlaces";
import { redes } from "@/lib/redes";

export default function Footer() {
  return (
    <footer className="bg-carbon text-surface">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 py-8 md:flex-row md:justify-between md:px-8">
        <nav aria-label="Enlaces del sitio" className="flex flex-col">
          {enlaces.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className="py-3 font-semibold"
            >
              {enlace.texto}
            </Link>
          ))}
        </nav>

        {redes.length > 0 && (
          <ul aria-label="Redes sociales" className="flex flex-col">
            {redes.map((red) => (
              <li key={red.href}>
                <a
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-3 font-semibold"
                >
                  {red.texto}
                </a>
              </li>
            ))}
          </ul>
        )}

        <p className="text-sm">© {new Date().getFullYear()} Mamá Furiosa</p>
      </div>
    </footer>
  );
}
