import { css } from "@ptb/gatsby-plugin-styletron/style"
import Link from "gatsby-link"
import React from "react"
import { View } from "@ptb/animated-transition"

export default () => pug `
  div#head
    Link(to="/") Home
    Link(to="/rates/") Rates
    Link(to="/events/") Events
    Link(to="/gallery/") Gallery
    Link(to="/djs/") The DJs
    Link(to="/music/") Music
    Link(to="/equipment/") Equipment
    Link(to="/press/") Press
`
