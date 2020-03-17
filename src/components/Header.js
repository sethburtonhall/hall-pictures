import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { ThemeProvider } from "styled-components"
import { theme, StyledHeader, Wrapper } from "../design-system"

const Header = ({ siteTitle }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledHeader>
        <Wrapper flexDirection="row">
          <h2 className="site-title">
            <Link className="link" to="/">
              <span className="title">{siteTitle}</span>
            </Link>
          </h2>
          <nav>
            <Link
              to="/about"
              className="nav-link"
              activeStyle={{
                color: "#C45706",
                borderBottom: "2px solid #C45706",
              }}
            >
              About
            </Link>
            <Link
              to="/"
              className="nav-link"
              activeStyle={{
                color: "#C45706",
                borderBottom: "2px solid #C45706",
              }}
            >
              Films
            </Link>
          </nav>
        </Wrapper>
      </StyledHeader>
    </ThemeProvider>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
