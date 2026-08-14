"use client";

import { useState } from "react";
import { useWallet } from "@/lib/wallet-context";
import { useToast } from "@/lib/toast-context";

export function WalletConnect() {
  const { connected, publicKey, connect, disconnect } = useWallet();
  const { addToast } = useToast();

  const handleConnect = async () => {
    try {
      await connect();
      addToast("success", "Wallet connected successfully!");
    } catch {
      addToast("error", "Failed to connect wallet");
    }
  };

  const handleDisconnect = () => {
    disconnect();
    addToast("info", "Wallet disconnected");
  };

  if (!connected) {
    return (
      <button
        onClick={handleConnect}
import { LoadingButton } from "@/components/LoadingSpinner";

export function WalletConnect() {
  const { connected, publicKey, connect, disconnect } = useWallet();
  const [connecting, setConnecting] = useState(false);

  const handleConnect = async () => {
    setConnecting(true);
    try {
      await connect();
    } finally {
      setConnecting(false);
    }
  };

  if (!connected) {
    return (
      <LoadingButton
        onClick={handleConnect}
        loading={connecting}
        loadingText="Connecting..."
        className="rounded-lg bg-stellar-blue px-4 py-2 text-sm font-medium text-white hover:bg-stellar-blue/80"
      >
        Connect Wallet
      </LoadingButton>
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
        onClick={handleDisconnect}
        className="text-xs text-gray-400 hover:text-white"
      >
        Disconnect
      </button>
    </div>
  );
}
