import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import SkipLink from "./SkipLink"
import "../assets/css/main.css"
const Layout = ({ children }) => {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main name="main" id="main">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
