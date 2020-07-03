import * as types from './../actions/types';

export const newestProduct = (state = {}, actions) => {
    switch (actions.type) {
        case types.GET_NEWEST_PRODUCT:
            return { ...state, product: actions.product, error: null }
        case types.GET_NEWEST_PRODUCT_FAILED:
            return { ...state, product: null, error: actions.error }
        default:
            return state
    }
}
export const randomProduct = (state = {}, actions) => {
    switch (actions.type) {
        case types.GET_THE_MOST_EXPENSIVE_PRODUCT:
            return { ...state, product: actions.product, error: null }
        case types.GET_THE_MOST_EXPENSIVE_PRODUCT_FAILED:
            return { ...state, product: null, error: actions.error }
        default:
            return state
    }
}