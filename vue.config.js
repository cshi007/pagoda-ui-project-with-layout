
const fs = require('fs')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

let pagodaUiDirsName = fs.readdirSync(resolve('node_modules')).filter(dirName => /pagoda-ui/.test(dirName))

module.exports = {
  transpileDependencies: pagodaUiDirsName
}
