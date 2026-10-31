import { loginAction } from "./actions";

export default async function LoginPage({ searchParams }) {
  const params = await searchParams;
  const hasError = params?.error === "1";

  return (
    <section className="mx-auto max-w-md py-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest">
        Mamá Furiosa · Administración
      </p>

      <h1 className="mb-4 text-3xl">Acceso privado</h1>

      <p className="mb-8 text-gray-700">
        Ingresa para administrar los productos de la Tienda.
      </p>

      {hasError && (
        <p
          role="alert"
          className="mb-5 rounded border border-red-300 bg-red-50 p-3 text-sm text-red-800"
        >
          El correo o la contraseña son incorrectos.
        </p>
      )}

      <form action={loginAction} className="space-y-5">
        <div>
          <label htmlFor="email" className="mb-2 block font-medium">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="username"
            required
            className="w-full rounded border border-gray-400 bg-white p-3"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-2 block font-medium">
            Contraseña
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full rounded border border-gray-400 bg-white p-3"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-carbon px-5 py-3 font-semibold text-white hover:bg-ciruela"
        >
          Iniciar sesión
        </button>
      </form>
    </section>
  );
}
