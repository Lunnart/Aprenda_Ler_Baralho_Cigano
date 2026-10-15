import { createFileRoute } from "@tanstack/react-router";
import { spreads } from "@/lib/lenormand";

export const Route = createFileRoute("/tiragens")({
  head: () => ({
    meta: [
      { title: "Métodos de Tiragem — Cigano" },
      {
        name: "description",
        content:
          "Aprenda as tiragens do baralho cigano: carta do dia, 3 cartas, mesa 3x3 e o Grande Tableau de 36 cartas.",
      },
      { property: "og:title", content: "Métodos de Tiragem do Baralho Cigano" },
      {
        property: "og:description",
        content: "Da carta do dia ao Grande Tableau: aprenda cada tiragem passo a passo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Tiragens,
});

const levelStyle: Record<string, string> = {
  Iniciante: "bg-primary/15 text-primary",
  Intermediário: "bg-accent text-accent-foreground",
  Avançado: "bg-destructive/15 text-destructive",
};

function Tiragens() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14">
      <header className="text-center">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">
          Métodos de tiragem
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Comece pela carta do dia e evolua até o Grande Tableau. Antes de tirar,
          embaralhe pensando na sua pergunta.
        </p>
      </header>

      <div className="mt-12 space-y-6">
        {spreads.map((spread) => (
          <article
            key={spread.name}
            className="rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
          >
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-display text-2xl font-semibold">{spread.name}</h2>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${levelStyle[spread.level]}`}
              >
                {spread.level}
              </span>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {spread.cards} {spread.cards === 1 ? "carta" : "cartas"}
              </span>
            </div>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {spread.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {spread.positions.map((pos) => (
                <span
                  key={pos}
                  className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {pos}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <aside className="gold-glow mt-12 rounded-2xl border border-primary/30 bg-card p-7 text-center">
        <h2 className="font-display text-2xl font-semibold">Como combinar as cartas</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          A mágica do baralho cigano está nas combinações. Leia as cartas como uma frase,
          da esquerda para a direita:
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm">
          <span className="rounded-lg bg-secondary px-3 py-2">🐎 Cavaleiro (notícias)</span>
          <span className="text-primary">+</span>
          <span className="rounded-lg bg-secondary px-3 py-2">❤️ Coração (amor)</span>
          <span className="text-primary">=</span>
          <span className="rounded-lg bg-primary px-3 py-2 font-medium text-primary-foreground">
            chegada de um amor
          </span>
        </div>
      </aside>
    </main>
  );
}
