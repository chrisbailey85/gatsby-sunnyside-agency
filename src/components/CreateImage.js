import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"

const query = graphql`
  {
    allFile(
      filter: { extension: { ne: "svg" } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`
const CreateImage = ({ imageName, hasMobileImage }) => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <>
      {nodes.map((image, index) => {
        if (image.name === imageName && hasMobileImage) {
          const images = withArtDirection(getImage(image), [
            {
              media: "(max-width: 767px)",
              image: getImage(nodes[index + 1]),
            },
          ])

          return <GatsbyImage key={index} image={images} alt="" />
        }
        if (image.name === imageName) {
          const Singleimage = getImage(image)

          return <GatsbyImage key={index} image={Singleimage} alt="" />
        }

        return null
      })}
    </>
  )
}
export default CreateImage
