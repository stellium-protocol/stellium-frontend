/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // @stellar/stellar-sdk depends on sodium-native (a native C++ addon) as an
    // optional dependency for fast signing. When it's unavailable, stellar-base
    // gracefully falls back to tweetnacl (a pure-JS implementation).
    //
    // We map both sodium-native and its loader require-addon to false so webpack
    // never tries to bundle native code. This prevents build failures on Vercel
    // and other serverless platforms where native addons can't be compiled or
    // loaded, and eliminates the "Critical dependency" webpack warnings.
    // resolve.alias takes precedence over node_modules resolution, so even
    // though sodium-native is installed as an optional dependency, webpack
    // will replace it with an empty module. stellar-base's signing.js then
    // sees an empty object and falls back to tweetnacl (pure JS).
    config.resolve.alias = {
      ...config.resolve.alias,
      "sodium-native": false,
      "require-addon": false,
    };

    // Also set fallback as a belt-and-suspenders safety net.
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "sodium-native": false,
      "require-addon": false,
    };

    return config;
  },
};

export default nextConfig;
