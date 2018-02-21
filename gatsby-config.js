/* eslint-env commonjs */

const autoprefixer = require ("autoprefixer")
const browsers = require ("browserslist") ([">1% in my stats"], {
  "stats": ".caniuse.json"
})

module.exports = {
  "plugins": [
    {
      "options": {
        "name": "posts",
        "path": `${__dirname}/src/posts/`,
      },
      "resolve": "gatsby-source-filesystem"
    },
    "gatsby-transformer-orga",
    {
      "options": {
        "postCssPlugins": [
          autoprefixer ({ "browsers": browsers })
        ]
      },
      "resolve": "gatsby-plugin-postcss-sass"
    },
    "gatsby-plugin-react-helmet"
  ]
}
