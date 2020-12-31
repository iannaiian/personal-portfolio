import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import SidebarMenu from "@components/sidebar";
import ParticlesBg from "@components/particle";

import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <main className="main-container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container fluid className="home-container">
        <ParticlesBg />
        <Container className="">
          <div className="brandstamp">
            <h1>
              IAN<span>PORT</span>
            </h1>
            <h1>
              JOSEF<span>FOLIO</span>
            </h1>
          </div>
        </Container>
      </Container>
    </main>
  );
}
