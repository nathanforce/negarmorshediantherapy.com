import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

// import "./index.css";

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="Gatsby Default Starter"
            meta={[
                { name: "description", content: "Sample" },
                { name: "keywords", content: "sample, something" }
            ]}
        />
        <div
            style={{
                margin: "0 auto",
                paddingTop: 0
            }}
        >
            {children()}
        </div>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
