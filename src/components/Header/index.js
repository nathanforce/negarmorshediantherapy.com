import React from "react";
import Link from "gatsby-link";

const Header = () => (
  <div
    style={{
      background: "rebeccapurple",
      marginBottom: "1.45rem"
    }}
  >
    <div style={{}}>
      <nav>
        <ul>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/therapy/couples-and-family">
              Couples and Family Therapy
            </Link>
          </li>
          <li>
            <Link to="/therapy/individual">Individual Therapy</Link>
          </li>
          <li>
            <Link to="/what-to-expect">What to Expect</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
