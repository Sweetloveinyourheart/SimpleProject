import * as types from './types'
import axios from 'axios'

export const getAllProduct = (page) => {
    return async dispatch => {
        try {
            const response = await axios.get(`/api/shop/${page}`)
            const product = response.data.product
            dispatch({
                type: types.GET_ALL_SHOP_PRODUCT,
                product
            })
        } catch (error) {
            dispatch({
                type: types.GET_ALL_SHOP_PRODUCT_FAILED,
                error
            })
        }
    }
}
export const getShirtProduct = (page) => {
    return async dispatch => {
        try {
            const response = await axios.get(`/api/shop/shirts/${page}`)
            const product = response.data.product
            dispatch({
                type: types.GET_SHIRT_SHOP_PRODUCT,
                product,
            })
        } catch (error) {
            dispatch({
                type: types.GET_SHIRT_SHOP_PRODUCT_FAILED,
                error
            })
        }
    }
}
export const getTrouserProduct = (page) => {
    return async dispatch => {
        try {
            const response = await axios.get(`/api/shop/trousers/${page}`)
            const product = response.data.product
            dispatch({
                type: types.GET_TROUSER_SHOP_PRODUCT,
                product
            })
        } catch (error) {
            dispatch({
                type: types.GET_TROUSER_SHOP_PRODUCT_FAILED,
                error
            })
        }
    }
}
export const getDressProduct = (page) => {
    return async dispatch => {
        try {
            const response = await axios.get(`/api/shop/dresses/${page}`)
            const product = response.data.product
            dispatch({
                type: types.GET_DRESS_SHOP_PRODUCT,
                product
            })
        } catch (error) {
            dispatch({
                type: types.GET_DRESS_SHOP_PRODUCT_FAILED,
                error
            })
        }
    }
}
export const getCostumeProduct = (page) => {
    return async dispatch => {
        try {
            const response = await axios.get(`/api/shop/costumes/${page}`)
            const product = response.data.product
            dispatch({
                type: types.GET_COSTUME_SHOP_PRODUCT,
                product
            })
        } catch (error) {
            dispatch({
                type: types.GET_COSTUME_SHOP_PRODUCT_FAILED,
                error
            })
        }
    }
}
export const getAccessoryProduct = (page) => {
    return async dispatch => {
        try {
            const response = await axios.get(`/api/shop/accessories/${page}`)
            const product = response.data.product
            dispatch({
                type: types.GET_ACCESSORY_SHOP_PRODUCT,
                product
            })
        } catch (error) {
            dispatch({
                type: types.GET_ACCESSORY_SHOP_PRODUCT_FAILED,
                error
            })
        }
    }
}
export const pageController = (page) => {
    return dispatch => {
        dispatch({
            type: types.ACTIVED_PAGE,
            page
        })
    }
}
export const categoryController = (category) => {
    return dispatch => {
        dispatch({
            type: types.ACTIVED_CATEGORY,
            category
        })
    }
}