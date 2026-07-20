"use client";

import { useWallet } from "@/lib/wallet-context";

export function WalletConnect() {
  const { connected, publicKey, connect, disconnect } = useWallet();

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
