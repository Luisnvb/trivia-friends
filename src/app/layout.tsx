import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trivia Friends",
  description: "Gestión de preguntas y respuestas de trivia sobre Friends",
};

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/play", label: "Jugar" },
  { href: "/questions", label: "Preguntas" },
  { href: "/episodes", label: "Episodios" },
  { href: "/series-info", label: "Más sobre la serie" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased">
        <header className="border-b border-stone-200 bg-white">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-4 sm:px-6">
            <Link href="/" className="text-lg font-bold text-amber-700">
              ☕ Trivia Friends
            </Link>
            <nav className="flex flex-wrap gap-4 text-sm font-medium text-stone-600">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-2 py-1 transition-colors hover:bg-amber-50 hover:text-amber-700"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">{children}</div>
      </body>
    </html>
  );
}
