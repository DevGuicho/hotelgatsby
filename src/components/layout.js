import React from "react"
import Header from "./header"
import Footer from "./footer"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/react"
import useSEO from "../hooks/useSEO"

const Layout = ({ children }) => {
  const seo = useSEO()
  console.log(seo)
  const {
    siteName,
    fallbackSeo: { description, title },
  } = seo

  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          html {
            font-size: 62.5%;
            box-sizing: border-box;
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
        <meta name="description" content={description} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
      </Helmet>
      <Header />
      {children}
      <Footer title={title} />
    </>
  )
}

export default Layout
