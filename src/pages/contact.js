import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Seo from "../components/Seo"
import Form from "../components/Form"
import DecorativeImages from "../components/DecorativeImages"
import { form, contact__heading } from "../assets/css/contact.module.css"
export default function contact() {
  return (
    <Layout>
      <Seo
        title="Frontend Mentor | Sunnyside agency contact us"
        description="contact us"
      />
      <Banner subHeading="Contact page" />
      <section>
        <h2 className={contact__heading}>Contact us</h2>
        <div className={form}>
          <Form />
        </div>
      </section>
      <DecorativeImages />
    </Layout>
  )
}
