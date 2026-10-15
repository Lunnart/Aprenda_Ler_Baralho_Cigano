import { Link, createFileRoute } from "@tanstack/react-router";
import { learningTips } from "@/lib/lenormand";
import heroImage from "@/assets/hero-lenormand.jpg";
import cardBack from "@/assets/card-back.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cigano — Aprenda a Ler Baralho Cigano" },
      {
        name: "description",
        content:
          "Guia interativo do baralho cigano: as 36 cartas com significados, métodos de tiragem e quiz para praticar.",
      },
      { property: "og:title", content: "Cigano — Aprenda a Ler Baralho Cigano" },
      {
        property: "og:description",
        content: "As 36 cartas explicadas, tiragens passo a passo e quiz interativo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImage}
          alt="Cartas de baralho cigano sobre veludo à luz de velas"
          width={1600}
          height={912}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-28 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            A arte da leitura
          </p>
          <h1 className="font-display max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
            Aprenda a ler o <span className="text-gradient-gold">baralho cigano</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Conheça as 36 cartas, seus significados e combinações, aprenda as tiragens
            clássicas e pratique com o quiz interativo.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/cartas"
              className="gold-glow rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              Conhecer as 36 cartas
            </Link>
            <Link
              to="/quiz"
              className="rounded-full border border-primary/50 px-7 py-3 font-medium text-primary transition-colors hover:bg-secondary"
            >
              Testar meus conhecimentos
            </Link>
          </div>
        </div>
      </section>

      {/* O que é */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              O que é o baralho cigano?
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Também conhecido como Lenormand, o baralho cigano tem 36 cartas com
              símbolos do cotidiano — o navio, a casa, a chave, o coração. Diferente do
              tarô, ele é direto e prático: as cartas são lidas em conjunto, formando
              frases que respondem perguntas do dia a dia com clareza.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Qualquer pessoa pode aprender. Com algumas semanas de prática diária, você
              já consegue fazer tiragens simples e interpretar as mensagens das cartas.
            </p>
          </div>
          <img
            src={cardBack}
            alt="Verso ornamentado de uma carta de baralho cigano"
            width={220}
            height={330}
            loading="lazy"
            className="gold-glow mx-auto w-44 rotate-3 rounded-2xl md:w-56"
          />
        </div>
      </section>

      {/* Dicas */}
      <section className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <h2 className="font-display text-center text-3xl font-semibold md:text-4xl">
            Quatro segredos para aprender rápido
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {learningTips.map((tip, i) => (
              <article
                key={tip.title}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <span className="font-display text-3xl font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-3 text-xl font-semibold">{tip.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {tip.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">
          Comece pelas cartas
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          O primeiro passo é conhecer cada uma das 36 cartas. Depois, pratique com o quiz.
        </p>
        <Link
          to="/cartas"
          className="gold-glow mt-8 inline-block rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition-transform hover:scale-105"
        >
          Explorar as cartas
        </Link>
      </section>
    </main>
  );
}
