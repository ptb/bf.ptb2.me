import { body, foot, head, html, main, root } from "./styles.json"
import { css } from "@ptb/gatsby-plugin-styletron/style"
import Helmet from "react-helmet"
import React from "react"

export default (_) => pug `
  div(class=css (root))
    Helmet(htmlAttributes=({ "class": css (html) }))
    Helmet(bodyAttributes=({ "class": css (body) }))
    div(class=css (head)) Head
    div(class=css (main)) Main
    div(class=css (foot)) Foot
`
