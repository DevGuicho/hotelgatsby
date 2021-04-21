import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
`

const HabitacionPreview = ({ habitacion }) => {
  const { id, titulo, imagen, slug, contenido } = habitacion

  return (
    <article
      css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2rem;
      `}
    >
      <GatsbyImage image={imagen.gatsbyImageData} alt="Habitacion photo" />
      <div
        css={css`
          padding: 3rem;
        `}
      >
        <h3
          css={css`
            font-size: 3rem;
          `}
        >
          {titulo}
        </h3>
        <p>{contenido}</p>
        <Boton to={slug}>Ver Habitación</Boton>
      </div>
    </article>
  )
}

export default HabitacionPreview
