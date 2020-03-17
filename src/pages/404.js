import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import gif from "../images/404-2.gif"
import { ThemeProvider } from "styled-components"
import { theme, Giphy, Image } from "../design-system"

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="404: Not found" />
      <Giphy
        display="flex"
        minHeight="79vh"
        m="auto"
        bg="darkBlue"
        border={4}
      >
        <Image
          src={gif}
          alt="404 Giphy"
          m="auto"
          height="auto"
          width="100%"
          minWidth="100px"
          maxWidth="750px"
        />
      </Giphy>
    </Layout>
  </ThemeProvider>
)

export default NotFoundPage
