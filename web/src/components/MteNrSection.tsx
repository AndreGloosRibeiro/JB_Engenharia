const pillars = [
  {
    title: "Planejamento alinhado ao MTE",
    body: "Cronograma de inspeções, documentação e registros pensados para auditorias e fiscalizações — sem correria de última hora.",
  },
  {
    title: "NR-13 sem “achismo”",
    body: "Critérios técnicos aplicados a caldeiras, vasos, tubulações e válvulas, com laudos que sustentam decisões de manutenção e segurança.",
  },
  {
    title: "Menos risco operacional",
    body: "Identificamos não conformidades antes que virem parada de linha, multa ou incidente. Transparência no que é urgente e no que pode esperar.",
  },
];

export function MteNrSection() {
  return (
    <section id="mte-nr13" className="relative scroll-mt-24 border-t border-white/10 bg-brand-900/40 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-bright">
            Tranquilidade para o gestor
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Planejamento MTE para você não precisar se preocupar com a NR-13
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            A regulamentação existe para proteger pessoas e patrimônio. Nós traduzimos regras em
            rotina: o que inspecionar, quando documentar e como manter sua planta em conformidade —
            com linguagem clara para sua equipe e para o órgão competente.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-6 transition hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-accent to-amber-200 transition-all group-hover:w-20" />
              <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-slate-400 leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-white/20 bg-brand-950/50 p-6 text-center md:p-8">
          <p className="text-slate-300 md:text-lg">
            <strong className="text-white">Resumo:</strong> você contrata engenharia que entende
            campo + norma. A gente organiza o ciclo de vida dos seus equipamentos sob pressão para
            que NR-13 e exigências do MTE deixem de ser “aquela pendência” e virem processo.
          </p>
        </div>
      </div>
    </section>
  );
}
