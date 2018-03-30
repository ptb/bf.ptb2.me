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
        Link(title="info@bigfundj.com" to="mailto:info@bigfundj.com") info@bigfundj.com
        span .
    div(class=css (main)) Main
    div(class=css (foot)) Foot
`
