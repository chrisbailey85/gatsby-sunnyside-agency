import React from "react"
import {
  cards,
  heading,
  testimonials,
} from "../assets/css/testimonials.module.css"
import Testimonial from "./Testimonial"
const Testimonials = () => {
  return (
    <section className={testimonials}>
      <h2 className={heading}>Client testimonials</h2>
      <div className={cards}>
        <Testimonial
          imageName="image-emily"
          paragraph="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          name="Emily R."
          job="Marketing Director"
        />
        <Testimonial
          imageName="image-thomas"
          paragraph="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          name="Thomas S."
          job="Chief Operating Officer"
        />
        <Testimonial
          imageName="image-jennie"
          paragraph="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          name="Jennie F."
          job="Business Owner"
        />
      </div>
    </section>
  )
}

export default Testimonials
