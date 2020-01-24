import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Video from "../components/Video"
import { films } from "../data/data"
import "../scss/styles.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      {films.map((video, index) => (
        <Video
          key={index}
          title={video.title}
          logline={video.logline}
          director={video.director}
          producer={video.producer}
          videoUrl={video.url}
          hasLaurels={video.hasLaurels}
          laurels={video.laurels}
        />
      ))}
    </Layout>
  )
}

export default IndexPage
