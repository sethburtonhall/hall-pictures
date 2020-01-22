import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Video from "../components/Video"
import spotlight from "../images/laurels/spotlight.jpg"
import dumbo from "../images/laurels/dumbo.jpg"
import riverrun from "../images/laurels/riverrun.jpg"
import strangerDays from "../images/laurels/stranger-days.png"
import atlantaComedy from "../images/laurels/atlanta-comedy.jpg"
import "../scss/styles.scss"

const IndexPage = () => {
  const videos = [
    // The video title should be all lower case and include dashes between words.
    // This will allow for '.title-name' styling in 'video.scss'
    // and 'Video.js' will replace '-' with spaces to display title correctly
    {
      title: "tropical-gardens",
      logline:
        "A down and out loner copes with his recent heartbreak by obsessing over a mini-golf course record.",
      director: "Morten Savage",
      producer: "Seth Hall",
      url: "https://player.vimeo.com/video/327592520",
      hasLaurels: true,
      laurels: [
        {
          image: spotlight,
        },
        {
          image: dumbo,
        },
        {
          image: riverrun,
        },
        {
          image: strangerDays,
        },
        {
          image: atlantaComedy,
        },
      ],
    },
    {
      title: "circles",
      logline:
        "A frail and helpless 18-year-old finds himself in a wilderness rehabilitation program with a second chance to make his way in the world.The problem is that he refuses to get out of his tent.",
      director: "Morten Savage",
      producer: "Seth Hall",
      url: "https://player.vimeo.com/video/284174147",
      hasLaurels: false,
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
          hasLaurels={video.hasLaurels}
          laurels={video.laurels}
        />
      ))}
    </Layout>
  )
}

export default IndexPage
