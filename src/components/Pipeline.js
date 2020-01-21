import React from "react"

const Pipeline = () => {
  const pipeline = [
    {
      stage: "Development",
      projects: [
        {
          name: "Rubber Chicken",
          type: "web series",
          genre: "comedy",
        },
        {
          name: "8am",
          type: "short film",
          genre: "drama",
        },
      ],
    },
    {
      stage: "Pre-Production",
      projects: [
        {
          name: "Liquidity",
          type: "short film",
          genre: "horror",
        },
      ],
    },
    {
      stage: "Post Production",
      projects: [
        {
          name: "Morning Routine",
          type: "short film",
          genre: "drama",
        },
      ],
    },
  ]

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

export default Pipeline
