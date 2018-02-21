import { Fragment, createElement as h } from "react"

export default ({ children }) => h (Fragment, null, children ())
