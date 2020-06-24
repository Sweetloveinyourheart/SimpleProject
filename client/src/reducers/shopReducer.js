import * as types from '../actions/types'

export const product = (state = { product: null, error: null }, actions) => {
    switch (actions.type) {
        case types.GET_ALL_SHOP_PRODUCT:
            return { product: actions.product, error: null }
        case types.GET_SHIRT_SHOP_PRODUCT:
            return { product: actions.product, error: null }
        case types.GET_TROUSER_SHOP_PRODUCT:
            return { product: actions.product, error: null }
        case types.GET_DRESS_SHOP_PRODUCT:
            return { product: actions.product, error: null }
        case types.GET_COSTUME_SHOP_PRODUCT:
            return { product: actions.product, error: null }
        case types.GET_ACCESSORY_SHOP_PRODUCT:
            return { product: actions.product, error: null }
        case types.GET_ALL_SHOP_PRODUCT_FAILED:
            return { product: null, error: actions.error }
        case types.GET_SHIRT_SHOP_PRODUCT_FAILED:
            return { product: null, error: actions.error }
        case types.GET_TROUSER_SHOP_PRODUCT_FAILED:
            return { product: null, error: actions.error }
        case types.GET_DRESS_SHOP_PRODUCT_FAILED:
            return { product: null, error: actions.error }
        case types.GET_COSTUME_SHOP_PRODUCT_FAILED:
            return { product: null, error: actions.error }
        case types.GET_ACCESSORY_SHOP_PRODUCT_FAILED:
            return { product: null, error: actions.error }
        default:
            return state
    }
}
export const page = (state = { page: 1 }, actions) => {
    switch (actions.type) {
        case types.ACTIVED_PAGE:
            return { page: actions.page }
        default:
            return state
    }
}
export const category = (state = { category: "all" }, actions) => {
    switch (actions.type) {
        case types.ACTIVED_CATEGORY:
            return { category: actions.category }    
        default:
            return state
    }
}