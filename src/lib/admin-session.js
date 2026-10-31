import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

const sessionOptions = {
  cookieName: "mamafuriosa_admin",
  password: process.env.SESSION_PASSWORD,
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  },
};

export async function getAdminSession() {
  const password = process.env.SESSION_PASSWORD;

  if (!password || password.length < 32) {
    throw new Error("SESSION_PASSWORD debe tener al menos 32 caracteres.");
  }

  return getIronSession(await cookies(), sessionOptions);
}
