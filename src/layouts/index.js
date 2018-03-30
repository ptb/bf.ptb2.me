import { body, foot, head, html, main, root } from "./styles.json"
import { css } from "@ptb/gatsby-plugin-styletron/style"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import React from "react"

export default (_) => pug `
  div(class=css (root))
    Helmet(htmlAttributes=({ "class": css (html) }))
    Helmet(bodyAttributes=({ "class": css (body) }))
    header(class=css (head))
      Link#logo(title="BIG FUN Disc Jockeys" to="/")
        h1 BIG FUN Disc Jockeys
      hr
      p
        | We would love to hear from you
        span :
        |
        |
        Link(title="info@bigfundj.com" to="mailto:info@bigfundj.com").
          info@bigfundj.com
        span .
      nav
        ul
          li: Link.home(title="Home" to="/") Home
          li: Link.rates(title="Rates" to="/Rates/") Rates
          li: Link.events(title="Events" to="/events/") Events
          li: Link.gallery(title="Gallery" to="/gallery/") Gallery
          li: Link.djs(title="The DJs" to="/djs/") The DJs
          li: Link.music(title="Music" to="/music/") Music
          li: Link.equipment(title="Equipment" to="/equipment/") Equipment
          li: Link.press(title="Press" to="/press/") Press
    div(class=css (main)) Main
    div(class=css (foot)) Foot
`
