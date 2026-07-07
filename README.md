# Stellium Dashboard

Web dashboard for managing Stellar payments, escrows, and analytics. Connect your Freighter wallet to create payments, track escrows, and view transaction history.

## Overview

A Next.js web app that provides a UI layer on top of the Stellium smart contracts. Uses the `@stellium/stellium-sdk` under the hood.

**Current pages:**
- `/` — Dashboard overview with stats (total payments, active escrows, volume)
- `/payments` — Create payments and view transaction history
- `/escrows` — View escrows, release or refund active ones

## Screenshots

*Coming soon — contribute a screenshot PR!*

## Prerequisites

- Node.js 18+
- [Freighter](https://www.freighter.app/) browser extension (for wallet connection)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_ESCROW_CONTRACT_ID=C...   # Deployed escrow contract
NEXT_PUBLIC_PAYMENT_CONTRACT_ID=C...  # Deployed payment contract
NEXT_PUBLIC_NETWORK=testnet           # testnet | mainnet | futurenet
```

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         ← Root layout with nav
│   ├── page.tsx           ← Dashboard home (stats)
│   ├── globals.css        ← Tailwind + custom styles
│   ├── payments/
│   │   └── page.tsx       ← Payment creation + list
│   └── escrows/
│       └── page.tsx       ← Escrow management
├── components/
│   ├── WalletConnect.tsx  ← Freighter wallet connection
│   └── PaymentCard.tsx    ← Payment display component
└── lib/
    └── stellar.ts         ← Stellar utility helpers
```

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS** (dark theme, Stellar blue accents)
- **@stellar/stellar-sdk** (Stellar network interaction)
- **Freighter** (browser wallet)

## What Needs Work

The dashboard has UI scaffolding but needs real functionality. Check the issues for specific tasks.

**Not connected to contracts yet:**
- The payments page has a form but doesn't submit transactions
- The escrows page shows an empty list — needs to read from contract state
- Dashboard stats are hardcoded to 0
- WalletConnect component works but isn't used in the layout yet

**Missing features:**
- Payment link generator (create shareable URLs for receiving payments)
- Transaction history with date/asset/status filters
- Analytics charts (volume over time, success rate)
- Webhook URL configuration in settings
- Loading states and error handling for transactions
- Transaction confirmation modals

**UI improvements needed:**
- Mobile responsive layout (tables overflow on small screens)
- Toast notifications for transaction status
- Empty states with illustrations
- Dark mode toggle (currently dark only)

**Testing:**
- No tests yet — add component tests with React Testing Library
- E2E tests with Playwright

## License

MIT
