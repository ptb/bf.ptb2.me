/* eslint-env commonjs */

exports.modifyWebpackConfig = ({ config, _stage }) => {
  config.merge ({
    "devtool": false,
    "output": {
      "hashDigestLength": 6
    }
  })
  return config
}
