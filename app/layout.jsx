import { Jost } from "next/font/google";
import "./globals.css";
import "../styles/tokens.css";

//components
import Header from "@/components/Header";
import ParticleGalaxy from "@/components/ParticleGalaxy";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={jost.variable} style={{ fontFamily: 'var(--font-jost), var(--font-family-primary)' }}>
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <ParticleGalaxy />
        <Header />
        <main id="main-content" className="pt-[88px] xl:pt-[104px]">
          {children}
        </main>
      </body>
    </html>
  );
}
