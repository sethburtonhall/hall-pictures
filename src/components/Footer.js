import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="about">
          <p>
            <strong>Hall Pictures</strong> is a film production company based
            out of Greensboro, NC.{" "}
            <a href="mailto:seth@hallpictures.us">Say Hello!</a>
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