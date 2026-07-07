import type { Metadata } from "next";
import "./globals.css";
import { WalletConnect } from "@/components/WalletConnect";

export const metadata: Metadata = {
  title: "Stellium — Stellar Payment Gateway",
  description: "Accept Stellar payments with escrow protection, webhooks, and analytics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-stellar-dark/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
            <div className="flex items-center gap-8">
              <a href="/" className="flex items-center gap-2 text-xl font-bold text-stellar-blue">
                <span className="inline-block h-6 w-6 rounded bg-stellar-blue/20 text-center text-sm leading-6">S</span>
                Stellium
              </a>
              <div className="flex gap-1">
                <a
                  href="/"
                  className="rounded-lg px-3 py-1.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  Dashboard
                </a>
                <a
                  href="/payments"
                  className="rounded-lg px-3 py-1.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  Payments
                </a>
                <a
                  href="/escrows"
                  className="rounded-lg px-3 py-1.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  Escrows
                </a>
                <a
                  href="/settings"
                  className="rounded-lg px-3 py-1.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  Settings
                </a>
              </div>
            </div>
            <WalletConnect />
          </div>
        </nav>
        <main className="mx-auto max-w-7xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
