import { Keypair, SorobanRpc, TransactionBuilder, Networks, BASE_FEE } from "@stellar/stellar-sdk";

export const TESTNET_RPC = "https://soroban-testnet.stellar.org";
export const TESTNET_PASSPHRASE = Networks.TESTNET;

/** Get a Soroban RPC server instance */
export function getServer(rpcUrl: string = TESTNET_RPC) {
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
