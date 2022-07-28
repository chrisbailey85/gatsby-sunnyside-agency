import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Seo from "../components/Seo"
export default function NotFound() {
  return (
    <Layout>
      <Seo />
      <Banner subHeading="Opps page not found" />
    </Layout>
  )
}
