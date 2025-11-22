import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

import { ModalProvider } from "./context/ModalContext";
import RegisterModal from "./components/RegisterModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL('https://probe.sh'),
  title: "Probe | The Browser for Modern Engineering",
  description: "A high-performance browser built for developers. Native devtools, AI debugging, and zero-config workflow integrations.",
  keywords: ["browser", "developer tools", "web development", "debugging", "AI", "productivity"],
  authors: [{ name: "Probe Team" }],
  openGraph: {
    title: "Probe | The Browser for Modern Engineering",
    description: "A high-performance browser built for developers. Native devtools, AI debugging, and zero-config workflow integrations.",
    url: "https://probe.sh",
    siteName: "Probe",
    images: [
      {
        url: "/probe.png",
        width: 1200,
        height: 630,
        alt: "Probe Browser",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Probe | The Browser for Modern Engineering",
    description: "A high-performance browser built for developers. Native devtools, AI debugging, and zero-config workflow integrations.",
    images: ["/probe.png"],
    creator: "@probebrowser",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased bg-[#050505] text-white selection:bg-purple-500/30`}
        suppressHydrationWarning
      >
        <ModalProvider>
          <Navbar />
          {children}
          <RegisterModal />
        </ModalProvider>
      </body>
    </html>
  );
}
