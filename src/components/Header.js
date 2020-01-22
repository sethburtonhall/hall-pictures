import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div className="wrapper">
        <h2 className="site-title">
          <Link className="link" to="/">
            <span className="title">{siteTitle}</span>
          </Link>
        </h2>
        <div className="nav">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/" className="nav-link">Films</Link>
        </div>
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
