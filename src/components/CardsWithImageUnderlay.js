import React from "react"
import CreateImage from "./CreateImage"
import {
  card,
  text__content,
} from "../assets/css/cardWithImageUnderlay.module.css"

const CardWithImageUnderlay = ({ imageName, heading, paragraph }) => {
  return (
    <>
      <div className={card}>
        <CreateImage imageName={imageName} hasMobileImage="true" />
        <div className={text__content}>
          <h2>{heading}</h2>
          <p>{paragraph}</p>
        </div>
      </div>
    </>
  )
}
export default CardWithImageUnderlay
