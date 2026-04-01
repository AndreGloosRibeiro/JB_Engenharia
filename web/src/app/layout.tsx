import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/imagens/logo.png",
  },
  title: "JB Engenharia Industrial | NR-13 e planejamento junto ao MTE",
  description:
    "Inspeção de caldeiras, vasos de pressão e equipamentos sob NR-13. Planejamento alinhado ao MTE para sua empresa operar com segurança e tranquilidade.",
  keywords: [
    "NR-13",
    "engenharia industrial",
    "inspeção caldeira",
    "vaso de pressão",
    "MTE",
    "Campinas",
  ],
  openGraph: {
    title: "JB Engenharia Industrial",
    description:
      "Segurança em cada detalhe. NR-13 e conformidade sem dor de cabeça.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${outfit.variable}`}>
      <body className="font-sans min-h-screen">{children}</body>
    </html>
  );
}
