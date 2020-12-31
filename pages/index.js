import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import SidebarMenu from "@components/sidebar";

import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <main className="main-container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container fluid className="home-container">
        <Container className="">
          <div className="brandstamp">
            <h1>IANJOSEF</h1>
            <h1>PORTFOLIO</h1>
          </div>
        </Container>
      </Container>
    </main>
  );
}
