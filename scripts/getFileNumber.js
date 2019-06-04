const fs = require("fs");

const dirN = function (dir) {
    return fs.readdirSync(dir)
}

module.exports = dirN;