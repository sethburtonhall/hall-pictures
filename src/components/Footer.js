import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div>
          <p>
            <strong>Hall Pictures</strong> is a film production company based in
            Greensboro, NC. <span>© {new Date().getFullYear()}</span>
          </p>
          <a href="mailto:seth@hallpictures.us">Say Hello!</a>
          <a
            href="https://www.instagram.com/sethburtonhall/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
