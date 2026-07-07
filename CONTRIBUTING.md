# Contributing to Stellium Dashboard

Thanks for your interest in contributing! This guide will help you get set up.

## Getting Started

### Prerequisites

- Node.js 18+
- [Freighter](https://www.freighter.app/) browser extension (for testing wallet features)

### Setup

```bash
git clone https://github.com/stellium/stellium-dashboard.git
cd stellium-dashboard
npm install
npm run dev     # Start dev server at localhost:3000
npm run build   # Verify production build works
```

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_ESCROW_CONTRACT_ID=C...   # Escrow contract on testnet
NEXT_PUBLIC_PAYMENT_CONTRACT_ID=C...  # Payment contract on testnet
NEXT_PUBLIC_NETWORK=testnet
```

For local development without deployed contracts, you can leave these blank — the UI will render but transactions won't work.

### Project Structure

```
src/
├── app/
│   ├── layout.tsx         ← Root layout with nav bar
│   ├── page.tsx           ← Dashboard home (stats overview)
│   ├── globals.css        ← Tailwind styles
│   ├── payments/
│   │   └── page.tsx       ← Payment creation + history
│   └── escrows/
│       └── page.tsx       ← Escrow management
├── components/
│   ├── WalletConnect.tsx  ← Freighter wallet connection
│   └── PaymentCard.tsx    ← Payment display component
└── lib/
    └── stellar.ts         ← Stellar utility helpers
```

## How to Contribute

1. Find an issue you want to work on
2. Comment on the issue to let others know
3. Fork the repo and create a branch
4. Make your changes
5. Run `npm run build` — must pass with no errors
6. Submit a PR linking the issue

## Development Tips

- **Styling**: Use Tailwind CSS classes. The theme uses `stellar-blue`, `stellar-dark`, and `stellar-darker` colors.
- **Client components**: Pages that interact with the wallet need `"use client"` at the top.
- **SDK integration**: Import from `@stellium/stellium-sdk` for contract interactions.
- **State management**: Use React `useState` / `useEffect` — no external state library needed yet.

## UI Guidelines

- Dark theme only (for now)
- Stellar blue (`#14b8e6`) for primary actions
- Monospace font for addresses and IDs
- Use `border-white/10` for card borders
- Use `bg-stellar-dark` for card backgrounds

## Tech Stack

- [Next.js 14](https://nextjs.org/docs) (App Router)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Stellar SDK](https://www.npmjs.com/package/@stellar/stellar-sdk)
- [Freighter](https://www.freighter.app/) (browser wallet)
