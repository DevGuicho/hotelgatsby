import React from "react"
import { css } from "@emotion/react"
import Navegacion from "./nav"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const EnlaceHome = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`
const Header = () => {
  return (
    <header
      css={css`
        background-color: rgba(44, 62, 80);
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <h1
          css={css`
            color: #fff;
            text-align: center;
          `}
        >
          <EnlaceHome to="/">Hotel Gatsby</EnlaceHome>
        </h1>
        <Navegacion />
      </div>
    </header>
  )
}

export default Header
