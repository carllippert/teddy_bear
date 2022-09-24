import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";

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

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp(props: AppProps) {
  return (
    <AppContextProvider>
      <AppWithContext {...props} />
    </AppContextProvider>
  );
}

//this exists solely to get access to context to sync light and dark mode themes into Rainbowkit
function AppWithContext({ Component, pageProps }: AppProps) {
  const { theme } = useAppContext();

  const getTheme = () => {
    if (theme == "light") {
      return lightTheme();
    } else {
      return darkTheme();
    }
  };

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider theme={getTheme()} chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
