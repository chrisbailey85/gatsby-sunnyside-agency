import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import ServicesCards from "../components/ServicesCards"
import Testimonials from "../components/Testimonials"
import DecorativeImages from "../components/DecorativeImages"
import Seo from "../components/Seo"
export default function Home() {
  return (
    <Layout>
      <Seo
        title="Frontend Mentor | Sunnyside agency landing page"
        description="Sunnyside agency the brightness agency around"
      />
      <Banner />
      <ServicesCards />
      <Testimonials />
      <DecorativeImages />
    </Layout>
  )
}
