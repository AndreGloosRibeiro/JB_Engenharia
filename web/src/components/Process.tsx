const steps = [
  {
    step: "01",
    title: "Diagnóstico",
    text: "Entendemos sua planta, equipamentos críticos e prazos regulatórios.",
  },
  {
    step: "02",
    title: "Plano MTE / NR-13",
    text: "Montamos cronograma, responsabilidades e entregáveis com clareza.",
  },
  {
    step: "03",
    title: "Execução em campo",
    text: "Inspeções e testes com mínima interferência na operação.",
  },
  {
    step: "04",
    title: "Laudo e acompanhamento",
    text: "Documentação para arquivo e próximos ciclos — com canal direto com a JB.",
  },
];

export function Process() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-24 border-y border-white/10 bg-gradient-to-b from-brand-900/30 to-brand-950 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-bright">
            Fluxo transparente
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
            Como trabalhamos com você
          </h2>
          <p className="mt-4 text-slate-400">
            Um processo enxuto, pensado para indústria: menos reunião vazia, mais execução e
            evidência documental.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.step}
              className="relative rounded-2xl border border-white/10 bg-brand-950/80 p-6 pt-12"
            >
              <span className="absolute left-6 top-6 font-display text-4xl font-bold text-white/10">
                {s.step}
              </span>
              {i < steps.length - 1 && (
                <span
                  className="absolute -right-3 top-1/2 hidden h-0.5 w-6 -translate-y-1/2 bg-gradient-to-r from-accent/50 to-transparent lg:block"
                  aria-hidden
                />
              )}
              <h3 className="font-display text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
