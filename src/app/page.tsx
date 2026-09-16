import Link from "next/link";

const SECTIONS = [
  {
    href: "/play",
    emoji: "🎮",
    title: "Jugar una partida",
    description: "Responde preguntas al azar y consigue la mejor puntuación.",
  },
  {
    href: "/questions",
    emoji: "❓",
    title: "Preguntas",
    description: "Listado, creación, edición y borrado del banco de trivia.",
  },
  {
    href: "/episodes",
    emoji: "📺",
    title: "Episodios",
    description:
      "Sinopsis, personajes y momentos/frases memorables por episodio.",
  },
];

export default function HomePage() {
  return (
    <main className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900">
          Trivia Friends
        </h1>
        <p className="text-stone-600">
          Gestión de preguntas y respuestas de trivia sobre Friends.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {SECTIONS.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group flex flex-col gap-2 rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md"
          >
            <span className="text-2xl">{section.emoji}</span>
            <span className="font-semibold text-stone-900 group-hover:text-amber-700">
              {section.title}
            </span>
            <span className="text-sm text-stone-600">{section.description}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
