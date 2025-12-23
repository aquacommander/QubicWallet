import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "Qubic Wallet",
  description:
    "Qubic native wallets, MetaMask, private seeds, and vault exports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-900 selection:bg-amber-200/60`}
      >
        <div className="relative flex min-h-screen flex-col bg-transparent">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-amber-100 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-amber-800 focus:shadow-lg focus:outline-none"
          >
            Skip to content
          </a>

          <header className="flex items-center justify-between px-6 py-5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            <span>Qubic Wallet Connect</span>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-800 shadow-sm">
              Secure link desk
            </span>
          </header>

          <div id="main-content" className="flex-1">
            {children}
          </div>

          <footer className="px-6 py-6 text-xs text-slate-500">
            Stay in control of your keys. Need help? Check the README.
          </footer>
        </div>
      </body>
    </html>
  );
}
