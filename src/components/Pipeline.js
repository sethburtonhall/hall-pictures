import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import {
  theme,
  StyledPipeline,
  Stage,
  StageTitle,
  Projects,
  Project,
  Text,
  Wrapper,
} from "../design-system"

const Pipeline = ({ pipeline }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPipeline>
        <Text is="h1" p={3} mb={0} bg="orange" color="white" fontSize={4}>
          Project Pipeline
        </Text>
        <Wrapper
          flexDirection={["column", "row"]}
          alignItems={[null, "flex-start"]}
          flexWrap={["wrap", null, "nowrap"]}
          textAlign={["center", null, "left"]}
        >
          {pipeline.map((p, index) => (
            <Stage key={index}>
              <StageTitle>{p.stage}</StageTitle>
              <Projects>
                {p.projects.map((project, index) => (
                  <Project key={index}>
                    <span key={project.index}>
                      <em>
                        <strong>{project.name}</strong>
                      </em>
                    </span>
                    <Text is="span" fontSize={0}>
                      {project.type} {project.genre}
                    </Text>
                  </Project>
                ))}
              </Projects>
            </Stage>
          ))}
        </Wrapper>
      </StyledPipeline>
    </ThemeProvider>
  )
}

Pipeline.propTypes = {
  pipeline: PropTypes.array,
}

export default Pipeline
