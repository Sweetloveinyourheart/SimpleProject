import * as types from './../actions/types';

export default (state = {}, actions) => {
    switch (actions.type) {
        case types.GET_NEWEST_PRODUCT:
            return {...state, product: actions.product, error: null}
        case types.GET_NEWEST_PRODUCT_FAILED:
            return {...state, product: null, error: actions.error}
        default:
            return state
    }
}