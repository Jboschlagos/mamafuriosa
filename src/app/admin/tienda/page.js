import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin-session";
import { logoutAction } from "../login/actions";

export default async function AdminTiendaPage() {
  const session = await getAdminSession();

  if (!session.isAdmin) {
    redirect("/admin/login");
  }

  return (
    <section className="py-8">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest">
        Mamá Furiosa · Administración
      </p>

      <h1 className="mb-4">Administrar Tienda</h1>

      <p className="mb-8 text-gray-700">
        Acceso autorizado. Aquí gestionaremos los productos publicados y las
        propuestas pendientes de aprobación.
      </p>

      <form action={logoutAction}>
        <button
          type="submit"
          className="border border-carbon px-5 py-3 font-semibold hover:bg-white"
        >
          Cerrar sesión
        </button>
      </form>
    </section>
  );
}
