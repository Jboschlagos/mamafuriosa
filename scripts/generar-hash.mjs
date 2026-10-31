import bcrypt from "bcryptjs";
import { createInterface } from "node:readline/promises";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

try {
  const password = await rl.question(
    "Contraseña de administrador (mínimo 12 caracteres): ",
  );

  if (password.length < 12) {
    throw new Error("La contraseña debe tener al menos 12 caracteres.");
  }

  console.log("\nHash generado:\n");
  console.log(await bcrypt.hash(password, 12));
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
} finally {
  rl.close();
}
