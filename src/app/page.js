import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <h1>Mamá Furiosa</h1>
      <h2 className="mt-6">🚧🚧En construccion🚧🚧</h2>
      <Hero
        titular="La furia tiene una voz."
        subtitulo="Reflexiones, información y una comunidad de mujeres que se acompaña."
        textoBoton="conoce la comunidad"
        href="/comunidad"
      />
    </>
  );
}
