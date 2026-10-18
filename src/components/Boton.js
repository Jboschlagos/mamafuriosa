import Link from "next/link";

export default function Boton({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block bg-foreground px-6 py-3 font-semibold text-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      {children}
    </Link>
  );
}
