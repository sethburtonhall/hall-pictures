import React from "react"
import { ThemeProvider } from "styled-components"
import { theme, StyledBio, Text, Wrapper } from "../design-system"

const Bio = () => (
  <ThemeProvider theme={theme}>
    <StyledBio>
      <Text is="h1" p={3} mb={0} bg="blue" color="white" fontSize={4}>
        About
      </Text>
      <Wrapper>
        <p>
          Hall Pictures is a Greensboro, North Carolina based motion picture
          company specializing in the development and production of shorts,
          features, and series. Hall Pictures is the home of Creative Producer
          Seth Hall and his friends, colleagues and fellow creatives. As you may
          expect from a production company based out of North Carolina we are
          truly independent, doing our best to develop great stories and produce
          high-quality content with any and all available resources. And while
          we do aspire to partner with other production companies and studios to
          help produce our projects, we are still proving that we are capable of
          creating great content at a high level. Currently, we are focusing our
          efforts on the production of short films to improve our craft and
          process while we work our way up to more long-form content like
          features and web series. We place a high value on quality and are
          diligent throughout the whole filmmaking process, but most important
          is how we provide a safe and nurturing environment for film creatives
          and how we treat others with kindness and respect. Filmmaking is a
          miracle in collaboration and it takes a village. To us, people are
          most important. We strive to partner with up and coming writers and
          directors and provide opportunities for a variety of film creatives.
          Simply put we want to be the production company that can get films
          made and enjoy the experience along the way.
        </p>
      </Wrapper>
    </StyledBio>
  </ThemeProvider>
)

export default Bio
