import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hashini Abeyrathne | Portfolio",
  description:
    "Portfolio of Hashini Abeyrathne — SLIIT Undergraduate Student specialized in Information Technology. Crafting clean, minimal & creative digital experiences.",
  keywords: [
    "Hashini Abeyrathne",
    "Portfolio",
    "Web Developer",
    "SLIIT",
    "Information Technology",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Hashini Abeyrathne" }],
  openGraph: {
    title: "Hashini Abeyrathne | Portfolio",
    description:
      "SLIIT Undergraduate Student specialized in Information Technology",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grain`}
      >
        {children}
      </body>
    </html>
  );
}