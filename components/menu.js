import { Nav, Dropdown, NavItem } from "react-bootstrap";
import Link from "next/link";
// import "./menu.css";

export default ({ toggle }) => (
  <div className="navigation">
    <a className="close-btn" onClick={toggle}>
      <i className="fa fa-close mr-3"></i>
    </a>
    <Nav className="flex-column">
      <Nav.Item>
        <Link href="/a">
          <a>Home</a>
        </Link>
      </Nav.Item>

      <Nav.Item>
        <Link href="/">Contact Us</Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/">FAQs</Link>
      </Nav.Item>
      <Nav.Item>
        <a href="google.com" target="_blank" rel="noreferrer">
          Store
        </a>
      </Nav.Item>
    </Nav>
  </div>
);
