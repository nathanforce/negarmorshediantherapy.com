import React from "react";
import Helmet from "react-helmet";
import { Fullscreen } from "../components/Fullscreen";
import Link from "gatsby-link";

const NavLink = props => (
  <li
    css={{
      margin: 0,
      marginRight: "1rem",
      "& a:hover": {
        paddingBottom: ".4rem",
        borderBottom: "4px dotted white"
      }
    }}
  >
    <Link
      {...props}
      style={{ textDecoration: "none" }}
      activeStyle={{
        paddingBottom: ".4rem",
        borderBottom: "4px solid white"
      }}
    />
  </li>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Negar Morshedian" meta={[]} />
    <Fullscreen
      style={{
        margin: "0 auto",
        paddingTop: 0
      }}
    >
      <div
        css={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: "100",
          padding: "1rem"
        }}
      >
        <nav>
          <ul
            css={{
              color: "white",
              fontFamily: "sans-serif",
              margin: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              listStyleType: "none"
            }}
          >
            <NavLink to="/about">About me</NavLink>

            <NavLink to="/blog">Blog</NavLink>

            <NavLink to="/therapy/couples-and-family">
              Couples and Family Therapy
            </NavLink>

            <NavLink to="/therapy/individual">Individual Therapy</NavLink>

            <NavLink to="/what-to-expect">What to Expect</NavLink>

            <NavLink to="/contact">Contact</NavLink>

            <NavLink to="/resources">Resources</NavLink>
          </ul>
        </nav>
      </div>
      <div
        css={{
          width: "100%",
          minHeight: "100vh",
          top: "0",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          display: "flex",
          zIndex: "100",
          color: "white",
          backgroundColor: "rgb(255, 94, 98)"
        }}
      >
        {children()}
      </div>
    </Fullscreen>
  </div>
);

export default TemplateWrapper;
