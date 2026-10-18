import Boton from "./Boton";

export default function Hero({ titular, subtitulo, textoBoton, href }) {
  return (
    <section className="mt-8">
      <h2 className="titular-hero">{titular}</h2>
      <p className="mt-4 max-w-prose text-lg">{subtitulo}</p>
      <div className="mt-6">
        <Boton href={href}>{textoBoton}</Boton>
      </div>
    </section>
  );
}
