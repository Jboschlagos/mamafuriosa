import Link from "next/link";
import { enlaces } from "@/lib/enlaces";
import MenuMovil from "./MenuMovil";

export default function Header() {
  return (
    <header className="relative border-b border-gris-calido bg-surface">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-2 md:px-8">
        <Link href="/" className="font-titulo text-xl">
          Mamá Furiosa
        </Link>

        <nav className="hidden gap-6 md:flex">
          {enlaces.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className="font-semibold"
            >
              {enlace.texto}
            </Link>
          ))}
        </nav>

        <MenuMovil />
      </div>
    </header>
  );
}
