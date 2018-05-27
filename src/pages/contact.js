import React from "react";
import { Field, Formik } from "formik";
import { colors } from "../utils/theme";

import "formbase";

export default () => {
  return (
    <div>
      <h1>Contact</h1>
      <Formik initialValues={{ name: "", email: "", message: "" }}>
        {({ values, handleChange, handleBlur }) => (
          <form
            name="contact"
            netlify-honeypot="bot-field"
            method="POST"
            action="thank-you"
            data-netlify={true}
          >
            <p css={{ display: "none" }}>
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              className="input"
              id="name"
              name="name"
              type="text"
            />
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              className="input"
              id="email"
              name="email"
              type="text"
            />
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea
              onChange={handleChange}
              onBlur={handleBlur}
              className="input"
              id="message"
              name="message"
              type="text"
            />
            <button
              css={{
                backgroundColor: colors.secondary,
                color: colors.white,
                padding: ".5 rem 1rem",
                minWidth: 180
              }}
              type="submit"
            >
              Send
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
