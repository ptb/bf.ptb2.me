/* eslint no-unused-vars: off */

import { Helmet } from "react-helmet"
import React from "react"
import css from "./a.sass"

export default (_) =>
  pug `
    Helmet
      title My Title
      style
        :sass(outputStyle="compressed")
          body
            margin: 0
    div(className=css.a) Hello, world!
    div ${JSON.stringify(_)}
    style
      :sass(outputStyle="compressed")
        html
          background-color: #cfc
  `
