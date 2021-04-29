import Link from "next/link";
import Image from "next/image";
import Sticky from "react-sticky-el";
import styl from "./header.module.css";

const myLoader = ({ src }) => {
  return `/images/${src}`;
};

const Header = () => (
  <header className={`header ${styl.header}`}>
    <Sticky
      className={`header-normal`}
      stickyClassName="sticky-header"
      stickyStyle={{ transform: "unset" }}
      style={{ zIndex: "999999", position: "relative" }}
    >
      <div>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-2 p-2">
              <div className="header-logo">
                <Link href="/">
                  <a>
                    <Image
                      loader={myLoader}
                      src={`logo.svg`}
                      width={200}
                      height={50}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-9">
              <div className="text-right d-flex justify-content-end">
                <div className="nav-bar">
                  {" "}
                  <Link href="/portfolio/">
                    <a>WORKS</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sticky>
  </header>
);

export default Header;
