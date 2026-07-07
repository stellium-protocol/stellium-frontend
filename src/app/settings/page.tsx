"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [escrowContract, setEscrowContract] = useState("");
  const [paymentContract, setPaymentContract] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");
  const [webhookSecret, setWebhookSecret] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Persist settings to localStorage or backend
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="mt-1 text-sm text-gray-400">
          Configure contract addresses, webhooks, and preferences.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        {/* Contract Addresses */}
        <div className="rounded-xl border border-white/10 bg-stellar-dark p-6">
          <h2 className="mb-4 text-lg font-semibold">Contract Addresses</h2>
          <p className="mb-4 text-sm text-gray-400">
            Enter the deployed Soroban contract addresses on the Stellar network.
          </p>
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm text-gray-400">
                Escrow Contract ID
              </label>
              <input
                type="text"
                value={escrowContract}
                onChange={(e) => setEscrowContract(e.target.value)}
                placeholder="C... (Soroban contract address)"
                className="w-full rounded-lg border border-white/10 bg-stellar-darker px-4 py-2.5 font-mono text-sm text-white placeholder-gray-500 focus:border-stellar-blue focus:outline-none focus:ring-1 focus:ring-stellar-blue/30"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-gray-400">
                Payment Contract ID
              </label>
              <input
                type="text"
                value={paymentContract}
                onChange={(e) => setPaymentContract(e.target.value)}
                placeholder="C... (Soroban contract address)"
                className="w-full rounded-lg border border-white/10 bg-stellar-darker px-4 py-2.5 font-mono text-sm text-white placeholder-gray-500 focus:border-stellar-blue focus:outline-none focus:ring-1 focus:ring-stellar-blue/30"
              />
            </div>
          </div>
        </div>

        {/* Webhook Config */}
        <div className="rounded-xl border border-white/10 bg-stellar-dark p-6">
          <h2 className="mb-4 text-lg font-semibold">Webhooks</h2>
          <p className="mb-4 text-sm text-gray-400">
            Receive notifications when payments or escrow events occur.
          </p>
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm text-gray-400">
                Webhook URL
              </label>
              <input
                type="url"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                placeholder="https://your-app.com/webhooks/stellium"
                className="w-full rounded-lg border border-white/10 bg-stellar-darker px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-stellar-blue focus:outline-none focus:ring-1 focus:ring-stellar-blue/30"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-gray-400">
                Webhook Secret
              </label>
              <input
                type="password"
                value={webhookSecret}
                onChange={(e) => setWebhookSecret(e.target.value)}
                placeholder="whsec_..."
                className="w-full rounded-lg border border-white/10 bg-stellar-darker px-4 py-2.5 font-mono text-sm text-white placeholder-gray-500 focus:border-stellar-blue focus:outline-none focus:ring-1 focus:ring-stellar-blue/30"
              />
              <p className="mt-1 text-xs text-gray-500">
                Used to verify webhook signatures. Use the{" "}
                <code className="text-gray-400">verifyWebhookSignature()</code>{" "}
                function from the SDK.
              </p>
            </div>
          </div>
        </div>

        {/* Network Info */}
        <div className="rounded-xl border border-white/10 bg-stellar-dark p-6">
          <h2 className="mb-4 text-lg font-semibold">Network</h2>
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-green-400"></span>
            <span className="text-sm text-gray-300">Stellar Testnet</span>
            <span className="rounded bg-white/5 px-2 py-0.5 text-xs text-gray-500">
              RPC: soroban-testnet.stellar.org
            </span>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="rounded-lg bg-stellar-blue px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stellar-blue/80"
          >
            Save Settings
          </button>
          {saved && (
            <span className="text-sm text-green-400">Settings saved!</span>
          )}
        </div>
      </form>
    </div>
  );
}
