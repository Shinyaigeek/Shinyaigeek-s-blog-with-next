const fs = require('fs')

const getContent = function(itemN) {
    const content = fs.readFileSync("./items/" + itemN + ".md","utf8")
    console.log(content)
    return content
}

module.exports = getContent