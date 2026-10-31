"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin-session";

export async function loginAction(formData) {
  const email = String(formData.get("email") || "")
    .trim()
    .toLowerCase();

  const password = String(formData.get("password") || "");

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminEmail || !passwordHash) {
    throw new Error("Falta configurar el acceso de administración.");
  }

  const validEmail = email === adminEmail;
  const validPassword = await bcrypt.compare(password, passwordHash);

  if (!validEmail || !validPassword) {
    redirect("/admin/login?error=1");
  }

  const session = await getAdminSession();
  session.isAdmin = true;
  await session.save();

  redirect("/admin/tienda");
}

export async function logoutAction() {
  const session = await getAdminSession();
  session.destroy();

  redirect("/admin/login");
}
