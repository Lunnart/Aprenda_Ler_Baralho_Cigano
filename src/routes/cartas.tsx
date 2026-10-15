import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { lenormandCards, type LenormandCard } from "@/lib/lenormand";

export const Route = createFileRoute("/cartas")({
  head: () => ({
    meta: [
      { title: "As 36 Cartas — Cigano" },
      {
        name: "description",
        content:
          "Todas as 36 cartas do baralho cigano com significados completos: amor, trabalho e saúde.",
      },
      { property: "og:title", content: "As 36 Cartas do Baralho Cigano" },
      {
        property: "og:description",
        content: "Significados completos de cada carta: amor, trabalho e saúde.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Cartas,
});

function Cartas() {
  const [selected, setSelected] = useState<LenormandCard | null>(null);

  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <header className="text-center">
        <h1 className="font-display text-4xl font-semibold md:text-5xl">
          As 36 cartas
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Toque em uma carta para ver o significado completo no amor, no trabalho e na
          saúde.
        </p>
      </header>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {lenormandCards.map((card) => (
          <button
            key={card.number}
            onClick={() => setSelected(card)}
            className="group rounded-2xl border border-border bg-card p-4 text-center transition-all hover:-translate-y-1 hover:border-primary/60 hover:gold-glow"
          >
            <span className="text-xs font-medium text-muted-foreground">
              {card.number}
            </span>
            <span className="my-2 block text-4xl transition-transform group-hover:scale-110">
              {card.symbol}
            </span>
            <span className="font-display block text-lg font-semibold leading-tight">
              {card.name}
            </span>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <article
            className="gold-glow max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-primary/30 bg-card p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-sm font-medium text-primary">
                  Carta {selected.number}
                </span>
                <h2 className="font-display mt-1 text-3xl font-semibold">
                  {selected.symbol} {selected.name}
                </h2>
              </div>
              <button
                onClick={() => setSelected(null)}
                aria-label="Fechar"
                className="rounded-full border border-border px-3 py-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {selected.keywords.map((k) => (
                <span
                  key={k}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {k}
                </span>
              ))}
            </div>

            <p className="mt-5 leading-relaxed text-muted-foreground">
              {selected.meaning}
            </p>

            <dl className="mt-6 space-y-4">
              <div className="rounded-xl bg-secondary/60 p-4">
                <dt className="font-display font-semibold text-primary">❤️ Amor</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{selected.love}</dd>
              </div>
              <div className="rounded-xl bg-secondary/60 p-4">
                <dt className="font-display font-semibold text-primary">💼 Trabalho</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{selected.work}</dd>
              </div>
              <div className="rounded-xl bg-secondary/60 p-4">
                <dt className="font-display font-semibold text-primary">🌿 Saúde</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{selected.health}</dd>
              </div>
            </dl>
          </article>
        </div>
      )}
    </main>
  );
}
