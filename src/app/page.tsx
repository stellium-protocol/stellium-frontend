export default function Home() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-1 text-gray-400">
          Overview of your Stellar payment activity.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-white/10 bg-stellar-dark p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">Total Payments</p>
            <span className="rounded-full bg-stellar-blue/10 px-2 py-0.5 text-xs text-stellar-blue">
              All time
            </span>
          </div>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-stellar-dark p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">Active Escrows</p>
            <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs text-green-400">
              Open
            </span>
          </div>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-stellar-dark p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">Total Volume</p>
            <span className="rounded-full bg-purple-500/10 px-2 py-0.5 text-xs text-purple-400">
              XLM
            </span>
          </div>
          <p className="mt-2 text-3xl font-bold">0.00</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-stellar-dark p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">Success Rate</p>
            <span className="rounded-full bg-yellow-500/10 px-2 py-0.5 text-xs text-yellow-400">
              %
            </span>
          </div>
          <p className="mt-2 text-3xl font-bold">—</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-10">
        <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href="/payments"
            className="group flex items-center gap-4 rounded-xl border border-white/10 bg-stellar-dark p-5 transition-colors hover:border-stellar-blue/30"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-stellar-blue/10 text-stellar-blue group-hover:bg-stellar-blue/20">
              →
            </div>
            <div>
              <p className="font-medium">Send Payment</p>
              <p className="text-sm text-gray-400">Create a new XLM or token payment</p>
            </div>
          </a>
          <a
            href="/escrows"
            className="group flex items-center gap-4 rounded-xl border border-white/10 bg-stellar-dark p-5 transition-colors hover:border-stellar-blue/30"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-400 group-hover:bg-green-500/20">
              🔒
            </div>
            <div>
              <p className="font-medium">Create Escrow</p>
              <p className="text-sm text-gray-400">Lock funds until delivery is confirmed</p>
            </div>
          </a>
          <a
            href="/settings"
            className="group flex items-center gap-4 rounded-xl border border-white/10 bg-stellar-dark p-5 transition-colors hover:border-stellar-blue/30"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-500/10 text-gray-400 group-hover:bg-gray-500/20">
              ⚙
            </div>
            <div>
              <p className="font-medium">Settings</p>
              <p className="text-sm text-gray-400">Configure webhooks and contract IDs</p>
            </div>
          </a>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Recent Activity</h2>
        <div className="rounded-xl border border-white/10 bg-stellar-dark">
          <div className="px-6 py-16 text-center text-gray-500">
            <p className="text-lg">No activity yet</p>
            <p className="mt-1 text-sm">
              Connect your wallet and send your first payment to get started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
