import Image from "next/image";
import { assetUrl } from "@/lib/asset";

const clients = [
  { src: assetUrl("/imagens/Imagem 7.jpg"), alt: "Cliente parceiro" },
  { src: assetUrl("/imagens/Imagem10.png"), alt: "Nippokar" },
  { src: assetUrl("/imagens/UNITEC.png"), alt: "UNITEC" },
  { src: assetUrl("/imagens/Imagem 2.png"), alt: "Bambala" },
  { src: assetUrl("/imagens/Imagem1.png"), alt: "Borgstena" },
];

export function Clients() {
  const loop = [...clients, ...clients];

  return (
    <section id="clientes" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
          Quem confia na JB
        </p>
        <h2 className="mt-2 text-center font-display text-2xl font-bold text-white md:text-3xl">
          Indústrias que exigem padrão de segurança
        </h2>
      </div>

      <div className="relative mt-10 w-full overflow-hidden py-8 md:py-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-950 via-brand-950/90 to-transparent md:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-950 via-brand-950/90 to-transparent md:w-36" />

        <div
          className="flex w-max animate-marquee gap-14 will-change-transform md:gap-24 lg:gap-28"
          aria-hidden
        >
          {loop.map((c, i) => (
            <div
              key={`${c.src}-${i}`}
              className="relative h-24 w-52 shrink-0 md:h-32 md:w-64 lg:h-36 lg:w-80"
            >
              <Image
                src={c.src}
                alt={i < clients.length ? c.alt : ""}
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 208px, (max-width: 1024px) 256px, 320px"
                priority={i < 3}
              />
            </div>
          ))}
        </div>
      </div>

      <p className="sr-only">
        Logotipos de clientes: {clients.map((c) => c.alt).filter(Boolean).join(", ")}.
      </p>
    </section>
  );
}
