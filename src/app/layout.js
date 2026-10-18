import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Mama Furiosa app",
  description: "en construccion",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${archivoBlack.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <Header />
  <main className="mx-auto w-full max-w-[1200px] flex-1 p-4 md:p-8">
    {children}
  </main>
  <Footer />
</body>
    </html>
  );
}
