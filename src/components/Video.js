import React from "react"
import PropTypes from "prop-types"
import Laurels from "./Laurels"
import { ThemeProvider } from "styled-components"
import { theme, StyledVideo } from "../design-system"

const Video = ({
  title,
  logline,
  director,
  producer,
  videoUrl,
  hasLaurels,
  laurels,
}) => (
  <ThemeProvider theme={theme}>
    <StyledVideo className={`${title}`}>
      <div className="video">
        <div className="video-meta">
          <h3>{title.toUpperCase().replace(/-/g, " ")}</h3>
          <p className="director">Written & Directed by {director}</p>
          <p>Produced by {producer}</p>
          <p className="logline">
            <i>{logline}</i>
          </p>
        </div>
        <div className="video-embed">
          <iframe
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
        {hasLaurels === true ? <Laurels laurels={laurels} /> : null}
      </div>
    </StyledVideo>
  </ThemeProvider>
)

Video.propTypes = {
  title: PropTypes.string,
  logline: PropTypes.string,
  director: PropTypes.string,
  producer: PropTypes.string,
  videoUrl: PropTypes.string,
  hasLaurels: PropTypes.bool,
  laurels: PropTypes.array,
}

export default Video
