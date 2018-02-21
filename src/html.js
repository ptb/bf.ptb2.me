/* eslint-env commonjs */

import { createElement as h } from "react"
const css = require ("!raw-loader!../public/css/styles.css")

export default (props) =>
  h (
    "html",
    { "lang": "en", "xmlns": "http://www.w3.org/1999/xhtml" },
    h (
      "head",
      null,
      h ("meta", { "charSet": "utf-8" }),
      h ("meta", { "content": "ie=edge", "httpEquiv": "x-ua-compatible" }),
      h ("meta", {
        "content": "initial-scale=1, shrink-to-fit=no, width=device-width",
        "name": "viewport"
      }),
      h ("style", { "dangerouslySetInnerHTML": { "__html": css } }),
      props.headComponents
    ),
    h (
      "body",
      props.bodyAttributes,
      props.preBodyComponents,
      h ("div", {
        "dangerouslySetInnerHTML": { "__html": props.body },
        "data-reactroot": "",
        "id": "app",
        "key": "body"
      }),
      props.postBodyComponents
    )
  )
