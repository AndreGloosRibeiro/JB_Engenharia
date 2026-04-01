"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  { src: "/imagens/caldeira.jpg", alt: "Inspeção em caldeira industrial" },
  { src: "/imagens/empresa.jpg", alt: "JB Engenharia Industrial" },
  { src: "/imagens/tubulação.jpg", alt: "Tubulação industrial" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1.2s] ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/90 via-brand-950/75 to-brand-950" />
        <div className="absolute inset-0 bg-hero-mesh opacity-90" />
        <div className="absolute inset-0 bg-grid-pattern bg-[length:48px_48px] opacity-[0.15]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-16 pt-8 text-center md:pb-24">
        <p
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-bright/95 md:text-sm"
          style={{ animationDelay: "0.1s" }}
        >
          NR-13 · Inspeção · Conformidade
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white text-balance md:text-6xl md:leading-[1.08]">
          Sua operação em dia com a{" "}
          <span className="bg-gradient-to-r from-white via-accent-bright to-amber-200 bg-clip-text text-transparent">
            NR-13
          </span>
          , sem surpresas no MTE.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
          Planejamento técnico completo, laudos e inspeções para caldeiras, vasos de pressão e
          equipamentos críticos — para você focar na produção enquanto cuidamos da conformidade.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#contato"
            className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-accent to-amber-400 px-8 py-3.5 text-base font-semibold text-brand-950 shadow-xl shadow-amber-500/25 transition hover:scale-[1.02] hover:shadow-amber-500/35 sm:w-auto"
          >
            Solicitar diagnóstico gratuito
          </Link>
          <Link
            href="#mte-nr13"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-base font-medium text-white backdrop-blur transition hover:bg-white/10 sm:w-auto"
          >
            Como funciona o plano MTE
          </Link>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            { k: "Inspeções", v: "NR-13 ponta a ponta" },
            { k: "Laudos", v: "Rastreáveis e claros" },
            { k: "Suporte", v: "Especialista no WhatsApp" },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left backdrop-blur-sm"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">{item.k}</p>
              <p className="mt-1 font-medium text-white">{item.v}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-float">
        <div className="h-8 w-5 rounded-full border-2 border-white/30 p-1">
          <div className="mx-auto h-1.5 w-1 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
