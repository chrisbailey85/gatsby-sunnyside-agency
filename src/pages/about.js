import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Banner from "../components/Banner"
import ServicesCards from "../components/ServicesCards"
import Testimonials from "../components/Testimonials"
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
