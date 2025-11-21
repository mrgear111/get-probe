import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import LenisProvider from "./components/LenisProvider";
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

export const metadata: Metadata = {
  title: "Probe | The Browser for Modern Engineering",
  description: "A high-performance browser built for developers. Native devtools, AI debugging, and zero-config workflow integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white antialiased selection:bg-blue-500/30">
        <LenisProvider>
          <ModalProvider>
            <Navbar />
            <main className="flex flex-col min-h-screen">{children}</main>
            <RegisterModal />
          </ModalProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
