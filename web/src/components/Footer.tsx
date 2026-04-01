import Image from "next/image";
import Link from "next/link";

const social = [
  {
    href: "https://www.facebook.com/people/JB-Engenharia-Industrial/100057637501497/",
    label: "Facebook",
    icon: "/imagens/facebook.png",
  },
  {
    href: "https://www.instagram.com/jb_engenharia_industrial?igsh=MWFiMzNpbzV6NXN6cg==",
    label: "Instagram",
    icon: "/imagens/instagram.png",
  },
  {
    href: "tel:+5519987120774",
    label: "Telefone",
    icon: "/imagens/telefone.png",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-950 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:items-start md:justify-between">
        <div className="relative h-24 w-56 shrink-0">
          <Image
            src="/imagens/Logo_inteiro.png"
            alt="JB Engenharia Industrial"
            fill
            className="object-contain object-left-top"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Redes</p>
          <ul className="mt-3 flex flex-wrap justify-center gap-6 md:justify-start">
            {social.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  target={s.href.startsWith("tel:") ? undefined : "_blank"}
                  rel={s.href.startsWith("tel:") ? undefined : "noopener noreferrer"}
                  className="flex flex-col items-center gap-1 text-slate-400 transition hover:text-white"
                >
                  <span className="relative h-10 w-10">
                    <Image src={s.icon} alt="" fill className="object-contain" />
                  </span>
                  <span className="text-xs">{s.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-4 pt-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} JB Engenharia Industrial. Todos os direitos reservados.
      </div>
    </footer>
  );
}
