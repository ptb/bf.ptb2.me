import React, { Fragment } from "react"
import { body, slide } from "@ptb/animated-transition/styles.json"
import { css } from "@ptb/gatsby-plugin-styletron/style"
import Head from "../parts/head.js"
import Helmet from "react-helmet"
import get from "lodash.get"
import instance from "@ptb/gatsby-plugin-styletron/instance"
import { driver } from "styletron-standard"

const html = {
  "background-image": "url('/img/background.jpg')",
  "background-position": "50% 0",
  "background-repeat": "no-repeat"
}

// -webkit-font-smoothing: antialiased;
// -webkit-locale: en;
// background-attachment: scroll;
// background-clip: border-box;
// background-color: rgb(0, 0, 0);
// background-image: url(http://bigfundj.com/common/images/background.jpg);
// background-origin: padding-box;
// background-size: auto;
// border-bottom-color: rgb(0, 0, 0);
// border-bottom-style: none;
// border-bottom-width: 0px;
// border-image-outset: 0px;
// border-image-repeat: stretch;
// border-image-slice: 100%;
// border-image-source: none;
// border-image-width: 1;
// border-left-color: rgb(0, 0, 0);
// border-left-style: none;
// border-left-width: 0px;
// border-right-color: rgb(0, 0, 0);
// border-right-style: none;
// border-right-width: 0px;
// border-top-color: rgb(0, 0, 0);
// border-top-style: none;
// border-top-width: 0px;
// display: block;
// font-size: 16px;
// height: 1207px;
// margin-bottom: 0px;
// margin-left: 0px;
// margin-right: 0px;
// margin-top: 0px;
// padding-bottom: 0px;
// padding-left: 0px;
// padding-right: 0px;
// padding-top: 0px;
// vertical-align: baseline;
// width: 1729px;

const Html = (_) => pug `
  Helmet(htmlAttributes=({ "class": css (html) }))
`

export default (_) => pug `
  div(class=css ({ "background-color": "#eee", "display": "flex", "flex-direction": "column", "min-height": "100vh" }))
    Html
    Helmet(bodyAttributes=({ "class": css (body) }))
    div(class=css ({ "background-color": "rgba(255,204,204,.8)", "flex": 0 })) Head
    div(class=css ({ "background-color": "rgba(204,255,204,.8)", "flex": 1 })) Body
    div(class=css ({ "background-color": "rgba(204,204,255,.8)", "flex": 0 })) Foot
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
