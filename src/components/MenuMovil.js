"use client";

import { useState } from "react";
import Link from "next/link";
import { enlaces } from "@/lib/enlaces";

export default function MenuMovil() {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setAbierto(!abierto)}
        aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={abierto}
        aria-controls="menu-movil"
        className="flex h-11 w-11 items-center justify-center"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {abierto ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {abierto && (
        <nav
          id="menu-movil"
          className="absolute inset-x-0 top-full z-10 border-b border-gris-calido bg-surface/95"
        >
          {enlaces.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              onClick={() => setAbierto(false)}
              className="block px-4 py-3 font-semibold"
            >
              {enlace.texto}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
