"use client";

import { useState } from "react";

interface Payment {
  id: string;
  recipient: string;
  amount: string;
  asset: string;
  status: "completed" | "pending" | "failed";
  txHash: string;
  createdAt: string;
}

export default function PaymentsPage() {
  const [payments] = useState<Payment[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [asset, setAsset] = useState("native");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: Wire up to Stellium SDK — use StelliumClient.createPayment()
    setTimeout(() => setSubmitting(false), 1000);
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Payments</h1>
          <p className="mt-1 text-sm text-gray-400">
            Send and track Stellar payments.
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="rounded-lg bg-stellar-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-stellar-blue/80"
        >
          {showForm ? "Cancel" : "+ New Payment"}
        </button>
      </div>

      {/* Payment Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-8 rounded-xl border border-white/10 bg-stellar-dark p-6"
        >
          <h2 className="mb-4 text-lg font-semibold">Create Payment</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm text-gray-400">
                Recipient Address
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="G..."
                required
                className="w-full rounded-lg border border-white/10 bg-stellar-darker px-4 py-2.5 font-mono text-sm text-white placeholder-gray-500 focus:border-stellar-blue focus:outline-none focus:ring-1 focus:ring-stellar-blue/30"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-gray-400">
                Asset
              </label>
              <select
                value={asset}
                onChange={(e) => setAsset(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-stellar-darker px-4 py-2.5 text-sm text-white focus:border-stellar-blue focus:outline-none focus:ring-1 focus:ring-stellar-blue/30"
              >
                <option value="native">XLM (Native)</option>
                <option value="usdc">USDC</option>
              </select>
            </div>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div>
              <label className="mb-1.5 block text-sm text-gray-400">
                Amount
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  step="0.0000001"
                  min="0"
                  required
                  className="w-full rounded-lg border border-white/10 bg-stellar-darker px-4 py-2.5 text-white placeholder-gray-500 focus:border-stellar-blue focus:outline-none focus:ring-1 focus:ring-stellar-blue/30"
                />
                <span className="absolute right-3 top-2.5 text-sm text-gray-500">
                  {asset === "native" ? "XLM" : "USDC"}
                </span>
              </div>
            </div>
            <div className="flex items-end sm:col-span-2">
              <button
                type="submit"
                disabled={submitting}
                className="rounded-lg bg-stellar-blue px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stellar-blue/80 disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Send Payment"}
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Payments Table */}
      <div className="rounded-xl border border-white/10 bg-stellar-dark">
        <div className="border-b border-white/10 px-6 py-3">
          <div className="grid grid-cols-12 gap-4 text-xs font-medium uppercase tracking-wider text-gray-500">
            <span className="col-span-4">Recipient</span>
            <span className="col-span-2">Amount</span>
            <span className="col-span-2">Asset</span>
            <span className="col-span-2">Status</span>
            <span className="col-span-2">Date</span>
          </div>
        </div>
        {payments.length === 0 ? (
          <div className="px-6 py-16 text-center text-gray-500">
            <p className="text-sm">No payments yet</p>
            <p className="mt-1 text-xs text-gray-600">
              Click &quot;+ New Payment&quot; to send your first payment.
            </p>
          </div>
        ) : (
          payments.map((p) => (
            <div
              key={p.id}
              className="border-b border-white/5 px-6 py-4 transition-colors hover:bg-white/[0.02]"
            >
              <div className="grid grid-cols-12 gap-4 text-sm">
                <span className="col-span-4 truncate font-mono text-xs">
                  {p.recipient}
                </span>
                <span className="col-span-2 font-medium">{p.amount}</span>
                <span className="col-span-2 text-gray-400">{p.asset}</span>
                <span className="col-span-2">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-xs ${
                      p.status === "completed"
                        ? "bg-green-500/20 text-green-400"
                        : p.status === "pending"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {p.status}
                  </span>
                </span>
                <span className="col-span-2 text-xs text-gray-500">
                  {p.createdAt}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
