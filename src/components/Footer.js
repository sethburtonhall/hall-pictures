import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="about">
          <p>
            <strong>Hall Pictures</strong> is a film production company based
            out of Greensboro, NC.{" "}
            <a href="mailto:seth@hallpictures.us">Say Hello!</a>
            <a
              href="https://www.instagram.com/sethburtonhall/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </p>
        </div>
        <div className="copyright">
          © Hall Pictures {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}

export default Footer
