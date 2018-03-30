import { css } from "@ptb/gatsby-plugin-styletron/style"
import Link from "gatsby-link"
import React from "react"

const Home = (_) => pug `
  h1(class=css ({ "color": "#fff" })) Home
`

const Rates = (_) => pug `
  h1(class=css ({ "color": "#fff" })) Rates
`

const Events = (_) => pug `
  h1(class=css ({ "color": "#fff" })) Events
`

const Gallery = (_) => pug `
  h1(class=css ({ "color": "#fff" })) Gallery
`

const Djs = (_) => pug `
  h1(class=css ({ "color": "#fff" })) The DJs
`

const Music = (_) => pug `
  h1(class=css ({ "color": "#fff" })) Music
`

const Equipment = (_) => pug `
  h1(class=css ({ "color": "#fff" })) Equipment
`

const Press = (_) => pug `
  h1(class=css ({ "color": "#fff" })) Press
`

const Hero = (_) => pug `
  section#hero
    div
      h2
        Link(title="Weddings" to="/events/weddings/") Weddings
        span.p :
        |  From first kiss to last dance
      p
        |  We specialize in weddings and other events throughout the Bay Area of Northern California. With free lighting, $0 deposit, and organized, personable DJs, you can have your cake and eat it, too.
        Link(title="Weddings" to="/events/weddings/") Learn More
        span.p .
`

export {
  Hero,
  Djs,
  Equipment,
  Events,
  Gallery,
  Home,
  Music,
  Press,
  Rates
}
