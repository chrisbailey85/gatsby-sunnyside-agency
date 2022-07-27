import React from "react"
import { cards, underlay__cards } from "../assets/css/cards.module.css"
import CardWithImage from "./CardWithImage"
import CardsWithImageUnderlay from "./CardsWithImageUnderlay"

const ServicesCards = () => {
  return (
    <section aria-label="Services" className={cards}>
      <CardWithImage
        lineColor="red"
        heading="Transform your brand"
        paragraph="We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you."
        imageName="image-transform"
      />
      <CardWithImage
        lineColor="yellow"
        heading="Stand out to the right audience"
        paragraph="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
        imageName="image-stand-out"
      />
      <div className={underlay__cards}>
        <CardsWithImageUnderlay
          imageName="image-graphic-design"
          heading="Graphic design"
          paragraph="Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention."
        />
        <CardsWithImageUnderlay
          imageName="image-photography"
          heading="Photography"
          paragraph="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        />
      </div>
    </section>
  )
}

export default ServicesCards
