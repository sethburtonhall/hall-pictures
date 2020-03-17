import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Bio from "../components/Bio"
import Pipeline from "../components/Pipeline"
import { pipeline } from "../data/data"
// import "../scss/styles.scss"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Bio />
      <Pipeline pipeline={pipeline} />
    </Layout>
  )
}

export default About
