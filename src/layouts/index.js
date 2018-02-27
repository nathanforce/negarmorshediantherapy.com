import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Fullscreen from "../components/Fullscreen";
import Header from "../components/Header";
// import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Negar Morshedian" meta={[]} />
    <Header />
    <Fullscreen
      style={{
        margin: "0 auto",
        paddingTop: 0
      }}
    >
      {children()}
    </Fullscreen>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
