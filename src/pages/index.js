import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/banner"
import ServicesCards from "../components/ServicesCards"
import Testimonials from "../components/Testimonials"
import DecorativeImages from "../components/DecorativeImages"
export default function Home() {
  return (
    <Layout>
      <Banner />
      <ServicesCards />
      <Testimonials />
      <DecorativeImages />
    </Layout>
  )
}
