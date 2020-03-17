
import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { theme, Wrapper, Image } from "../design-system"

const Laurels = ({ laurels }) => (
  <ThemeProvider theme={theme}>
    <Wrapper
      flexDirection="row"
      flexWrap="wrap"
      p={0}
    >
      {laurels.map((laurel, index) => (
        <Image
          key={index}
          src={laurel.image}
          alt="Festival Laurel"
          width="18%"
          borderRadius={3}
        />
      ))}
    </Wrapper>
  </ThemeProvider>
)

Laurels.propType = {
  laurels: PropTypes.object
}

export default Laurels
