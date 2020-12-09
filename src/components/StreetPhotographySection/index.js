import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import './StreetPhotoSection.css'
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

 
const ImageStreet = () => {
  const data = useStaticQuery(graphql`
  query StreetQuery {
    allFile(filter: {extension: {regex: "/(jpg)/"}, relativePath: {}, relativeDirectory: {eq: "Calle"}}) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `)
  return (
   <div className='image-container'>
     <h1>Taken in the streets of Madrid and Lisboa
     </h1>
     <div className='image-grid'>
        {data.allFile.edges.map((image,key)=> (
          <Img key={key}
          className='image-item'
          fluid={image.node.childImageSharp.fluid}
          alt={image.node.base.split('.')[0]}/>
        ))}
     </div>
   </div>
 )
  }
export default ImageStreet
