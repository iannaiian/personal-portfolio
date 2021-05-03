import Header from "@components/header/Header";
import Head from "next/head";
import Footer from "@components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
