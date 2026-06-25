import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "Maxim Construction | Building Excellence From Concept",
    template: "%s | Maxim Construction",
  },
  description:
    "Construction management, factory maintenance, office renovation, specialty skills, and bid document access for high-stakes commercial and industrial work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-brand-light font-body text-brand-gray">
        {children}
      </body>
    </html>
  );
}
