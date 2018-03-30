// import { createElement as h } from "react"

// export default (a) =>
//   h ("div", {}, a.children ())

import React, { Fragment } from "react"
import Body from "../parts/body.js"
import { body } from "@ptb/animated-transition/styles.json"
import { css } from "@ptb/gatsby-plugin-styletron/style"
import Foot from "../parts/foot.js"
import Head from "../parts/head.js"
import Helmet from "react-helmet"
import Transition from "@ptb/animated-transition"

export default (a) => pug `
  Fragment
    Helmet(bodyAttributes=({ "class": css (body) }))
    Head(class=css ({ "position": "relative" }))
    div
      Body(class=css ({ "position": "relative" }))
        Transition(...a)
          = a.children ()
    Foot(class=css ({ "position": "relative"}))
`
