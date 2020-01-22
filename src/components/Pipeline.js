import React from "react"
import PropTypes from "prop-types"

const Pipeline = ({ pipeline }) => {
  return (
    <div className="pipeline">
      <h1 className="header">Project Pipeline</h1>
      <div className="wrapper">
        {pipeline.map((p, index) => (
          <div key={index} className="stage">
            <h2 className="stage-title">{p.stage}</h2>
            <div className="projects">
              {p.projects.map((project, index) => (
                <div key={index} className="project">
                  <span key={project.index}>
                    <em>
                      <strong>{project.name}</strong>
                    </em>
                  </span>
                  <span className="small">
                    {project.type} | {project.genre}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

Pipeline.propTypes = {
  pipeline: PropTypes.array
}

export default Pipeline
