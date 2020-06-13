import * as types from './types.js';

export const switchToAdd = () => { 
    return dispath => {
        dispath({
            type: types.SWITCH_TO_ADD,
            state: 'add'
        })
    }
}
export const switchToUpdate = () => {
    return dispath => {
        dispath({
            type: types.SWITCH_TO_UPDATE,
            state: 'update'
        })
    }
}
export const switchToRemove = () => {
    return dispath => {
        dispath({
            type: types.SWITCH_TO_REMOVE,
            state: 'remove'
        })
    }
}