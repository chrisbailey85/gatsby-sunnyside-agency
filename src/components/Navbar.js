import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  header,
  hamburger,
  line,
  nav__list,
  nav,
  open,
  logo,
} from "../assets/css/navbar.module.css"
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const handleClick = () => {
    setNavOpen(!navOpen)
  }
  return (
    <header className={header}>
      <div className={logo}>
        <Link to="/">
          <span className="sr-only">Home</span>
          <StaticImage
            src="../assets/images/logo.svg"
            alt=""
            placeholder="tracedSVG"
          />
        </Link>
      </div>
      <nav aria-label="primary navigation">
        <button
          className={navOpen ? `${hamburger} ${open}` : `${hamburger}`}
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          aria-expanded={navOpen ? true : false}
          onClick={handleClick}
        >
          <div className={line}></div>
          <div className={line}></div>
          <div className={line}></div>
        </button>
        <div id="navigation" className={navOpen ? `${nav} ${open}` : `${nav}`}>
          <ul className={nav__list}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
