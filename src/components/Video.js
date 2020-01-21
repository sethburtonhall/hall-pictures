import React from 'react';
import PropTypes from "prop-types"

const Video = ({ title, logline, director, producer, videoUrl }) => {
  return (
    <div className="video-wrapper">
      <div className="video">
        <div className="video-meta">
          <h3>{title}</h3>
          <p>Written and Directed by {director}</p>
          <p>Produced by {producer}</p>
          <p className="logline">
            <i>{logline}</i>
          </p>
        </div>
        <div className="video-embed">
          <iframe
            src={videoUrl}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

Video.propTypes = {
  title: PropTypes.string,
  logline: PropTypes.string,
  director: PropTypes.string,
  producer: PropTypes.string,
  videoUrl: PropTypes.string
}

export default Video