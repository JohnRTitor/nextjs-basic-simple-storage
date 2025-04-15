"use client"; // Ensures this component is rendered on the client side

import SimpleStorageSection from "@/components/SimpleStorageSection";
import { useAccount } from "wagmi";
export default function HomeClientSection() {
  // Check if the user is connected to a wallet
  const { isConnected } = useAccount();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Main section of the homepage */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="text-2xl font-semibold">Welcome to the SimpleStorage DApp</h2>

        {/* Show message or main content depending on connection and mounting status */}
        {!isConnected ? (
          <p className="text-gray-500">Connect your wallet from the header to get started.</p>
        ) : (
          <SimpleStorageSection /> // Show DApp interaction section if wallet is connected
        )}
      </main>
    </div>
  );
}
