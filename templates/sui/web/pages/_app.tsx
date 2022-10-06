import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

import { WalletProvider, getDefaultWallets } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";

import { AppContextProvider } from "../context/AppContext";

function MyApp({ Component, pageProps }: AppProps) {
  const supportedWallets = getDefaultWallets();

  return (
    <AppContextProvider>
      <WalletProvider supportedWallets={supportedWallets}>
        <Component {...pageProps} />
      </WalletProvider>
    </AppContextProvider>
  );
}

export default MyApp;
