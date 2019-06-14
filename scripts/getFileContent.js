const getFileContent = function (itemN) {
    let itemList = []
    for (i = 1; i <= itemN; i++) {
        itemList.push(require('../info/' + i + ".ts"))
    }
    return itemList
}

module.exports = getFileContent