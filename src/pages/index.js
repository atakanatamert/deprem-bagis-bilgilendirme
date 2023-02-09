import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import YurticiBagisKaynaklari from "@/components/YurticiBagisKaynaklari";
import YurtdisiBagisKaynaklari from "@/components/YurtdisiBagisKaynaklari";
import ScamWarning from "@/components/ScamWarning";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Bağış Bilgilendirme</title>
        <meta
          name="description"
          content="Deprem dolancilarina karsi uyari ve bağış bilgilendirme"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <YurticiBagisKaynaklari />
        <YurtdisiBagisKaynaklari />
        <ScamWarning />
      </main>
    </>
  );
}
