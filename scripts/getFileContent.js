const getFileContent = function (itemN) {
    let itemList = []
    for (i = itemN; i >= 1; i--) {
        itemList.push(require('../info/' + i + ".ts"))
    }
    return itemList
}

module.exports = getFileContent