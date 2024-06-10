import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import FavIconProvider from "@/components/Misc/FavIconProvider";
import { Public_Sans } from "next/font/google";
import theme from "@/config/theme";
import "@/styles/globals.css";

const public_sans = Public_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait">
      <ChakraProvider theme={theme}>
        <FavIconProvider>
          <main className={public_sans.className}>
            <Component {...pageProps} />
          </main>
        </FavIconProvider>
      </ChakraProvider>
    </AnimatePresence>
  );
}
