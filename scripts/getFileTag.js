const fs = require('fs')

const getFileTag = function(tag,dirN) {
    let itemList = [];
    let item = undefined;
    for(i = 1; i <= dirN;i++){
        item = require('../info/' + i + '.ts')
        if(item.tag.includes(tag)){
            itemList.push(item)
        }
    }
    return itemList
}

module.exports = getFileTag