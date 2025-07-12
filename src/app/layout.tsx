import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prazwol Gupta - Full-Stack Developer & ML Engineer",
  description: "Professional portfolio of Prazwol Gupta, a Full-Stack Developer and Machine Learning Engineer specializing in scalable systems and AI-powered solutions.",
  keywords: "Full-Stack Developer, Machine Learning Engineer, Python, JavaScript, TypeScript, React, Next.js, AI, Portfolio",
  authors: [{ name: "Prazwol Gupta" }],
  creator: "Prazwol Gupta",
  openGraph: {
    title: "Prazwol Gupta - Full-Stack Developer & ML Engineer",
    description: "Professional portfolio showcasing experience in building scalable systems and AI-powered solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prazwol Gupta - Full-Stack Developer & ML Engineer",
    description: "Professional portfolio showcasing experience in building scalable systems and AI-powered solutions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
