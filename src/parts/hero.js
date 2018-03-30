import React from "react"
import { css } from "@ptb/gatsby-plugin-styletron/style"

const Home = (a) => pug `
  h1(class=css ({ "color": "#fff" })) Home
`

const Rates = (a) => pug `
  div Rates
`

const Events = (a) => pug `
  div Events
`

const Gallery = (a) => pug `
  div Gallery
`

const Djs = (a) => pug `
  div The DJs
`

const Music = (a) => pug `
  div Music
`

const Equipment = (a) => pug `
  div Equipment
`

const Press = (a) => pug `
  div Press
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
