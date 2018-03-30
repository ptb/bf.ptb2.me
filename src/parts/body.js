import { css } from "@ptb/gatsby-plugin-styletron/style"
import Link from "gatsby-link"
import React from "react"
import { View } from "@ptb/animated-transition"

export default (a) => pug `
  View(style=({ "background-color": "rgba(255,204,204,0.8)" }))
    Link(to=({ "pathname": "/rates/", "state": { "anim": "slide.fore" } })) To Page 2
    Link(to=({ "pathname": "/rates/" })) To Page 2 (without transition)
    Link(to="/rates/") To Page 2 (without transition 2)
    div(class=css ({ "color": "#000" }))
      = a.children
`
