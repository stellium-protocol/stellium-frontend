"use client";

import { useState } from "react";

interface Escrow {
  id: string;
  buyer: string;
  seller: string;
  amount: string;
  asset: string;
  status: "active" | "released" | "refunded" | "expired";
  timeout: string;
  createdAt: string;
}

export default function EscrowsPage() {
  const [escrows] = useState<Escrow[]>([]);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Escrows</h1>
          <p className="mt-1 text-sm text-gray-400">
            Manage escrow transactions — funds are locked until delivery is confirmed.
          </p>
        </div>
      </div>

      {/* Status Summary */}
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-white/10 bg-stellar-dark px-4 py-3">
          <p className="text-xs text-gray-500">Active</p>
          <p className="text-xl font-bold text-green-400">
            {escrows.filter((e) => e.status === "active").length}
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-stellar-dark px-4 py-3">
          <p className="text-xs text-gray-500">Released</p>
          <p className="text-xl font-bold text-blue-400">
            {escrows.filter((e) => e.status === "released").length}
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-stellar-dark px-4 py-3">
          <p className="text-xs text-gray-500">Refunded / Expired</p>
          <p className="text-xl font-bold text-gray-400">
            {escrows.filter((e) => e.status === "refunded" || e.status === "expired").length}
          </p>
        </div>
      </div>

      {/* Escrows Table */}
      <div className="rounded-xl border border-white/10 bg-stellar-dark">
        <div className="border-b border-white/10 px-6 py-3">
          <div className="grid grid-cols-12 gap-4 text-xs font-medium uppercase tracking-wider text-gray-500">
            <span className="col-span-1">ID</span>
            <span className="col-span-3">Seller</span>
            <span className="col-span-2">Amount</span>
            <span className="col-span-2">Status</span>
            <span className="col-span-2">Timeout</span>
            <span className="col-span-2 text-right">Actions</span>
          </div>
        </div>
        {escrows.length === 0 ? (
          <div className="px-6 py-16 text-center text-gray-500">
            <p className="text-sm">No escrows yet</p>
            <p className="mt-1 text-xs text-gray-600">
              Create an escrow via the SDK or API to get started.
            </p>
          </div>
        ) : (
          escrows.map((e) => (
            <div
              key={e.id}
              className="border-b border-white/5 px-6 py-4 transition-colors hover:bg-white/[0.02]"
            >
              <div className="grid grid-cols-12 items-center gap-4 text-sm">
                <span className="col-span-1 font-mono text-xs text-gray-400">
                  #{e.id}
                </span>
                <span className="col-span-3 truncate font-mono text-xs">
                  {e.seller}
                </span>
                <span className="col-span-2 font-medium">
                  {e.amount} <span className="text-gray-500">{e.asset}</span>
                </span>
                <span className="col-span-2">
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-xs ${
                      e.status === "active"
                        ? "bg-green-500/20 text-green-400"
                        : e.status === "released"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {e.status}
                  </span>
                </span>
                <span className="col-span-2 text-xs text-gray-500">
                  {e.timeout}
                </span>
                {/* TODO: Wire up to StelliumClient.releaseEscrow() / refundEscrow() */}
                <div className="col-span-2 flex justify-end gap-2">
                  {e.status === "active" && (
                    <>
                      <button className="rounded bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400 transition-colors hover:bg-green-500/20">
                        Release
                      </button>
                      <button className="rounded bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400 transition-colors hover:bg-red-500/20">
                        Refund
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
