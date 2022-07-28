import React from "react"
import { banner, sub__heading, arrow } from "../assets/css/banner.module.css"
import { StaticImage } from "gatsby-plugin-image"
const Banner = ({ subHeading }) => {
  return (
    <section className={banner}>
      <h1>We are creatives</h1>
      {subHeading && <p className={sub__heading}>{subHeading}</p>}
      <StaticImage
        src="../assets/images/icon-arrow-down.svg"
        alt=""
        placeholder="tracedSVG"
        className={arrow}
      />
    </section>
  )
}

export default Banner
