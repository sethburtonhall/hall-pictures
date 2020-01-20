import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/Nav"

import '../scss/styles.scss'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Nav />
      <button className="">Test Button</button>
    </Layout>
  )
}

export default IndexPage
