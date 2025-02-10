import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const interSans = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={interSans.variable}>
      <Component {...pageProps} />
    </main>
  );
}
