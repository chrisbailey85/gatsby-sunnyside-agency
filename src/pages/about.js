import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import ServicesCards from "../components/ServicesCards"
import Testimonials from "../components/Testimonials"
import Seo from "../components/Seo"
export default function about() {
  return (
    <>
      <Seo title="Frontend Mentor | Sunnyside agency about page" />
      <Layout>
        <Banner subHeading="About Us" />
        <ServicesCards />
        <Testimonials />
      </Layout>
    </>
  )
}
