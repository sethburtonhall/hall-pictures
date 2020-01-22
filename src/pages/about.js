import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Bio from "../components/Bio"
import Pipeline from "../components/Pipeline"
import "../scss/styles.scss"

const About = () => {
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
      stage: "Production",
      projects: [
        {
          name: "Liquidity",
          type: "April",
          genre: "2020",
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
    <Layout>
      <SEO title="About" />
      <Bio />
      <Pipeline pipeline={pipeline} />
    </Layout>
  )
}

export default About
