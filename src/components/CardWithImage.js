import React from "react"
import { Link } from "gatsby"
import CreateImage from "./CreateImage"
import {
  card,
  text__content,
  yellow,
  card__link,
  red,
} from "../assets/css/cardWithImage.module.css"

const CardWithImage = ({ heading, paragraph, imageName, lineColor }) => {
  return (
    <div className={card}>
      <CreateImage imageName={imageName} />
      <div className={text__content}>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        <Link
          to="/"
          className={`${card__link} ${lineColor === "yellow" ? yellow : red}`}
        >
          Learn more
        </Link>
      </div>
    </div>
  )
}

export default CardWithImage
