import React, { Fragment } from "react"
import { body, slide } from "@ptb/animated-transition/styles.json"
import { css } from "@ptb/gatsby-plugin-styletron/style"
import Head from "../parts/head.js"
import Helmet from "react-helmet"
import get from "lodash.get"
import instance from "@ptb/gatsby-plugin-styletron/instance"
import { driver } from "styletron-standard"

export default (_) => pug `
  div(class=css ({ "background-color": "#eee", display": "flex", "flex-direction": "column", "min-height": "100vh" }))
    Helmet(bodyAttributes=({ "class": css (body) }))
    div(class=css ({ "background-color": "rgba(255,204,204,.8)" })) Head
    div(class=css ({ "background-color": "rgba(204,255,204,.8)" })) Body
    div(class=css ({ "background-color": "rgba(204,204,255,.8)" })) Foot
`

    // div#head(class=css ({ "background-color": "rgba(255,204,204,.8)" }))
    //   div Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    // span Lipsum incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
    // div#body(class=css ({ "background-color": "rgba(204,255,204,.8)", "position": "relative", "min-width": "100%", "min-height": "100%" }))
    //   div(class=css ({ "background-color": "rgba(255,255,204,.8)", "position": "relative", "transform": "translate3d(80%,0,0)" })) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    // div#head(class=css ({ "background-color": "rgba(255,204,204,.8)" }))
    //   div Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    //   div hi
    // div#foot(class=css ({ "background-color": "rgba(204,204,255,.8)" }))
    //   div Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    // div#head(class=css ({ "position": "relative" }))
    //   Head
    // div#body(class=css ({ "position": "relative" }))
    //   div
    //     = _.children ()
    // div#foot(class=css ({ "position": "relative" }))
    //   div Foot
// import { createElement as h } from "react"

// export default (a) =>
//   h ("div", {}, a.children ())

// import React, { Fragment } from "react"
// import Body from "../parts/body.js"
// import Foot from "../parts/foot.js"
// import Helmet from "react-helmet"
// import Transition from "@ptb/animated-transition"

// export default (a) => pug `
//   Fragment
//     Helmet(bodyAttributes=({ "class": css (body) }))
//     Head(class=css ({ "position": "relative" }))
//     div
//       Body(class=css ({ "position": "relative" }))
//         Transition(...a)
//           = a.children ()
//     Foot(class=css ({ "position": "relative"}))
// `
