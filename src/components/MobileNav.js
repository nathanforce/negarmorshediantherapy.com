import * as React from "react";
import posed from "react-pose";
import { tween } from "popmotion";
import Link from "gatsby-link";
import { colors } from "../utils/theme";
import Toggle from "react-toggled";
import { css } from "glamor";

const NavMobilePoser = posed.div({
  open: {
    y: "-20px",
    opacity: 1,
    staggerChildren: 40,
    transition: props => tween({ ...props, duration: 300 })
  },
  closed: {
    y: "-50px",
    opacity: 0,
    delay: 100,
    staggerChildren: 15,
    transition: props => tween({ ...props, duration: 500 })
  },
  initialPose: "closed"
});

const NavItemPoser = posed.div({
  open: { delay: 50, opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-20px" }
});

const Hamburger = ({ open, ...rest }) => {
  return (
    <button
      className={`hamburger hamburger--squeeze ${open ? "is-active" : ""}`}
      type="button"
      {...rest}
    >
      <span className="hamburger-box">
        <span
          className={`hamburger-inner ${css({
            backgroundColor: open ? colors.primary : colors.secondary,
            "&::before, &::after": {
              backgroundColor: open ? colors.primary : colors.secondary
            }
          })}`}
        />
      </span>
    </button>
  );
};

export const NavMobile = ({ items }) => {
  return (
    <Toggle>
      {({ on: isOpen, toggle, setOff: close }) => (
        <div css={{ position: "relative" }}>
          <Hamburger
            open={isOpen}
            style={{
              position: "absolute",
              top: 5,
              left: 5,
              zIndex: 1000
            }}
            onClick={toggle}
          />
          <NavMobilePoser
            pose={isOpen ? "open" : "closed"}
            css={{
              pointerEvents: isOpen ? "auto" : "none",
              backgroundColor: colors.secondary,
              paddingTop: "4.45rem",
              paddingBottom: "2rem",
              paddingLeft: "3rem",
              paddingRight: "3rem",
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              zIndex: "999",
              boxShadow: "0 2px 4px rgba(0,0,0,.2)"
            }}
          >
            <nav>
              <ul css={{ margin: 0 }}>
                {items.map((item, i) => (
                  <NavItemPoser
                    css={{
                      padding: "1rem 0",
                      color: colors.primary,
                      fontSize: "1rem",
                      borderTop: i !== 0 && `1px solid ${colors.primary}`
                    }}
                    key={item.to}
                    onClick={close}
                  >
                    {item}
                  </NavItemPoser>
                ))}
              </ul>
            </nav>
          </NavMobilePoser>
        </div>
      )}
    </Toggle>
  );
};
