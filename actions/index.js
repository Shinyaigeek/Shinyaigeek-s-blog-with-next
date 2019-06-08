import * as actionTypes from '../utils/actionTypes'

export const handleShareFlag = function(flag){
    return {
        type:actionTypes.SHARE_SWITCH,
        flag
    }
}