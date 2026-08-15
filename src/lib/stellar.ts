// Network constants — no SDK import needed at module level.
// This prevents @stellar/stellar-sdk (and its native sodium-native dependency)
// from being bundled into client-side code during SSR / static generation.
export const TESTNET_RPC = "https://soroban-testnet.stellar.org";
export const TESTNET_PASSPHRASE = "Test SDF Network ; September 2015";

/** Get a Soroban RPC server instance (lazy-loads the SDK on demand) */
export async function getServer(rpcUrl: string = TESTNET_RPC) {
  const { SorobanRpc } = await import("@stellar/stellar-sdk");
  return new SorobanRpc.Server(rpcUrl);
}

/** Format a Stellar address for display */
export function formatAddress(address: string, chars: number = 6): string {
  if (address.length <= chars * 2 + 3) return address;
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

/** Convert stroops to XLM string */
export function formatAmount(stroops: string | number): string {
  const xlm = Number(stroops) / 10_000_000;
  return xlm.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 7,
  });
}

/** Convert XLM amount to stroops (bigint) */
export function xlmToStroops(amount: string | number): bigint {
  return BigInt(Math.round(Number(amount) * 10_000_000));
}
