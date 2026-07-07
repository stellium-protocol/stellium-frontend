"use client";

import { useState, useEffect } from "react";

export function WalletConnect() {
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);

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

  if (!connected) {
    return (
      <button
        onClick={connect}
        className="rounded-lg bg-stellar-blue px-4 py-2 text-sm font-medium text-white hover:bg-stellar-blue/80"
      >
        Connect Wallet
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
        Connected
      </span>
      <span className="font-mono text-sm text-gray-300">
        {publicKey?.slice(0, 6)}...{publicKey?.slice(-4)}
      </span>
      <button
        onClick={disconnect}
        className="text-xs text-gray-400 hover:text-white"
      >
        Disconnect
      </button>
    </div>
  );
}
