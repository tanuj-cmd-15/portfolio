import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import ParticleGalaxy from "@/components/ParticleGalaxy";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Tushar Pawar | ML Engineer & Data Scientist",
  description: "Portfolio of Tushar Pawar — M.Tech candidate specializing in Deep Learning, Applied ML, and Full-Stack Development. Seeking ML Engineer, Data Scientist, or Data Engineer roles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={jetbrainsMono.variable}>
        <ParticleGalaxy />
        <Header />
        <main className="pt-[88px] xl:pt-[104px]">
          {children}
        </main>
      </body>
    </html>
  );
}
