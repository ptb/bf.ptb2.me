import { default as a } from "../parts/a.js"
import css from "./index.sass"
import { createElement as h } from "react"
import withRouter from "react-router-dom/withRouter"

export default (_) => h (withRouter (a, { "className": `${css.a}` }, _))
