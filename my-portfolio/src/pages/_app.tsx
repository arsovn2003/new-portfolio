import DownloadButton from "@/shared/DownloadButton";
import Footer from "@/shared/Footer";
import Header from "@/shared/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <DownloadButton />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
