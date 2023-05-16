import ThemeProvider from "@/Context/CurrentUser";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "@/config/apollo.config";
import { ThemeProvider as DarkMode } from "next-themes";
import LikesProvider from "@/Context/DarkMode";

export default function App({ Component, pageProps, response }) {
  return (
    <DarkMode enableSystem={true} attribute="class">
      <ThemeProvider>
        <LikesProvider>
          <ApolloProvider client={client}>
            <Navbar />
            <Component {...pageProps} />
          </ApolloProvider>
        </LikesProvider>
      </ThemeProvider>
    </DarkMode>
  );
}
