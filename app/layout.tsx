import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { StructuredData } from "./_components/structured-data";
import { SITE_URL, business } from "./_lib/seo";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Maxim Construction | Construction Management & Factory Maintenance in St. Louis",
    template: "%s | Maxim Construction",
  },
  description:
    "St. Louis construction management, factory and plant maintenance, office renovation, and specialty skilled work — millwright, machine rigging and moving — for commercial and industrial clients.",
  applicationName: "Maxim Construction",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Maxim Construction",
    locale: "en_US",
    url: SITE_URL,
    title:
      "Maxim Construction | Construction Management & Factory Maintenance in St. Louis",
    description:
      "Construction management, factory maintenance, office renovation, and specialty skilled work for commercial and industrial clients in the St. Louis area.",
    images: [
      {
        url: business.ogImage,
        width: 512,
        height: 512,
        alt: "Maxim Construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Maxim Construction | Construction Management & Factory Maintenance in St. Louis",
    description:
      "Construction management, factory maintenance, office renovation, and specialty skilled work for commercial and industrial clients in the St. Louis area.",
    images: [business.ogImage],
  },
  icons: {
    icon: "/Maxim+Construction+Management+-+Heavy+Lifting+&+Millwrights+(1).webp",
    apple:
      "/Maxim+Construction+Management+-+Heavy+Lifting+&+Millwrights+(1).webp",
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
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-brand-light font-body text-brand-gray">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
