const fs = require('fs')
const marked = require('marked')

const getContent = function(itemN) {
    const content = marked(fs.readFileSync("./items/" + itemN + ".md","utf8"))
    const markedContent = content.replace(/\n/g,"<br>")
    return markedContent
}

module.exports = getContent