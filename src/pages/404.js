import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import gif from "../images/404-2.gif"
import "../scss/styles.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="giphy">
      <img src={gif} alt="404 Giphy" />
    </div>
  </Layout>
)

export default NotFoundPage
