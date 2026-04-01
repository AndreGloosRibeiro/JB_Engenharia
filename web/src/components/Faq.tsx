const faqs = [
  {
    q: "O que a JB Engenharia faz pela minha empresa na NR-13?",
    a: "Inspeções, testes e laudos para equipamentos sob pressão (caldeiras, vasos, tubulações, etc.), com critérios técnicos alinhados à regulamentação — para você saber o que está em conformidade, o que precisa de manutenção e o que documentar.",
  },
  {
    q: "Como o planejamento junto ao MTE me ajuda no dia a dia?",
    a: "Organizamos prazos, registros e responsabilidades para que fiscalizações e auditorias encontrem processo e histórico — reduzindo risco de autuação e surpresas com equipamento parado sem previsão.",
  },
  {
    q: "Vocês atendem fora da região?",
    a: "Atendimento é combinado por projeto. Fale com a gente pelo WhatsApp ou formulário de contato com cidade e tipo de equipamento que avaliamos a melhor forma de execução.",
  },
  {
    q: "Quanto tempo leva para emitir um laudo?",
    a: "Depende do escopo e da complexidade do equipamento. No diagnóstico inicial já alinhamos prazos e entregáveis com transparência.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-bright">
            Dúvidas comuns
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">FAQ</h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] open:bg-white/[0.05]"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-medium text-white transition group-open:border-b group-open:border-white/10">
                <span className="flex items-center justify-between gap-4 pr-2">
                  {item.q}
                  <span className="text-accent transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="px-5 pb-4 text-sm leading-relaxed text-slate-400">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
