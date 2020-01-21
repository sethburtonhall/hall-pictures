import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Video from "../components/Video"
import "../scss/styles.scss"

const IndexPage = () => {
  const videos = [
    {
      title: "TROPICAL GARDENS",
      logline:
        "A down and out loner copes with his recent heartbreak by obsessing over a mini-golf course record.",
      director: "Morten Savage",
      producer: "Seth Hall",
      url: "https://player.vimeo.com/video/327592520",
      laurels: true,
    },
    {
      title: "CIRCLES",
      logline:
        "A frail and helpless 18-year-old finds himself in a wilderness rehabilitation program with a second chance to make his way in the world.The problem is that he refuses to get out of his tent.",
      director: "Morten Savage",
      producer: "Seth Hall",
      url: "https://player.vimeo.com/video/284174147",
      laurels: false,
    },
  ]
  return (
    <Layout>
      <SEO title="Home" />
      {videos.map((video, index) => (
        <Video
          key={index}
          title={video.title}
          logline={video.logline}
          director={video.director}
          producer={video.producer}
          videoUrl={video.url}
          laurels={video.laurels}
        />
      ))}
    </Layout>
  )
}

export default IndexPage
