import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Oops, nothing to see here.</h1>
    <p>You just hit a route that doesn&#39;t exist.</p>
  </Layout>
)

export default NotFoundPage
