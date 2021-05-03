import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { EnvelopeFill, PhoneFill } from "react-bootstrap-icons";

const myLoader = ({ src }) => {
  return `/images/${src}`;
};

export default function Footer() {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col lg="3" className="text-center">
            {" "}
            <Link href="/">
              <a>
                <Image
                  loader={myLoader}
                  src={`logo.svg`}
                  width={270}
                  height={70}
                />
              </a>
            </Link>
            <p className="copyright">
              Ian Josef Web Design © {new Date().getFullYear()} All rights
              reserved.
            </p>
          </Col>
          <Col />
          <Col lg="4">
            <h4 className="mb-2">
              Need a website? Message me and let's make something happen.
            </h4>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mb-0">
              <a href="mailto:ianjosef.rivera@gmail.com">
                <EnvelopeFill className="mb-1" /> Email Address{" "}
              </a>{" "}
              |{" "}
              <a href="tel:+639295097004">
                <PhoneFill className="mb-1" /> Phone Number{" "}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
