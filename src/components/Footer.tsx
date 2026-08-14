export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-stellar-dark/50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="inline-block h-5 w-5 rounded bg-stellar-blue/20 text-center text-xs leading-5 text-stellar-blue">
            S
          </span>
          <span>&copy; {new Date().getFullYear()} Stellium. Built on Stellar.</span>
        </div>

        <nav className="flex gap-6">
          <a
            href="https://github.com/stellium-protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://docs.stellium.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Docs
          </a>
          <a
            href="https://stellar.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Stellar
          </a>
          <a
            href="https://github.com/stellium-protocol/stellium-frontend/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            Support
          </a>
        </nav>
      </div>
    </footer>
  );
}
