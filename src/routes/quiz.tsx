import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { lenormandCards } from "@/lib/lenormand";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Quiz — Cigano" },
      {
        name: "description",
        content:
          "Teste seus conhecimentos sobre as 36 cartas do baralho cigano com um quiz interativo.",
      },
      { property: "og:title", content: "Quiz do Baralho Cigano" },
      {
        property: "og:description",
        content: "Quanto você já sabe sobre as 36 cartas? Teste agora.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Quiz,
});

interface Question {
  prompt: string;
  symbol: string;
  options: string[];
  answer: string;
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}

function buildQuestions(count: number): Question[] {
  return shuffle(lenormandCards)
    .slice(0, count)
    .map((card) => {
      const distractors = shuffle(lenormandCards.filter((c) => c.name !== card.name))
        .slice(0, 3)
        .map((c) => c.name);
      return {
        prompt: `Qual é o nome da carta ${card.number}?`,
        symbol: card.symbol,
        options: shuffle([card.name, ...distractors]),
        answer: card.name,
      };
    });
}

const TOTAL = 10;

function Quiz() {
  const [questions, setQuestions] = useState<Question[]>(() => buildQuestions(TOTAL));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  const question = questions[current]!;

  const progress = useMemo(
    () => Math.round(((finished ? TOTAL : current) / TOTAL) * 100),
    [current, finished]
  );

  function pick(option: string) {
    if (picked) return;
    setPicked(option);
    if (option === question.answer) setScore((s) => s + 1);
  }

  function next() {
    if (current + 1 >= TOTAL) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setPicked(null);
    }
  }

  function restart() {
    setQuestions(buildQuestions(TOTAL));
    setCurrent(0);
    setScore(0);
    setPicked(null);
    setFinished(false);
  }

  if (finished) {
    const pct = (score / TOTAL) * 100;
    const message =
      pct >= 80
        ? "Impressionante! Você já lê as cartas com confiança. 🌟"
        : pct >= 50
          ? "Muito bem! Continue praticando as combinações."
          : "Bom começo! Revisite as cartas e tente de novo.";
    return (
      <main className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
        <span className="text-6xl">🔮</span>
        <h1 className="font-display mt-6 text-4xl font-semibold">Resultado</h1>
        <p className="mt-4 text-5xl font-bold text-primary">
          {score}/{TOTAL}
        </p>
        <p className="mt-4 text-muted-foreground">{message}</p>
        <button
          onClick={restart}
          className="gold-glow mt-8 rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition-transform hover:scale-105"
        >
          Jogar novamente
        </button>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-14">
      <header className="text-center">
        <h1 className="font-display text-4xl font-semibold">Quiz das cartas</h1>
        <p className="mt-2 text-muted-foreground">
          Pergunta {current + 1} de {TOTAL} · {score} acertos
        </p>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <section className="gold-glow mt-10 rounded-3xl border border-border bg-card p-8 text-center">
        <span className="block text-7xl">{question.symbol}</span>
        <h2 className="font-display mt-4 text-2xl font-semibold">{question.prompt}</h2>

        <div className="mt-8 grid gap-3">
          {question.options.map((option) => {
            const isAnswer = option === question.answer;
            const isPicked = option === picked;
            let style =
              "border-border bg-background hover:border-primary/60 hover:bg-secondary";
            if (picked && isAnswer)
              style = "border-primary bg-primary/15 text-primary";
            else if (picked && isPicked)
              style = "border-destructive bg-destructive/15 text-destructive";
            else if (picked) style = "border-border bg-background opacity-50";
            return (
              <button
                key={option}
                onClick={() => pick(option)}
                disabled={!!picked}
                className={`rounded-xl border px-5 py-3 font-medium transition-all ${style}`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {picked && (
          <button
            onClick={next}
            className="mt-8 rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            {current + 1 >= TOTAL ? "Ver resultado" : "Próxima pergunta"}
          </button>
        )}
      </section>
    </main>
  );
}
