import Head from "next/head";
import Footer from "@components/Footer";
import SidebarMenu from "@components/sidebar";
import ParticlesBg from "@components/particle";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@components/header/Header";
import Image from "next/image";
import Layout from "@components/layout";
import ScrollAnimation from "@components/scroll";

const myLoader = ({ src }) => {
  return `/images/sites${src}`;
};

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
import { SizeMode } from "tsparticles";

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={fadeIn}
    >
      {" "}
      <Head>
        <title>Ian Josef Web Design & Development</title>
        <meta name="description" content="This is a test" />
      </Head>{" "}
      <Layout>
        <main className="main-container">
          <Container fluid className="home-container">
            <ParticlesBg />
            <Container>
              <div className="brandstamp">
                <div className="d-flex align-items-center">
                  <h6>FRONT-END WEB DEVELOPER</h6>
                </div>
                <h1>
                  IAN<span>PORT</span>
                </h1>
                <h1>
                  JOSEF<span>FOLIO</span>
                </h1>
              </div>
            </Container>
            <ScrollAnimation />
            <div className="main-pic">
              {" "}
              <Image src="/images/main-pic.jpg" width={530} height={530} />
            </div>
          </Container>
          <Container
            fluid
            className="page-content featured-works"
            style={{ padding: "100px 0", background: "#ffffff" }}
          >
            <Container>
              <Container>
                <h2
                  className="heading text-center"
                  style={{ paddingBottom: "100px" }}
                >
                  FEATURED <span className="sub-heading">WORKS</span>
                </h2>
                <Row style={{ paddingBottom: "100px" }}>
                  <Col lg="7">
                    <div className="works-container my-3">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="">
                          <Image
                            src="/images/site1.png"
                            width={1920}
                            height={1277}
                          />
                        </div>{" "}
                      </div>

                      {/* <h1 className="mt-3">{items.title}</h1>
                        <p>{items.desc}</p> */}
                    </div>
                  </Col>
                  <Col
                    lg="5"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div className="my-3">
                      <h2>NEWtritionIQ</h2>
                      <p
                        className="mb-4"
                        style={{ fontSize: "20px", fontWeight: "bold" }}
                      >
                        Introducing a New Health Paradigm
                      </p>

                      <p className="mb-5">
                        Created by nutrition experts, AI/ML specialists and rich
                        data scientists Nutrient Quotient (NQ) is a science
                        based methodology specifically developed to create a new
                        nutrition calibration model that most accurately tracks
                        consumers’ complete nutrition consumption.
                      </p>
                      <a
                        href="https://www.figma.com/proto/yX8Va1TtJdoAleODSDNyON/NEWtitionIQ-Copy?node-id=2%3A2&scaling=scale-down-width"
                        target="_blank"
                        title="NEWtritionIQ"
                        rel="noreferrer noopener"
                        className="btn"
                      >
                        Check out the Mockup
                      </a>
                    </div>

                    {/* <h1 className="mt-3">{items.title}</h1>
                        <p>{items.desc}</p> */}
                  </Col>
                </Row>
                <Row
                  style={{ paddingBottom: "100px" }}
                  className="flex-column-reverse flex-lg-row"
                >
                  <Col
                    lg="5"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div className="my-3">
                      <h2>Bona Fides Laboratory, Inc.</h2>
                      <p
                        className="mb-4"
                        style={{ fontSize: "20px", fontWeight: "bold" }}
                      >
                        Analytical Laboratory Colorado Owned & Operated
                      </p>

                      <p className="mb-5">
                        Bona Fides is ISO/IEC 17025:2005 accredited for the
                        analysis of potency, pesticides and residual solvents.
                        An accredited laboratory provides Defensible (data can
                        be defended in a court of law) Traceable (results can be
                        traced to proper methods and standards) Repeatable
                        (methods can be repeated to obtain the same result).
                      </p>
                      <a
                        href="https://bonafideslab-6lw.netlify.app/"
                        target="_blank"
                        title="Bona Fides Laboratory, Inc."
                        rel="noreferrer noopener"
                        className="btn"
                      >
                        Go to Website
                      </a>
                    </div>

                    {/* <h1 className="mt-3">{items.title}</h1>
                        <p>{items.desc}</p> */}
                  </Col>
                  <Col lg="7">
                    <div className="works-container my-3">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="">
                          <Image
                            src="/images/site2.png"
                            width={1920}
                            height={1277}
                          />
                        </div>{" "}
                      </div>

                      {/* <h1 className="mt-3">{items.title}</h1>
                        <p>{items.desc}</p> */}
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg="7">
                    <div className="works-container my-3">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="">
                          <Image
                            src="/images/site3.png"
                            width={1920}
                            height={1277}
                          />
                        </div>{" "}
                      </div>

                      {/* <h1 className="mt-3">{items.title}</h1>
                        <p>{items.desc}</p> */}
                    </div>
                  </Col>
                  <Col
                    lg="5"
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div className="my-3">
                      <h2>Phone Service USA</h2>
                      <p
                        className="mb-4"
                        style={{ fontSize: "20px", fontWeight: "bold" }}
                      >
                        Fast, Friendly customer service with NO Contracts and
                        FREE equipment.
                      </p>

                      <p className="mb-5">
                        Phone Service USA provides new and innovative solutions
                        to satisfy all the VoIP phone service your business
                        requires. We are a leading team of world-class
                        professionals who believe in maintaining premium-quality
                        communications standards. With our help, you can get
                        quick access to the same Voice over Internet Protocol
                        features that Fortune 500 companies have been utilizing
                        for years even when your budget is limited.
                      </p>
                      <a
                        href="https://phoneserviceusa.netlify.app/"
                        target="_blank"
                        title="Phone Service USA"
                        rel="noreferrer noopener"
                        className="btn"
                      >
                        Go to Website
                      </a>
                    </div>

                    {/* <h1 className="mt-3">{items.title}</h1>
                        <p>{items.desc}</p> */}
                  </Col>
                </Row>
              </Container>
            </Container>
          </Container>
          {/* <Container fluid style={{ padding: "100px 0" }}></Container> */}
        </main>
      </Layout>
    </motion.div>
  );
}
