import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../styles.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "R&A Services | Manutenção, infraestrutura e tecnologia no Rio de Janeiro",
  description: "Multisserviços residenciais e corporativos no Rio: elétrica, hidráulica, drywall, redes, Smart Home, Home Office e automação. Um único time, solução completa.",
  authors: [{ name: "Lovable" }],
  openGraph: {
    title: "R&A Services | Infraestrutura + Tecnologia",
    description: "Da elétrica ao Home Office inteligente: resolvemos tudo com agilidade, qualidade e tecnologia.",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@Lovable",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
