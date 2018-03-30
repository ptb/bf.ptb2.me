import { css } from "@ptb/gatsby-plugin-styletron/style"
import React from "react"

const Home = (a) => pug `
  h1(class=css ({ "color": "#fff" })) Home
`

const Rates = (a) => pug `
  h1(class=css ({ "color": "#fff" })) Rates
`

const Events = (a) => pug `
  h1(class=css ({ "color": "#fff" })) Events
`

const Gallery = (a) => pug `
  h1(class=css ({ "color": "#fff" })) Gallery
`

const Djs = (a) => pug `
  h1(class=css ({ "color": "#fff" })) The DJs
`

const Music = (a) => pug `
  h1(class=css ({ "color": "#fff" })) Music
`

const Equipment = (a) => pug `
  h1(class=css ({ "color": "#fff" })) Equipment
`

const Press = (a) => pug `
  h1(class=css ({ "color": "#fff" })) Press
`

export {
  Djs,
  Equipment,
  Events,
  Gallery,
  Home,
  Music,
  Press,
  Rates
}
