interface PaymentCardProps {
  id: string;
  recipient: string;
  amount: string;
  status: "completed" | "pending" | "failed";
  createdAt: string;
}

export function PaymentCard({
  id,
  recipient,
  amount,
  status,
  createdAt,
}: PaymentCardProps) {
  const statusColors = {
    completed: "bg-green-500/20 text-green-400",
    pending: "bg-yellow-500/20 text-yellow-400",
    failed: "bg-red-500/20 text-red-400",
  };

  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-stellar-dark p-4">
      <div>
        <p className="font-mono text-sm">{recipient}</p>
        <p className="text-xs text-gray-400">{createdAt}</p>
      </div>
      <div className="text-right">
        <p className="font-semibold">{amount} XLM</p>
        <span
          className={`inline-block rounded-full px-2 py-0.5 text-xs ${statusColors[status]}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
