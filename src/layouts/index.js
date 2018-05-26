import React from "react";
import Helmet from "react-helmet";
import { Fullscreen } from "../components/Fullscreen";
import Link from "gatsby-link";
import { colors } from "../utils/theme";

const NavLink = props => (
  <li
    css={{
      margin: 0,
      marginRight: "1.75rem",
      "& a:hover": {
        paddingBottom: ".4rem",
        borderBottom: "3px dotted currentColor"
      }
    }}
  >
    <Link
      {...props}
      style={{ textDecoration: "none" }}
      activeStyle={{
        paddingBottom: ".4rem",
        borderBottom: "3px solid currentColor"
      }}
    />
  </li>
);

const links = [
  <NavLink to="/about">About Me</NavLink>,
  <NavLink to="/blog">Blog</NavLink>,
  <NavLink to="/therapy/couples-and-family">
    Couples and Family Therapy
  </NavLink>,
  <NavLink to="/therapy/individual">Individual Therapy</NavLink>,
  <NavLink to="/what-to-expect">What to Expect</NavLink>,
  <NavLink to="/contact">Contact</NavLink>,
  <NavLink to="/resources">Resources</NavLink>
];

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
          "@media(max-width: 44em)": {
            display: "none"
          },
          position: "fixed",
          minHeight: 75,
          top: 0,
          left: 0,
          width: "100%",
          zIndex: "100",
          padding: "1rem",
          backgroundColor: colors.secondary
        }}
      >
        <nav>
          <ul
            css={{
              color: colors.primary,
              fontFamily: "sans-serif",
              margin: 0,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              listStyleType: "none"
            }}
          >
            {links}
          </ul>
        </nav>
      </div>
      <div
        css={{
          "@media(min-width: 44em)": {
            display: "none"
          }
        }}
      />
      <div
        css={{
          "@media(min-width: 44em)": {
            paddingTop: "150px"
          },
          padding: "2rem",
          maxWidth: 980,
          margin: "0 auto",
          minHeight: "100vh",
          top: "0",
          color: colors.secondary,
          backgroundColor: "white"
        }}
      >
        <div>{children()}</div>
      </div>
    </Fullscreen>
  </div>
);

export default TemplateWrapper;
