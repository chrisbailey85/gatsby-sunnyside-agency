import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import ServicesCards from "../components/ServicesCards"
import Seo from "../components/Seo"
export default function Services() {
  return (
    <Layout>
      <Seo
        title="Frontend Mentor | Sunnyside agency services page"
        description="The services we offer"
      />
      <Banner subHeading="Services page" />
      <ServicesCards />
    </Layout>
  )
}
