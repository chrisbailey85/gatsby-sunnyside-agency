import React from "react"
import CreateImage from "./CreateImage"
import {
  card,
  card__img,
  card__text,
  user,
  testimonial,
} from "../assets/css/testimonial.module.css"
const Testimonial = ({ imageName, name, job, paragraph }) => {
  return (
    <div className={card}>
      <div className={card__img}>
        <CreateImage imageName={imageName} />
      </div>
      <div className={card__text}>
        <p className={testimonial}>{paragraph}</p>
        <p className={user}>
          {name} <span>{job}</span>
        </p>
      </div>
    </div>
  )
}

export default Testimonial
