"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface WalletContextType {
  connected: boolean;
  publicKey: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
  signTransaction: (xdr: string) => Promise<string>;
}

const WalletContext = createContext<WalletContextType | null>(null);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const freighter = (window as any).freighter;
    if (!freighter) return;

    freighter.isConnected().then((isConnected: boolean) => {
      if (isConnected) {
        freighter.getPublicKey().then((key: string) => {
          setPublicKey(key);
          setConnected(true);
        });
      }
    });
  }, []);

  const connect = async () => {
    if (typeof window === "undefined") return;

    const freighter = (window as any).freighter;
    if (!freighter) {
      alert("Please install the Freighter wallet extension");
      return;
    }

    try {
      const key = await freighter.getPublicKey();
      setPublicKey(key);
      setConnected(true);
    } catch (err) {
      console.error("Failed to connect wallet:", err);
    }
  };

  const disconnect = () => {
    setConnected(false);
    setPublicKey(null);
  };

  const signTransaction = async (xdr: string): Promise<string> => {
    const freighter = (window as any).freighter;
    if (!freighter) throw new Error("Freighter not installed");

    const signed = await freighter.signTransaction(xdr, {
      networkPassphrase: "Test SDF Network ; September 2015",
    });
    return signed;
  };

  return (
    <WalletContext.Provider
      value={{ connected, publicKey, connect, disconnect, signTransaction }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet must be used within WalletProvider");
  return ctx;
}
