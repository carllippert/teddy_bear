import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LIGHT_MODE, PROJECT_NAME } from "../../config";

import { WalletProvider, getDefaultWallets } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";

import { AppContextProvider, useAppContext } from "../context/AppContext";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

function MyApp(
  props: AppProps<{
    session: Session;
  }>
) {
  return (
    <AppContextProvider>
      <AppWithContext {...props} />
    </AppContextProvider>
  );
}

//this exists solely to get access to context to sync light and dark mode themes into Rainbowkit
function AppWithContext({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  const { theme } = useAppContext();

  const supportedWallets = getDefaultWallets();

  return (
    <WalletProvider supportedWallets={supportedWallets}>
      <Component {...pageProps} />
    </WalletProvider>
  );
}

export default MyApp;
