"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Role = "user" | "bot";

type Msg = { id: string; role: Role; text: string };

const WA =
  "https://api.whatsapp.com/send/?phone=5519987120774&text=Ol%C3%A1%2C%20vim%20pelo%20chat%20do%20site%20sobre%20NR-13%2FMTE.&type=phone_number&app_absent=0";

function replyFor(text: string): string {
  const t = text.toLowerCase().trim();

  if (/^(oi|ol[aá]|bom dia|boa tarde|boa noite|hey|hello)\b/.test(t)) {
    return "Olá! Sou o assistente virtual da JB Engenharia. Posso explicar rapidamente sobre NR-13, planejamento alinhado ao MTE ou te encaminhar para um especialista no WhatsApp. O que você precisa hoje?";
  }
  if (t.includes("nr-13") || t.includes("nr13") || t.includes("norma")) {
    return "A NR-13 trata da segurança em instalações com caldeiras a vapor, vasos de pressão e suas interligações. Na JB fazemos inspeções, testes e laudos para você manter conformidade e segurança operacional — com clareza sobre prioridades e prazos.";
  }
  if (t.includes("mte") || t.includes("fiscaliza") || t.includes("auditor")) {
    return "O planejamento junto ao MTE significa ter cronograma, registros e responsabilidades organizados — para fiscalizações encontrarem processo e histórico, não improviso. Podemos montar esse fluxo junto com sua manutenção e documentação.";
  }
  if (
    t.includes("orçamento") ||
    t.includes("orcamento") ||
    t.includes("preço") ||
    t.includes("preco") ||
    t.includes("valor") ||
    t.includes("proposta")
  ) {
    return "Para orçamento precisamos de escopo: tipo de equipamento, quantidade aproximada e cidade. O caminho mais rápido é falar no WhatsApp com um técnico — clique em “Falar no WhatsApp” abaixo ou use o botão verde.";
  }
  if (t.includes("caldeira") || t.includes("vaso") || t.includes("pressão") || t.includes("pressao")) {
    return "Atendemos caldeiras a vapor, vasos de pressão, tubulações, válvulas (PSV), manômetros e mais — sempre com foco em segurança e conformidade. Quer detalhar qual equipamento você tem na planta?";
  }
  if (t.includes("contato") || t.includes("whatsapp") || t.includes("telefone")) {
    return "Você pode falar com a gente pelo WhatsApp (19) 98712-0774 ou e-mail jbengenharia9@gmail.com. Se preferir, use o botão verde abaixo para abrir uma conversa já com contexto de NR-13/MTE.";
  }
  if (t.includes("obrigad")) {
    return "Por nada! Se pintar outra dúvida sobre NR-13 ou planejamento MTE, é só escrever aqui de novo.";
  }

  return "Posso ajudar com NR-13, planejamento junto ao MTE, tipos de inspeção ou encaminhar você ao WhatsApp. Experimente perguntar: “O que preciso para estar em dia com a NR-13?” ou clique em uma das opções rápidas.";
}

const quick = [
  "O que é NR-13?",
  "Como o MTE se encaixa?",
  "Quero um orçamento",
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "0",
      role: "bot",
      text: "Sou o assistente JB. Pergunte sobre NR-13, planejamento MTE ou peça para falar com um especialista.",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  const push = useCallback((role: Role, text: string) => {
    setMessages((m) => [...m, { id: crypto.randomUUID(), role, text }]);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = useCallback(
    (raw: string) => {
      const text = raw.trim();
      if (!text) return;
      push("user", text);
      setInput("");
      setTimeout(() => push("bot", replyFor(text)), 400);
    },
    [push],
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-amber-400 text-brand-950 shadow-2xl shadow-amber-500/30 transition hover:scale-105 md:bottom-8 md:right-8 ${
          open ? "pointer-events-none scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Abrir chat"
      >
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Assistente virtual"
        className={`fixed bottom-5 right-5 z-[60] flex max-h-[min(560px,85vh)] w-[min(400px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-white/15 bg-brand-900/95 shadow-2xl backdrop-blur-xl transition-all duration-300 md:bottom-8 md:right-8 ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 bg-brand-950/80 px-4 py-3">
          <div>
            <p className="font-display text-sm font-semibold text-white">Assistente JB</p>
            <p className="text-xs text-slate-500">NR-13 · MTE · Orçamentos</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white"
            aria-label="Fechar chat"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto px-3 py-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-brand-600 text-white"
                    : "border border-white/10 bg-brand-950/80 text-slate-200"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <div className="border-t border-white/10 px-3 py-2">
          <div className="mb-2 flex flex-wrap gap-1.5">
            {quick.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => send(q)}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300 hover:bg-white/10"
              >
                {q}
              </button>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-2.5 py-1 text-xs font-medium text-white hover:brightness-110"
            >
              WhatsApp
            </a>
          </div>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-brand-950/80 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/40"
            />
            <button
              type="submit"
              className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-brand-950 hover:brightness-110"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
