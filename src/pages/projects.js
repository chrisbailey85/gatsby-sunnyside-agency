import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import ServicesCards from "../components/ServicesCards"
import DecorativeImages from "../components/DecorativeImages"
import Seo from "../components/Seo"
export default function projects() {
  return (
    <Layout>
      <Seo />
      <Banner subHeading="projects page" />
      <ServicesCards />
      <DecorativeImages />
    </Layout>
  )
}
