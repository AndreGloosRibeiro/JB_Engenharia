import Image from "next/image";
import Link from "next/link";
import { assetUrl } from "@/lib/asset";

const waUrl =
  "https://api.whatsapp.com/send/?phone=5519987120774&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20NR-13%20e%20planejamento%20MTE.&type=phone_number&app_absent=0";

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-24 border-t border-white/10 bg-brand-900/35 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent-bright">
              Próximo passo
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
              Vamos organizar sua NR-13?
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Conte brevemente sua planta e equipamentos. Retornamos com orientação inicial e
              próximos passos — sem compromisso.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-green-500/20 transition hover:brightness-110"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp (19) 98712-0774
              </Link>
              <a
                href="mailto:jbengenharia9@gmail.com?subject=Contato%20site%20JB%20Engenharia"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                <span className="relative h-5 w-5">
                  <Image src={assetUrl("/imagens/email.png")} alt="" fill className="object-contain" />
                </span>
                jbengenharia9@gmail.com
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-brand-950/50 shadow-xl">
            <div className="aspect-video w-full">
              <iframe
                title="Localização JB Engenharia Industrial"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14691.989642684035!2d-47.5174079!3d-22.9871227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c61db669354ff3%3A0xc0fe04407e7f8d1f!2sJB%20Engenharia%20Industrial%20e%20Inspe%C3%A7%C3%A3o%20NR-13!5e0!3m2!1spt-BR!2sbr!4v1726690907669!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[240px] w-full"
              />
            </div>
            <p className="border-t border-white/10 px-4 py-3 text-center text-sm text-slate-500">
              JB Engenharia Industrial e Inspeção NR-13
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
