import * as types from '../actions/types';

export const utilities = (state = {}, actions) => {
    switch (actions.type) {

        case types.ADD_NEW_PRODUCT:
            return { ...state, success: actions.success, error: null }
        case types.UPDATE_A_PRODUCT:
            return { ...state, success: actions.success, error: null }
        case types.REMOVE_A_PRODUCT:
            return { ...state, success: actions.success, error: null }
        case types.ADD_NEW_PRODUCT_FAILED:
            return { ...state, success: actions.success, error: actions.error }
        case types.UPDATE_A_PRODUCT_FAILED:
            return { ...state, success: actions.success, error: actions.error }
        case types.REMOVE_A_PRODUCT_FAILED:
            return { ...state, success: actions.success, error: actions.error }

        default:
            return state;
    }
}
export const switchUtilities = (state = { status: 'add' }, actions) => {
    switch (actions.type) {
        case types.SWITCH_TO_ADD:
            return { status: actions.status }
        case types.SWITCH_TO_REMOVE:
            return { status: actions.status }
        case types.SWITCH_TO_UPDATE:
            return { status: actions.status }
        default:
            return state
    }
}
export const findAProduct = (state = {}, actions) => {
    switch (actions.type) {
        case types.FIND_A_PRODUCT:
            return { ...state, success: actions.success, data: actions.data, error: null }
        case types.FIND_A_PRODUCT_FAILED:
            return { ...state, sucess: actions.success,data: null ,error: actions.error }
        default:
            return state
    }
} 