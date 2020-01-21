import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from '../images/logo.png'

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div className="wrapper">
        <h1 className="site-title">
          <Link className="link" to="/">
            <img src={logo} alt="Hall Pictures Logo" />
            <span>{siteTitle}</span>
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
