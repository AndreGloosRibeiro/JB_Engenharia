import Image from "next/image";
import { assetUrl } from "@/lib/asset";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-14">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <Image
            src={assetUrl("/imagens/empresa.jpg")}
            alt="Equipe e estrutura JB Engenharia Industrial"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent" />
        </div>
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-bright">
            Quem somos
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
            Engenharia que fala a língua da sua planta
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            A JB Engenharia Industrial reúne experiência em inspeção e conformidade de equipamentos
            sob pressão. Não lidamos só com metal — lidamos com continuidade operacional, segurança
            de equipes e tranquilidade de gestores quando o assunto é NR-13 e exigências do MTE.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Nosso trabalho é traduzir norma em plano de ação: o que fazer agora, o que monitorar e
            como documentar para o próximo ciclo.
          </p>
        </div>
      </div>
    </section>
  );
}
