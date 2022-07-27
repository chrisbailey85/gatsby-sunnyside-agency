import React from "react"
import CreateImage from "./CreateImage"
import { decorative__images } from "../assets/css/decorativeImages.module.css"
const DecorativeImages = () => {
  return (
    <div aria-hidden="true" className={decorative__images}>
      <CreateImage imageName="image-gallery-milkbottles" />
      <CreateImage imageName="image-gallery-orange" />
      <CreateImage imageName="image-gallery-cone" />
      <CreateImage imageName="image-gallery-sugarcubes" />
    </div>
  )
}

export default DecorativeImages
