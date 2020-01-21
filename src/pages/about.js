import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Bio from '../components/Bio'
import Pipeline from '../components/Pipeline'
// import seth from "../images/seth.jpg"
import "../scss/styles.scss"

const About = params => {
  return (
    <Layout>
      <SEO title="About" />
      <Bio />
      <Pipeline />
    </Layout>
  )
}

export default About
