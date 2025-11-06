import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Providers } from "./providers";
import { PrimaryNavBar } from "../_components/navbar/PrimaryNavBar";

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PΛLΘDEX | Pokédex",
  description:
    "Pokédex custom completa con interfaz de usuario moderna tanto para ordenadores como para dispositivos móviles.",
  keywords:
    "pokémon,pokemon,pokédex,pokedex,palodex,how2palo,pokédex móvil,pokedex movil,pokédexmóvil,pokedexmovil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={roboto.className}>
      <body>
        <Providers>
          <main className="min-h-screen">
            <PrimaryNavBar />
            {children}
            <Analytics />
          </main>
        </Providers>
      </body>
    </html>
  );
}
