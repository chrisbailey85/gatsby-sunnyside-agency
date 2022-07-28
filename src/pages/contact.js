import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import DecorativeImages from "../components/DecorativeImages"
import Seo from "../components/Seo"
export default function contact() {
  return (
    <Layout>
      <Seo
        title="Frontend Mentor | Sunnyside agency contact us"
        description="contact us"
      />
      <Banner subHeading="Contact page" />
      <DecorativeImages />
    </Layout>
  )
}
