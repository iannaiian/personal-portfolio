import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import SidebarMenu from "@components/sidebar";
import ParticlesBg from "@components/particle";
import Link from "next/link";
import { motion } from "framer-motion";

let easing = [0.6, 0.23, 0.13, 0.99];

const fadeIn = {
  initial: {
    opacity: 0,
    transition: { duration: 1, ease: easing },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};

import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={fadeIn}
    >
      <main className="main-container">
        <Head>
          <title>Next.js Starter!</title>
          <meta name="description" content="This is a test" />
          <link rel="icon" href="/images/logo-white.png" />
        </Head>

        <Container fluid className="home-container">
          <ParticlesBg />
          <Container>
            <div className="brandstamp">
              <div className="d-flex align-items-center">
                <h6>FRONT-END WEB DEVELOPER</h6>
                <div className="line-div ml-5" />
              </div>
              <h1>
                IAN<span>PORT</span>
              </h1>
              <h1>
                JOSEF<span>FOLIO</span>
              </h1>
              <Link href="/portfolio">
                <a className="text-white">PORTFOLIO </a>
              </Link>
            </div>
          </Container>
        </Container>
      </main>
    </motion.div>
  );
}
