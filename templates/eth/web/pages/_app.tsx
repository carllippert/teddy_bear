import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { LIGHT_MODE, PROJECT_NAME } from "../../config";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { AppContextProvider, useAppContext } from "../context/AppContext";
import { RainbowKitSiweNextAuthProvider } from "@rainbow-me/rainbowkit-siwe-next-auth";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: PROJECT_NAME,
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

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

  const getTheme = () => {
    if (theme == LIGHT_MODE) {
      return lightTheme();
    } else {
      return darkTheme();
    }
  };

  return (
    <WagmiConfig client={wagmiClient}>
      <SessionProvider session={pageProps.session}>
        <RainbowKitSiweNextAuthProvider>
          <RainbowKitProvider coolMode theme={getTheme()} chains={chains}>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </SessionProvider>
    </WagmiConfig>
  );
}

export default MyApp;
