import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ParticlesBg from "@components/particle";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
import Layout from "@components/layout";
import ScrollAnimation from "@components/scroll";
import data from "@components/data";
import Button from "@components/button";

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

export default function Portfolio() {
  const allData = ["All", ...new Set(data.map((datas) => datas.cat))];
  console.log(allData);

  const [dataItems, setDataItems] = useState(data);
  const [buttons, setButtons] = useState(allData);
  console.log(data);

  const filter = (button) => {
    if (button === "All") {
      setDataItems(data);
      return;
    }

    const filteredData = data.filter((datas) => datas.cat === button);
    setDataItems(filteredData);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      variants={fadeIn}
    >
      <Head>
        <title>Portfolio | Ian Josef Web Design</title>
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
            <ScrollAnimation />
            <div className="main-pic">
              {" "}
              <Image src="/images/main-pic.jpg" width={530} height={530} />
            </div>
          </Container>
          <Container
            fluid
            className="page-content"
            style={{ padding: "100px 0", background: "#ffffff" }}
          >
            <Container>
              <Button button={buttons} filter={filter} />
              <Row>
                {dataItems.map((items) => {
                  return (
                    <Col lg="6" key={items.id}>
                      <div className="works-container my-3">
                        <div className="img-box d-flex justify-content-center align-items-center">
                          <div className="img-box-inner">
                            <Image
                              loader={myLoader}
                              src={`/${items.img}`}
                              width={1920}
                              height={1277}
                            />
                          </div>{" "}
                        </div>

                        <h1 className="mt-3">{items.title}</h1>
                        <p>{items.desc}</p>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </Container>
        </main>
      </Layout>
    </motion.div>
  );
}
