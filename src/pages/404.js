import React from "react"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
export default function NotFound() {
  return (
    <Layout>
      <Seo />
      <Banner subHeading="Opps page not found" />
    </Layout>
  )
}
