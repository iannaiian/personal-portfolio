import { Container, Row, Col } from "react-bootstrap";
import ParticlesBg from "@components/particle";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
import Layout from "@components/layout";

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

export default function Portfolio() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={fadeIn}
    >
      <Head>
        <title>Next.js Starter!</title>
        <meta name="description" content="This is a test" />
      </Head>

      <Layout>
        <main className="main-container">
          <Container fluid className="portfolio">
            <ParticlesBg />
            <Container>
              <div className="brandstamp">
                <div className="d-flex align-items-center">
                  <h6 style={{ opacity: "0" }}>FRONT-END WEB DEVELOPER</h6>
                </div>
                <h1>
                  IAN<span>PORT</span>
                </h1>
                <h1>
                  JOSEF<span>FOLIO</span>
                </h1>
              </div>
            </Container>
          </Container>
          <Container
            fluid
            className="page-content"
            style={{ padding: "100px 0", background: "#ffffff" }}
          ></Container>
        </main>
      </Layout>
    </motion.div>
  );
}
