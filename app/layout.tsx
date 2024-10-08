import type { Metadata } from "next";
import { Rum_Raisin } from "next/font/google";
import "./globals.css";
import MovieHeader from "@/components/header";
import MovieFooter from "@/components/footer";



const rumRaisin = Rum_Raisin({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie-Guesser",
  description: "A guesser AI for movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={rumRaisin.className}>
      <MovieHeader/>
        {children}
      <MovieFooter/>
      </body>
    </html>
  );
}
