import React from "react"
import Header from "./header"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/react"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
          }
          body {
            font-size: 18px;
            font-size: 1.8rem;
            line-height: 1.5;

            font-family: "PT Sans", Arial, Helvetica, sans-serif;
          }
          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: "Roboto", Arial, Helvetica, sans-serif;
          }
          h3 {
            font-family: "PT Sans", Arial, Helvetica, sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <title>Gatsby Hotel</title>
      </Helmet>
      <Header />
      {children}
    </>
  )
}

export default Layout
