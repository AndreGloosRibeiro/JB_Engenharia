const services = [
  {
    title: "Caldeiras a vapor",
    desc: "Inspeção, testes e avaliação de segurança e eficiência operacional.",
  },
  {
    title: "Vasos de pressão",
    desc: "Integridade estrutural, acessórios de segurança e conformidade normativa.",
  },
  {
    title: "Silos rodoviários",
    desc: "Estrutura, sistemas de fixação e condições seguras de transporte.",
  },
  {
    title: "Linhas de gás",
    desc: "Testes de estanqueidade e avaliação de integridade do sistema.",
  },
  {
    title: "PSV e manômetros",
    desc: "Calibração e verificação para proteção e medição confiáveis.",
  },
  {
    title: "Laudos e consultoria",
    desc: "Documentação técnica detalhada e apoio em decisões de manutenção.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent-bright">
              Portfólio técnico
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
              Serviços focados em campo e norma
            </h2>
          </div>
          <p className="max-w-md text-slate-400">
            Cobrimos o que mais impacta paradas e segurança na indústria — sempre com critério de
            engenharia e rastreabilidade nos entregáveis.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-accent/25 hover:bg-white/[0.06]"
            >
              <h3 className="font-display text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
