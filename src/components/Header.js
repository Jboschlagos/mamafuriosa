import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b p-4">
      <Link href="/" className="font-bold">
        Mamá Furiosa
      </Link>
      <nav className="flex gap-4">
        <Link href="/ofertas">Ofertas</Link>
        <Link href="/bio">Bio</Link>
        <Link href="/mercado">Mercado</Link>
      </nav>
    </header>
  );
}
